import HeaderDefault from "../components/partials/HeaderDefault";
import FooterDefault from "../components/partials/FooterDefault";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <HeaderDefault />
      <div className="md:mx-20 mx-2 mb-6">
        <Outlet />
      </div>
      <FooterDefault />
    </div>
  );
}
