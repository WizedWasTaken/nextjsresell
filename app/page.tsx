import "@/app/ui/styles/globals.scss";
import RecentCalls from "@/app/ui/components/Dashboard/RecentCalls";
import Map from "@/app/ui/components/Dashboard/Map";

export default function Page() {
  return (
    <div className="w-full h-full flex">
      <div className="w-1/2">
        <h2>Users</h2>
        <RecentCalls />
      </div>
      <div className="w-1/2">
        <h2>Map</h2>
        <Map />
      </div>
    </div>
  );
}
