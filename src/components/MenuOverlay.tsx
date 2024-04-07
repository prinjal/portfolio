import React from "react";
import NavLink from "./NavLink";
import { LinkProps } from "react-router-dom";

interface Props {
  links: { to: string; title: string }[];
}

const MenuOverlay = ({ links }: Props) => {
  return (
    <ul className="flex flex-col py-2 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.to} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
