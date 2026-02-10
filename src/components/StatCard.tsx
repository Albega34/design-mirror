import { TrendingUp, TrendingDown } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}

export function StatCard({ title, value, change, positive = true, icon, children }: StatCardProps) {
  return (
    <div className="bg-card rounded-2xl p-5 border border-border">
      <div className="flex items-start justify-between mb-2">
        <p className="text-xs text-muted-foreground font-medium">{title}</p>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {change && (
          <span className={`text-xs font-medium flex items-center gap-0.5 mb-1 ${positive ? 'text-primary' : 'text-destructive'}`}>
            {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </span>
        )}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
