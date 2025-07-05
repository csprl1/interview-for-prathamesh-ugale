export interface Launch {
    id: string;
    name: string;
    date_utc: string;
    success: boolean;
    upcoming: boolean;
    rocket_name: string;
    launchpad_name: string;
    orbit: string;
    patch_image?: string; // ✅ Add this
    wikipedia?: string;
    details?: string;
    flight_number?: number;
    rocket_type?: string;
    manufacturer?: string;
    nationality?: string;
    payload_type?: string;
  }
  