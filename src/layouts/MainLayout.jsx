import HeaderDefault from "../components/partials/HeaderDefault";
import FooterDefault from "../components/partials/FooterDefault";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div>
      <HeaderDefault />
      <Outlet />
      <FooterDefault />
    </div>
  );
}
