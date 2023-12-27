import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { React, useState } from "react";
import "./Chat.css";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Divij",
      timestamp: "Just now",
      received: true,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/413062748_1461747724375134_734170550344977335_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFvGYILxxhRmZqZKN7ijqapjySiuroPLJePJKK6ug8slwmWsKmdka9H8rdr2Xit-qt5cG7Ou8WNrVyDMxxO0atf&_nc_ohc=B4ppa0gBz2sAX_fDCRn&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdSfO6WeKS8xkD_00H0gRGL_gbwCIzdo0gl_vnEtuuLIQg&oe=65B3A2BE" />

        <div className="chat__headerInfo">
          <h3>Current chat</h3>
          <p>Last seen at 5:55 AM</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span
              className="chat__timestamp"
              style={{ height: "0%", width: "100%", marginRight: "-22px" }}
            >
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
