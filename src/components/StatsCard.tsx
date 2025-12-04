import React from 'react';
import type { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, trend, className }) => {
    return (
        <div className={clsx("card flex items-start justify-between", className)}>
            <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
                {trend && (
                    <div className={clsx("flex items-center gap-1 mt-2 text-xs font-medium",
                        trend.isPositive ? "text-green-600" : "text-red-600"
                    )}>
                        <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
                        <span className="text-slate-400">較上月</span>
                    </div>
                )}
            </div>
            <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                <Icon size={24} />
            </div>
        </div>
    );
};
