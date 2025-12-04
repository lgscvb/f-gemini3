import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { PaymentTable, type Payment } from '../components/PaymentTable';

const MOCK_PAYMENTS: Payment[] = [
    { id: 'P-001', customerName: '張小明', amount: 5000, dueDate: '2023-12-15', status: 'pending' },
    { id: 'P-002', customerName: '李美華', amount: 120000, dueDate: '2023-11-01', status: 'paid', paidDate: '2023-10-30' },
    { id: 'P-003', customerName: '陳雅婷', amount: 5000, dueDate: '2023-11-20', status: 'overdue' },
    { id: 'P-004', customerName: '林志豪', amount: 150000, dueDate: '2023-09-10', status: 'paid', paidDate: '2023-09-05' },
    { id: 'P-005', customerName: '王大同', amount: 500, dueDate: '2023-12-05', status: 'paid', paidDate: '2023-12-05' },
    { id: 'P-006', customerName: '劉德華', amount: 8000, dueDate: '2023-11-25', status: 'overdue' },
];

export const Payments: React.FC = () => {
    const [payments, setPayments] = useState<Payment[]>(MOCK_PAYMENTS);

    const handleRecordPayment = (id: string) => {
        if (window.confirm('確認已收到此筆款項？')) {
            setPayments(prev => prev.map(p =>
                p.id === id
                    ? { ...p, status: 'paid', paidDate: new Date().toISOString().split('T')[0] }
                    : p
            ));
        }
    };

    const overdueCount = payments.filter(p => p.status === 'overdue').length;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">繳費管理</h1>
            </div>

            {overdueCount > 0 && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center gap-3 text-red-700">
                    <AlertTriangle size={20} />
                    <span className="font-medium">注意：目前有 {overdueCount} 筆款項已逾期，請盡快處理。</span>
                    <button className="ml-auto text-sm underline hover:text-red-800">查看全部逾期</button>
                </div>
            )}

            <div className="card p-4 space-y-4">
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">
                        全部
                    </button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
                        待繳費
                    </button>
                    <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors">
                        已逾期
                    </button>
                    <button className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
                        已完成
                    </button>
                </div>

                <PaymentTable payments={payments} onRecordPayment={handleRecordPayment} />
            </div>
        </div>
    );
};
