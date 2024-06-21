import React from 'react';


interface VoiceChatProps {
    avatar: string;
    senderName: string;
    duration: string;
    timestamp: string;
    status: string;
    isSentByMe?: boolean;
    audioFile?: string;
}

const VoiceChatBubble: React.FC<VoiceChatProps> = ({
    avatar,
    senderName,
    duration,
    timestamp,
    status,
    isSentByMe = false,
    audioFile

}) => {
    const bubbleAlignment = isSentByMe ? "justify-end" : "justify-start";
    const bubbleStyle = isSentByMe
        ? 'rounded-es-xl rounded-e-sxl bg-green-800 dark:bg-green-900 text-white'
        : 'rounded-es-xl rounded-e-xl border-gray-200 bg-neutral-700 dark:bg-neutral-900/70 text-white';

    return (
        <div className={`flex items-start gap-2.5 mb-4 ${bubbleAlignment}`}>
            <img className="w-8 h-8 rounded-full" src={avatar} alt={`${senderName}'s avatar`} />
            <div className={`flex flex-col w-full max-w-[320px] leading-4 ps-2 ${bubbleStyle} p-1`}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-blue-400">{senderName}</span>
                    <span className="text-xs font-thin text-neutral-200">{timestamp}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse p-2">
                    <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
                        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                            <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </button>
                    <svg aria-hidden="true" className="w-[145px] md:w-[185px] md:h-[40px]" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" className="dark:fill-white" />
                        <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" className="dark:fill-gray-500" />
                        <rect x="66" y="16" width="8" height="8" rx="4" fill="#1C64F2" />
                    </svg>
                    {audioFile && (
                        <audio controls className="w-full mt-2">
                            <source src={audioFile} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                    <span className="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 dark:text-white">
                        {duration}
                    </span>
                </div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{status}</span>
            </div>
        </div>
    )
}

export default VoiceChatBubble
