import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const revenueData = [
    { name: '1月', revenue: 4000, expense: 2400 },
    { name: '2月', revenue: 3000, expense: 1398 },
    { name: '3月', revenue: 2000, expense: 9800 },
    { name: '4月', revenue: 2780, expense: 3908 },
    { name: '5月', revenue: 1890, expense: 4800 },
    { name: '6月', revenue: 2390, expense: 3800 },
];

const planData = [
    { name: '固定座位', value: 400 },
    { name: '自由座位', value: 300 },
    { name: '私人辦公室', value: 300 },
    { name: '會議室租借', value: 200 },
];

const COLORS = ['#4f46e5', '#ec4899', '#10b981', '#f59e0b'];

export const Reports: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">報表分析</h1>
                <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>最近 6 個月</option>
                    <option>最近 1 年</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue vs Expense */}
                <div className="card h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">營收與支出對比</h3>
                    <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend />
                                <Bar dataKey="revenue" name="營收" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="expense" name="支出" fill="#ec4899" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Plan Distribution */}
                <div className="card h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">方案分佈</h3>
                    <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={planData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {planData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};
