'use client';

import { useState } from 'react';
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@//components/ui/chat/chat-bubble';
import { ChatMessageList } from '@//components/ui/chat/chat-message-list';
import { ChatInput } from '@//components/ui/chat/chat-input';
import { Send } from 'lucide-react';

type Message = {
  id: number;
  variant: 'received' | 'sent'; // Specifies if the message was sent or received
  avatar: string | null; // The avatar URL or null for no avatar
  message: string; // The text of the message
};

type DynamicChatPageProps = {
  messages: Message[]; // Array of messages for the selected chat
  updateMessages: (newMessage: Message) => void; // Function to add a new message
};

export const DynamicChatComponent = ({ messages, updateMessages }: DynamicChatPageProps) => {
  const [userInput, setUserInput] = useState('');

  // Handle form submission
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      variant: 'sent',
      avatar: null, // No avatar for the user
      message: userInput,
    };

    updateMessages(userMessage); // Add the user's message

    // Simulate a bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        variant: 'received',
        avatar: '/chat/ai.png',
        message: 'This is an automated response. How can I help you further?',
      };
      updateMessages(botMessage); // Add the bot's message
    }, 1000);

    setUserInput(''); // Clear the input field
  };

  return (
    // <div className="mx-auto px-4 py-6 w-full h-auto ">
    //   {/* Chat Messages */}
    //   {/* <div className=" overflow-y-auto">
    //     <ChatMessageList>
    //       {messages.map((msg) => (
    //         <ChatBubble key={msg.id} variant={msg.variant}>
    //           <ChatBubbleAvatar fallback="AI" src={msg.avatar ?? undefined} />
    //           <ChatBubbleMessage>{msg.message}</ChatBubbleMessage>
    //         </ChatBubble>
    //       ))}
    //     </ChatMessageList>
    //   </div> */}

    //   {/* Input Form */}
    //   {/* <div className='fixed bottom-0 w-[80%] p-6' >
    //     <form
    //       className=" relative rounded-full border bg-white focus-within:ring-1 focus-within:ring-ring p-1 flex items-center mt-4"
    //       onSubmit={handleSendMessage}
    //     >
    //       <ChatInput
    //         placeholder="Type your message here..."
    //         className="min-h-12 resize-none bg-background border-0 p-3 shadow-none flex-grow"
    //         value={userInput}
    //         onChange={(e) => setUserInput(e.target.value)}
    //       />
    //       <button
    //         type="submit"
    //         className="p-4 bg-primary rounded-full flex items-center justify-center"
    //       >
    //         <Send size={18} color="#ffffff" />
    //       </button>
    //     </form>
    //   </div> */}

    //   <div className="w-full flex flex-col">
    //     {/* Chat Messages */}
    //     <div className="flex-1 overflow-y-auto p-4 ">
    //       <ChatMessageList>
    //         {messages.map((msg) => (
    //           <ChatBubble key={msg.id} variant={msg.variant}>
    //             <ChatBubbleAvatar fallback="AI" src={msg.avatar ?? undefined} />
    //             <ChatBubbleMessage>{msg.message}</ChatBubbleMessage>
    //           </ChatBubble>
    //         ))}
    //       </ChatMessageList>
    //     </div>


    //     <form
    //       className="relative rounded-full border bg-white focus-within:ring-1 focus-within:ring-ring p-1 flex items-center mt-4"
    //       onSubmit={handleSendMessage}
    //     >
    //       <ChatInput
    //         placeholder="Type your message here..."
    //         className="min-h-12 bg-background border-0 p-3 shadow-none flex-grow"
    //         value={userInput}
    //         onChange={(e) => setUserInput(e.target.value)}
    //       />
    //       <button
    //         type="submit"
    //         className="p-4 bg-primary rounded-full flex items-center justify-center"
    //       >
    //         <Send size={18} color="#ffffff" />
    //       </button>
    //     </form>


    //   </div>

    // </div>

    // <div className="w-full h-full flex flex-col relative  ">
    //   {/* Chat Messages */}
    //   <div className="flex-grow overflow-y-auto p-4">
    //     <ChatMessageList>
    //       {messages.map((msg) => (
    //         <ChatBubble key={msg.id} variant={msg.variant}>
    //           <ChatBubbleAvatar fallback="AI" src={msg.avatar ?? undefined} />
    //           <ChatBubbleMessage>{msg.message}</ChatBubbleMessage>
    //         </ChatBubble>
    //       ))}
    //     </ChatMessageList>
    //   </div>

    //   {/* Fixed Input Form */}
    //   <form
    //     style={{ position: 'sticky', bottom: 0 }}
    //     className=" w-full bg-white border-t border-gray-300 p-4 flex items-center"
    //     onSubmit={handleSendMessage}
    //   >
    //     <ChatInput
    //       placeholder="Type your message here..."
    //       className="min-h-12 bg-background border-0 p-3 shadow-none flex-grow"
    //       value={userInput}
    //       onChange={(e) => setUserInput(e.target.value)}
    //     />
    //     <button
    //       type="submit"
    //       className="p-4 bg-primary rounded-full flex items-center justify-center"
    //     >
    //       <Send size={18} color="#ffffff" />
    //     </button>
    //   </form>
    // </div>


    <div className="flex flex-col h-screen">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 ">
        <ChatMessageList>
          {messages.map((msg) => (
            <ChatBubble key={msg.id} variant={msg.variant}>
              <ChatBubbleAvatar fallback="AI" src={msg.avatar ?? undefined} />
              <ChatBubbleMessage>{msg.message}</ChatBubbleMessage>
            </ChatBubble>
          ))}
        </ChatMessageList>
      </div>

      {/* Input Form */}
      <form
        className="w-full bg-white  p-4 flex items-center sticky bottom-0"
        onSubmit={handleSendMessage}
      >
        <div className="flex items-center w-full bg-white rounded-full p-2 shadow-sm border">
          <ChatInput
            placeholder="Type your message here..."
            className="min-h-12 resize-none bg-transparent border-0 p-3 shadow-none flex-grow outline-none rounded-full"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-primary text-white rounded-full flex items-center justify-center ml-2 hover:bg-primary-dark transition"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>

  );
}
