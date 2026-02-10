interface Program {
  name: string;
  slots: number;
  total: number;
}

const programs: Program[] = [
  { name: "Jazz Piano", slots: 88, total: 100 },
  { name: "Classical Violin", slots: 64, total: 80 },
  { name: "Vocal Training", slots: 45, total: 50 },
  { name: "Cello Studio", slots: 22, total: 30 },
  { name: "Digital Composition", slots: 12, total: 40 },
];

export function PopularPrograms() {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <h3 className="text-lg font-bold text-foreground mb-5">Popular Programs</h3>
      <div className="space-y-4">
        {programs.map((p) => (
          <div key={p.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-foreground">{p.name}</span>
              <span className="text-xs text-muted-foreground">{p.slots}/{p.total} slots</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${(p.slots / p.total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 w-full py-2.5 border border-border rounded-xl text-sm font-medium text-primary hover:bg-secondary transition-colors">
        View Full Catalog
      </button>
    </div>
  );
}
