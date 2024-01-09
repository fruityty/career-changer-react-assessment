import React from "react";
const Navbar = () => {
  return  (
    <nav>
        <ul style = {{display:"flex", margin: 20, justifyContent: "flex-end"}}>
            <li style = {{display:"flex", margin: 20}}><a href={'/'}>Home</a></li>
            <li style = {{display:"flex", margin: 20}}><a href={'/Owner'}>Owner</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
