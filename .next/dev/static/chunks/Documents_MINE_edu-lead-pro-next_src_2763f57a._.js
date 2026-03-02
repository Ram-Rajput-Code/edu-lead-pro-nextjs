(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TasksView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const Card = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("bg-white rounded-2xl border border-slate-200 shadow-sm p-6", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const TaskModal = ({ isOpen, onClose, onCreated, token, users, statuses })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        assigned_to: '',
        priority: 'Medium',
        status_id: '',
        due_date: '',
        is_private: false
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskModal.useEffect": ()=>{
            if (statuses.length > 0) {
                const defaultStatus = statuses.find({
                    "TaskModal.useEffect": (s)=>s.isDefault
                }["TaskModal.useEffect"]) || statuses[0];
                setFormData({
                    "TaskModal.useEffect": (prev)=>({
                            ...prev,
                            status_id: defaultStatus._id
                        })
                }["TaskModal.useEffect"]);
            }
        }
    }["TaskModal.useEffect"], [
        statuses
    ]);
    const handleSubmit = async (e)=>{
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
                setFormData({
                    title: '',
                    description: '',
                    assigned_to: '',
                    priority: 'Medium',
                    status_id: statuses[0]?._id || '',
                    due_date: '',
                    is_private: false
                });
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.9,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            className: "w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-slate-400 hover:text-slate-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                            lineNumber: 77,
                            columnNumber: 108
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-6",
                        children: "Create New Task"
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Task Title"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "e.g., Follow up with new lead",
                                        className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                        value: formData.title,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                title: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        placeholder: "Details about the task...",
                                        className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]",
                                        value: formData.description,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                description: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700 mb-1",
                                                children: "Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                                value: formData.priority,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        priority: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Low"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Medium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "High"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Urgent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700 mb-1",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                                value: formData.status_id,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        status_id: e.target.value
                                                    }),
                                                required: true,
                                                children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: s._id,
                                                        children: s.label
                                                    }, s._id, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Assign To"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                        value: formData.assigned_to,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                assigned_to: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Unassigned"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: u.id,
                                                    children: u.name
                                                }, u.id, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 40
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Due Date"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                        value: formData.due_date,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                due_date: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "isPrivate",
                                        checked: formData.is_private,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                is_private: e.target.checked
                                            }),
                                        className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "isPrivate",
                                        className: "text-sm font-medium text-slate-700",
                                        children: "Mark as Private Task"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50",
                                children: loading ? 'Creating...' : 'Create Task'
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TaskModal, "6FkXvGhpCIY1+0xebkGzTNBvP3M=");
_c1 = TaskModal;
function TasksView({ token, user }) {
    _s1();
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statuses, setStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isModalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedTasks, setSelectedTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Filters
    const [filterPriority, setFilterPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterAssignee, setFilterAssignee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const fetchTasks = async ()=>{
        try {
            const res = await fetch('/api/tasks', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setTasks(data);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    const fetchUsers = async ()=>{
        try {
            const res = await fetch('/api/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    const fetchStatuses = async ()=>{
        try {
            const res = await fetch('/api/settings/task-statuses', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setStatuses(data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TasksView.useEffect": ()=>{
            fetchTasks();
            fetchUsers();
            fetchStatuses();
        }
    }["TasksView.useEffect"], [
        token
    ]);
    const handleUpdateTask = async (taskId, updates)=>{
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
    const handleDeleteTask = async (taskId)=>{
        if (!window.confirm('Are you sure you want to delete this task?')) return;
        try {
            const res = await fetch(`/api/tasks/${taskId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
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
    const handleBulkDelete = async ()=>{
        if (!window.confirm(`Are you sure you want to delete ${selectedTasks.length} tasks?`)) return;
        try {
            const res = await fetch('/api/tasks/bulk-delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    ids: selectedTasks
                })
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
    const toggleSelectAll = ()=>{
        if (selectedTasks.length === filteredTasks.length) {
            setSelectedTasks([]);
        } else {
            setSelectedTasks(filteredTasks.map((t)=>t.id));
        }
    };
    const toggleSelectTask = (taskId)=>{
        setSelectedTasks((prev)=>prev.includes(taskId) ? prev.filter((id)=>id !== taskId) : [
                ...prev,
                taskId
            ]);
    };
    const filteredTasks = tasks.filter((t)=>{
        if (filterPriority !== 'All' && t.priority !== filterPriority) return false;
        if (filterStatus !== 'All' && t.status_label !== filterStatus) return false;
        if (filterAssignee !== 'All' && t.assigned_to !== filterAssignee) return false;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-slate-900",
                                children: "Task Management"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Track and manage your team's activities."
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            selectedTasks.length > 0 && (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBulkDelete,
                                className: "bg-red-50 text-red-600 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-red-100 transition-colors border border-red-100 text-sm font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Delete (",
                                            selectedTasks.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalOpen(true),
                                className: "bg-indigo-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 text-sm font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "New Task"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[150px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                    children: "Priority"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                    value: filterPriority,
                                    onChange: (e)=>setFilterPriority(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Low"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "High"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Urgent"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[150px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                    value: filterStatus,
                                    onChange: (e)=>setFilterStatus(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this),
                                        statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s.label,
                                                children: s.label
                                            }, s._id, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 363,
                                                columnNumber: 34
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[150px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                    children: "Assigned To"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                    value: filterAssignee,
                                    onChange: (e)=>setFilterAssignee(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "All",
                                            children: "All Members"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: u.id,
                                                children: u.name
                                            }, u.id, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 374,
                                                columnNumber: 31
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                    lineNumber: 340,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskModal, {
                isOpen: isModalOpen,
                onClose: ()=>setModalOpen(false),
                onCreated: fetchTasks,
                token: token,
                users: users,
                statuses: statuses
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-0 overflow-hidden border-none sm:border sm:border-slate-200 shadow-none sm:shadow-sm bg-transparent sm:bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-50 border-b border-slate-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 w-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500",
                                                    checked: selectedTasks.length === filteredTasks.length && filteredTasks.length > 0,
                                                    onChange: toggleSelectAll
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Task Details"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Assigned To"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Due Date"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this),
                                            (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: filteredTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: cn("hover:bg-slate-50 transition-colors", selectedTasks.includes(task.id) && "bg-indigo-50/30"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500",
                                                        checked: selectedTasks.includes(task.id),
                                                        onChange: ()=>toggleSelectTask(task.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-slate-900",
                                                            children: task.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500 line-clamp-1 max-w-xs",
                                                            children: task.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, this),
                                                        task.is_private && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-indigo-500 font-bold uppercase mt-1 inline-block",
                                                            children: "Private"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-medium text-slate-600",
                                                        value: task.assigned_to || '',
                                                        onChange: (e)=>handleUpdateTask(task.id, {
                                                                assigned_to: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Unassigned"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 25
                                                            }, this),
                                                            users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: u.id,
                                                                    children: u.name
                                                                }, u.id, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600 font-medium",
                                                        children: task.assigned_name || 'Unassigned'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-bold",
                                                        style: {
                                                            color: task.priority === 'Urgent' ? '#ef4444' : task.priority === 'High' ? '#f97316' : '#3b82f6'
                                                        },
                                                        value: task.priority,
                                                        onChange: (e)=>handleUpdateTask(task.id, {
                                                                priority: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Low"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Medium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "High"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Urgent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-bold",
                                                        style: {
                                                            color: task.status_color
                                                        },
                                                        value: task.status_id || '',
                                                        onChange: (e)=>handleUpdateTask(task.id, {
                                                                status_id: e.target.value
                                                            }),
                                                        children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s._id,
                                                                children: s.label
                                                            }, s._id, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 42
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-sm text-slate-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No date'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 23
                                                            }, this),
                                                            task.due_date && new Date(task.due_date) < new Date() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-red-500 font-bold uppercase",
                                                                children: "Overdue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this),
                                                (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteTask(task.id),
                                                        className: "p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all",
                                                        title: "Delete Task",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, task.id, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:hidden space-y-4",
                        children: filteredTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cn("bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3", selectedTasks.includes(task.id) && "border-indigo-200 bg-indigo-50/30"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        className: "rounded border-slate-300 text-indigo-600 focus:ring-indigo-500",
                                                        checked: selectedTasks.includes(task.id),
                                                        onChange: ()=>toggleSelectTask(task.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-slate-900",
                                                                children: task.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 21
                                                            }, this),
                                                            task.is_private && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-indigo-500 font-bold uppercase",
                                                                children: "Private"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 499,
                                                columnNumber: 17
                                            }, this),
                                            (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteTask(task.id),
                                                className: "p-2 text-slate-400 hover:text-red-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 512,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 line-clamp-2",
                                        children: task.description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 pt-2 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-xs font-bold bg-transparent border-none p-0 focus:ring-0",
                                                        style: {
                                                            color: task.status_color
                                                        },
                                                        value: task.status_id || '',
                                                        onChange: (e)=>handleUpdateTask(task.id, {
                                                                status_id: e.target.value
                                                            }),
                                                        children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s._id,
                                                                children: s.label
                                                            }, s._id, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 40
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Priority"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-xs font-bold bg-transparent border-none p-0 focus:ring-0",
                                                        style: {
                                                            color: task.priority === 'Urgent' ? '#ef4444' : task.priority === 'High' ? '#f97316' : '#3b82f6'
                                                        },
                                                        value: task.priority,
                                                        onChange: (e)=>handleUpdateTask(task.id, {
                                                                priority: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Low"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Medium"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "High"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Urgent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Assigned To"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-xs font-medium text-slate-600 bg-transparent border-none p-0 focus:ring-0",
                                                        value: task.assigned_to || '',
                                                        onChange: (e)=>handleUpdateTask(task.id, {
                                                                assigned_to: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Unassigned"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 21
                                                            }, this),
                                                            users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: u.id,
                                                                    children: u.name
                                                                }, u.id, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 37
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Due Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600",
                                                        children: [
                                                            task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No date',
                                                            task.due_date && new Date(task.due_date) < new Date() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 ml-1 font-bold",
                                                                children: "!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                                lineNumber: 565,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, task.id, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                lineNumber: 494,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    filteredTasks.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-12 text-center text-slate-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                    size: 48,
                                    className: "text-slate-200"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No tasks found matching your filters."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                                    lineNumber: 578,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                            lineNumber: 576,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                        lineNumber: 575,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx",
        lineNumber: 312,
        columnNumber: 5
    }, this);
}
_s1(TasksView, "iZPqzIirTuR3I3zF8P/SBBdmYwQ=");
_c2 = TasksView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "TaskModal");
__turbopack_context__.k.register(_c2, "TasksView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/workflow.js [app-client] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const Card = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("bg-white rounded-2xl border border-slate-200 shadow-sm p-6", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const Badge = ({ children, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
        style: {
            backgroundColor: `${color}20`,
            color: color
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Badge;
const LeadModal = ({ isOpen, onClose, onCreated, token, users, statuses })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        course: '',
        source: 'Website',
        status_id: '',
        assigned_to: '',
        remarks: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadModal.useEffect": ()=>{
            if (statuses.length > 0) {
                setFormData({
                    "LeadModal.useEffect": (prev)=>({
                            ...prev,
                            status_id: statuses[0]._id
                        })
                }["LeadModal.useEffect"]);
            }
        }
    }["LeadModal.useEffect"], [
        statuses
    ]);
    const handleSubmit = async (e)=>{
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
                setFormData({
                    name: '',
                    phone: '',
                    course: '',
                    source: 'Website',
                    status_id: statuses[0]?._id || '',
                    assigned_to: '',
                    remarks: ''
                });
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.9,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            className: "w-full max-w-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-slate-400 hover:text-slate-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 87,
                            columnNumber: 108
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-6",
                        children: "Add New Lead"
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                                children: "Student Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "Full Name",
                                                className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    }),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "+91 98765 43210",
                                                className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                value: formData.phone,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        phone: e.target.value
                                                    }),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                                children: "Course Interested"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "e.g. Full Stack Dev",
                                                className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                value: formData.course,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        course: e.target.value
                                                    }),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                                children: "Lead Source"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                value: formData.source,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        source: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Website"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Facebook"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Instagram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Google Ads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Referral"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Walk-in"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                                children: "Pipeline Stage"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                value: formData.status_id,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        status_id: e.target.value
                                                    }),
                                                children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: s._id,
                                                        children: s.label
                                                    }, s._id, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                                children: "Assign Counselor"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                value: formData.assigned_to,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        assigned_to: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Unassigned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: u.id,
                                                            children: u.name
                                                        }, u.id, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 42
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                        children: "Initial Remarks"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        placeholder: "Any specific requirements or notes...",
                                        className: "w-full px-4 py-2 border rounded-xl h-20 focus:ring-2 focus:ring-indigo-500 outline-none",
                                        value: formData.remarks,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                remarks: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 mt-2 disabled:opacity-50",
                                children: loading ? 'Adding Lead...' : 'Create Lead'
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LeadModal, "XqxnFTrKSO81RLuDroRKWZzrvig=");
_c2 = LeadModal;
const LeadDetailsModal = ({ isOpen, onClose, leadId, token })=>{
    _s1();
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadDetailsModal.useEffect": ()=>{
            if (isOpen && leadId) {
                setLoading(true);
                fetch(`/api/leads/${leadId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then({
                    "LeadDetailsModal.useEffect": (res)=>{
                        if (!res.ok) throw new Error('Failed to fetch');
                        return res.json();
                    }
                }["LeadDetailsModal.useEffect"]).then({
                    "LeadDetailsModal.useEffect": (data)=>{
                        setLead(data);
                        setLoading(false);
                    }
                }["LeadDetailsModal.useEffect"]).catch({
                    "LeadDetailsModal.useEffect": (err)=>{
                        console.error(err);
                        setLoading(false);
                    }
                }["LeadDetailsModal.useEffect"]);
            }
        }
    }["LeadDetailsModal.useEffect"], [
        isOpen,
        leadId,
        token
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.9,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            className: "w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "relative flex-1 flex flex-col p-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: loading ? 'Loading...' : lead?.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${lead?.phone}`,
                                        className: "text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1.5 transition-colors mt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 14,
                                                className: "text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: lead?.phone
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 space-y-8",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-20 text-center text-slate-400",
                            children: "Fetching lead details..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 237,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : lead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                                                    children: "Course"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-800",
                                                    children: lead.course
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                                                    children: "Source"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-800",
                                                    children: lead.source
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 246,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                                                    children: "Assigned To"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-800",
                                                    children: lead.assignedTo?.name || 'Unassigned'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                                                    children: "Current Stage"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        color: lead.statusId?.color,
                                                        children: lead.statusId?.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                                                    children: "Created On"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-800",
                                                    children: lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'N/A'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2",
                                            children: "Remarks"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-slate-50 rounded-xl text-sm text-slate-700 italic border border-slate-100",
                                            children: lead.remarks || 'No remarks provided.'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4",
                                            children: "Activity Timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100",
                                            children: lead.timeline?.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative pl-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-0 top-1.5 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 z-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-bold text-slate-900",
                                                                            children: item.action
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                            lineNumber: 283,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-slate-600 mt-0.5",
                                                                            children: item.details
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                            lineNumber: 284,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-bold text-slate-400 uppercase",
                                                                            children: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                            lineNumber: 287,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-500 mt-0.5",
                                                                            children: [
                                                                                "by ",
                                                                                item.performedBy?.name || 'System'
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-20 text-center text-red-500 font-medium",
                            children: "Lead not found or access denied."
                        }, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 297,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(LeadDetailsModal, "L3zrcfGcq4PSK9Man3/7cuOBjOc=");
_c3 = LeadDetailsModal;
function LeadsView({ token, user }) {
    _s2();
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statuses, setStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedLeadId, setSelectedLeadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailsOpen, setDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Filters
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterSource, setFilterSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterAssignee, setFilterAssignee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const fetchLeads = ()=>{
        fetch('/api/leads', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res)=>{
            if (!res.ok) throw new Error('Failed to fetch leads');
            return res.json();
        }).then((data)=>{
            setLeads(data);
            setLoading(false);
        }).catch((err)=>{
            console.error(err);
            setLoading(false);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadsView.useEffect": ()=>{
            fetchLeads();
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            fetch('/api/users', {
                headers
            }).then({
                "LeadsView.useEffect": (res)=>res.ok ? res.json() : []
            }["LeadsView.useEffect"]).then(setUsers).catch({
                "LeadsView.useEffect": ()=>setUsers([])
            }["LeadsView.useEffect"]);
            fetch('/api/settings/lead-statuses', {
                headers
            }).then({
                "LeadsView.useEffect": (res)=>res.ok ? res.json() : []
            }["LeadsView.useEffect"]).then(setStatuses).catch({
                "LeadsView.useEffect": ()=>setStatuses([])
            }["LeadsView.useEffect"]);
        }
    }["LeadsView.useEffect"], [
        token
    ]);
    const handleUpdateLead = async (leadId, updates)=>{
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
    const handleBulkUpload = async (e)=>{
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
        } finally{
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };
    const filteredLeads = leads.filter((l)=>{
        if (filterStatus !== 'All' && l.status_label !== filterStatus) return false;
        if (filterSource !== 'All' && l.source !== filterSource) return false;
        if (filterAssignee !== 'All' && l.assigned_to !== filterAssignee) return false;
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-slate-900",
                                children: "Lead Management"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Track and nurture your student inquiries."
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                onChange: handleBulkUpload,
                                className: "hidden",
                                accept: ".csv"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fileInputRef.current?.click(),
                                disabled: uploading,
                                className: "bg-white text-slate-600 px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors border border-slate-200 text-sm font-semibold disabled:opacity-50 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: uploading ? 'Uploading...' : 'Bulk Import'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setModalOpen(true),
                                className: "bg-indigo-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 text-sm font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "New Lead"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 414,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[150px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                    children: "Stage"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                    value: filterStatus,
                                    onChange: (e)=>setFilterStatus(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this),
                                        statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s.label,
                                                children: s.label
                                            }, s._id, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 451,
                                                columnNumber: 34
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[150px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                    children: "Source"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                    value: filterSource,
                                    onChange: (e)=>setFilterSource(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Website"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Facebook"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Instagram"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Google Ads"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Referral"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Walk-in"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 456,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[150px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-slate-500 uppercase mb-1",
                                    children: "Counselor"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                    value: filterAssignee,
                                    onChange: (e)=>setFilterAssignee(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "All",
                                            children: "All Counselors"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this),
                                        users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: u.id,
                                                children: u.name
                                            }, u.id, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 478,
                                                columnNumber: 31
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadModal, {
                isOpen: isModalOpen,
                onClose: ()=>setModalOpen(false),
                onCreated: fetchLeads,
                token: token,
                users: users,
                statuses: statuses
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadDetailsModal, {
                isOpen: isDetailsOpen,
                onClose: ()=>setDetailsOpen(false),
                leadId: selectedLeadId,
                token: token
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 493,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-0 overflow-hidden border-none sm:border sm:border-slate-200 shadow-none sm:shadow-sm bg-transparent sm:bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-50 border-b border-slate-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Student Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Course"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Source"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Counselor"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Stage"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: filteredLeads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm",
                                                                children: lead.name.charAt(0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-bold text-slate-900",
                                                                        children: lead.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: lead.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                        lineNumber: 524,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-sm font-medium text-slate-700",
                                                    children: lead.course
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-sm text-slate-600",
                                                    children: lead.source
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-medium text-slate-600",
                                                        value: lead.assigned_to || '',
                                                        onChange: (e)=>handleUpdateLead(lead.id, {
                                                                assigned_to: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Unassigned"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 25
                                                            }, this),
                                                            users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: u.id,
                                                                    children: u.name
                                                                }, u.id, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-600 font-medium",
                                                        children: lead.assigned_name || 'Unassigned'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-sm border-none bg-transparent focus:ring-0 cursor-pointer p-0 font-bold",
                                                        style: {
                                                            color: lead.status_color
                                                        },
                                                        value: lead.status_id || '',
                                                        onChange: (e)=>handleUpdateLead(lead.id, {
                                                                status_id: e.target.value
                                                            }),
                                                        children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s._id,
                                                                children: s.label
                                                            }, s._id, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 42
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-end gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `tel:${lead.phone}`,
                                                                className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all",
                                                                title: "Call Lead",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedLeadId(lead.id);
                                                                    setDetailsOpen(true);
                                                                },
                                                                className: "p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all",
                                                                title: "View Details",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, lead.id, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:hidden space-y-4",
                        children: filteredLeads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm",
                                                        children: lead.name.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-slate-900",
                                                                children: lead.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 591,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: lead.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 586,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${lead.phone}`,
                                                        className: "p-2 text-indigo-600 bg-indigo-50 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setSelectedLeadId(lead.id);
                                                            setDetailsOpen(true);
                                                        },
                                                        className: "p-2 text-slate-400 bg-slate-50 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 595,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 585,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3 pt-3 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Course"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-slate-700",
                                                        children: lead.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 615,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Source"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600",
                                                        children: lead.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 619,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Stage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-xs font-bold bg-transparent border-none p-0 focus:ring-0",
                                                        style: {
                                                            color: lead.status_color
                                                        },
                                                        value: lead.status_id || '',
                                                        onChange: (e)=>handleUpdateLead(lead.id, {
                                                                status_id: e.target.value
                                                            }),
                                                        children: statuses.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s._id,
                                                                children: s.label
                                                            }, s._id, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 40
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 623,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase",
                                                        children: "Counselor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "text-xs font-medium text-slate-600 bg-transparent border-none p-0 focus:ring-0",
                                                        value: lead.assigned_to || '',
                                                        onChange: (e)=>handleUpdateLead(lead.id, {
                                                                assigned_to: e.target.value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Unassigned"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 21
                                                            }, this),
                                                            users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: u.id,
                                                                    children: u.name
                                                                }, u.id, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 37
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                                lineNumber: 634,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                        lineNumber: 614,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, lead.id, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this),
                    filteredLeads.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-12 text-center text-slate-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    size: 48,
                                    className: "text-slate-200"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No leads found matching your filters."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                                    lineNumber: 654,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                        lineNumber: 651,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
        lineNumber: 408,
        columnNumber: 5
    }, this);
}
_s2(LeadsView, "WziWhPy2sCyzryKrJBHOC7R0DLk=");
_c4 = LeadsView;
const ChevronRight = ({ size, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m9 18 6-6-6-6"
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
            lineNumber: 675,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx",
        lineNumber: 664,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = ChevronRight;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "LeadModal");
__turbopack_context__.k.register(_c3, "LeadDetailsModal");
__turbopack_context__.k.register(_c4, "LeadsView");
__turbopack_context__.k.register(_c5, "ChevronRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StaffView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const Card = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("bg-white rounded-2xl border border-slate-200 shadow-sm p-6", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const Badge = ({ children, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
        style: {
            backgroundColor: `${color}20`,
            color: color
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Badge;
const UserModal = ({ isOpen, onClose, onCreated, token })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        role: 'staff'
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
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
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    role: 'staff'
                });
            } else {
                setError(data.error || 'Failed to create user');
            }
        } catch (err) {
            setError('Connection error');
        } finally{
            setLoading(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                scale: 0.9,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            className: "w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-slate-400 hover:text-slate-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                            lineNumber: 78,
                            columnNumber: 108
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-6",
                        children: "Add Team Member"
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "John Doe",
                                        className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "john@institute.com",
                                        className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                        value: formData.email,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                email: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        placeholder: "••••••••",
                                        className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                        value: formData.password,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                password: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                        children: "Role"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                        value: formData.role,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                role: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "manager",
                                                children: "Manager"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "staff",
                                                children: "Staff / Counselor"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 124,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50",
                                children: loading ? 'Creating...' : 'Add Member'
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserModal, "6sXhDjSdwH3YvgDbuXG46IUXX94=");
_c2 = UserModal;
function StaffView({ token, user }) {
    _s1();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchUsers = ()=>{
        fetch('/api/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res)=>{
            if (!res.ok) throw new Error('Failed to fetch users');
            return res.json();
        }).then((data)=>{
            setUsers(data);
            setLoading(false);
        }).catch((err)=>{
            console.error(err);
            setLoading(false);
        });
    };
    const handleUpdateStatus = async (userId, currentStatus)=>{
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
                body: JSON.stringify({
                    status: newStatus
                })
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
    const handleDeleteUser = async (userId)=>{
        if (!window.confirm('Are you sure you want to permanently delete this member? This action cannot be undone.')) return;
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(fetchUsers, [
        token
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-slate-900",
                                children: "Team Management"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500",
                                children: "Manage your institute's staff and roles."
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModalOpen(true),
                        className: "bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Add Member"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "p-0 overflow-hidden border-none sm:border sm:border-slate-200 shadow-none sm:shadow-sm bg-transparent sm:bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left border-collapse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-slate-50 border-b border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-sm font-semibold text-slate-600 text-right",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "px-6 py-8 text-center text-slate-500",
                                            children: "Loading team members..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                            lineNumber: 240,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this) : users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "px-6 py-8 text-center text-slate-500",
                                            children: "No team members found."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                            lineNumber: 242,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this) : users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-slate-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs",
                                                                children: u.name[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-slate-900",
                                                                children: u.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-slate-600",
                                                    children: u.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "capitalize",
                                                        children: u.role.replace('_', ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        color: u.status === 'active' ? '#10b981' : '#ef4444',
                                                        children: u.status === 'active' ? 'Active' : 'Inactive'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-end gap-2",
                                                        children: (user.role === 'admin' || user.role === 'super_admin' || user.role === 'manager' && u.role === 'staff') && u.id !== user.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleUpdateStatus(u.id, u.status),
                                                                    className: cn("p-2 rounded-lg transition-all", u.status === 'active' ? "text-slate-400 hover:text-amber-600 hover:bg-amber-50" : "text-slate-400 hover:text-emerald-600 hover:bg-emerald-50"),
                                                                    title: u.status === 'active' ? 'Deactivate' : 'Activate',
                                                                    children: u.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 56
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 78
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteUser(u.id),
                                                                    className: "p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all",
                                                                    title: "Delete Member",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, u.id, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sm:hidden space-y-4",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200",
                            children: "Loading team members..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this) : users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200",
                            children: "No team members found."
                        }, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this) : users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm",
                                                        children: u.name[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-slate-900",
                                                                children: u.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: u.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        color: u.status === 'active' ? '#10b981' : '#ef4444',
                                                        children: u.status === 'active' ? 'Active' : 'Inactive'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    (user.role === 'admin' || user.role === 'manager' || user.role === 'super_admin') && (user.role === 'admin' || user.role === 'super_admin' || user.role === 'manager' && u.role === 'staff') && u.id !== user.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleUpdateStatus(u.id, u.status),
                                                                className: cn("p-1.5 rounded-lg", u.status === 'active' ? "text-amber-600 bg-amber-50" : "text-emerald-600 bg-emerald-50"),
                                                                children: u.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 50
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteUser(u.id),
                                                                className: "p-1.5 text-red-600 bg-red-50 rounded-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold text-slate-400 uppercase",
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-slate-700 capitalize",
                                                children: u.role.replace('_', ' ')
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, u.id, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserModal, {
                isOpen: isModalOpen,
                onClose: ()=>setModalOpen(false),
                onCreated: fetchUsers,
                token: token
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s1(StaffView, "3oVbMTzb800nHdDfvABTeuqGTtc=");
_c3 = StaffView;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "UserModal");
__turbopack_context__.k.register(_c3, "StaffView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/workflow.js [app-client] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const Card = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("bg-white rounded-2xl border border-slate-200 shadow-sm p-6", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const Badge = ({ children, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
        style: {
            backgroundColor: `${color}20`,
            color: color
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Badge;
function SettingsView({ token, user }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('profile');
    const [institute, setInstitute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [taskStatuses, setTaskStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leadStatuses, setLeadStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: '',
        text: ''
    });
    // New Status/Stage State
    const [newStatus, setNewStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        label: '',
        color: '#6366f1',
        isDefault: false
    });
    const [newStage, setNewStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        label: '',
        color: '#6366f1'
    });
    const [editingStatus, setEditingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingStage, setEditingStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = async ()=>{
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        try {
            const [instRes, taskRes, leadRes] = await Promise.all([
                fetch('/api/settings/institute', {
                    headers
                }),
                fetch('/api/settings/task-statuses', {
                    headers
                }),
                fetch('/api/settings/lead-statuses', {
                    headers
                })
            ]);
            if (instRes.ok) setInstitute(await instRes.json());
            if (taskRes.ok) setTaskStatuses(await taskRes.json());
            if (leadRes.ok) setLeadStatuses(await leadRes.json());
        } catch (err) {
            console.error("Failed to fetch settings", err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsView.useEffect": ()=>{
            fetchData();
        }
    }["SettingsView.useEffect"], [
        token
    ]);
    const handleAddTaskStatus = async (e)=>{
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
                setNewStatus({
                    label: '',
                    color: '#6366f1',
                    isDefault: false
                });
                fetchData();
            }
        } catch (err) {
            console.error(err);
        }
    };
    const handleUpdateTaskStatus = async (e)=>{
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
    const handleDeleteTaskStatus = async (id)=>{
        if (!confirm('Are you sure you want to delete this status?')) return;
        try {
            const res = await fetch(`/api/settings/task-statuses/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) fetchData();
        } catch (err) {
            console.error(err);
        }
    };
    const handleAddLeadStage = async (e)=>{
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
                setNewStage({
                    label: '',
                    color: '#6366f1'
                });
                fetchData();
            }
        } catch (err) {
            console.error(err);
        }
    };
    const handleUpdateLeadStage = async (e)=>{
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
    const handleDeleteLeadStage = async (id)=>{
        if (!confirm('Are you sure you want to delete this stage?')) return;
        try {
            const res = await fetch(`/api/settings/lead-statuses/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) fetchData();
        } catch (err) {
            console.error(err);
        }
    };
    const handleUpdateInstitute = async (e)=>{
        e.preventDefault();
        setSaving(true);
        setMessage({
            type: '',
            text: ''
        });
        try {
            const res = await fetch('/api/settings/institute', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: institute.name
                })
            });
            if (res.ok) {
                setMessage({
                    type: 'success',
                    text: 'Institute profile updated successfully!'
                });
            } else {
                setMessage({
                    type: 'error',
                    text: 'Failed to update profile.'
                });
            }
        } catch (err) {
            setMessage({
                type: 'error',
                text: 'Connection error.'
            });
        } finally{
            setSaving(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-center text-slate-500",
        children: "Loading settings..."
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
        lineNumber: 212,
        columnNumber: 23
    }, this);
    const tabs = [
        {
            id: 'profile',
            label: 'Profile',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        },
        {
            id: 'workflow',
            label: 'Workflow',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
            adminOnly: true
        },
        {
            id: 'security',
            label: 'Security',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"]
        }
    ];
    const filteredTabs = tabs.filter((t)=>!t.adminOnly || user.role === 'admin' || user.role === 'super_admin');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-slate-900",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Manage your account and institute preferences."
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-64 flex md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-2 md:gap-1 scrollbar-hide",
                        children: filteredTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: cn("flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all", activeTab === tab.id ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-600 hover:bg-slate-100 bg-white md:bg-transparent border border-slate-200 md:border-none"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: [
                                    activeTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold mb-6",
                                                children: "Institute Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleUpdateInstitute,
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                                        children: "Institute Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none",
                                                                        value: institute?.name || '',
                                                                        onChange: (e)=>setInstitute({
                                                                                ...institute,
                                                                                name: e.target.value
                                                                            }),
                                                                        disabled: user.role !== 'admin' && user.role !== 'super_admin'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                                        children: "Official Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 274,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        className: "w-full px-4 py-2 border rounded-xl bg-slate-50 text-slate-500 cursor-not-allowed",
                                                                        value: institute?.email || '',
                                                                        disabled: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-400 mt-1",
                                                                        children: "Contact support to change your official email."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this),
                                                    message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: cn("p-4 rounded-xl text-sm font-medium", message.type === 'success' ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"),
                                                        children: message.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 23
                                                    }, this),
                                                    (user.role === 'admin' || user.role === 'super_admin') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: saving,
                                                        className: "flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 25
                                                            }, this),
                                                            saving ? 'Saving...' : 'Save Changes'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    activeTab === 'workflow' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold",
                                                            children: "Task Statuses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleAddTaskStatus,
                                                        className: "flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-slate-50 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Status Label (e.g. In Review)",
                                                                className: "flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm",
                                                                value: newStatus.label,
                                                                onChange: (e)=>setNewStatus({
                                                                        ...newStatus,
                                                                        label: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "color",
                                                                        className: "w-10 h-10 border-none bg-transparent cursor-pointer",
                                                                        value: newStatus.color,
                                                                        onChange: (e)=>setNewStatus({
                                                                                ...newStatus,
                                                                                color: e.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "flex items-center gap-2 text-xs font-medium text-slate-600",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: newStatus.isDefault,
                                                                                onChange: (e)=>setNewStatus({
                                                                                        ...newStatus,
                                                                                        isDefault: e.target.checked
                                                                                    })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                lineNumber: 329,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Default"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex-1 sm:flex-none bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors",
                                                                        children: "Add"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 336,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: taskStatuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col p-3 border rounded-xl hover:bg-slate-50 transition-colors group",
                                                                children: editingStatus?._id === status._id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                    onSubmit: handleUpdateTaskStatus,
                                                                    className: "flex gap-3 w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "flex-1 px-3 py-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm",
                                                                            value: editingStatus.label,
                                                                            onChange: (e)=>setEditingStatus({
                                                                                    ...editingStatus,
                                                                                    label: e.target.value
                                                                                }),
                                                                            autoFocus: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 347,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "color",
                                                                            className: "w-8 h-8 border-none bg-transparent cursor-pointer",
                                                                            value: editingStatus.color,
                                                                            onChange: (e)=>setEditingStatus({
                                                                                    ...editingStatus,
                                                                                    color: e.target.value
                                                                                })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 353,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-2 text-[10px] font-medium text-slate-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: editingStatus.isDefault,
                                                                                    onChange: (e)=>setEditingStatus({
                                                                                            ...editingStatus,
                                                                                            isDefault: e.target.checked
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 360,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                "Default"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "submit",
                                                                                    className: "bg-emerald-500 text-white p-1.5 rounded-lg hover:bg-emerald-600",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 369,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 368,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setEditingStatus(null),
                                                                                    className: "bg-slate-200 text-slate-600 p-1.5 rounded-lg hover:bg-slate-300",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 372,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 371,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full",
                                                                                    style: {
                                                                                        backgroundColor: status.color
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 379,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium text-slate-700",
                                                                                    children: status.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 380,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                status.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                                    color: "#6366f1",
                                                                                    children: "Default"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 381,
                                                                                    columnNumber: 54
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 378,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-2 opacity-0 group-hover:opacity-100 transition-all",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setEditingStatus(status),
                                                                                    className: "text-slate-400 hover:text-indigo-600",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"], {
                                                                                        size: 18
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 388,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 384,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDeleteTaskStatus(status._id),
                                                                                    className: "text-slate-400 hover:text-red-500",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        size: 18
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 394,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 390,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, status._id, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold",
                                                            children: "Lead Pipeline Stages"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleAddLeadStage,
                                                        className: "flex flex-col sm:flex-row gap-3 mb-6 p-4 bg-slate-50 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Stage Label (e.g. Follow-up)",
                                                                className: "flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm",
                                                                value: newStage.label,
                                                                onChange: (e)=>setNewStage({
                                                                        ...newStage,
                                                                        label: e.target.value
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "color",
                                                                        className: "w-10 h-10 border-none bg-transparent cursor-pointer",
                                                                        value: newStage.color,
                                                                        onChange: (e)=>setNewStage({
                                                                                ...newStage,
                                                                                color: e.target.value
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 418,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex-1 sm:flex-none bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors",
                                                                        children: "Add"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: leadStatuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col p-3 border rounded-xl hover:bg-slate-50 transition-colors group",
                                                                children: editingStage?._id === status._id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                    onSubmit: handleUpdateLeadStage,
                                                                    className: "flex gap-3 w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "flex-1 px-3 py-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm",
                                                                            value: editingStage.label,
                                                                            onChange: (e)=>setEditingStage({
                                                                                    ...editingStage,
                                                                                    label: e.target.value
                                                                                }),
                                                                            autoFocus: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 435,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "color",
                                                                            className: "w-8 h-8 border-none bg-transparent cursor-pointer",
                                                                            value: editingStage.color,
                                                                            onChange: (e)=>setEditingStage({
                                                                                    ...editingStage,
                                                                                    color: e.target.value
                                                                                })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "submit",
                                                                                    className: "bg-emerald-500 text-white p-1.5 rounded-lg hover:bg-emerald-600",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 449,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 448,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setEditingStage(null),
                                                                                    className: "bg-slate-200 text-slate-600 p-1.5 rounded-lg hover:bg-slate-300",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 452,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 451,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 447,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-3 h-3 rounded-full",
                                                                                    style: {
                                                                                        backgroundColor: status.color
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 459,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium text-slate-700",
                                                                                    children: status.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 460,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 458,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-2 opacity-0 group-hover:opacity-100 transition-all",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setEditingStage(status),
                                                                                    className: "text-slate-400 hover:text-indigo-600",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"], {
                                                                                        size: 18
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 467,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 463,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDeleteLeadStage(status._id),
                                                                                    className: "text-slate-400 hover:text-red-500",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        size: 18
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                        lineNumber: 473,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                                    lineNumber: 469,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                            lineNumber: 462,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, status._id, false, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    activeTab === 'security' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold mb-6",
                                                children: "Security Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                lineNumber: 487,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                                        children: "Current Password"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "password",
                                                                        className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                                                        placeholder: "••••••••"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                                        children: "New Password"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "password",
                                                                        className: "w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500",
                                                                        placeholder: "••••••••"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                        lineNumber: 500,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                                lineNumber: 498,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-colors",
                                                        children: "Update Password"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, activeTab, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(SettingsView, "vV/zh1GXcC1Aww09JNqE0bAESuA=");
_c2 = SettingsView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "SettingsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/node_modules/date-fns/formatDistanceToNow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$TasksView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/components/views/TasksView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$LeadsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/components/views/LeadsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$StaffView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/components/views/StaffView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$SettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/MINE/edu-lead-pro-next/src/components/views/SettingsView.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
// --- Components ---
const SidebarItem = ({ icon: Icon, label, active, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200", active ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "text-slate-600 hover:bg-slate-100"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 20
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SidebarItem;
const Card = ({ children, className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("bg-white rounded-2xl border border-slate-200 shadow-sm p-6", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Card;
const Badge = ({ children, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-2.5 py-0.5 rounded-full text-xs font-semibold",
        style: {
            backgroundColor: `${color}20`,
            color: color
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Badge;
const NotificationDropdown = ({ isOpen, onClose, notifications, onMarkAsRead, onMarkAllAsRead })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-slate-800",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onMarkAllAsRead,
                                className: "text-xs text-indigo-600 font-semibold hover:text-indigo-700",
                                children: "Mark all read"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto",
                        children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    size: 32,
                                    className: "mx-auto mb-2 opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No new notifications"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : notifications.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onMarkAsRead(n._id),
                                className: cn("p-4 border-b border-slate-50 cursor-pointer transition-colors", n.isRead ? "opacity-60" : "bg-indigo-50/30 hover:bg-indigo-50/50"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: cn("w-2 h-2 rounded-full mt-1.5 shrink-0", n.isRead ? "bg-slate-300" : "bg-indigo-600")
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-bold text-slate-800 leading-tight",
                                                    children: n.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 mt-1",
                                                    children: n.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 mt-2 font-medium",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(n.createdAt), {
                                                        addSuffix: true
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, n._id, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c3 = NotificationDropdown;
function App() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isNotifOpen, setIsNotifOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Auth State
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const savedToken = localStorage.getItem('token');
            const savedUser = localStorage.getItem('user');
            if (savedToken && savedUser) {
                setToken(savedToken);
                setUser(JSON.parse(savedUser));
            }
            setLoading(false);
        }
    }["App.useEffect"], []);
    const handleLogin = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            let data;
            try {
                data = await res.json();
            } catch (e) {
                data = {
                    error: "Invalid server response"
                };
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
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };
    // Fetch Notifications
    const fetchNotifications = async ()=>{
        if (!token) return;
        try {
            const res = await fetch('/api/notifications', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setNotifications(data);
            }
        } catch (err) {
            console.error("Failed to fetch notifications", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (token) {
                fetchNotifications();
                const interval = setInterval(fetchNotifications, 30000);
                return ({
                    "App.useEffect": ()=>clearInterval(interval)
                })["App.useEffect"];
            }
        }
    }["App.useEffect"], [
        token
    ]);
    const markAsRead = async (id)=>{
        try {
            await fetch(`/api/notifications/${id}/read`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    };
    const markAllAsRead = async ()=>{
        try {
            await fetch('/api/notifications/read-all', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            fetchNotifications();
        } catch (err) {
            console.error(err);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex items-center justify-center",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 262,
        columnNumber: 23
    }, this);
    if (!token) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "w-full max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-indigo-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "text-white",
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black text-slate-900 tracking-tight",
                                children: "EduLead CRM"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-1 text-sm",
                                children: "Sign in to manage your institute"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        className: "p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleLogin,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-slate-700 mb-2",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "email",
                                                    type: "email",
                                                    required: true,
                                                    className: "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",
                                                    placeholder: "admin@edulead.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-bold text-slate-700 mb-2",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: "password",
                                                    type: "password",
                                                    required: true,
                                                    className: "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",
                                                    placeholder: "••••••••"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all text-sm",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentView('register'),
                            className: "text-indigo-600 font-bold hover:underline",
                            children: "Register New Institute"
                        }, void 0, false, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-slate-400 text-sm mt-8",
                        children: "© 2024 EduLead Systems. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
            lineNumber: 266,
            columnNumber: 7
        }, this);
    }
    if (currentView === 'register') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RegisterView, {
            onBack: ()=>setCurrentView('dashboard')
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
            lineNumber: 335,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setIsMobileMenuOpen(false),
                    className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                }, void 0, false, {
                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                    lineNumber: 343,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                initial: false,
                animate: {
                    width: isSidebarOpen ? 280 : 80,
                    x: isMobileMenuOpen ? 0 : ("TURBOPACK compile-time value", "object") !== 'undefined' && window.innerWidth < 1024 ? -280 : 0
                },
                transition: {
                    type: "spring",
                    damping: 25,
                    stiffness: 200
                },
                className: cn("bg-white border-r border-slate-200 flex flex-col fixed inset-y-0 left-0 z-50 lg:sticky lg:h-screen", !isMobileMenuOpen && "hidden lg:flex"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 flex items-center justify-between overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "text-white",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this),
                                    (isSidebarOpen || isMobileMenuOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black text-xl text-slate-900 tracking-tight whitespace-nowrap",
                                        children: "EduLead"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this),
                            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(false),
                                className: "lg:hidden p-2 text-slate-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 px-4 space-y-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                                label: isSidebarOpen || isMobileMenuOpen ? "Dashboard" : "",
                                active: currentView === 'dashboard',
                                onClick: ()=>{
                                    setCurrentView('dashboard');
                                    setIsMobileMenuOpen(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
                                label: isSidebarOpen || isMobileMenuOpen ? "Tasks" : "",
                                active: currentView === 'tasks',
                                onClick: ()=>{
                                    setCurrentView('tasks');
                                    setIsMobileMenuOpen(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"],
                                label: isSidebarOpen || isMobileMenuOpen ? "Leads" : "",
                                active: currentView === 'leads',
                                onClick: ()=>{
                                    setCurrentView('leads');
                                    setIsMobileMenuOpen(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            user.role !== 'staff' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                label: isSidebarOpen || isMobileMenuOpen ? "Staff" : "",
                                active: currentView === 'staff',
                                onClick: ()=>{
                                    setCurrentView('staff');
                                    setIsMobileMenuOpen(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this),
                            user.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                                label: isSidebarOpen || isMobileMenuOpen ? "Settings" : "",
                                active: currentView === 'settings',
                                onClick: ()=>{
                                    setCurrentView('settings');
                                    setIsMobileMenuOpen(false);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 mt-auto border-t border-slate-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                (isSidebarOpen || isMobileMenuOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 53
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (window.innerWidth < 1024) {
                                                setIsMobileMenuOpen(true);
                                            } else {
                                                setIsSidebarOpen(!isSidebarOpen);
                                            }
                                        },
                                        className: "p-2 hover:bg-slate-100 rounded-lg text-slate-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg lg:text-xl font-bold text-slate-800 capitalize truncate max-w-[150px] sm:max-w-none",
                                        children: currentView
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 lg:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsNotifOpen(!isNotifOpen),
                                                className: "p-2 hover:bg-slate-100 rounded-full text-slate-500 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 17
                                                    }, this),
                                                    notifications.filter((n)=>!n.isRead).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationDropdown, {
                                                isOpen: isNotifOpen,
                                                onClose: ()=>setIsNotifOpen(false),
                                                notifications: notifications,
                                                onMarkAsRead: markAsRead,
                                                onMarkAllAsRead: markAllAsRead
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 pl-3 lg:pl-6 border-l border-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right hidden sm:block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-slate-900 leading-none",
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1",
                                                        children: user.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 lg:w-10 lg:h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold border border-slate-200 shrink-0",
                                                children: user.name.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 lg:p-8",
                        children: [
                            currentView === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardView, {
                                token: token,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 483,
                                columnNumber: 43
                            }, this),
                            currentView === 'tasks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$TasksView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                token: token,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 484,
                                columnNumber: 39
                            }, this),
                            currentView === 'leads' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$LeadsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                token: token,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 485,
                                columnNumber: 39
                            }, this),
                            currentView === 'staff' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$StaffView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                token: token,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 486,
                                columnNumber: 39
                            }, this),
                            currentView === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$src$2f$components$2f$views$2f$SettingsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                token: token,
                                user: user
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 487,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, this);
}
_s(App, "IvAN2rybTrgMfzp5e3yrZZ3lf2o=");
_c4 = App;
// --- View Components ---
function RegisterView({ onBack }) {
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        instituteName: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/institutes/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                alert("Registration successful! Please login.");
                onBack();
            } else {
                const data = await res.json().catch(()=>({
                        error: "Registration failed"
                    }));
                alert(data.error);
            }
        } catch (err) {
            alert("Registration failed");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            className: "w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "Register Institute"
                    }, void 0, false, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 527,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-slate-700 mb-1",
                                        children: "Institute Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        className: "w-full px-4 py-2 border rounded-xl",
                                        value: formData.instituteName,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                instituteName: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-slate-700 mb-1",
                                        children: "Admin Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        className: "w-full px-4 py-2 border rounded-xl",
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-slate-700 mb-1",
                                        children: "Admin Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 548,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        required: true,
                                        className: "w-full px-4 py-2 border rounded-xl",
                                        value: formData.email,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                email: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold text-slate-700 mb-1",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        required: true,
                                        className: "w-full px-4 py-2 border rounded-xl",
                                        value: formData.password,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                password: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: loading,
                                className: "w-full py-2.5 bg-indigo-600 text-white rounded-lg font-bold disabled:opacity-50 text-sm",
                                children: loading ? 'Registering...' : 'Register'
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onBack,
                                className: "w-full text-sm text-slate-500 hover:underline",
                                children: "Back to Login"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 528,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 526,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
            lineNumber: 525,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 524,
        columnNumber: 5
    }, this);
}
_s1(RegisterView, "wH7Gzgq74vqIqD8nHSXrOMRYS2g=");
_c5 = RegisterView;
function DashboardView({ token, user }) {
    _s2();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardView.useEffect": ()=>{
            const fetchStats = {
                "DashboardView.useEffect.fetchStats": async ()=>{
                    try {
                        const res = await fetch('/api/stats', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (res.ok) {
                            const data = await res.json();
                            setStats(data);
                        }
                    } catch (err) {
                        console.error("Dashboard fetch error", err);
                    }
                }
            }["DashboardView.useEffect.fetchStats"];
            fetchStats();
        }
    }["DashboardView.useEffect"], [
        token
    ]);
    if (!stats) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-center text-slate-500",
        children: "Loading dashboard..."
    }, void 0, false, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 603,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 font-medium",
                                        children: "Total Leads"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: stats.totalLeads
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 612,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 font-medium",
                                        children: "Total Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: stats.totalTasks
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 627,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 font-medium",
                                        children: "Pending Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold text-slate-900",
                                        children: stats.pendingTasks
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold mb-6",
                                children: "Lead Pipeline"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 639,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[300px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: stats.pipelineData || [],
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                vertical: false,
                                                stroke: "#f1f5f9"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "name",
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fill: '#64748b',
                                                    fontSize: 12
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                axisLine: false,
                                                tickLine: false,
                                                tick: {
                                                    fill: '#64748b',
                                                    fontSize: 12
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    borderRadius: '12px',
                                                    border: 'none',
                                                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 646,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "count",
                                                radius: [
                                                    4,
                                                    4,
                                                    0,
                                                    0
                                                ],
                                                children: stats.pipelineData?.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: entry.color || '#6366f1'
                                                    }, `cell-${index}`, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 640,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold mb-6",
                                children: "Task Distribution"
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 660,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[300px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                data: stats.taskData || [],
                                                cx: "50%",
                                                cy: "50%",
                                                innerRadius: 60,
                                                outerRadius: 100,
                                                paddingAngle: 5,
                                                dataKey: "value",
                                                children: stats.taskData?.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: entry.color || '#6366f1'
                                                    }, `cell-${index}`, false, {
                                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 664,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$MINE$2f$edu$2d$lead$2d$pro$2d$next$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    borderRadius: '12px',
                                                    border: 'none',
                                                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                        lineNumber: 663,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                    lineNumber: 662,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                                lineNumber: 661,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
                lineNumber: 637,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/MINE/edu-lead-pro-next/src/app/page.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, this);
}
_s2(DashboardView, "QHCAg5+sC7SrLiGx+x4h2IICBFk=");
_c6 = DashboardView;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "SidebarItem");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "NotificationDropdown");
__turbopack_context__.k.register(_c4, "App");
__turbopack_context__.k.register(_c5, "RegisterView");
__turbopack_context__.k.register(_c6, "DashboardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_MINE_edu-lead-pro-next_src_2763f57a._.js.map