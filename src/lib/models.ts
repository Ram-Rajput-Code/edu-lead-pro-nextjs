import mongoose from 'mongoose';

const InstituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, default: 'pending' }, // pending, active, suspended
  createdAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // super_admin, admin, manager, staff
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

const TaskStatusSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  label: { type: String, required: true },
  color: { type: String, required: true },
  sortOrder: { type: Number, default: 0 },
  isDefault: { type: Boolean, default: false }
});

const TaskSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  priority: { type: String, required: true }, // Low, Medium, High, Urgent
  statusId: { type: mongoose.Schema.Types.ObjectId, ref: 'TaskStatus' },
  dueDate: { type: Date },
  isPrivate: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const LeadStatusSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  label: { type: String, required: true },
  color: { type: String, required: true }
});

const LeadSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String },
  source: { type: String },
  statusId: { type: mongoose.Schema.Types.ObjectId, ref: 'LeadStatus' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  remarks: { type: String },
  timeline: [{
    action: { type: String, required: true },
    details: { type: String },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

const ActivityLogSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const NotificationSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Institute', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, default: 'info' }, // info, success, warning, error
  isRead: { type: Boolean, default: false },
  link: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Institute: mongoose.Model<any> = mongoose.models.Institute || mongoose.model('Institute', InstituteSchema);
export const User: mongoose.Model<any> = mongoose.models.User || mongoose.model('User', UserSchema);
export const TaskStatus: mongoose.Model<any> = mongoose.models.TaskStatus || mongoose.model('TaskStatus', TaskStatusSchema);
export const Task: mongoose.Model<any> = mongoose.models.Task || mongoose.model('Task', TaskSchema);
export const LeadStatus: mongoose.Model<any> = mongoose.models.LeadStatus || mongoose.model('LeadStatus', LeadStatusSchema);
export const Lead: mongoose.Model<any> = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
export const ActivityLog: mongoose.Model<any> = mongoose.models.ActivityLog || mongoose.model('ActivityLog', ActivityLogSchema);
export const Notification: mongoose.Model<any> = mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);
