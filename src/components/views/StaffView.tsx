"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  X,
  User as UserIcon,
  Lock,
  Trash2,
  UserX,
  UserCheck
} from 'lucide-react';
import { motion } from 'motion/react';
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

const UserModal = ({ isOpen, onClose, onCreated, token }: any) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'staff' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        onCreated();
        onClose();
        setFormData({ name: '', email: '', password: '', role: 'staff' });
      } else {
        setError(data.error || 'Failed to create user');
      }
    } catch (err) {
      setError('Connection error');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md">
        <Card className="relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X /></button>
          <h2 className="text-xl font-bold mb-6">Add Team Member</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                placeholder="John Doe" 
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email"
                placeholder="john@institute.com" 
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password"
                placeholder="••••••••" 
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
              <select 
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.role}
                onChange={e => setFormData({...formData, role: e.target.value})}
              >
                <option value="manager">Manager</option>
                <option value="staff">Staff / Counselor</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Add Member'}
            </button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default function StaffView({ token, user }: any) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const fetchUsers = () => {
    fetch('/api/users', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch users');
      return res.json();
    })
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  const handleUpdateStatus = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    const confirmMsg = `Are you sure you want to ${newStatus === 'active' ? 'activate' : 'deactivate'} this member?`;
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchUsers();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to update status');
      }
    } catch (err) {
      alert('Connection error');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this member? This action cannot be undone.')) return;

    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchUsers();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete member');
      }
    } catch (err) {
      alert('Connection error');
    }
  };

  useEffect(fetchUsers, [token]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Team Management</h1>
          <p className="text-sm text-slate-500">Manage your institute's staff and roles.</p>
        </div>
        <button 
          onClick={() => setModalOpen(true)}
          className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 text-sm"
        >
          <Plus size={18} />
          <span>Add Member</span>
        </button>
      </div>

      <Card className="p-0 overflow-hidden border-none sm:border sm:border-slate-200 shadow-none sm:shadow-sm bg-transparent sm:bg-white">
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Email</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Role</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Status</th>
                {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500">Loading team members...</td></tr>
              ) : users.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-slate-500">No team members found.</td></tr>
              ) : users.map((u: any) => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                        {u.name[0]}
                      </div>
                      <span className="font-medium text-slate-900">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{u.email}</td>
                  <td className="px-6 py-4">
                    <span className="capitalize">{u.role.replace('_', ' ')}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge color={u.status === 'active' ? '#10b981' : '#ef4444'}>
                      {u.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </td>
                  {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {/* Managers can only manage staff */}
                        {(user.role === 'admin' || user.role === 'super_admin' || (user.role === 'manager' && u.role === 'staff')) && u.id !== user.id && (
                          <>
                            <button 
                              onClick={() => handleUpdateStatus(u.id, u.status)}
                              className={cn(
                                "p-2 rounded-lg transition-all",
                                u.status === 'active' ? "text-slate-400 hover:text-amber-600 hover:bg-amber-50" : "text-slate-400 hover:text-emerald-600 hover:bg-emerald-50"
                              )}
                              title={u.status === 'active' ? 'Deactivate' : 'Activate'}
                            >
                              {u.status === 'active' ? <UserX size={16} /> : <UserCheck size={16} />}
                            </button>
                            <button 
                              onClick={() => handleDeleteUser(u.id)}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                              title="Delete Member"
                            >
                              <Trash2 size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {loading ? (
            <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">Loading team members...</div>
          ) : users.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">No team members found.</div>
          ) : users.map((u: any) => (
            <div key={u.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                    {u.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{u.name}</h4>
                    <p className="text-xs text-slate-500">{u.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge color={u.status === 'active' ? '#10b981' : '#ef4444'}>
                    {u.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                  {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (user.role === 'admin' || user.role === 'super_admin' || (user.role === 'manager' && u.role === 'staff')) && u.id !== user.id && (
                    <div className="flex gap-1">
                      <button 
                        onClick={() => handleUpdateStatus(u.id, u.status)}
                        className={cn(
                          "p-1.5 rounded-lg",
                          u.status === 'active' ? "text-amber-600 bg-amber-50" : "text-emerald-600 bg-emerald-50"
                        )}
                      >
                        {u.status === 'active' ? <UserX size={14} /> : <UserCheck size={14} />}
                      </button>
                      <button 
                        onClick={() => handleDeleteUser(u.id)}
                        className="p-1.5 text-red-600 bg-red-50 rounded-lg"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Role</p>
                <p className="text-sm font-medium text-slate-700 capitalize">{u.role.replace('_', ' ')}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <UserModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onCreated={fetchUsers} 
        token={token}
      />
    </div>
  );
}
