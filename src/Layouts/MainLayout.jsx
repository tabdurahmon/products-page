import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
