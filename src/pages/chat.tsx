import ChatProfileList from "../components/chat/ChatProfileList"
import { Outlet, useMatch } from "react-router";



const ChatPage = () => {
    const isHomePage = useMatch("/")
    console.log(`isHomePage:`, isHomePage);

    return (
        <>
            <aside className="fixed top-0 left-0 lg:w-[27%] md:w-[47%] w-[100%] h-screen bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white">
                <div className="flex justify-between items-center p-3 bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white">
                    <h1 className="font-bold text-xl">Chats</h1>
                    <p className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 me-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>


                    </p>

                </div>

                <div className="flex items-center bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 p-0 rounded-md w-[95%] mx-auto border border-neutral-100 border-b-green-500 border-b-4 dark:border-neutral-700 dark:border-b-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        className="bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 py-1 px-2 rounded-md w-full placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none"
                        placeholder="Search or start a new chat"
                        type="search"
                        name="search"
                    />
                </div>
                <ChatProfileList />
            </aside>


            <div className={`hidden lg:ml-[27%] md:ml-[47%] md:flex  ${isHomePage ? 'items-center justify-center h-screen' : ''}  bg-white text-neutral-700 dark:bg-neutral-800 dark:text-white`}>
                <Outlet />
            </div>
        </>
    );
};

export default ChatPage

