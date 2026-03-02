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
  PhoneCall as PhoneCallIcon
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
  Cell,
  PieChart,
  Pie
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

  if (currentView === 'register') {
    return <RegisterView onBack={() => setCurrentView('dashboard')} />;
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
          {currentView === 'dashboard' && <DashboardView token={token} user={user} />}
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

function DashboardView({ token, user }: any) {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats', {
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
  }, [token]);

  if (!stats) return <div className="p-8 text-center text-slate-500">Loading dashboard...</div>;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Leads</p>
            <p className="text-xl font-bold text-slate-900">{stats.totalLeads}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <CheckSquare size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Tasks</p>
            <p className="text-xl font-bold text-slate-900">{stats.totalTasks}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <PhoneCall size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Pending Tasks</p>
            <p className="text-xl font-bold text-slate-900">{stats.pendingTasks}</p>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-lg font-bold mb-6">Lead Pipeline</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.pipelineData || []}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
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

        <Card>
          <h3 className="text-lg font-bold mb-6">Task Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.taskData || []}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stats.taskData?.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color || '#6366f1'} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}

