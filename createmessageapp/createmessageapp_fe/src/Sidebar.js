import React from "react";
import SidebarChat from "./SidebarChat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/413062748_1461747724375134_734170550344977335_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFvGYILxxhRmZqZKN7ijqapjySiuroPLJePJKK6ug8slwmWsKmdka9H8rdr2Xit-qt5cG7Ou8WNrVyDMxxO0atf&_nc_ohc=B4ppa0gBz2sAX_fDCRn&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdSfO6WeKS8xkD_00H0gRGL_gbwCIzdo0gl_vnEtuuLIQg&oe=65B3A2BE" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
