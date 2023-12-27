import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/413062748_1461747724375134_734170550344977335_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFvGYILxxhRmZqZKN7ijqapjySiuroPLJePJKK6ug8slwmWsKmdka9H8rdr2Xit-qt5cG7Ou8WNrVyDMxxO0atf&_nc_ohc=B4ppa0gBz2sAX_fDCRn&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdSfO6WeKS8xkD_00H0gRGL_gbwCIzdo0gl_vnEtuuLIQg&oe=65B3A2BE" />
      <div className="sidebarChat__info">
        <h2>Random person</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  );
}
export default SidebarChat;
