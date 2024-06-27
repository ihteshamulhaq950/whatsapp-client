import React from 'react';
import { users } from '../../seeds/Users';


interface ParentNewChatPopupProps {
    isNewChatAndGroup: string;
    setIsNewChatAndGroup: React.Dispatch<React.SetStateAction<string>>;
}

const ParentNewChatPopup: React.FC<ParentNewChatPopupProps> = ({ isNewChatAndGroup, setIsNewChatAndGroup }) => {
    return (
        <div
            className={`absolute top-8 right-0 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-md shadow-lg p-4 w-64 h-[480px] overflow-y-auto ${isNewChatAndGroup === 'newChat' ? 'block' : 'hidden'}`}
        >
            <h1 className="text-lg font-semibold mb-4">New Chats</h1>
            <div className="flex items-start space-x-3 mb-2 py-3 px-3 hover:bg-neutral-700 hover:rounded-lg cursor-pointer"
                onClick={() =>
                    setIsNewChatAndGroup('newGroup')
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 ring-4 ring-neutral-500 rounded-full inline-flex justify-center items-center p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <p className="text-normal md:font-semibold font-medium text-neutral-800 dark:text-white ">New Group</p>
            </div>

            <h3 className="text-md font-semibold text-neutral-700 dark:text-white p-3 -mb-2">Frequently Contacted</h3>
            <div>
                {users.map((user) => (
                    <div key={user.id} className="flex items-start space-x-3 mb-2 py-3 px-3 hover:bg-neutral-700 hover:rounded-lg cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 ring-4 ring-neutral-500 rounded-full inline-flex justify-center items-center p-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <p className="text-normal md:font-semibold font-medium text-neutral-800 dark:text-white ">{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ParentNewChatPopup
