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
                <div className="flex items-start gap-2.5 mb-4">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={avatar1}
                        alt=""
                    />
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col w-full max-w-[326px] leading-4 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-blue-400">Bonnie Green</span>
                                <span className="text-sm font-thin text-gray-500 dark:text-gray-400">11:46</span>
                            </div>
                            <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
                                <div className="me-2">
                                    <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                                        <svg fill="none" aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                                            <g clip-path="url(#clip0_3173_1381)">
                                                <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z" />
                                                <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z" />
                                                <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z" />
                                                <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z" />
                                                <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z" />
                                                <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3173_1381">
                                                    <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Flowbite Terms & conditions.
                                    </span>
                                    <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                                        12 pages
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                                        </svg>
                                        18 MB
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                                        </svg>
                                        PDF
                                    </span>
                                </div>
                                <div className="inline-flex self-center items-center">
                                    <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus-within:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button">
                                        <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                    </div>
                </div>
                {/* File attachment receiver */}



                {/* File attachment sender*/}
                <div className="flex items-start justify-end flex-nowrap gap-2.5">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={avatar1}
                        alt=""
                    />
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col w-full max-w-[326px] leading-4 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-green-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-blue-400">Bonnie Green</span>
                                <span className="text-sm font-thin text-gray-500 dark:text-gray-400">11:46</span>
                            </div>
                            <div className="flex items-start my-2.5 bg-gray-50 dark:bg-green-900/75 rounded-xl p-2 shadow-xl">
                                <div className="me-2">
                                    <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                                        <svg fill="none" aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                                            <g clip-path="url(#clip0_3173_1381)">
                                                <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z" />
                                                <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z" />
                                                <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z" />
                                                <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z" />
                                                <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z" />
                                                <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3173_1381">
                                                    <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Flowbite Terms & conditions.
                                    </span>
                                    <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                                        12 pages
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                                        </svg>
                                        18 MB
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                                        </svg>
                                        PDF
                                    </span>
                                </div>
                                <div className="inline-flex self-center items-center">
                                    <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus-within:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600" type="button">
                                        <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                    </div>
                </div>
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
