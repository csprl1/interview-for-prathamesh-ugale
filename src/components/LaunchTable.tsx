// import { Launch } from "../types/Launch";
// import Badge from '../components/Badge';

// interface Props {
//   launches: Launch[];
// }

// export default function LaunchTable({ launches }: { launches: Launch[] }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md w-full max-w-screen-2xl mx-auto px-8 py-6">
//       <table className="min-w-full text-sm text-left border-separate border-spacing-y-3">
//         <thead className="ttext-xs font-medium text-gray-500 uppercase">
//           <tr>
//             <th className="px-4 py-3">No:</th>
//             <th className="px-4 py-3">Launched (UTC)</th>
//             <th className="px-4 py-3">Location</th>
//             <th className="px-4 py-3">Mission</th>
//             <th className="px-4 py-3">Orbit</th>
//             <th className="px-4 py-3">Launch Status</th>
//             <th className="px-4 py-3">Rocket</th>
//           </tr>
//         </thead>
//         <tbody>
//           {launches.map((launch, index) => (
//             <tr key={launch.id} className="bg-white rounded shadow-sm border border-gray-100">
//               <td className="px-4 py-3">{String(index + 1).padStart(2, "0")}</td>
//               <td className="px-4 py-3">{new Date(launch.date_utc).toLocaleString()}</td>
//               <td className="px-4 py-3">{launch.launchpad_name}</td>
//               <td className="px-4 py-3">{launch.name}</td>
//               <td className="px-4 py-3">{launch.orbit || "LEO"}</td>
//               <td className="px-4 py-3">
//                 <Badge status={launch.success ? "Success" : launch.upcoming ? "Upcoming" : "Failed"} />
//               </td>
//               <td className="px-4 py-3">{launch.rocket_name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { Launch } from "../types/Launch";
import Badge from "../components/Badge";
import { useState } from "react";

interface Props {
  launches: Launch[];
  onRowClick: (launch: Launch) => void;
}

export default function LaunchTable({ launches , onRowClick }: Props) {
  const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);

  const handleRowClick = (launch: Launch) => {
    setSelectedLaunch(launch);
    // You can open a modal here using selectedLaunch
  };

  return (
    <div className="launch-table-container">
      <table className="launch-table w-full text-sm text-left">
        <thead className="bg-gray border-b-2 border-gray-200 uppercase">
          <tr>
            <th className="px-4 py-3">No:</th>
            <th className="px-4 py-3">Launched (UTC)</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Mission</th>
            <th className="px-4 py-3">Orbit</th>
            <th className="px-4 py-3">Launch Status</th>
            <th className="px-4 py-3">Rocket</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch, index) => (
            <tr
              key={launch.id}
              onClick={() => onRowClick(launch)}
              className="hover:bg-gray-50 border-b cursor-pointer"
            >
              <td className="px-4 py-3">{String(index + 1).padStart(2, "0")}</td>
              <td className="px-4 py-3">
                {new Date(launch.date_utc).toLocaleString()}
              </td>
              <td className="px-4 py-3">{launch.launchpad_name}</td>
              <td className="px-4 py-3">{launch.name}</td>
              <td className="px-4 py-3">{launch.orbit || "LEO"}</td>
              <td className="px-4 py-3">
                <span
                  className={`launch-badge ${
                    launch.success
                      ? "badge-success"
                      : launch.upcoming
                      ? "badge-upcoming"
                      : "badge-failed"
                  }`}
                >
                  {launch.success
                    ? "Success"
                    : launch.upcoming
                    ? "Upcoming"
                    : "Failed"}
                </span>
              </td>
              <td className="px-4 py-3">{launch.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="table-pagination mt-6 flex justify-end pr-4">
        <div className="flex items-center space-x-1 text-gray-700 text-sm">
          <button className="px-3 py-1 rounded border">{"<"}</button>
          <button className="px-3 py-1 rounded border bg-gray-100 font-semibold">
            1
          </button>
          <button className="px-3 py-1 rounded border">2</button>
          <span className="px-2 py-1">...</span>
          <button className="px-3 py-1 rounded border">10</button>
          <button className="px-3 py-1 rounded border">{">"}</button>
        </div>
      </div>

      {/* Modal placeholder */}
      {selectedLaunch && (
        <div className="modal">
          {/* You can pass selectedLaunch to a Modal component */}
        </div>
      )}
    </div>
  );
}

