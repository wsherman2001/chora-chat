// src/Layout.jsx
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./Layout.css";
import { useChannelMessages } from "./state/channelMessages";
import Chat from "./Chat";

const Layout = () => {
  const { channelName } = useParams();
  const { messages, sendMessage } = useChannelMessages(channelName);

  const channels = ["general", "memes", "support"];

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Channels</h2>
        <ul>
          {channels.map((channel) => (
            <li key={channel}>
              <Link to={`/${channel}`} className="block py-2 hover:underline">
                #{channel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-3/4 p-4">
        <Chat messages={messages} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Layout;
