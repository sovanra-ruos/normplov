'use client';

import { useState, useEffect } from 'react';
import { DynamicChatComponent } from '@/components/ui/chat/DynamicChatComponent';
import { AppSidebar } from '@/components/ui/app-sidebar';

type Message = {
  id: number;
  variant: 'received' | 'sent';
  avatar: string | null;
  message: string;
};

export default function ChatApp() {
  const [chatData, setChatData] = useState<{ [key: number]: Message[] }>({});
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [nextChatId, setNextChatId] = useState(1); // Tracks the ID for the next new chat

  // Auto-create a new chat on first visit
  useEffect(() => {
    if (Object.keys(chatData).length === 0) {
      createNewChat();
    }
  }, []);

  // Function to create a new chat
  const createNewChat = () => {
    const newChatId = nextChatId;
    setChatData((prevData) => ({
      ...prevData,
      [newChatId]: [
        {
          id: Date.now(),
          variant: 'received',
          avatar: '/chat/ai.png',
          message: `Welcome to Chat ${newChatId}! How can I assist you today?`,
        },
      ],
    }));
    setSelectedChatId(newChatId); // Auto-select the new chat
    setNextChatId((prevId) => prevId + 1); // Increment the next chat ID
  };

  // Function to update messages for a specific chat
  const updateMessages = (chatId: number, newMessage: Message) => {
    setChatData((prevData) => ({
      ...prevData,
      [chatId]: [...(prevData[chatId] || []), newMessage],
    }));
  };

  return (
    <div >
      {/* Sidebar */}
      <AppSidebar
        chatData={chatData}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
      />

      {/* Chat Content */}
      <div >
        {selectedChatId ? (
          <DynamicChatComponent
            messages={chatData[selectedChatId] || []}
            updateMessages={(newMessage) => updateMessages(selectedChatId, newMessage)}
          />
        ) : (
          <p>Please select a chat from the sidebar.</p>
        )}
      </div>

    </div>

  );
}
