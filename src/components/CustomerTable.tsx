import React from 'react';
import { Edit2, Trash2, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive' | 'pending';
    plan: string;
    joinDate: string;
    lineBound: boolean;
}

interface CustomerTableProps {
    customers: Customer[];
    onEdit: (customer: Customer) => void;
    onDelete: (id: string) => void;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onEdit, onDelete }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-sm">
                        <th className="p-4 font-medium">客戶名稱</th>
                        <th className="p-4 font-medium">聯絡資訊</th>
                        <th className="p-4 font-medium">方案</th>
                        <th className="p-4 font-medium">狀態</th>
                        <th className="p-4 font-medium">加入日期</th>
                        <th className="p-4 font-medium">LINE</th>
                        <th className="p-4 font-medium text-right">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="p-4">
                                <div className="font-medium text-slate-900">{customer.name}</div>
                            </td>
                            <td className="p-4">
                                <div className="text-sm text-slate-900">{customer.email}</div>
                                <div className="text-xs text-slate-500">{customer.phone}</div>
                            </td>
                            <td className="p-4">
                                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">
                                    {customer.plan}
                                </span>
                            </td>
                            <td className="p-4">
                                <span className={clsx(
                                    "badge",
                                    customer.status === 'active' && "badge-success",
                                    customer.status === 'inactive' && "badge-neutral",
                                    customer.status === 'pending' && "badge-warning"
                                )}>
                                    {customer.status === 'active' ? '活躍中' : customer.status === 'inactive' ? '已停用' : '待審核'}
                                </span>
                            </td>
                            <td className="p-4 text-sm text-slate-600">{customer.joinDate}</td>
                            <td className="p-4">
                                {customer.lineBound ? (
                                    <span className="text-green-500 flex items-center gap-1 text-xs font-medium">
                                        <MessageCircle size={14} /> 已綁定
                                    </span>
                                ) : (
                                    <span className="text-slate-400 text-xs">未綁定</span>
                                )}
                            </td>
                            <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <button
                                        onClick={() => onEdit(customer)}
                                        className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                    <button
                                        onClick={() => onDelete(customer.id)}
                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
