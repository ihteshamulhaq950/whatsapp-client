import React from 'react';


interface ChatTextBubble {
    avatar: string;
    senderName: string;
    message: string;
    timestamp: string;
    status: string;
    isSentByMe?: boolean; // optional prop to distinguish between sent and received messages
}

const ChatMessageBubble: React.FC<ChatTextBubble> = ({
    avatar,
    senderName,
    message,
    status,
    timestamp,
    isSentByMe = false

}) => {

    const bubbleAlignment = isSentByMe ? "justify-end" : "justify-start";
    const bubbleStyle = isSentByMe
        ? 'rounded-es-xl rounded-e-xl bg-green-800 dark:bg-green-900 text-white'
        : 'rounded-es-xl rounded-e-xl border-gray-200 bg-neutral-700 dark:bg-neutral-900/70 text-white';

    return (
        <div className={`flex items-start gap-2.5 mb-4 ${bubbleAlignment}`}>
            <img className='w-8 h-8 rounded-full' src={avatar} alt={`${senderName}'s avatar`} />
            <div className={`flex flex-col w-full max-w-[320px] leading-4 ps-2 ${bubbleStyle} p-1`}>
                <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                    <span className='text-sm font-semibold text-blue-400'>{senderName}</span>
                    <span className='text-sm font-thin text-neutral-200'>{timestamp}</span>
                </div>
                <p className='text-sm font-normal py-2.5 dark:text-white'>{message}</p>
                <span className='text-sm font-normal text-gray-400 dark:text-gray-400'>{status}</span>
            </div>
        </div>
    )
}

export default ChatMessageBubble
