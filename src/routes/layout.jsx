import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="relative">
      {/* Outlet will inject elements based on their path */}
      <Outlet />
    </div>
  );
}

export default Layout;
