import React, { useState, useEffect } from "react";
import ChatProfileList from "../components/chat/ChatProfileList"
import { Outlet, useMatch } from "react-router";
import ParentNewChatPopup from "../components/popups/ParentNewChatPopup";
import ChildNewGroupPopup from "../components/popups/ChildNewGroupPopup";
import { EditChatIcon } from "../components/icons/EditChatIcon";
import { ChatFilterIcon } from "../components/icons/ChatFilterIcon";
import SearchIcon from "../components/icons/SearchIcon";
import { IUser } from "../interfaces/Users";
import { profiles } from "../seeds/Profiles";



const ChatPage: React.FC = () => {
    const [isNewChatAndGroup, setIsNewChatAndGroup] = useState<string>('')
    const [newGroupOpen, setNewGroupOpen] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    // const popupRef = useRef<HTMLDivElement>(null);

    const [profilesData, setProfileData] = useState<IUser[]>([...profiles]);
    const [selectedUsers, setSelectedUsers] = useState<IUser[]>([])


    const isHomePage = useMatch("/")
    // console.log(`isHomePage:`, isHomePage);


    const toggleNewChat = () => {
        if (isNewChatAndGroup === 'newChat') {
            setIsNewChatAndGroup('')
            console.log("if block isNewChatAndGroup set to ''");

        } else if (isNewChatAndGroup === 'newGroup') {
            setIsNewChatAndGroup('')
            console.log("else if block isNewChatAndGroup set to 'newChat'");

        } else {
            setIsNewChatAndGroup('newChat')
            console.log("else block isNewChatAndGroup set to 'newChat'");
        }
        // setIsNewChatAndGroup(prev => prev === 'newChat' ? '' : 'newChat');
    };


    const handleUserCheck = (checkedUser: IUser) => {
        setSelectedUsers((prevSelectedUser) => prevSelectedUser.includes(checkedUser) ? prevSelectedUser.filter((user) => user != checkedUser) : [...prevSelectedUser, checkedUser]
        );
    };


    const handleUserRemove = (removingUser: IUser) => {
        setSelectedUsers((prevSelectedUsers) => prevSelectedUsers.filter((user) => user.name != removingUser.name)
        );
    };


    useEffect(() => {
        console.log('setIsNewChatAndGroup is:', isNewChatAndGroup);
        console.log('selectedUser array is:', selectedUsers);
    }, [isNewChatAndGroup, selectedUsers])

    useEffect(() => {
        console.log('profilesData is:', profilesData);
        // setProfileData(profiles)
    }, [profilesData])


    return (
        <>
            <div className={`fixed top-0 left-0 bottom-0 z-10 xl:flex flex-col justify-between hidden bg-neutral-900`}>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center space-x-2 cursor-pointer hover:dark:bg-gray-800 hover:rounded-lg py-2 px-2 mx-2"
                        onClick={() => setIsOpen((prev) => !prev)}>
                        {/* bars three */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        {/* <p className={`${isOpen ? 'block' : 'hidden'}`}>open navigation</p> */}
                    </div >

                    <div className="flex justify-start items-center space-x-2 cursor-pointer hover:dark:bg-gray-800 hover:rounded-lg py-2 px-2 mx-2">
                        {/* chat icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>
                        <p className={`${isOpen ? 'block' : 'hidden'}`}>Chats</p>
                    </div>


                    <div className="flex justify-start items-center space-x-2 cursor-pointer hover:dark:bg-gray-800 hover:rounded-lg py-2 px-2 mx-2">
                        {/* phone icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <p className={`${isOpen ? 'block' : 'hidden'}`}>Calls</p>
                    </div>



                </div >

                <div className="flex flex-col">
                    <div className="flex justify-start items-center space-x-2 cursor-pointer hover:dark:bg-gray-800 hover:rounded-lg py-2 px-2 mx-2">
                        {/* starred */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p className={`${isOpen ? 'block' : 'hidden'}`}>starred messages</p>
                    </div>
                    <div className="flex justify-start items-center space-x-2 cursor-pointer hover:dark:bg-gray-800 hover:rounded-lg py-2 px-2 mx-2">
                        {/* archive chats */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <p className={`${isOpen ? 'block' : 'hidden'}`}>Archived messages</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 cursor-pointer hover:dark:bg-gray-800 hover:rounded-lg py-2 px-2 mx-2">
                        {/* setting icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p className={`${isOpen ? 'block' : 'hidden'}`}>Settings</p>
                    </div>
                </div>
            </div >
            <aside className={`fixed top-0 bottom-0 xl:ml-12 ml-0 xl:w-[25%] lg:w-[30%] ${isHomePage ? 'w-[100%]' : 'lg:block hidden'} bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white mt-2`}>
                {/* ChatProfileList Navbar */}
                <div className="flex justify-between items-center p-3 bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white">
                    <h1 className="font-bold text-xl">Chats</h1>
                    <div className="flex">
                        {/* new chats/new groups icon */}
                        <div className="relative">
                            {/* new chats/new groups icon */}
                            <div
                                // onClick={toggleNewChatAndGroup}
                                onClick={() => toggleNewChat()}
                                className="cursor-pointer"
                            >
                                <EditChatIcon />

                            </div>


                            <ParentNewChatPopup
                                isNewChatAndGroup={isNewChatAndGroup}
                                setIsNewChatAndGroup={setIsNewChatAndGroup}

                            />

                            <ChildNewGroupPopup
                                selectedUsers={selectedUsers}
                                setSelectedUsers={setSelectedUsers}
                                newGroupOpen={newGroupOpen}
                                setNewGroupOpen={setNewGroupOpen}
                                isNewChatAndGroup={isNewChatAndGroup}
                                setIsNewChatAndGroup={setIsNewChatAndGroup}
                                handleUserCheck={handleUserCheck}
                                handleUserRemove={handleUserRemove}
                                profilesData={profilesData}
                                setProfilesData={setProfileData}
                            />
                        </div>
                        {/* chat filter icon */}
                        <ChatFilterIcon />
                    </div>
                </div>
                <div className="flex items-center bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 p-0 rounded-md w-[95%] mx-auto border border-neutral-100 border-b-green-500 border-b-4 dark:border-neutral-700 dark:border-b-green-500">
                    <SearchIcon />
                    <input
                        className="bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 py-1 px-2 rounded-md w-full placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none"
                        placeholder="Search or start a new chat"
                        type="search"
                        name="search"
                    />
                </div>
                <ChatProfileList profilesData={profilesData} />
            </aside >

            <div className={`md:flex xl:ml-[29%] lg:ml-[30%]  ${isHomePage ? 'hidden' : ''} items-center justify-center h-screen bg-white text-neutral-700 dark:bg-neutral-800 dark:text-white`}>
                <Outlet />
            </div>
        </>
    );
};

export default ChatPage

