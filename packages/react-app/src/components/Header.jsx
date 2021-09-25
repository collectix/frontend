import { PageHeader } from "antd";
import React from "react";
import Logo from "../img/Logo1.png";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <img src={Logo} style={{ display: "inline", marginLeft: 0 }} />
    </a>
  );
}
