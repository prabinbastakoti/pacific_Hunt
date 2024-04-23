import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="relative">
      <Outlet />
    </div>
  );
}

export default Layout;
