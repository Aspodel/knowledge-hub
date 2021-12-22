import React from "react";
import { Iconly } from "react-iconly";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  iconName?: string;
};

const NavLink = ({ to, children, iconName }: NavLinkProps) => {
  let location = useLocation();
  let isActive = location.pathname === to;
  let className = isActive ? "nav-link -active" : "nav-link";

  //   console.log(location.pathname, to, isActive, className);

  return (
    <Link to={to} className={className}>
      {iconName && (
        <Iconly name={iconName} set={isActive ? "bold" : undefined} />
      )}
      {children}
    </Link>
  );
};

export default NavLink;
