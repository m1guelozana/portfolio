import React from "react";
import NavLink from "./nav-link";

interface NavLink {
  href: string;
  title: string;
}

interface MobileNavLinksProps {
  links: NavLink[];
}

const MenuOverlay: React.FC<MobileNavLinksProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py- items-center">
      {links.map((link, index) => (
        <li key={index}>
        <NavLink href={link.href} title={link.title}/>
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;