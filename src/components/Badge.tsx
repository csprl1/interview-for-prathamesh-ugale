import React from "react";

interface BadgeProps {
  status: "Success" | "Failed" | "Upcoming";
}

const badgeStyles: Record<BadgeProps["status"], string> = {
  Success: "bg-green-100 text-green-800",
  Failed: "bg-red-100 text-red-800",
  Upcoming: "bg-yellow-100 text-yellow-800",
};

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${badgeStyles[status]}`}
    >
      {status}
    </span>
  );
}
