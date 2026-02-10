import { Download, Star, CheckSquare, Users } from "lucide-react";
import { AppSidebar } from "@/components/AppSidebar";
import { StatCard } from "@/components/StatCard";
import { EnrollmentChart } from "@/components/EnrollmentChart";
import { PopularPrograms } from "@/components/PopularPrograms";
import { PeakBookingHours } from "@/components/PeakBookingHours";
import { RevenueStreams } from "@/components/RevenueStreams";
import { NeighborhoodReach, NewCampusCard, StaffPerformance } from "@/components/BottomSection";

const Index = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <main className="flex-1 lg:ml-52 p-6 lg:p-8 overflow-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports & Insights</h1>
            <p className="text-sm text-muted-foreground">Detailed performance overview for Montreal Campuses</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg">
              Last 12 Months
            </button>
            <button className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-lg text-foreground hover:bg-secondary transition-colors">
              Q3 2023
            </button>
            <button className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-lg text-foreground hover:bg-secondary transition-colors">
              Custom
            </button>
            <button className="px-4 py-2 bg-card border border-border text-sm font-medium rounded-lg text-primary hover:bg-secondary transition-colors flex items-center gap-1.5">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Active Enrollments" value="1,284" change="~12%" positive icon={<Users className="w-5 h-5 text-primary/40" />}>
            <div className="flex items-end gap-1 h-8">
              {[60, 45, 70, 55, 80].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-primary" style={{ height: `${h}%` }} />
              ))}
            </div>
          </StatCard>
          <StatCard title="Monthly Revenue (MRR)" value="$84.2k" change="~8.4%" positive>
            <div className="w-full h-1.5 bg-muted rounded-full">
              <div className="w-4/5 h-full bg-primary rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-card border-2 border-primary" />
              </div>
            </div>
          </StatCard>
          <StatCard title="Retention Rate" value="96.2%" icon={<Star className="w-5 h-5 text-chart-secondary" />}>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>vs <span className="font-medium text-foreground">94.8%</span></span>
              <span>last year</span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <span>90%</span>
              <span className="flex-1 text-center">95%</span>
              <span className="text-primary font-bold">100%</span>
            </div>
          </StatCard>
          <StatCard title="Trial Conversion" value="42.5%" change="~2%" positive={false} icon={<CheckSquare className="w-5 h-5 text-muted-foreground/40" />}>
            <div className="flex items-end gap-1 h-8">
              {[50, 65, 40, 55, 70, 45, 60].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-muted" style={{ height: `${h}%` }} />
              ))}
            </div>
          </StatCard>
        </div>

        {/* Enrollment + Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <EnrollmentChart />
          </div>
          <PopularPrograms />
        </div>

        {/* Peak Booking + Revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <PeakBookingHours />
          </div>
          <RevenueStreams />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <NeighborhoodReach />
          <NewCampusCard />
          <StaffPerformance />
        </div>
      </main>
    </div>
  );
};

export default Index;
