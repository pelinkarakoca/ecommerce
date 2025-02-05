import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/ui/loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}

export default App;
