import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
import clsx from 'clsx';

export interface Payment {
    id: string;
    customerName: string;
    amount: number;
    dueDate: string;
    status: 'paid' | 'overdue' | 'pending';
    paidDate?: string;
}

interface PaymentTableProps {
    payments: Payment[];
    onRecordPayment: (id: string) => void;
}

export const PaymentTable: React.FC<PaymentTableProps> = ({ payments, onRecordPayment }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-sm">
                        <th className="p-4 font-medium">繳費單號</th>
                        <th className="p-4 font-medium">客戶名稱</th>
                        <th className="p-4 font-medium">應繳金額</th>
                        <th className="p-4 font-medium">到期日</th>
                        <th className="p-4 font-medium">狀態</th>
                        <th className="p-4 font-medium text-right">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id} className={clsx(
                            "border-b transition-colors",
                            payment.status === 'overdue' ? "bg-red-50/50 hover:bg-red-50" : "border-slate-100 hover:bg-slate-50"
                        )}>
                            <td className="p-4 font-medium text-slate-900">#{payment.id}</td>
                            <td className="p-4 text-slate-900">{payment.customerName}</td>
                            <td className="p-4 font-bold text-slate-900">
                                ${payment.amount.toLocaleString()}
                            </td>
                            <td className={clsx("p-4 text-sm", payment.status === 'overdue' ? "text-red-600 font-medium" : "text-slate-500")}>
                                {payment.dueDate}
                            </td>
                            <td className="p-4">
                                <span className={clsx(
                                    "badge flex items-center gap-1 w-fit",
                                    payment.status === 'paid' && "badge-success",
                                    payment.status === 'overdue' && "badge-danger",
                                    payment.status === 'pending' && "badge-warning"
                                )}>
                                    {payment.status === 'paid' && <CheckCircle size={12} />}
                                    {payment.status === 'overdue' && <AlertCircle size={12} />}
                                    {payment.status === 'pending' && <Clock size={12} />}
                                    {payment.status === 'paid' ? '已繳費' : payment.status === 'overdue' ? '已逾期' : '待繳費'}
                                </span>
                            </td>
                            <td className="p-4 text-right">
                                {payment.status !== 'paid' && (
                                    <button
                                        onClick={() => onRecordPayment(payment.id)}
                                        className="text-sm bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 transition-colors shadow-sm"
                                    >
                                        記錄繳費
                                    </button>
                                )}
                                {payment.status === 'paid' && (
                                    <span className="text-sm text-slate-400">
                                        {payment.paidDate}
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
