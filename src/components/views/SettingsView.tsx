"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  X,
  User as UserIcon,
  Lock,
  Workflow,
  Save,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Card = ({ children, className, ...props }: any) => (
  <div 
    className={cn("bg-white rounded-2xl border border-slate-200 shadow-sm p-6", className)}
    {...props}
  >
    {children}
  </div>
);

const Badge = ({ children, color }: { children: React.ReactNode, color?: string }) => (
  <span 
    className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
    style={{ backgroundColor: `${color}20`, color: color }}
  >
    {children}
  </span>
);

export default function SettingsView({ token, user }: any) {
  const [activeTab, setActiveTab] = useState('profile');
  const [institute, setInstitute] = useState<any>(null);
  const [taskStatuses, setTaskStatuses] = useState<any[]>([]);
  const [leadStatuses, setLeadStatuses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // New Status/Stage State
  const [newStatus, setNewStatus] = useState({ label: '', color: '#6366f1', isDefault: false });
  const [newStage, setNewStage] = useState({ label: '', color: '#6366f1' });
  const [editingStatus, setEditingStatus] = useState<any>(null);
  const [editingStage, setEditingStage] = useState<any>(null);

  const fetchData = async () => {
    const headers = { 'Authorization': `Bearer ${token}` };
    try {
      const [instRes, taskRes, leadRes] = await Promise.all([
        fetch('/api/settings/institute', { headers }),
        fetch('/api/settings/task-statuses', { headers }),
        fetch('/api/settings/lead-statuses', { headers })
      ]);
      
      if (instRes.ok) setInstitute(await instRes.json());
      if (taskRes.ok) setTaskStatuses(await taskRes.json());
      if (leadRes.ok) setLeadStatuses(await leadRes.json());
    } catch (err) {
      console.error("Failed to fetch settings", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleAddTaskStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStatus.label) return;
    try {
      const res = await fetch('/api/settings/task-statuses', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newStatus)
      });
      if (res.ok) {
        setNewStatus({ label: '', color: '#6366f1', isDefault: false });
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateTaskStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStatus.label) return;
    try {
      const res = await fetch(`/api/settings/task-statuses/${editingStatus._id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingStatus)
      });
      if (res.ok) {
        setEditingStatus(null);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTaskStatus = async (id: string) => {
    if (!confirm('Are you sure you want to delete this status?')) return;
    try {
      const res = await fetch(`/api/settings/task-statuses/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddLeadStage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStage.label) return;
    try {
      const res = await fetch('/api/settings/lead-statuses', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newStage)
      });
      if (res.ok) {
        setNewStage({ label: '', color: '#6366f1' });
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateLeadStage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStage.label) return;
    try {
      const res = await fetch(`/api/settings/lead-statuses/${editingStage._id}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingStage)
      });
      if (res.ok) {
        setEditingStage(null);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteLeadStage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this stage?')) return;
    try {
      const res = await fetch(`/api/settings/lead-statuses/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateInstitute = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });
    try {
      const res = await fetch('/api/settings/institute', {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: institute.name })
      });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Institute profile updated successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to update profile.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Connection error.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Loading settings...</div>;

  const tabs = [
    { id: 'profile', label: 'Profile', icon: UserIcon },
    { id: 'workflow', label: 'Workflow', icon: Workflow, adminOnly: true },
    { id: 'security', label: 'Security', icon: Lock },
  ];

  const filteredTabs = tabs.filter(t => !t.adminOnly || user.role === 'admin' || user.role === 'super_admin');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Manage your account and institute preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 flex md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-2 md:gap-1 scrollbar-hide">
          {filteredTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all",
                activeTab === tab.id 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" 
                  : "text-slate-600 hover:bg-slate-100 bg-white md:bg-transparent border border-slate-200 md:border-none"
              )}
            >
              <tab.icon size={20} />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'profile' && (
                <Card>
                  <h3 className="text-lg font-bold mb-6">Institute Profile</h3>
                  <form onSubmit={handleUpdateInstitute} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Institute Name</label>
                        <input 
                          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                          value={institute?.name || ''}
                          onChange={e => setInstitute({...institute, name: e.target.value})}
                          disabled={user.role !== 'admin' && user.role !== 'super_admin'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Official Email</label>
                        <input 
                          className="w-full px-4 py-2 border rounded-xl bg-slate-50 text-slate-500 cursor-not-allowed"
                          value={institute?.email || ''}
                          disabled
                        />
                        <p className="text-xs text-slate-400 mt-1">Contact support to change your official email.</p>
                      </div>
                    </div>

                    {message.text && (
                      <div className={cn(
                        "p-4 rounded-xl text-sm font-medium",
                        message.type === 'success' ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                      )}>
                        {message.text}
                      </div>
                    )}

                    {(user.role === 'admin' || user.role === 'super_admin') && (
                      <button 
                        disabled={saving}
                        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                      >
                        <Save size={20} />
                        {saving ? 'Saving...' : 'Save Changes'}
                      </button>
                    )}
                  </form>
                </Card>
              )}

              {activeTab === 'workflow' && (
                <div className="space-y-6">
                  <Card>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">Task Statuses</h3>
                    </div>
                    
                    {/* Add Status Form */}
                    <form onSubmit={handleAddTaskStatus} className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-slate-50 rounded-xl">
                      <input 
                        placeholder="Status Label (e.g. In Review)" 
                        className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                        value={newStatus.label}
                        onChange={e => setNewStatus({...newStatus, label: e.target.value})}
                      />
                      <div className="flex items-center gap-4">
                        <input 
                          type="color"
                          className="w-10 h-10 border-none bg-transparent cursor-pointer"
                          value={newStatus.color}
                          onChange={e => setNewStatus({...newStatus, color: e.target.value})}
                        />
                        <label className="flex items-center gap-2 text-xs font-medium text-slate-600">
                          <input 
                            type="checkbox"
                            checked={newStatus.isDefault}
                            onChange={e => setNewStatus({...newStatus, isDefault: e.target.checked})}
                          />
                          Default
                        </label>
                        <button className="flex-1 sm:flex-none bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">
                          Add
                        </button>
                      </div>
                    </form>

                    <div className="space-y-3">
                      {taskStatuses.map(status => (
                        <div key={status._id} className="flex flex-col p-3 border rounded-xl hover:bg-slate-50 transition-colors group">
                          {editingStatus?._id === status._id ? (
                            <form onSubmit={handleUpdateTaskStatus} className="flex gap-3 w-full">
                              <input 
                                className="flex-1 px-3 py-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                                value={editingStatus.label}
                                onChange={e => setEditingStatus({...editingStatus, label: e.target.value})}
                                autoFocus
                              />
                              <input 
                                type="color"
                                className="w-8 h-8 border-none bg-transparent cursor-pointer"
                                value={editingStatus.color}
                                onChange={e => setEditingStatus({...editingStatus, color: e.target.value})}
                              />
                              <label className="flex items-center gap-2 text-[10px] font-medium text-slate-600">
                                <input 
                                  type="checkbox"
                                  checked={editingStatus.isDefault}
                                  onChange={e => setEditingStatus({...editingStatus, isDefault: e.target.checked})}
                                />
                                Default
                              </label>
                              <div className="flex gap-1">
                                <button type="submit" className="bg-emerald-500 text-white p-1.5 rounded-lg hover:bg-emerald-600">
                                  <Save size={16} />
                                </button>
                                <button type="button" onClick={() => setEditingStatus(null)} className="bg-slate-200 text-slate-600 p-1.5 rounded-lg hover:bg-slate-300">
                                  <X size={16} />
                                </button>
                              </div>
                            </form>
                          ) : (
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
                                <span className="font-medium text-slate-700">{status.label}</span>
                                {status.isDefault && <Badge color="#6366f1">Default</Badge>}
                              </div>
                              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                <button 
                                  onClick={() => setEditingStatus(status)}
                                  className="text-slate-400 hover:text-indigo-600"
                                >
                                  <Workflow size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteTaskStatus(status._id)}
                                  className="text-slate-400 hover:text-red-500"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">Lead Pipeline Stages</h3>
                    </div>

                    {/* Add Stage Form */}
                    <form onSubmit={handleAddLeadStage} className="flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-slate-50 rounded-xl">
                      <input 
                        placeholder="Stage Label (e.g. Follow-up)" 
                        className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                        value={newStage.label}
                        onChange={e => setNewStage({...newStage, label: e.target.value})}
                      />
                      <div className="flex items-center gap-4">
                        <input 
                          type="color"
                          className="w-10 h-10 border-none bg-transparent cursor-pointer"
                          value={newStage.color}
                          onChange={e => setNewStage({...newStage, color: e.target.value})}
                        />
                        <button className="flex-1 sm:flex-none bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">
                          Add
                        </button>
                      </div>
                    </form>

                    <div className="space-y-3">
                      {leadStatuses.map(status => (
                        <div key={status._id} className="flex flex-col p-3 border rounded-xl hover:bg-slate-50 transition-colors group">
                          {editingStage?._id === status._id ? (
                            <form onSubmit={handleUpdateLeadStage} className="flex gap-3 w-full">
                              <input 
                                className="flex-1 px-3 py-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                                value={editingStage.label}
                                onChange={e => setEditingStage({...editingStage, label: e.target.value})}
                                autoFocus
                              />
                              <input 
                                type="color"
                                className="w-8 h-8 border-none bg-transparent cursor-pointer"
                                value={editingStage.color}
                                onChange={e => setEditingStage({...editingStage, color: e.target.value})}
                              />
                              <div className="flex gap-1">
                                <button type="submit" className="bg-emerald-500 text-white p-1.5 rounded-lg hover:bg-emerald-600">
                                  <Save size={16} />
                                </button>
                                <button type="button" onClick={() => setEditingStage(null)} className="bg-slate-200 text-slate-600 p-1.5 rounded-lg hover:bg-slate-300">
                                  <X size={16} />
                                </button>
                              </div>
                            </form>
                          ) : (
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
                                <span className="font-medium text-slate-700">{status.label}</span>
                              </div>
                              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                <button 
                                  onClick={() => setEditingStage(status)}
                                  className="text-slate-400 hover:text-indigo-600"
                                >
                                  <Workflow size={18} />
                                </button>
                                <button 
                                  onClick={() => handleDeleteLeadStage(status._id)}
                                  className="text-slate-400 hover:text-red-500"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'security' && (
                <Card>
                  <h3 className="text-lg font-bold mb-6">Security Settings</h3>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                        <input 
                          type="password"
                          className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                        <input 
                          type="password"
                          className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                      Update Password
                    </button>
                  </form>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
