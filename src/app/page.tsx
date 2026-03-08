"use client";

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  PhoneCall, 
  Settings, 
  LogOut, 
  Plus, 
  Menu, 
  X,
  Bell,
  ChevronRight,
  BarChart3,
  ShieldCheck,
  Building2,
  User as UserIcon,
  Lock,
  Save,
  Palette,
  Workflow,
  Trash2,
  Phone,
  PhoneCall as PhoneCallIcon,
  Filter,
  Check,
  ChevronDown,
  Calendar,
  Clock,
  UserPlus,
  PlusCircle,
  ClipboardList
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell
} from 'recharts';
import { formatDistanceToNow } from 'date-fns';
import TasksView from '@/components/views/TasksView';
import LeadsView from '@/components/views/LeadsView';
import StaffView from '@/components/views/StaffView';
import SettingsView from '@/components/views/SettingsView';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'manager' | 'staff';
  tenant_id: string;
}

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
      active 
        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
        : "text-slate-600 hover:bg-slate-100"
    )}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

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

const NotificationDropdown = ({ isOpen, onClose, notifications, onMarkAsRead, onMarkAllAsRead }: any) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800">Notifications</h3>
          <button 
            onClick={onMarkAllAsRead}
            className="text-xs text-indigo-600 font-semibold hover:text-indigo-700"
          >
            Mark all read
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              <Bell size={32} className="mx-auto mb-2 opacity-20" />
              <p className="text-sm">No new notifications</p>
            </div>
          ) : (
            notifications.map((n: any) => (
              <div 
                key={n._id} 
                onClick={() => onMarkAsRead(n._id)}
                className={cn(
                  "p-4 border-b border-slate-50 cursor-pointer transition-colors",
                  n.isRead ? "opacity-60" : "bg-indigo-50/30 hover:bg-indigo-50/50"
                )}
              >
                <div className="flex gap-3">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5 shrink-0",
                    n.isRead ? "bg-slate-300" : "bg-indigo-600"
                  )} />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight">{n.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{n.message}</p>
                    <p className="text-[10px] text-slate-400 mt-2 font-medium">
                      {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

// --- Main App Component ---

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Auth State
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      let data;
      try {
        data = await res.json();
      } catch (e) {
        data = { error: "Invalid server response" };
      }

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setToken(data.token);
        setUser(data.user);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      alert("Connection error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // Fetch Notifications
  const fetchNotifications = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/notifications', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setNotifications(data);
      }
    } catch (err) {
      console.error("Failed to fetch notifications", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [token]);

  const markAsRead = async (id: string) => {
    try {
      await fetch(`/api/notifications/${id}/read`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const markAllAsRead = async () => {
    try {
      await fetch('/api/notifications/read-all', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  if (currentView === 'register') {
    return <RegisterView onBack={() => setCurrentView('dashboard')} />;
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-200">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">EduLead CRM</h1>
            <p className="text-slate-500 mt-1 text-sm">Sign in to manage your institute</p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    name="email"
                    type="email" 
                    required 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="admin@edulead.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    name="password"
                    type="password" 
                    required 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all text-sm"
              >
                Sign In
              </button>
            </form>
          </Card>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setCurrentView('register')}
              className="text-indigo-600 font-bold hover:underline"
            >
              Register New Institute
            </button>
          </div>
          
          <p className="text-center text-slate-400 text-sm mt-8">
            &copy; 2024 EduLead Systems. All rights reserved.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? 280 : 80,
          x: isMobileMenuOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -280 : 0)
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 left-0 z-50 lg:sticky lg:h-screen",
          !isMobileMenuOpen && "hidden lg:flex"
        )}
      >
        <div className="p-6 flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-100">
              <ShieldCheck className="text-white" size={20} />
            </div>
            {(isSidebarOpen || isMobileMenuOpen) && (
              <span className="font-black text-xl text-slate-900 tracking-tight whitespace-nowrap">EduLead</span>
            )}
          </div>
          {isMobileMenuOpen && (
            <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-2 text-slate-400">
              <X size={20} />
            </button>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <SidebarItem 
            icon={LayoutDashboard} 
            label={(isSidebarOpen || isMobileMenuOpen) ? "Dashboard" : ""} 
            active={currentView === 'dashboard'} 
            onClick={() => { setCurrentView('dashboard'); setIsMobileMenuOpen(false); }}
          />
          <SidebarItem 
            icon={CheckSquare} 
            label={(isSidebarOpen || isMobileMenuOpen) ? "Tasks" : ""} 
            active={currentView === 'tasks'} 
            onClick={() => { setCurrentView('tasks'); setIsMobileMenuOpen(false); }}
          />
          <SidebarItem 
            icon={PhoneCall} 
            label={(isSidebarOpen || isMobileMenuOpen) ? "Leads" : ""} 
            active={currentView === 'leads'} 
            onClick={() => { setCurrentView('leads'); setIsMobileMenuOpen(false); }}
          />
          {user.role !== 'staff' && (
            <SidebarItem 
              icon={Users} 
              label={(isSidebarOpen || isMobileMenuOpen) ? "Staff" : ""} 
              active={currentView === 'staff'} 
              onClick={() => { setCurrentView('staff'); setIsMobileMenuOpen(false); }}
            />
          )}
          {user.role === 'admin' && (
            <SidebarItem 
              icon={Settings} 
              label={(isSidebarOpen || isMobileMenuOpen) ? "Settings" : ""} 
              active={currentView === 'settings'} 
              onClick={() => { setCurrentView('settings'); setIsMobileMenuOpen(false); }}
            />
          )}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            {(isSidebarOpen || isMobileMenuOpen) && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(true);
                } else {
                  setIsSidebarOpen(!isSidebarOpen);
                }
              }}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
            >
              <Menu size={20} />
            </button>
            <h2 className="text-lg lg:text-xl font-bold text-slate-800 capitalize truncate max-w-[150px] sm:max-w-none">{currentView}</h2>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 relative"
              >
                <Bell size={20} />
                {notifications.filter((n: any) => !n.isRead).length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                )}
              </button>
              <NotificationDropdown 
                isOpen={isNotifOpen} 
                onClose={() => setIsNotifOpen(false)}
                notifications={notifications}
                onMarkAsRead={markAsRead}
                onMarkAllAsRead={markAllAsRead}
              />
            </div>
            <div className="flex items-center gap-3 pl-3 lg:pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">{user.name}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{user.role}</p>
              </div>
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold border border-slate-200 shrink-0">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="p-4 lg:p-8">
          {currentView === 'dashboard' && <DashboardView token={token} user={user} onNavigate={setCurrentView} />}
          {currentView === 'tasks' && <TasksView token={token} user={user} />}
          {currentView === 'leads' && <LeadsView token={token} user={user} />}
          {currentView === 'staff' && <StaffView token={token} user={user} />}
          {currentView === 'settings' && <SettingsView token={token} user={user} />}
        </div>
      </main>
    </div>
  );
}

// --- View Components ---

function RegisterView({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', instituteName: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/institutes/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert("Registration successful! Please login.");
        onBack();
      } else {
        const data = await res.json().catch(() => ({ error: "Registration failed" }));
        alert(data.error);
      }
    } catch (err) {
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
        <Card>
          <h2 className="text-xl font-bold mb-4">Register Institute</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Institute Name</label>
              <input 
                required
                className="w-full px-4 py-2 border rounded-xl"
                value={formData.instituteName}
                onChange={e => setFormData({...formData, instituteName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Admin Name</label>
              <input 
                required
                className="w-full px-4 py-2 border rounded-xl"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Admin Email</label>
              <input 
                type="email"
                required
                className="w-full px-4 py-2 border rounded-xl"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
              <input 
                type="password"
                required
                className="w-full px-4 py-2 border rounded-xl"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
              />
            </div>
            <button 
              disabled={loading}
              className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-bold disabled:opacity-50 text-sm"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            <button type="button" onClick={onBack} className="w-full text-sm text-slate-500 hover:underline">
              Back to Login
            </button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}

function DashboardView({ token, user, onNavigate }: any) {
  const [stats, setStats] = useState<any>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    members: [] as string[],
    priorities: [] as string[],
    statuses: [] as string[]
  });
  const [showFilters, setShowFilters] = useState(false);

  const priorities = ['Low', 'Medium', 'High', 'Urgent'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersRes, statusesRes, activityRes] = await Promise.all([
          fetch('/api/users', { headers: { 'Authorization': `Bearer ${token}` } }),
          fetch('/api/settings/lead-statuses', { headers: { 'Authorization': `Bearer ${token}` } }),
          fetch('/api/activity', { headers: { 'Authorization': `Bearer ${token}` } })
        ]);
        if (membersRes.ok) setMembers(await membersRes.json());
        if (statusesRes.ok) setStatuses(await statusesRes.json());
        if (activityRes.ok) setActivities(await activityRes.json());
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const query = new URLSearchParams();
        if (filters.members.length > 0) query.set('members', filters.members.join(','));
        if (filters.priorities.length > 0) query.set('priorities', filters.priorities.join(','));
        if (filters.statuses.length > 0) query.set('statuses', filters.statuses.join(','));

        const res = await fetch(`/api/stats?${query.toString()}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Dashboard fetch error", err);
      }
    };
    fetchStats();
  }, [token, filters]);

  const toggleFilter = (type: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  if (!stats) return <div className="p-8 text-center text-slate-500">Loading dashboard...</div>;

  return (
    <div className="space-y-4 sm:space-y-8">
      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        
        <div className="relative">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
          >
            <Filter size={16} />
            Filters
            {(filters.members.length > 0 || filters.priorities.length > 0 || filters.statuses.length > 0) && (
              <span className="w-5 h-5 bg-indigo-600 text-white text-[10px] rounded-full flex items-center justify-center">
                {filters.members.length + filters.priorities.length + filters.statuses.length}
              </span>
            )}
          </button>

          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl z-30 p-4 space-y-4"
              >
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Members</p>
                  <div className="max-h-32 overflow-y-auto space-y-1 pr-2">
                    {members.map(m => (
                      <button 
                        key={m.id}
                        onClick={() => toggleFilter('members', m.id)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all",
                          filters.members.includes(m.id) ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        {m.name}
                        {filters.members.includes(m.id) && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Priority</p>
                  <div className="flex flex-wrap gap-2">
                    {priorities.map(p => (
                      <button 
                        key={p}
                        onClick={() => toggleFilter('priorities', p)}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium transition-all",
                          filters.priorities.includes(p) ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Status</p>
                  <div className="max-h-32 overflow-y-auto space-y-1 pr-2">
                    {statuses.map(s => (
                      <button 
                        key={s._id}
                        onClick={() => toggleFilter('statuses', s._id)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-all",
                          filters.statuses.includes(s._id) ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        {s.label}
                        {filters.statuses.includes(s._id) && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between">
                  <button 
                    onClick={() => setFilters({ members: [], priorities: [], statuses: [] })}
                    className="text-xs text-slate-400 hover:text-slate-600 font-medium"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="text-xs text-indigo-600 font-bold"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        <Card 
          onClick={() => onNavigate('leads')}
          className="flex items-center gap-3 p-4 sm:p-6 cursor-pointer hover:border-indigo-200 hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Users size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Total Leads</p>
            <p className="text-lg sm:text-xl font-bold text-slate-900">{stats.totalLeads}</p>
          </div>
        </Card>
        <Card 
          onClick={() => onNavigate('tasks')}
          className="flex items-center gap-3 p-4 sm:p-6 cursor-pointer hover:border-amber-200 hover:shadow-md transition-all group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <CheckSquare size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Total Tasks</p>
            <p className="text-lg sm:text-xl font-bold text-slate-900">{stats.totalTasks}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-4 sm:p-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
            <PhoneCall size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Pending Tasks</p>
            <p className="text-lg sm:text-xl font-bold text-slate-900">{stats.pendingTasks}</p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button 
          onClick={() => onNavigate('leads')}
          className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group shadow-sm"
        >
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <UserPlus size={20} />
          </div>
          <span className="text-xs font-bold text-slate-700">Add Lead</span>
        </button>
        <button 
          onClick={() => onNavigate('tasks')}
          className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-amber-200 hover:bg-amber-50/30 transition-all group shadow-sm"
        >
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <ClipboardList size={20} />
          </div>
          <span className="text-xs font-bold text-slate-700">Add Task</span>
        </button>
        <button 
          onClick={() => onNavigate('staff')}
          className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group shadow-sm"
        >
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Users size={20} />
          </div>
          <span className="text-xs font-bold text-slate-700">Manage Staff</span>
        </button>
        <button 
          onClick={() => onNavigate('settings')}
          className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all group shadow-sm"
        >
          <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Settings size={20} />
          </div>
          <span className="text-xs font-bold text-slate-700">Settings</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        <Card className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Lead Pipeline</h3>
          <div className="h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.pipelineData || []}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {stats.pipelineData?.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color || '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Task Distribution</h3>
          <div className="h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.taskData || []}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {stats.taskData?.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color || '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* New Feature: Recent Activity Feed */}
      <Card className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base sm:text-lg font-bold">Recent Activity</h3>
          <button className="text-xs font-bold text-indigo-600 hover:underline">View All</button>
        </div>
        <div className="space-y-6">
          {activities.length > 0 ? activities.map((activity) => (
            <div key={activity._id} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-slate-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-900 font-medium truncate">
                  <span className="font-bold">{activity.userId?.name || 'System'}</span> {activity.action}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-400">{formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}</span>
                  {activity.details && (
                    <>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-xs text-slate-400 truncate">{activity.details}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )) : (
            <p className="text-center text-slate-400 text-sm py-4">No recent activity</p>
          )}
        </div>
      </Card>
    </div>
  );
}

