import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  AccountCircleRounded,
  CameraAlt,
  Photo,
  InsertDriveFile,
  Videocam,
} from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import firebase from "firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [nameColor, setNameColor] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const { roomId } = useParams();
  const downRef = useRef(null);
  const colorsCollection = [
    "#1b262c",
    "#c02739",
    "#30475e",
    "#0f3460",
    "#e43f5a",
    "#202060",
    "#ed6363",
    "#a0204c",
    "#a64942",
    "#ed8d8d",
  ];

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const scrollToBottom = () => {
    downRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setNameColor(
      colorsCollection[Math.floor(Math.random() * colorsCollection.length)]
    );
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data()?.name);
          db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => {
              setMessages(snapshot.docs.map((doc) => doc.data()));
              scrollToBottom();
            });
        });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(roomId);
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() != "") {
      db.collection("rooms").doc(roomId).collection("messages").add({
        name: user.displayName,
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
      });
    }
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          {messages.length > 0 && (
            <p>
              Last seen at{" "}
              {new Date(
                messages[messages.length - 1]?.timestamp?.toDate()
              ).toUTCString()}
            </p>
          )}
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
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
                <Button>Contact info</Button>
              </div>
              <div className="menu-item">
                <Button>Select messages</Button>
              </div>
              <div className="menu-item">
                <Button>Mute notifications</Button>
              </div>
              <div className="menu-item">
                <Button>Clear messages</Button>
              </div>
              <div className="menu-item">
                <Button>Delete Chat</Button>
              </div>
            </div>
          </Popup>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            key={message.timestamp?.toString() + message.name}
            className={`chat__message ${
              message.email == user.email && "chat__reciever"
            }`}
          >
            <span style={{ color: nameColor }} className="chat__name">
              {message.name}
            </span>
            <span className="chat__mainMessage">{message.message}</span>
            <span className="chat__timestamp">
              {formatAMPM(new Date(message.timestamp?.toDate()))}
            </span>
          </p>
        ))}
        <div ref={downRef}></div>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <Popup
          position="top center"
          contentStyle={{
            width: "fit-content",
            backgroundColor: "transparent",
            padding: "0px",
            border: "none",
            boxShadow: "none",
          }}
          trigger={
            <IconButton>
              <AttachFile />
            </IconButton>
          }
          arrow={false}
        >
          <div className="menu">
            <div className="menu-item">
              <IconButton>
                <Videocam
                  style={{
                    background: "rgb(64,121,236)",
                    background:
                      "linear-gradient(180deg, rgba(64,121,236,1) 50%, rgba(57,108,211,1) 50%)",
                    fill: "white",
                    padding: "15px",
                    borderRadius: "100%",
                  }}
                />
              </IconButton>
            </div>
            <div className="menu-item">
              <IconButton>
                <AccountCircleRounded
                  style={{
                    background: "rgb(7,149,220)",
                    background:
                      "linear-gradient(180deg, rgba(7,149,220,1) 50%, rgba(14,171,244,1) 50%)",
                    fill: "white",
                    padding: "15px",
                    borderRadius: "100%",
                  }}
                />
              </IconButton>
            </div>
            <div className="menu-item">
              <IconButton>
                <InsertDriveFile
                  style={{
                    background: "rgb(81,87,174)",
                    background:
                      "linear-gradient(180deg, rgba(81,87,174,1) 50%, rgba(95,102,205,1) 50%)",
                    fill: "white",
                    padding: "15px",
                    borderRadius: "100%",
                  }}
                />
              </IconButton>
            </div>
            <div className="menu-item">
              <IconButton>
                <CameraAlt
                  style={{
                    background: "rgb(211,57,109)",
                    background:
                      "linear-gradient(180deg, rgba(211,57,109,1) 50%, rgba(236,64,122,1) 50%)",
                    fill: "white",
                    padding: "15px",
                    borderRadius: "100%",
                  }}
                />
              </IconButton>
            </div>
            <div className="menu-item">
              <IconButton>
                <Photo
                  style={{
                    background: "rgb(172,68,207)",
                    background:
                      "linear-gradient(180deg, rgba(172,68,207,1) 50%, rgba(191,89,207,1) 50%)",
                    fill: "white",
                    padding: "15px",
                    borderRadius: "100%",
                  }}
                />
              </IconButton>
            </div>
          </div>
        </Popup>
        <form>
          <input
            rows="1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Submit
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
