import React, { useState } from "react";
import avatar1 from "/avatar.jpg";
import ChatBoxNavbar from "./ChatBoxNavbar";
import InputChatBar from "./InputChatBar";
import ChatBubble from "./ChatBubble";
import ProfileInfoPopup from "../popups/ProfileInfoPopup";

const ChatRoomBox: React.FC = () => {
    const [isProfileInfoOpen, setIsProfileInfoOpen] = useState<boolean>(false);


    return (
        // bg - white dark: bg - neutral - 800  overflow - y - scroll overflow - x - hidden max - h - screen w - full
        <div className="fixed top-0 bottom-0 xl:w-[calc(100%-30%)] lg:w-[calc(100%-31%)] bg-white dark:bg-neutral-800 h-full w-full">

            {/* Chatbox Navbar */}
            {/* fixed top-0 right-0 left-96 ml-10 z-10 w-[71%] */}
            <div className="w-full p-1">
                <div
                    className="cursor-pointer"
                    onClick={() => setIsProfileInfoOpen((prev) => !prev)}>
                    <ChatBoxNavbar />
                </div>

                {/* profile info. popup */}
                <ProfileInfoPopup
                    isProfileInfoOpen={isProfileInfoOpen}
                // setIsProfileInfoOpen={setIsProfileInfoOpen}
                />
            </div>





            {/* Chat body */}
            <div className="p-6 pt-3 pb-40 max-h-screen overflow-y-auto">
                {/* Chat bubble */}
                {/* receiver chat */}
                <ChatBubble
                    chatType="text"
                    avatar={avatar1}
                    senderName="Amir"
                    message="Hi, I hope you will be in a great form of your health"
                    status="Delivered"
                    timestamp="12:00"

                />

                {/* sender chat */}
                <ChatBubble
                    chatType="text"
                    avatar={avatar1}
                    senderName="Ihtesham"
                    message="Hi, I hope you will be in a great form of your health"
                    status="Delivered"
                    timestamp="12:00"
                    isSentByMe={true}

                />

                {/* receiver image */}
                <ChatBubble
                    chatType="image"
                    avatar={avatar1}
                    senderName="Ihtesham"
                    imageUrl={avatar1}
                    status="Delivered"
                    timestamp="01:00"
                    message="Hi "

                />


                {/* sender image */}
                <ChatBubble
                    chatType="image"
                    avatar={avatar1}
                    senderName="Ihtesham"
                    imageUrl={avatar1}
                    status="Delivered"
                    timestamp="01:00"
                    message="Hi "
                    isSentByMe={true}

                />



                {/* receiver gallery */}
                <ChatBubble
                    chatType="gallery"
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="This is new office pictures"
                    images={[avatar1, avatar1, avatar1, avatar1]}
                    timestamp="11:46"
                    status="Delivered"

                />

                {/* sender gallery */}
                <ChatBubble
                    chatType="gallery"
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="This is new office pictures"
                    images={[avatar1, avatar1, avatar1, avatar1]}
                    isSentByMe={true}
                    timestamp="11:46"
                    status="Delivered"

                />

                {/* receiver file */}
                <ChatBubble
                    chatType="file"
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    fileName="Flowbite Terms & conditions."
                    pages={12}
                    fileSize="18"
                    fileType="PDF"
                    timestamp="11:46"
                    status="Delivered"
                />


                {/* sender chat */}
                <ChatBubble
                    chatType="file"
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    fileName="Flowbite Terms & conditions."
                    pages={12}
                    fileSize="18"
                    fileType="PDF"
                    isSentByMe={true}
                    timestamp="11:46"
                    status="Delivered"
                />
                {/* Chat Body ends */}
            </div>
            {/* Chat body ends */}


            <InputChatBar />
            {/* Chatroom  ends */}
        </div>
    );
};

export default ChatRoomBox
