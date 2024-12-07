import { ArrowLeft } from "lucide-react";
import chat from "@/public/chat/chat.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@//components/ui/sidebar";
import { Button } from "./button";
import Image from "next/image";

type Message = {
    id: number; // Unique identifier for the message
    variant: 'received' | 'sent'; // Specifies if the message was sent or received
    avatar: string | null; // The avatar URL or null if there's no avatar
    message: string; // The text content of the message
  };
  

type AppSidebarProps = {
  chatData?: { [key: number]: Message[] };
  selectedChatId?: number | null;
  setSelectedChatId?: (id: number) => void;
};

export function AppSidebar({
    chatData = {}, // Default to empty object
    selectedChatId = null, // Default to null
    setSelectedChatId = () => {}, // Default to no-op
}: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem className="flex mb-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-primary bg-opacity-10 border-none hover:bg-opacity-20 hover:bg-primary rounded-full shadow-none"
                >
                  <ArrowLeft color="#0BBB8A" />
                </Button>
                <div className="flex gap-1 items-center ml-8">
                  <p className="text-lg font-semibold">Message</p>
                  <div className="w-6 h-6 flex justify-center items-center rounded-full text-xs font-normal bg-primary bg-opacity-10 text-primary">
                    {Object.keys(chatData).length}
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {Object.keys(chatData).map((chatId) => (
                <SidebarMenuItem key={chatId}>
                  <button
                    onClick={() => setSelectedChatId(Number(chatId))}
                    className={`w-full text-left ${
                      selectedChatId === Number(chatId) ? "bg-primary bg-opacity-10" : ""
                    } hover:bg-primary hover:bg-opacity-10`}
                  >
                    <div className="flex items-start gap-4 p-4 rounded-lg">
                      <Image
                        src={chat}
                        alt="chat image"
                        width={36}
                        height={36}
                        className="rounded-xl"
                      />
                      <div className="flex flex-col">
                        <span className="text-base font-semibold">{`Chat ${chatId}`}</span>
                        <span className="text-xs text-gray-400">New Message</span>
                      </div>
                    </div>
                  </button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
    
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
