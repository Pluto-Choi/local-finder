import { Suspense } from "react";
import RegionExplorer from "./components/RegionExplorer";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <RegionExplorer />
      </Suspense>
    </div>
  );
}
