// import React from "react";
// import { Iconly } from "react-iconly";
// import { useLocation } from "react-router";
// import { Link, NavLink } from "react-router-dom";

// type NavLinkProps = {
//   to: string;
//   // children: React.ReactNode;
//   iconName?: string;
// };

// const NavLinks = ({ to, iconName }: NavLinkProps) => {
//   let location = useLocation();
//   let isActive = location.pathname === to;
//   let className = isActive ? "nav-link -active" : "nav-link";

//   //   console.log(location.pathname, to, isActive, className);

//   return (
//     <NavLink
//       to={to}
//       className={className}
//       children={({ isActive }) => (isActive ? "activeStyle" : "undefined")}
//     >
//       {/* {iconName && (
//         <Iconly name={iconName} set={isActive ? "bold" : undefined} />
//       )} */}
//       {/* {children} */}
//     </NavLink>
//   );
// };

// export default NavLink;
export {};
