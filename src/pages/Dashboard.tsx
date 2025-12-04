import React from 'react';
import { DollarSign, Users, AlertCircle, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { RevenueChart } from '../components/RevenueChart';
import { TodoList } from '../components/TodoList';

export const Dashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">儀表板</h1>
                <div className="text-sm text-slate-500">最後更新: 剛剛</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="本月總營收"
                    value="$128,450"
                    icon={DollarSign}
                    trend={{ value: 12.5, isPositive: true }}
                />
                <StatsCard
                    title="活躍會員數"
                    value="324"
                    icon={Users}
                    trend={{ value: 4.2, isPositive: true }}
                />
                <StatsCard
                    title="逾期款項"
                    value="$12,800"
                    icon={AlertCircle}
                    trend={{ value: 2.1, isPositive: false }}
                    className="border-red-100 bg-red-50/30"
                />
                <StatsCard
                    title="本月新簽約"
                    value="28"
                    icon={TrendingUp}
                    trend={{ value: 8.4, isPositive: true }}
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>
                <div className="lg:col-span-1">
                    <TodoList />
                </div>
            </div>
        </div>
    );
};
