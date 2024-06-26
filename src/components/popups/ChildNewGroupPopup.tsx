import React from 'react';
import { users } from '../../seeds/Users';


interface ChildNewGroupPopupProps {
    selectedUsers: string[];
    setSelectedUsers: React.Dispatch<React.SetStateAction<string[]>>;
    newGroupOpen: boolean;
    setNewGroupOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isNewChatAndGroupOrFilter: string;
    setIsNewChatAndGroupOrFilter: React.Dispatch<React.SetStateAction<string>>;
    handleUserRemove: (data: string) => void;
    handleUserCheck: (data: string) => void;

}

const ChildNewGroupPopup: React.FC<ChildNewGroupPopupProps> = ({ selectedUsers, setSelectedUsers, newGroupOpen, setNewGroupOpen, isNewChatAndGroupOrFilter, setIsNewChatAndGroupOrFilter, handleUserRemove, handleUserCheck }) => {
    return (
        <div
            className={`absolute top-8 right-0 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-md shadow-lg p-4 w-64 h-[480px] overflow-y-auto z-10 ${isNewChatAndGroupOrFilter === 'newGroup' ? 'block' : 'hidden'}`}
        >
            <div className="flex items-center">
                <p onClick={() => setIsNewChatAndGroupOrFilter("newChat")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-flex mb-3 me-2 -ms-3 p-1 rounded-full hover:bg-neutral-700 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </p>
                <h1 className="text-lg font-semibold mb-4">Create Group</h1>
            </div>

            <div className="">
                {selectedUsers.map((user) => (

                    <div key={user} className="inline-flex items-center justify-between flex-wrap mx-2">
                        <div className="flex bg-slate-600 px-2 py-1 my-1 rounded-full">
                            <span className="text-neutral-800 dark:text-white text-sm me-2">{user}</span>
                            <button
                                className="bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                                onClick={() => handleUserRemove(user)}
                            >X</button>
                        </div>

                    </div>
                ))}

                {selectedUsers.length != 0 && (
                    <div className="flex justify-start space-x-4 my-2">
                        <button
                            type='button'
                            onClick={() => setNewGroupOpen(true)}
                            className="text-lg px-5 py-1 bg-green-700 font-thin rounded-md cursor-pointer hover:bg-green-800">Create</button>
                        <button
                            type="button"
                            onClick={() => setSelectedUsers([])}
                            className="text-lg px-5 py-1 bg-gray-300 dark:bg-gray-100 border-gray-500 dark:border-gray-800 text-neutral-800 dark:hover:bg-gray-200
                                        hover:bg-gray-400 font-thin rounded-md cursor-pointer">Cancel</button>
                    </div>
                )}
            </div>

            <h3 className="text-md font-semibold text-neutral-700 dark:text-white px-3 py-1 mb-2 border-b border-neutral-500">All contacts</h3>

            {newGroupOpen === true &&
                (
                    <div>
                        <h3>New group</h3>
                        <label
                            className="inline-flex items-center bg-neutral-100 dark:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 px-2 py-1 rounded-full cursor-pointer my-2"
                            htmlFor="groupAvatar">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>

                            <input
                                className="hidden"
                                type="file"
                                name=""
                                id="groupAvatar"
                            />
                            Upload group avatar
                        </label>

                        <div className="my-5">
                            <label
                                className="text-sm font-medium text-neutral-200" htmlFor="groupName">Provide a group name</label>
                            <input
                                className="outline-none bg-neutral-100 dark:bg-neutral-600 px-2 py-1 rounded-md my-1"
                                placeholder="Group name"
                                type="text"
                                id="groupName"
                            />
                        </div>
                    </div>
                )}

            {isNewChatAndGroupOrFilter === 'newGroup' && newGroupOpen === false && users.map((user) => (
                <label key={user.id} htmlFor={user.name}>
                    <div className="flex items-center justify-between space-x-3 mb-2 py-3 px-3 hover:bg-neutral-700 hover:rounded-lg cursor-pointer"
                        onClick={() => handleUserCheck(user.name)}
                    >
                        <div className="flex items-start space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 ring-4 ring-neutral-500 rounded-full inline-flex justify-center items-center p-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                            <p className="text-normal md:font-semibold font-medium text-neutral-800 dark:text-white flex justify-between">{user.name}
                            </p>
                        </div>
                        <input
                            className="inline-flex justify-end h-5 w-5"
                            type="checkbox"
                            readOnly
                            checked={selectedUsers.includes(user.name)}

                        />
                    </div>
                </label>
            ))}
        </div>
    )
}

export default ChildNewGroupPopup
