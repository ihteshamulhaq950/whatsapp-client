import React from "react";
import avatar1 from "/avatar.jpg";
// import audio from "/10secondaudio.mp3";


import ChatBoxNavbar from "./ChatBoxNavbar";
import InputChatBar from "./InputChatBar";
import ChatBubble from "./ChatBubble";

const ChatRoomBox: React.FC = () => {

    return (
        <div className="bg-white dark:bg-neutral-800  overflow-y-scroll overflow-x-hidden max-h-screen w-full">

            {/* Chatbox Navbar */}
            <ChatBoxNavbar />


            {/* Chat body */}
            <div className="p-6">
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
