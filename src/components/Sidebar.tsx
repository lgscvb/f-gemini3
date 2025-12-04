import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    FileText,
    CreditCard,
    DollarSign,
    BarChart3,
    Settings,
    LogOut
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
    { icon: LayoutDashboard, label: '儀表板', path: '/' },
    { icon: Users, label: '客戶管理', path: '/customers' },
    { icon: FileText, label: '合約管理', path: '/contracts' },
    { icon: CreditCard, label: '繳費管理', path: '/payments' },
    { icon: DollarSign, label: '佣金管理', path: '/commissions' },
    { icon: BarChart3, label: '報表分析', path: '/reports' },
];

export const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col border-r border-slate-800">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-xl font-bold flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">S</span>
                    Space Hub
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium',
                                isActive
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            )
                        }
                    >
                        <item.icon size={20} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium">
                    <Settings size={20} />
                    設定
                </button>
                <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:text-red-300 hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium mt-1">
                    <LogOut size={20} />
                    登出
                </button>
            </div>
        </aside>
    );
};
