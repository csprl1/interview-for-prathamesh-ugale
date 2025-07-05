import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filter";
import LaunchTable from "./components/LaunchTable";
import LaunchDetailsModal from "./components/LaunchDetailsModal";
import { Launch } from "./types/Launch";
import DateRangeFilter from "./components/DateRangeFilter";

export default function App() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date("2022-01-01"),
    end: new Date(),
  });

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const res = await fetch("https://api.spacexdata.com/v4/launches/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: {
              date_utc: {
                $gte: dateRange.start.toISOString(),
                $lte: dateRange.end.toISOString(),
              },
            },
            options: {
              populate: ["rocket", "launchpad", "payloads"],
              sort: { date_utc: "desc" },
              limit: 500,
            },
          }),
        });

        const json = await res.json();

        const formatted: Launch[] = json.docs.map((l: any) => ({
          id: l.id,
          name: l.name,
          date_utc: l.date_utc,
          success: l.success,
          upcoming: l.upcoming,
          failed: l.failed,
          rocket_name: l.rocket?.name || "Unknown",
          launchpad_name: l.launchpad?.name || "Unknown",
          orbit: l.payloads?.[0]?.orbit || "LEO",
          patch_image: l.links?.patch?.small ?? "",
          wikipedia: l.links?.wikipedia ?? "",
          details: l.details,
          flight_number: l.flight_number,
          rocket_type: l.rocket?.type,
          manufacturer: l.rocket?.company ?? "Unknown",
          nationality: l.payloads?.[0]?.nationalities?.[0] ?? "Unknown",
          payload_type: l.payloads?.[0]?.type ?? "Unknown",
        }));

        setLaunches(formatted);
      } catch (err) {
        console.error(" Failed to fetch launches", err);
      }
    };

    fetchLaunches();
  }, [dateRange]);

  const handleRowClick = (launch: Launch) => {
    setSelectedLaunch(launch);
  };

  const filteredLaunches = launches.filter((l) => {
    // if (statusFilter === "All") return true;
    if (statusFilter === "Success") return l.success === true;
    if (statusFilter === "Failed") return l.success != true && l.upcoming != true;
    if (statusFilter === "Upcoming") return l.upcoming === true;
    return true;
  });
//   console.log("All launches:", launches);
// console.log("Success launches:", launches.filter(l => l.success === true));
// console.log("Failed launches:", launches.filter(l => l.success === false));
// console.log("Upcoming launches:", launches.filter(l => l.upcoming === true));
// console.log("Filtered:", filteredLaunches);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <div className="content-wrapper">
        {/* <Filters /> */}

        {/* Status Filter Dropdown */}
        <div className="filters-row">
  <div className="filter-group">
    <DateRangeFilter onDateRangeChange={({ start, end }) => {
      console.log("Selected range:", start.toISOString(), end.toISOString());
    }} />
  </div>
  <div className="filter-group">
    <select
      id="launchStatus"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <option value="All">All Launches</option>
      <option value="Upcoming">Upcoming Launches</option>
      <option value="Success">Successful Launches</option>
      <option value="Failed">Failed Launches</option>
    </select>
  </div>
   {/* Table */}
   <LaunchTable launches={filteredLaunches} onRowClick={handleRowClick} />
    
</div>


        {/* Date Range Filter
        <DateRangeFilter
          onDateRangeChange={(range) => {
            if (range.start && range.end) {
              setDateRange({ start: range.start, end: range.end });
            }
          }}
        /> */}

        {/* Table
        <LaunchTable launches={filteredLaunches} onRowClick={handleRowClick} /> */}

        {/* Modal */}
        {selectedLaunch && (
          <LaunchDetailsModal
            launch={selectedLaunch}
            onClose={() => setSelectedLaunch(null)}
          />
        )}
      </div>
    </div>
  );
}
