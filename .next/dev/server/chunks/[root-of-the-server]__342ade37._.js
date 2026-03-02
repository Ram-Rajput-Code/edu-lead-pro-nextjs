module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/MINE/edu-lead-pro-next/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ramraj:ramraj@learningcluster.ydpll.mongodb.net/";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/lib/models.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityLog",
    ()=>ActivityLog,
    "Institute",
    ()=>Institute,
    "Lead",
    ()=>Lead,
    "LeadStatus",
    ()=>LeadStatus,
    "Notification",
    ()=>Notification,
    "Task",
    ()=>Task,
    "TaskStatus",
    ()=>TaskStatus,
    "User",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/MINE/edu-lead-pro-next/node_modules/mongoose)");
;
const InstituteSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const TaskStatusSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    label: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    sortOrder: {
        type: Number,
        default: 0
    },
    isDefault: {
        type: Boolean,
        default: false
    }
});
const TaskSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    assignedTo: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    createdBy: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    statusId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'TaskStatus'
    },
    dueDate: {
        type: Date
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const LeadStatusSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    label: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});
const LeadSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    course: {
        type: String
    },
    source: {
        type: String
    },
    statusId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'LeadStatus'
    },
    assignedTo: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User'
    },
    remarks: {
        type: String
    },
    timeline: [
        {
            action: {
                type: String,
                required: true
            },
            details: {
                type: String
            },
            performedBy: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
                ref: 'User'
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const ActivityLogSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    userId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const NotificationSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    tenantId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    userId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'info'
    },
    isRead: {
        type: Boolean,
        default: false
    },
    link: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Institute = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.Institute || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('Institute', InstituteSchema);
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('User', UserSchema);
const TaskStatus = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.TaskStatus || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('TaskStatus', TaskStatusSchema);
const Task = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.Task || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('Task', TaskSchema);
const LeadStatus = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.LeadStatus || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('LeadStatus', LeadStatusSchema);
const Lead = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.Lead || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('Lead', LeadSchema);
const ActivityLog = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.ActivityLog || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('ActivityLog', ActivityLogSchema);
const Notification = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].models.Notification || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].model('Notification', NotificationSchema);
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthUser",
    ()=>getAuthUser,
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch (err) {
        return null;
    }
}
function signToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET);
}
function getAuthUser(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    const token = authHeader.split(' ')[1];
    return verifyToken(token);
}
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/app/api/settings/institute/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/lib/models.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/MINE/edu-lead-pro-next/node_modules/mongoose)");
;
;
;
;
;
async function GET(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])(request);
    if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 401
    });
    const { tenant_id } = user;
    try {
        const inst = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Institute"].findById(new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId(tenant_id));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(inst);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])(request);
    if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 401
    });
    const { tenant_id, role } = user;
    if (role !== 'admin') return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "Unauthorized"
    }, {
        status: 403
    });
    const { name } = await request.json();
    try {
        const inst = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$lib$2f$models$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Institute"].findByIdAndUpdate(new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId(tenant_id), {
            name
        }, {
            new: true
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(inst);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 400
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__342ade37._.js.map