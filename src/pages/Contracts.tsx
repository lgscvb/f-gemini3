import React from 'react';
import { Filter, Download } from 'lucide-react';
import { ContractTable, type Contract } from '../components/ContractTable';

const MOCK_CONTRACTS: Contract[] = [
    { id: 'C-2023001', customerName: '張小明', planName: '固定座位 (月繳)', startDate: '2023-10-15', endDate: '2024-10-14', amount: 5000, status: 'active' },
    { id: 'C-2023002', customerName: '李美華', planName: '私人辦公室 (年繳)', startDate: '2023-11-01', endDate: '2024-10-31', amount: 120000, status: 'active' },
    { id: 'C-2023003', customerName: '陳雅婷', planName: '固定座位 (月繳)', startDate: '2023-08-20', endDate: '2023-11-19', amount: 5000, status: 'expired' },
    { id: 'C-2023004', customerName: '林志豪', planName: '私人辦公室 (年繳)', startDate: '2023-09-10', endDate: '2024-09-09', amount: 150000, status: 'active' },
    { id: 'C-2023005', customerName: '王大同', planName: '自由座位 (日租)', startDate: '2023-12-05', endDate: '2023-12-05', amount: 500, status: 'terminated' },
];

export const Contracts: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">合約管理</h1>
                <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                    <Download size={20} />
                    匯出列表
                </button>
            </div>

            <div className="card p-4 space-y-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-600">
                        <Filter size={16} />
                        狀態篩選: 全部
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-600">
                        <Filter size={16} />
                        方案篩選: 全部
                    </div>
                </div>

                <ContractTable contracts={MOCK_CONTRACTS} />
            </div>
        </div>
    );
};
