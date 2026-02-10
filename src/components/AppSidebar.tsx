import { Music, LayoutDashboard, BarChart3, Users, Calendar, DollarSign } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Students", url: "/students", icon: Users },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Revenue", url: "/revenue", icon: DollarSign },
];

export function AppSidebar() {
  return (
    <aside className="hidden lg:flex w-52 flex-col border-r border-border bg-card p-6 min-h-screen fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <Music className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-lg text-foreground">Lamusique</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
            activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
          >
            <item.icon className="w-[18px] h-[18px]" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6">
        <div className="bg-sidebar-accent rounded-xl p-4">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide">Academy Pro Plan</p>
          <p className="text-xs text-muted-foreground mt-1">75% of storage used.</p>
          <div className="w-full h-1.5 bg-border rounded-full mt-2">
            <div className="w-3/4 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </aside>
  );
}
