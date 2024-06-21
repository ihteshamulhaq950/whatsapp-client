import React from 'react'

interface IImageChatBubble {
    avatar: string;
    senderName: string;
    message: string;
    imageUrl: string;
    isSentByMe?: boolean;
    timestamp: string
}

const ImageChatBubble: React.FC<IImageChatBubble> = ({
    avatar,
    senderName,
    message,
    imageUrl,
    isSentByMe = false,
    timestamp

}) => {
    const bubbleAlignment = isSentByMe ? "justify-end" : "justify-start";
    const bubbleStyle = isSentByMe
        ? 'rounded-es-xl rounded-e-sxl bg-green-800 dark:bg-green-900 text-white'
        : 'rounded-es-xl rounded-e-xl border-gray-200 bg-neutral-700 dark:bg-neutral-900/70 text-white';

    return (
        <div className={`flex items-start gap-2.5 mb-4 ${bubbleAlignment}`}>
            <img className="w-8 h-8 rounded-full" src={avatar} alt={`${senderName} image`} />
            <div className="flex flex-col gap-1">
                <div className={`flex flex-col w-full max-w-[320px] leading-4 p-4 ${bubbleStyle} p-1`}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <span className="text-sm font-semibold text-blue-400">{senderName}</span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{timestamp}</span>
                    </div>
                    <p className="text-sm font-normal text-gray-900 dark:text-white">{message}</p>
                    <div className="group relative my-2.5">
                        <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <button className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                                <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
                                </svg>
                            </button>
                            <div className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Download image
                            </div>
                        </div>
                        <img src={imageUrl} className="rounded-lg" alt="Chat content" />
                    </div>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                </div>
            </div>
        </div>
    )
}

export default ImageChatBubble
