const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const hours = ["09:00", "12:00", "15:00", "18:00"];

// 0=low, 1=medium, 2=high, 3=very high
const heatmapData = [
  [0, 0, 1, 0, 1, 1, 0],
  [2, 2, 2, 2, 2, 3, 1],
  [3, 3, 3, 3, 3, 3, 2],
  [3, 2, 2, 2, 2, 2, 1],
];

const colorMap: Record<number, string> = {
  0: "bg-chart-primary-light",
  1: "bg-chart-secondary/40",
  2: "bg-primary/70",
  3: "bg-primary",
};

export function PeakBookingHours() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-foreground">Peak Booking Hours</h3>
          <p className="text-sm text-muted-foreground">Studio utilization across the week</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>LOW</span>
          <div className="flex gap-1">
            <span className="w-3 h-3 rounded-full bg-chart-primary-light" />
            <span className="w-3 h-3 rounded-full bg-chart-secondary/40" />
            <span className="w-3 h-3 rounded-full bg-primary/70" />
            <span className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span>HIGH</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-8 gap-2 mb-2">
          <div />
          {days.map((d) => (
            <span key={d} className="text-xs text-muted-foreground text-center font-medium">{d}</span>
          ))}
        </div>
        {hours.map((hour, i) => (
          <div key={hour} className="grid grid-cols-8 gap-2">
            <span className="text-xs text-muted-foreground font-medium flex items-center">{hour}</span>
            {heatmapData[i].map((val, j) => (
              <div key={j} className={`h-8 rounded-lg ${colorMap[val]}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
