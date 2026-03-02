"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  X,
  Phone,
  PhoneCall as PhoneCallIcon,
  Trash2,
  Save,
  Workflow
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

const LeadModal = ({ isOpen, onClose, onCreated, token, users, statuses }: any) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    course: '', 
    source: 'Website',
    status_id: '',
    assigned_to: '',
    remarks: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (statuses.length > 0) {
      setFormData(prev => ({ ...prev, status_id: statuses[0]._id }));
    }
  }, [statuses]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        onCreated();
        onClose();
        setFormData({ name: '', phone: '', course: '', source: 'Website', status_id: statuses[0]?._id || '', assigned_to: '', remarks: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-lg">
        <Card className="relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X /></button>
          <h2 className="text-xl font-bold mb-6">Add New Lead</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Student Name</label>
                <input 
                  placeholder="Full Name" 
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Phone Number</label>
                <input 
                  placeholder="+91 98765 43210" 
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Course Interested</label>
                <input 
                  placeholder="e.g. Full Stack Dev" 
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.course}
                  onChange={e => setFormData({...formData, course: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Lead Source</label>
                <select 
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.source}
                  onChange={e => setFormData({...formData, source: e.target.value})}
                >
                  <option>Website</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>Google Ads</option>
                  <option>Referral</option>
                  <option>Walk-in</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Pipeline Stage</label>
                <select 
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.status_id}
                  onChange={e => setFormData({...formData, status_id: e.target.value})}
                >
                  {statuses.map((s: any) => <option key={s._id} value={s._id}>{s.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Assign Counselor</label>
                <select 
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.assigned_to}
                  onChange={e => setFormData({...formData, assigned_to: e.target.value})}
                >
                  <option value="">Unassigned</option>
                  {users.map((u: any) => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Initial Remarks</label>
              <textarea 
                placeholder="Any specific requirements or notes..." 
                className="w-full px-4 py-2 border rounded-xl h-20 focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.remarks}
                onChange={e => setFormData({...formData, remarks: e.target.value})}
              />
            </div>
            
            <button 
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 mt-2 disabled:opacity-50"
            >
              {loading ? 'Adding Lead...' : 'Create Lead'}
            </button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

const LeadDetailsModal = ({ isOpen, onClose, leadId, token }: any) => {
  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && leadId) {
      setLoading(true);
      fetch(`/api/leads/${leadId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setLead(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
    }
  }, [isOpen, leadId, token]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <Card className="relative flex-1 flex flex-col p-0 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{loading ? 'Loading...' : lead?.name}</h2>
              <a 
                href={`tel:${lead?.phone}`}
                className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1.5 transition-colors mt-0.5"
              >
                <Phone size={14} className="text-slate-400" />
                <span className="font-medium">{lead?.phone}</span>
              </a>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {loading ? (
              <div className="py-20 text-center text-slate-400">Fetching lead details...</div>
            ) : lead ? (
              <>
                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Course</label>
                    <p className="text-sm font-semibold text-slate-800">{lead.course}</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Source</label>
                    <p className="text-sm font-semibold text-slate-800">{lead.source}</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Assigned To</label>
                    <p className="text-sm font-semibold text-slate-800">{lead.assignedTo?.name || 'Unassigned'}</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current Stage</label>
                    <div className="flex">
                      <Badge color={lead.statusId?.color}>{lead.statusId?.label}</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Created On</label>
                    <p className="text-sm font-semibold text-slate-800">{lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'N/A'}</p>
                  </div>
                </div>

                {/* Remarks */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Remarks</label>
                  <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-700 italic border border-slate-100">
                    {lead.remarks || 'No remarks provided.'}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Activity Timeline</label>
                  <div className="space-y-6 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                    {lead.timeline?.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-10">
                        <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 z-10" />
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-bold text-slate-900">{item.action}</p>
                            <p className="text-sm text-slate-600 mt-0.5">{item.details}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-bold text-slate-400 uppercase">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">by {item.performedBy?.name || 'System'}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="py-20 text-center text-red-500 font-medium">Lead not found or access denied.</div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default function LeadsView({ token, user }: any) {
  const [leads, setLeads] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Filters
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterSource, setFilterSource] = useState('All');
  const [filterAssignee, setFilterAssignee] = useState('All');

  const fetchLeads = () => {
    fetch('/api/leads', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch leads');
      return res.json();
    })
    .then(data => {
      setLeads(data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchLeads();
    const headers = { 'Authorization': `Bearer ${token}` };
    fetch('/api/users', { headers })
      .then(res => res.ok ? res.json() : [])
      .then(setUsers)
      .catch(() => setUsers([]));
    fetch('/api/settings/lead-statuses', { headers })
      .then(res => res.ok ? res.json() : [])
      .then(setStatuses)
      .catch(() => setStatuses([]));
  }, [token]);

  const handleUpdateLead = async (leadId: string, updates: any) => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });
      if (res.ok) fetchLeads();
    } catch (err) {
      console.error("Failed to update lead", err);
    }
  };

  const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/leads/bulk-upload', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Successfully uploaded ${data.count} leads!`);
        fetchLeads();
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch (err) {
      alert('Connection error');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const filteredLeads = leads.filter(l => {
    if (filterStatus !== 'All' && l.status_label !== filterStatus) return false;
    if (filterSource !== 'All' && l.source !== filterSource) return false;
    if (filterAssignee !== 'All' && l.assigned_to !== filterAssignee) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Lead Management</h1>
          <p className="text-sm text-slate-500">Track and nurture your student inquiries.</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleBulkUpload} 
            className="hidden" 
            accept=".csv"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="bg-white text-slate-600 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors border border-slate-200 text-sm font-semibold disabled:opacity-50 shadow-sm"
          >
            <Workflow size={16} />
            <span>{uploading ? 'Uploading...' : 'Bulk Import'}</span>
          </button>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 text-sm font-semibold"
          >
            <Plus size={18} />
            <span>New Lead</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stage</label>
            <select 
              className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
            >
              <option>All</option>
              {statuses.map(s => <option key={s._id} value={s.label}>{s.label}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Source</label>
            <select 
              className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterSource}
              onChange={e => setFilterSource(e.target.value)}
            >
              <option>All</option>
              <option>Website</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Google Ads</option>
              <option>Referral</option>
              <option>Walk-in</option>
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Counselor</label>
            <select 
              className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterAssignee}
              onChange={e => setFilterAssignee(e.target.value)}
            >
              <option value="All">All Counselors</option>
              {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </div>
        </div>
      </Card>

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onCreated={fetchLeads} 
        token={token}
        users={users}
        statuses={statuses}
      />

      <LeadDetailsModal 
        isOpen={isDetailsOpen} 
        onClose={() => setDetailsOpen(false)} 
        leadId={selectedLeadId}
        token={token}
      />

      <Card className="p-0 overflow-hidden border-none sm:border sm:border-slate-200 shadow-none sm:shadow-sm bg-transparent sm:bg-white">
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Student Info</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Course</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Source</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Counselor</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Stage</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{lead.name}</p>
                        <p className="text-xs text-slate-500">{lead.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{lead.course}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{lead.source}</td>
                  <td className="px-6 py-4">
                    {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') ? (
                      <select 
                        className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-medium text-slate-600"
                        value={lead.assigned_to || ''}
                        onChange={e => handleUpdateLead(lead.id, { assigned_to: e.target.value })}
                      >
                        <option value="">Unassigned</option>
                        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                      </select>
                    ) : (
                      <span className="text-sm text-slate-600 font-medium">{lead.assigned_name || 'Unassigned'}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-bold"
                      style={{ color: lead.status_color }}
                      value={lead.status_id || ''}
                      onChange={e => handleUpdateLead(lead.id, { status_id: e.target.value })}
                    >
                      {statuses.map(s => <option key={s._id} value={s._id}>{s.label}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <a 
                        href={`tel:${lead.phone}`}
                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                        title="Call Lead"
                      >
                        <PhoneCallIcon size={16} />
                      </a>
                      <button 
                        onClick={() => {
                          setSelectedLeadId(lead.id);
                          setDetailsOpen(true);
                        }}
                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                        title="View Details"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {filteredLeads.map(lead => (
            <div key={lead.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{lead.name}</h4>
                    <p className="text-xs text-slate-500">{lead.phone}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <a 
                    href={`tel:${lead.phone}`}
                    className="p-2 text-indigo-600 bg-indigo-50 rounded-lg"
                  >
                    <PhoneCallIcon size={16} />
                  </a>
                  <button 
                    onClick={() => {
                      setSelectedLeadId(lead.id);
                      setDetailsOpen(true);
                    }}
                    className="p-2 text-slate-400 bg-slate-50 rounded-lg"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Course</p>
                  <p className="text-xs font-medium text-slate-700">{lead.course}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Source</p>
                  <p className="text-xs text-slate-600">{lead.source}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Stage</p>
                  <select 
                    className="text-xs font-bold bg-transparent border-none p-0 focus:ring-0"
                    style={{ color: lead.status_color }}
                    value={lead.status_id || ''}
                    onChange={e => handleUpdateLead(lead.id, { status_id: e.target.value })}
                  >
                    {statuses.map(s => <option key={s._id} value={s._id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Counselor</p>
                  <select 
                    className="text-xs font-medium text-slate-600 bg-transparent border-none p-0 focus:ring-0"
                    value={lead.assigned_to || ''}
                    onChange={e => handleUpdateLead(lead.id, { assigned_to: e.target.value })}
                  >
                    <option value="">Unassigned</option>
                    {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLeads.length === 0 && !loading && (
          <div className="px-6 py-12 text-center text-slate-500">
            <div className="flex flex-col items-center gap-2">
              <Phone size={48} className="text-slate-200" />
              <p>No leads found matching your filters.</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

const ChevronRight = ({ size, className }: any) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
