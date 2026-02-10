import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { quarter: "Q1", tuition: 60, materials: 20 },
  { quarter: "Q2", tuition: 75, materials: 25 },
  { quarter: "Q3", tuition: 85, materials: 30 },
  { quarter: "Q4", tuition: 90, materials: 28 },
];

export function RevenueStreams() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-bold text-foreground">Revenue Streams</h3>
      <p className="text-sm text-muted-foreground mb-4">Quarterly distribution</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} barGap={2}>
          <XAxis dataKey="quarter" axisLine={false} tickLine={false} tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(0, 0%, 100%)",
              border: "1px solid hsl(30, 15%, 90%)",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          />
          <Bar dataKey="tuition" name="Tuition Fees" fill="hsl(14, 78%, 56%)" radius={[4, 4, 0, 0]} barSize={16} />
          <Bar dataKey="materials" name="Materials" fill="hsl(14, 78%, 82%)" radius={[4, 4, 0, 0]} barSize={16} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-5 mt-3 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Tuition Fees
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" /> Materials
        </span>
      </div>
    </div>
  );
}
