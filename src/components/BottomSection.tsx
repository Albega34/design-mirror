import { MapPin, Layers } from "lucide-react";

const locations = [
  { name: "Le Plateau-Mont-Royal", students: 428 },
  { name: "Westmount", students: 312 },
  { name: "Mile End", students: 194 },
];

export function NeighborhoodReach() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-bold text-foreground">Neighborhood Reach</h3>
      <p className="text-sm text-muted-foreground mb-5">Student concentration mapping across Montreal campuses.</p>
      <div className="space-y-4">
        {locations.map((loc) => (
          <div key={loc.name} className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground font-medium">{loc.name}</span>
            <span className="text-sm font-semibold text-primary ml-auto">{loc.students} students</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NewCampusCard() {
  return (
    <div className="bg-primary rounded-2xl p-6 text-primary-foreground flex flex-col">
      <Layers className="w-8 h-8 mb-3 opacity-80" />
      <h3 className="text-lg font-bold">New Campus Opening</h3>
      <p className="text-sm opacity-90 mt-2 flex-1">
        Predictive analytics suggest Saint-Henri as the next high-potential location based on current inquiries.
      </p>
      <button className="mt-4 w-full py-2.5 border border-primary-foreground/30 rounded-xl text-sm font-medium hover:bg-primary-foreground/10 transition-colors">
        See Expansion Data
      </button>
    </div>
  );
}

export function StaffPerformance() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-bold text-foreground mb-4">Staff Performance</h3>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">JL</div>
        <div>
          <p className="text-sm font-semibold text-foreground">Prof. Jean-Luc</p>
          <p className="text-xs text-muted-foreground">Lead Violinist</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground italic mb-4">
        "Maintaining 98% student retention for 3 consecutive quarters."
      </p>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Course Rating</span>
          <span className="text-sm font-bold text-primary">4.9/5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Attendance</span>
          <span className="text-sm font-bold text-primary">99.2%</span>
        </div>
      </div>
    </div>
  );
}
