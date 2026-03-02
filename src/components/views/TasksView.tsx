"use client";

import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Plus, 
  Trash2,
  X,
  Save
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

const TaskModal = ({ isOpen, onClose, onCreated, token, users, statuses }: any) => {
  const [formData, setFormData] = useState({ 
    title: '', 
    description: '', 
    assigned_to: '', 
    priority: 'Medium', 
    status_id: '', 
    due_date: '', 
    is_private: false 
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (statuses.length > 0) {
      const defaultStatus = statuses.find((s: any) => s.isDefault) || statuses[0];
      setFormData(prev => ({ ...prev, status_id: defaultStatus._id }));
    }
  }, [statuses]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/tasks', {
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
        setFormData({ title: '', description: '', assigned_to: '', priority: 'Medium', status_id: statuses[0]?._id || '', due_date: '', is_private: false });
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
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md">
        <Card className="relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X /></button>
          <h2 className="text-xl font-bold mb-6">Create New Task</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Task Title</label>
              <input 
                placeholder="e.g., Follow up with new lead" 
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
              <textarea 
                placeholder="Details about the task..." 
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
                <select 
                  className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.priority}
                  onChange={e => setFormData({ ...formData, priority: e.target.value })}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select 
                  className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.status_id}
                  onChange={e => setFormData({ ...formData, status_id: e.target.value })}
                  required
                >
                  {statuses.map((s: any) => <option key={s._id} value={s._id}>{s.label}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Assign To</label>
              <select 
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.assigned_to}
                onChange={e => setFormData({ ...formData, assigned_to: e.target.value })}
              >
                <option value="">Unassigned</option>
                {users.map((u: any) => <option key={u.id} value={u.id}>{u.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Due Date</label>
              <input 
                type="date"
                className="w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.due_date}
                onChange={e => setFormData({ ...formData, due_date: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="isPrivate"
                checked={formData.is_private}
                onChange={e => setFormData({ ...formData, is_private: e.target.checked })}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="isPrivate" className="text-sm font-medium text-slate-700">Mark as Private Task</label>
            </div>
            <button 
              disabled={loading}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Task'}
            </button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default function TasksView({ token, user }: any) {
  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  
  // Filters
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterAssignee, setFilterAssignee] = useState('All');

  const fetchTasks = async () => {
    try {
      const res = await fetch('/api/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchStatuses = async () => {
    try {
      const res = await fetch('/api/settings/task-statuses', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setStatuses(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchUsers();
    fetchStatuses();
  }, [token]);

  const handleUpdateTask = async (taskId: string, updates: any) => {
    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });
      if (res.ok) fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchTasks();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete task');
      }
    } catch (err) {
      console.error("Failed to delete task", err);
      alert('Connection error');
    }
  };

  const handleBulkDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete ${selectedTasks.length} tasks?`)) return;
    try {
      const res = await fetch('/api/tasks/bulk-delete', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ids: selectedTasks })
      });
      if (res.ok) {
        setSelectedTasks([]);
        fetchTasks();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete tasks');
      }
    } catch (err) {
      console.error("Failed to bulk delete tasks", err);
      alert('Connection error');
    }
  };

  const toggleSelectAll = () => {
    if (selectedTasks.length === filteredTasks.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(filteredTasks.map(t => t.id));
    }
  };

  const toggleSelectTask = (taskId: string) => {
    setSelectedTasks(prev => 
      prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]
    );
  };

  const filteredTasks = tasks.filter(t => {
    if (filterPriority !== 'All' && t.priority !== filterPriority) return false;
    if (filterStatus !== 'All' && t.status_label !== filterStatus) return false;
    if (filterAssignee !== 'All' && t.assigned_to !== filterAssignee) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Task Management</h1>
          <p className="text-sm text-slate-500">Track and manage your team's activities.</p>
        </div>
        <div className="flex gap-2">
          {selectedTasks.length > 0 && (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (
            <button 
              onClick={handleBulkDelete}
              className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-red-100 transition-colors border border-red-100 text-sm font-semibold"
            >
              <Trash2 size={16} />
              <span>Delete ({selectedTasks.length})</span>
            </button>
          )}
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 text-sm font-semibold"
          >
            <Plus size={18} />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Priority</label>
            <select 
              className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterPriority}
              onChange={e => setFilterPriority(e.target.value)}
            >
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Status</label>
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
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Assigned To</label>
            <select 
              className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterAssignee}
              onChange={e => setFilterAssignee(e.target.value)}
            >
              <option value="All">All Members</option>
              {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </div>
        </div>
      </Card>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onCreated={fetchTasks} 
        token={token}
        users={users}
        statuses={statuses}
      />

      <Card className="p-0 overflow-hidden border-none sm:border sm:border-slate-200 shadow-none sm:shadow-sm bg-transparent sm:bg-white">
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    checked={selectedTasks.length === filteredTasks.length && filteredTasks.length > 0}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Task Details</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Assigned To</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Priority</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">Due Date</th>
                {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTasks.map(task => (
                <tr key={task.id} className={cn("hover:bg-slate-50 transition-colors", selectedTasks.includes(task.id) && "bg-indigo-50/30")}>
                  <td className="px-6 py-4">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      checked={selectedTasks.includes(task.id)}
                      onChange={() => toggleSelectTask(task.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{task.title}</p>
                    <p className="text-xs text-slate-500 line-clamp-1 max-w-xs">{task.description}</p>
                    {task.is_private && <span className="text-[10px] text-indigo-500 font-bold uppercase mt-1 inline-block">Private</span>}
                  </td>
                  <td className="px-6 py-4">
                    {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') ? (
                      <select 
                        className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-medium text-slate-600"
                        value={task.assigned_to || ''}
                        onChange={e => handleUpdateTask(task.id, { assigned_to: e.target.value })}
                      >
                        <option value="">Unassigned</option>
                        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                      </select>
                    ) : (
                      <span className="text-sm text-slate-600 font-medium">{task.assigned_name || 'Unassigned'}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-bold"
                      style={{ color: task.priority === 'Urgent' ? '#ef4444' : task.priority === 'High' ? '#f97316' : '#3b82f6' }}
                      value={task.priority}
                      onChange={e => handleUpdateTask(task.id, { priority: e.target.value })}
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      className="text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-bold"
                      style={{ color: task.status_color }}
                      value={task.status_id || ''}
                      onChange={e => handleUpdateTask(task.id, { status_id: e.target.value })}
                    >
                      {statuses.map(s => <option key={s._id} value={s._id}>{s.label}</option>)}
                    </select>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    <div className="flex flex-col">
                      <span>{task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No date'}</span>
                      {task.due_date && new Date(task.due_date) < new Date() && (
                        <span className="text-[10px] text-red-500 font-bold uppercase">Overdue</span>
                      )}
                    </div>
                  </td>
                  {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDeleteTask(task.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Task"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {filteredTasks.map(task => (
            <div key={task.id} className={cn(
              "bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3",
              selectedTasks.includes(task.id) && "border-indigo-200 bg-indigo-50/30"
            )}>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    checked={selectedTasks.includes(task.id)}
                    onChange={() => toggleSelectTask(task.id)}
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{task.title}</h4>
                    {task.is_private && <span className="text-[10px] text-indigo-500 font-bold uppercase">Private</span>}
                  </div>
                </div>
                {(user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (
                  <button 
                    onClick={() => handleDeleteTask(task.id)}
                    className="p-2 text-slate-400 hover:text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
              
              <p className="text-sm text-slate-500 line-clamp-2">{task.description}</p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                  <select 
                    className="text-xs font-bold bg-transparent border-none p-0 focus:ring-0"
                    style={{ color: task.status_color }}
                    value={task.status_id || ''}
                    onChange={e => handleUpdateTask(task.id, { status_id: e.target.value })}
                  >
                    {statuses.map(s => <option key={s._id} value={s._id}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Priority</p>
                  <select 
                    className="text-xs font-bold bg-transparent border-none p-0 focus:ring-0"
                    style={{ color: task.priority === 'Urgent' ? '#ef4444' : task.priority === 'High' ? '#f97316' : '#3b82f6' }}
                    value={task.priority}
                    onChange={e => handleUpdateTask(task.id, { priority: e.target.value })}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Assigned To</p>
                  <select 
                    className="text-xs font-medium text-slate-600 bg-transparent border-none p-0 focus:ring-0"
                    value={task.assigned_to || ''}
                    onChange={e => handleUpdateTask(task.id, { assigned_to: e.target.value })}
                  >
                    <option value="">Unassigned</option>
                    {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                  </select>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Due Date</p>
                  <p className="text-xs text-slate-600">
                    {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No date'}
                    {task.due_date && new Date(task.due_date) < new Date() && (
                      <span className="text-red-500 ml-1 font-bold">!</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && !loading && (
          <div className="px-6 py-12 text-center text-slate-500">
            <div className="flex flex-col items-center gap-2">
              <CheckSquare size={48} className="text-slate-200" />
              <p>No tasks found matching your filters.</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
