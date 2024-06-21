import React from "react";
import avatar1 from "/avatar.jpg";
import audio from "/10secondaudio.mp3";


import TextArea from "./TextArea";
import SendAirplaneButton from "../SendAirplaneButton";
import AttachmentButton from "../AttachmentButton";

import ChatMessageBubble from "./ChatMessageBubble";
import VoiceChatBubble from "./VoiceChatBubble";
import ImageChatBubble from "./ImageChatBubble";
import GalleryChatBubble from "../GalleryChatBubble";
import FileAttachmentChat from "./FileAttachmentChat";

const ChatRoomBox: React.FC = () => {

    return (
        <div className="bg-white dark:bg-neutral-800  overflow-y-scroll overflow-x-hidden max-h-screen w-full">

            {/* Chatbox Navbar */}

            <div className="sticky top-0 left-0 z-10 bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 w-full py-3 ps-5 pe-8 flex items-center justify-between space-x-2 border-b border-b-neutral-500">
                <div className="flex items-start space-x-3">
                    <img
                        className="w-8 h-8 rounded-full ring-1 ring-black"
                        src={avatar1}
                        alt=""
                    />
                    <h3>Amir</h3>
                </div>

                <div className="flex space-x-3">
                    {/* Camera */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    {/* phone */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>


                    {/* Search icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>



            {/* Chat body */}
            <div className="p-6">
                {/* Chat bubble */}
                <ChatMessageBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="That's awesome. I think our users will really appreciate the improvements."
                    timestamp="11:46"
                    status="Delivered"
                />

                <ChatMessageBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="That's awesome. I think our users will really appreciate the improvements."
                    timestamp="11:46"
                    status="Delivered"
                    isSentByMe={true}
                />


                <VoiceChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    duration="3:42"
                    timestamp="11:46"
                    status="Delivered"
                />

                <VoiceChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    duration="3:42"
                    timestamp="11:46"
                    status="Delivered"
                    isSentByMe={true}

                />


                {/* Example with audio */}
                <VoiceChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    duration="3:42"
                    timestamp="11:46"
                    status="Delivered"
                    audioFile={audio}
                />


                {/* Example with audio send by me */}
                <VoiceChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    duration="3:42"
                    timestamp="11:46"
                    status="Delivered"
                    isSentByMe={true}
                    audioFile={audio}
                />


                <ImageChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="This is the new office 3"
                    imageUrl={avatar1}
                    timestamp="11:46"
                />

                <ImageChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="This is the new office 3"
                    imageUrl={avatar1}
                    timestamp="11:46"
                    isSentByMe={true}
                />


                {/* receiver Gallery image sends */}
                <GalleryChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="This is new office pictures"
                    images={[avatar1, avatar1, avatar1, avatar1]}
                    timestamp="11:46"

                />


                {/* sender Gallery image sends */}
                <GalleryChatBubble
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    message="This is new office pictures"
                    images={[avatar1, avatar1, avatar1, avatar1]}
                    isSentByMe={true}
                    timestamp="11:46"

                />



                {/* File attachment receiver*/}
                <FileAttachmentChat
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    fileName="Flowbite Terms & conditions."
                    pages={12}
                    fileSize="18"
                    fileType="PDF"
                    timestamp="11:46"
                />
                {/* File attachment receiver */}



                {/* File attachment sender*/}
                <FileAttachmentChat
                    avatar={avatar1}
                    senderName="Bonnie Green"
                    fileName="Flowbite Terms & conditions."
                    pages={12}
                    fileSize="18"
                    fileType="PDF"
                    timestamp="11:46"
                    isSentByMe={true}
                />
                {/* File attachment sender */}



                {/* Chat Body ends */}
            </div>
            {/* Chat body ends */}


            <div className="sticky bottom-0 left-0 right-0 bg-gray-100 dark:bg-neutral-800/95  border-t border-neutral-600 p-4 flex space-x-2 items-center mx-1 shadow-md">
                {/* Attachment Icon */}
                <div>
                    <AttachmentButton
                        className="p-2 rounded-full hover:bg-gray-200"
                    />
                </div>

                {/* Chat Input */}
                <TextArea
                    name="name"
                    id="name"
                    className='flex-1 resize-none outline-none py-2 px-3 focus:outline-none text-sm tracking-tighter rounded-sm dark:bg-black'
                    placeholder='Type a message...'
                />

                {/* Send Button */}
                <div>
                    <SendAirplaneButton
                        className="p-2 rounded-full"
                    />

                </div>
            </div>
            {/* Chatroom  ends */}
        </div>
    );
};

export default ChatRoomBox
