import { Navigation } from "./components/navigation/navigation";
import { PropertySelection } from "./components/property-selection/property-selection";
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navigation />
      <PropertySelection />
    </main>
  );
}
