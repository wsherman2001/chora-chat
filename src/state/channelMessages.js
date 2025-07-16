import { useState, useCallback, useEffect, useRef } from "react";

const messagesByChannelRef = {};

export function useChannelMessages(channelName) {
  const [, forceUpdate] = useState(0);
  const messagesRef = useRef([]);

  // ZAJISTÍME AKTUALIZACI PŘI ZMĚNĚ channelName
  useEffect(() => {
    if (!messagesByChannelRef[channelName]) {
      messagesByChannelRef[channelName] = [];
    }
    messagesRef.current = messagesByChannelRef[channelName];
    forceUpdate(n => n + 1); // vynucení přepočtu
  }, [channelName]);

  const sendMessage = useCallback((text) => {
    const message = { text, timestamp: Date.now() };

    if (!messagesByChannelRef[channelName]) {
      messagesByChannelRef[channelName] = [];
    }

    messagesByChannelRef[channelName].push(message);
    messagesRef.current = messagesByChannelRef[channelName];
    forceUpdate(n => n + 1);
  }, [channelName]);

  return {
    messages: messagesRef.current,
    sendMessage,
  };
}
