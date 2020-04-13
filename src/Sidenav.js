import React from "react";
import { SideNavItem, SideNav } from "react-materialize";
import man_img from "./img/man.jpg";

const SideNavMe = () => {
  return (
    <div className="container">
      <style>
        {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
      </style>
      <SideNav
        id="SideNav-10"
        options={{
          draggable: true,
        }}
        trigger={
          <a href="#" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        }
      >
        <SideNavItem
          user={{
            background: "https://placeimg.com/640/480/tech",
            email: "jdandturk@gmail.com",
            name: "John Doe",
          }}
          userView
        />
        <SideNavItem>Photo's</SideNavItem>
        <SideNavItem href="#!second">Services</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Page's Info</SideNavItem>
        <SideNavItem href="#!third" waves>
          Contact
        </SideNavItem>
      </SideNav>
    </div>
  );
};
export default SideNavMe;
