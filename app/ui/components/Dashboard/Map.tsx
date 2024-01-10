import Image from "next/image";
import mapImage from "@/app/ui/images/GTAV_SATELLITE_2048x2048.webp";

const Map = () => (
  <div className="w-full h-full">
    <Image
      src={mapImage}
      alt="Map"
      objectFit="cover"
      width={100}
      height={500}
    />
  </div>
);

export default Map;
