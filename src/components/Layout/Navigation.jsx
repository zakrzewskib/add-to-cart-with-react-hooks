import React from "react";
import Cart from "../Cart/Cart";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>star</li>
        <li>message</li>
        <li>bell</li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
