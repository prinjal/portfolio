import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface Props {
  to: LinkProps["to"];
  title: string;
}

const NavLink = ({ to, title }: Props) => {
  return (
    <Link
      to={to}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
