import React from 'react';
import AttachmentButton from '../inputchatcomponents/AttachmentButton';
import TextArea from '../inputchatcomponents/TextArea';
import SendAirplaneButton from '../inputchatcomponents/SendAirplaneButton';

const InputChatBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 xl:w-[calc(100%-30%)] lg:w-[calc(100%-31%)] w-full right-0 bg-gray-100 dark:bg-neutral-800/95  border-t border-neutral-600 p-4 flex space-x-2 items-center mx-1 shadow-md">
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
    )
}

export default InputChatBar
