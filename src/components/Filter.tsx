export default function Filters() {
  return (
    <div className="flex justify-between items-center px-6 w-full">
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-sm">📅</span>
        <span className="text-sm font-medium">Past 6 Months</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-sm">🔽</span>
        <span className="text-sm font-medium">All Launches</span>
      </div>
    </div>
  );
}
