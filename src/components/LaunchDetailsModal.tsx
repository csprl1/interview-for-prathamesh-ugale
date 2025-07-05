import { Launch } from "../types/Launch";


interface Props {
  launch: Launch;
  onClose: () => void;
}

export default function LaunchDetailsModal({ launch, onClose }: Props) {
  if (!launch) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">×</button>

        <div className="modal-header">
          <img
            src={launch.patch_image ?? "/fallback-logo.png"}
            alt="Mission patch"
            className="modal-logo"
          />
          <div className="modal-title-block">
            <h2 className="modal-title">{launch.name}</h2>
            <p className="modal-subtitle">{launch.rocket_name}</p>
          </div>
          <span className={`status-badge ${launch.success ? "success" : launch.upcoming ? "upcoming" : "failed"}`}>
            {launch.success ? "Success" : launch.upcoming ? "Upcoming" : "Failed"}
          </span>
        </div>

        <p className="modal-description">
          {launch.details || "No details available."}{" "}
          {launch.wikipedia && (
            <a
              href={launch.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              Wikipedia
            </a>
          )}
        </p>

        <div className="modal-grid">
          <Detail label="Flight Number" value={launch.flight_number} />
          <Detail label="Mission Name" value={launch.name} />
          <Detail label="Rocket Type" value={launch.rocket_type} />
          <Detail label="Rocket Name" value={launch.rocket_name} />
          <Detail label="Manufacturer" value={launch.manufacturer} />
          <Detail label="Nationality" value={launch.nationality} />
          <Detail label="Launch Date" value={new Date(launch.date_utc).toLocaleString()} />
          <Detail label="Payload Type" value={launch.payload_type} />
          <Detail label="Orbit" value={launch.orbit} />
          <Detail label="Launch Site" value={launch.launchpad_name} />
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string | number | undefined }) {
  return (
    <>
      <div className="modal-label">{label}</div>
      <div className="modal-value">{value ?? "N/A"}</div>
    </>
  );
}
