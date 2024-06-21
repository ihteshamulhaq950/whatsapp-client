import React from 'react';



interface IGalleryChatBubble {
    avatar: string;
    senderName: string;
    message: string;
    images: string[];
    isSentByMe?: boolean;
    timestamp: string;
}


const GalleryChatBubble: React.FC<IGalleryChatBubble> = ({
    avatar,
    senderName,
    message,
    images,
    isSentByMe = false,
    timestamp

}) => {
    const maxDisplayImages = 4;
    const additionalImagesCount = images.length - maxDisplayImages;

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
                        <span className="text-sm font-thin text-gray-500 dark:text-gray-400">{timestamp}</span>
                    </div>
                    <p className="text-sm font-normal text-gray-900 dark:text-white">{message}</p>
                    <div className="grid gap-4 grid-cols-2 my-2.5">
                        {images.slice(0, maxDisplayImages).map((image, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                    <button className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
                                        </svg>
                                    </button>
                                </div>
                                <img className="rounded-lg" src={image} alt={`Image ${index + 1}`} />
                                {index === maxDisplayImages - 1 && additionalImagesCount > 0 && (
                                    <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <span className="text-xl font-medium text-white">+{additionalImagesCount}</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryChatBubble
