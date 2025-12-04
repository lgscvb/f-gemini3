import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import clsx from 'clsx';

const todos = [
    { id: 1, text: '確認 A 館 302 室合約', time: '10:00 AM', completed: false, priority: 'high' },
    { id: 2, text: '回覆陳先生關於場地預約的詢問', time: '11:30 AM', completed: true, priority: 'medium' },
    { id: 3, text: '核對本週財務報表', time: '02:00 PM', completed: false, priority: 'high' },
    { id: 4, text: '安排清潔人員打掃會議室', time: '04:00 PM', completed: false, priority: 'low' },
];

export const TodoList: React.FC = () => {
    return (
        <div className="card h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">今日待辦</h3>
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">查看全部</button>
            </div>
            <div className="space-y-4">
                {todos.map((todo) => (
                    <div key={todo.id} className="flex items-start gap-3 group cursor-pointer">
                        <button className={clsx(
                            "mt-0.5 transition-colors",
                            todo.completed ? "text-green-500" : "text-slate-300 hover:text-indigo-500"
                        )}>
                            {todo.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                        </button>
                        <div className="flex-1">
                            <p className={clsx(
                                "text-sm font-medium transition-colors",
                                todo.completed ? "text-slate-400 line-through" : "text-slate-700"
                            )}>
                                {todo.text}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                                <Clock size={12} className="text-slate-400" />
                                <span className="text-xs text-slate-400">{todo.time}</span>
                                {todo.priority === 'high' && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-red-100 text-red-600 rounded font-medium">緊急</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
