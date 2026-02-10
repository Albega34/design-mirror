import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", strings: 120, piano: 90 },
  { month: "Feb", strings: 115, piano: 95 },
  { month: "Mar", strings: 140, piano: 110 },
  { month: "Apr", strings: 135, piano: 120 },
  { month: "May", strings: 160, piano: 130 },
  { month: "Jun", strings: 175, piano: 140 },
  { month: "Jul", strings: 200, piano: 155 },
  { month: "Aug", strings: 185, piano: 160 },
  { month: "Sep", strings: 210, piano: 170 },
  { month: "Oct", strings: 230, piano: 180 },
  { month: "Nov", strings: 250, piano: 200 },
];

export function EnrollmentChart() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Enrollment Growth</h3>
          <p className="text-sm text-muted-foreground">Student registration trends by instrument</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Strings
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-chart-secondary" /> Piano
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="stringsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(14, 78%, 56%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(14, 78%, 56%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="pianoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(25, 90%, 60%)" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(25, 90%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 15%, 90%)" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(0, 0%, 100%)",
              border: "1px solid hsl(30, 15%, 90%)",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          />
          <Area type="monotone" dataKey="strings" stroke="hsl(14, 78%, 56%)" strokeWidth={2.5} fill="url(#stringsGrad)" />
          <Area type="monotone" dataKey="piano" stroke="hsl(25, 90%, 60%)" strokeWidth={2} strokeDasharray="5 5" fill="url(#pianoGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
