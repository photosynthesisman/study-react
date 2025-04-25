import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <Button variant="primary" size="large" onClick={handleToggle} className="toggleBtn">
        사이드 접기
      </Button>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          <NavLink to="/components">Components</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
