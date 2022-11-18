import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <div className="pa4 tc">
      <Dropdown isOpen={dropDownOpen} toggle={toggleDropDown}>
        <DropdownToggle data-toggle="dropdown" tag="span">
          <img
            src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png"
            className="br-100 ba h3 w3 dib"
            alt="avatar"
          />
        </DropdownToggle>

        <DropdownMenu
          right
          className="b--transparent shadow-5"
          container="body"
          style={{
            marginTop: "20px",
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        >
          <DropdownItem style={{ cursor: "pointer" }} onClick={toggleModal}>
            View Profile
          </DropdownItem>
          <DropdownItem
            style={{ cursor: "pointer" }}
            onClick={() => {
              onRouteChange("signout");
            }}
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileIcon;
