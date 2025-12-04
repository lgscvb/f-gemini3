import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import clsx from 'clsx';

interface Commission {
    id: string;
    agentName: string;
    customerName: string;
    amount: number;
    date: string;
    status: 'pending' | 'approved' | 'paid' | 'rejected';
}

const MOCK_COMMISSIONS: Commission[] = [
    { id: 'COM-001', agentName: '王業務', customerName: '張小明', amount: 500, date: '2023-12-01', status: 'pending' },
    { id: 'COM-002', agentName: '李業務', customerName: '李美華', amount: 12000, date: '2023-11-28', status: 'approved' },
    { id: 'COM-003', agentName: '王業務', customerName: '陳雅婷', amount: 500, date: '2023-11-25', status: 'paid' },
    { id: 'COM-004', agentName: '陳業務', customerName: '林志豪', amount: 15000, date: '2023-11-20', status: 'rejected' },
];

export const Commissions: React.FC = () => {
    const [commissions, setCommissions] = useState<Commission[]>(MOCK_COMMISSIONS);

    const handleApprove = (id: string) => {
        setCommissions(prev => prev.map(c => c.id === id ? { ...c, status: 'approved' } : c));
    };

    const handleReject = (id: string) => {
        if (window.confirm('確定要拒絕此筆佣金？')) {
            setCommissions(prev => prev.map(c => c.id === id ? { ...c, status: 'rejected' } : c));
        }
    };

    const handlePay = (id: string) => {
        if (window.confirm('確認已支付此筆佣金？')) {
            setCommissions(prev => prev.map(c => c.id === id ? { ...c, status: 'paid' } : c));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">佣金管理</h1>
            </div>

            <div className="card p-4">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 text-slate-500 text-sm">
                                <th className="p-4 font-medium">單號</th>
                                <th className="p-4 font-medium">業務員</th>
                                <th className="p-4 font-medium">客戶</th>
                                <th className="p-4 font-medium">金額</th>
                                <th className="p-4 font-medium">日期</th>
                                <th className="p-4 font-medium">狀態</th>
                                <th className="p-4 font-medium text-right">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commissions.map((commission) => (
                                <tr key={commission.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                    <td className="p-4 text-sm text-slate-500">{commission.id}</td>
                                    <td className="p-4 font-medium text-slate-900">{commission.agentName}</td>
                                    <td className="p-4 text-slate-600">{commission.customerName}</td>
                                    <td className="p-4 font-bold text-slate-900">${commission.amount.toLocaleString()}</td>
                                    <td className="p-4 text-sm text-slate-500">{commission.date}</td>
                                    <td className="p-4">
                                        <span className={clsx(
                                            "badge flex items-center gap-1 w-fit",
                                            commission.status === 'paid' && "badge-success",
                                            commission.status === 'approved' && "badge-success bg-blue-100 text-blue-700",
                                            commission.status === 'pending' && "badge-warning",
                                            commission.status === 'rejected' && "badge-danger"
                                        )}>
                                            {commission.status === 'paid' ? '已支付' :
                                                commission.status === 'approved' ? '已審核' :
                                                    commission.status === 'pending' ? '待審核' : '已拒絕'}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {commission.status === 'pending' && (
                                                <>
                                                    <button
                                                        onClick={() => handleApprove(commission.id)}
                                                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                                                        title="通過審核"
                                                    >
                                                        <CheckCircle2 size={20} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleReject(commission.id)}
                                                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                                                        title="拒絕"
                                                    >
                                                        <XCircle size={20} />
                                                    </button>
                                                </>
                                            )}
                                            {commission.status === 'approved' && (
                                                <button
                                                    onClick={() => handlePay(commission.id)}
                                                    className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 transition-colors"
                                                >
                                                    支付
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
