import React from 'react';
import { Download } from 'lucide-react';
import clsx from 'clsx';

export interface Contract {
    id: string;
    customerName: string;
    planName: string;
    startDate: string;
    endDate: string;
    amount: number;
    status: 'active' | 'expired' | 'terminated';
}

interface ContractTableProps {
    contracts: Contract[];
}

export const ContractTable: React.FC<ContractTableProps> = ({ contracts }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-sm">
                        <th className="p-4 font-medium">合約編號</th>
                        <th className="p-4 font-medium">客戶名稱</th>
                        <th className="p-4 font-medium">方案內容</th>
                        <th className="p-4 font-medium">合約期間</th>
                        <th className="p-4 font-medium">金額</th>
                        <th className="p-4 font-medium">狀態</th>
                        <th className="p-4 font-medium text-right">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map((contract) => (
                        <tr key={contract.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-medium text-slate-900">#{contract.id}</td>
                            <td className="p-4 text-slate-900">{contract.customerName}</td>
                            <td className="p-4 text-slate-600">{contract.planName}</td>
                            <td className="p-4 text-sm text-slate-500">
                                {contract.startDate} ~ {contract.endDate}
                            </td>
                            <td className="p-4 font-medium text-slate-900">
                                ${contract.amount.toLocaleString()}
                            </td>
                            <td className="p-4">
                                <span className={clsx(
                                    "badge",
                                    contract.status === 'active' && "badge-success",
                                    contract.status === 'expired' && "badge-neutral",
                                    contract.status === 'terminated' && "badge-danger"
                                )}>
                                    {contract.status === 'active' ? '有效' : contract.status === 'expired' ? '已過期' : '已終止'}
                                </span>
                            </td>
                            <td className="p-4 text-right">
                                <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 text-sm font-medium ml-auto">
                                    <Download size={16} /> 下載
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
