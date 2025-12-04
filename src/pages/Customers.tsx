import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { CustomerTable, type Customer } from '../components/CustomerTable';
import { CustomerModal } from '../components/CustomerModal';

const MOCK_CUSTOMERS: Customer[] = [
    { id: '1', name: '張小明', email: 'ming@example.com', phone: '0912-345-678', status: 'active', plan: '固定座位 (月繳)', joinDate: '2023-10-15', lineBound: true },
    { id: '2', name: '李美華', email: 'mei@example.com', phone: '0922-444-555', status: 'active', plan: '私人辦公室 (年繳)', joinDate: '2023-11-01', lineBound: true },
    { id: '3', name: '王大同', email: 'wang@example.com', phone: '0933-777-888', status: 'pending', plan: '自由座位 (日租)', joinDate: '2023-12-05', lineBound: false },
    { id: '4', name: '陳雅婷', email: 'tina@example.com', phone: '0955-111-222', status: 'inactive', plan: '固定座位 (月繳)', joinDate: '2023-08-20', lineBound: true },
    { id: '5', name: '林志豪', email: 'howard@example.com', phone: '0966-333-999', status: 'active', plan: '私人辦公室 (年繳)', joinDate: '2023-09-10', lineBound: false },
];

export const Customers: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>(MOCK_CUSTOMERS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | undefined>(undefined);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredCustomers = customers.filter(customer =>
        customer.name.includes(searchQuery) ||
        customer.phone.includes(searchQuery) ||
        customer.email.includes(searchQuery)
    );

    const handleAdd = () => {
        setEditingCustomer(undefined);
        setIsModalOpen(true);
    };

    const handleEdit = (customer: Customer) => {
        setEditingCustomer(customer);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('確定要刪除此客戶嗎？')) {
            setCustomers(prev => prev.filter(c => c.id !== id));
        }
    };

    const handleSubmit = (data: any) => {
        // Mock submit logic
        console.log('Submit:', data);
        setIsModalOpen(false);
        // In a real app, we would update the state or refetch data here
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-slate-900">客戶管理</h1>
                <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium"
                >
                    <Plus size={20} />
                    新增客戶
                </button>
            </div>

            <div className="card p-4 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="搜尋姓名、電話或 Email..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 font-medium">
                        <Filter size={20} />
                        篩選
                    </button>
                </div>

                <CustomerTable
                    customers={filteredCustomers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>

            <CustomerModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingCustomer}
            />
        </div>
    );
};
