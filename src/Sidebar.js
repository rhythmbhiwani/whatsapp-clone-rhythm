import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db, { auth } from "./firebase";
import Popup from "reactjs-popup";
import { useStateValue } from "./StateProvider";
import "reactjs-popup/dist/index.css";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    const unsubcsribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubcsribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <Popup
            position="bottom right"
            contentStyle={{ width: "fit-content" }}
            trigger={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
            arrow={false}
          >
            <div className="menu">
              <div className="menu-item">
                <Button style={{ width: "150px" }}>New group</Button>
              </div>
              <div className="menu-item">
                <Button style={{ width: "150px" }}>Profile</Button>
              </div>
              <div className="menu-item">
                <Button style={{ width: "150px" }}>Archived</Button>
              </div>
              <div className="menu-item">
                <Button style={{ width: "150px" }}>Starred</Button>
              </div>
              <div className="menu-item">
                <Button style={{ width: "150px" }}>Settings</Button>
              </div>
              <div className="menu-item">
                <Button
                  style={{ width: "150px" }}
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
