import React, { useEffect, useRef, useState } from 'react';
import { profileMetaData } from "../../seeds/ProfileMetaData";
import { DocumentIcon, FilmIcon, LinkIcon, InformationCircleIcon, MagnifyingGlassCircleIcon, UserIcon, ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import { PencilIcon, UserGroupIcon, ArrowLeftIcon, TrashIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import avatar1 from "/avatar.jpg";
import { users } from "../../seeds/Users";
import { profiles } from '../../seeds/Profiles';
import { IUser } from '../../interfaces/Users';
import { IFiles } from '../../interfaces/Files';
import { files } from '../../seeds/FilesData';
import { PDFIcon } from '../icons/PDFIcon';
import { images } from '../../seeds/Images';
import { DocumentDuplictateIconSolid } from '../icons/DocumentDuplictateIconSolid';
import { Link } from 'react-router-dom';

interface ProfileInfoPopupProps {
    isProfileInfoOpen: boolean;
    setIsProfileInfoOpen: React.Dispatch<React.SetStateAction<boolean>>
    toggleButtonRef: React.MutableRefObject<HTMLDivElement | null>
    // toggleDropdown: (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ProfileInfoPopup: React.FC<ProfileInfoPopupProps> = ({ isProfileInfoOpen, setIsProfileInfoOpen, toggleButtonRef }) => {

    const profileDropdownRef = useRef<HTMLDivElement | null>(null)
    const [profileInfoTab, setProfileInfoTab] = useState<string>('overview');

    const [profileDescription, setProfileDescription] = useState<string>('');
    const [overviewDescription, setOverviewDescription] = useState<string>('');

    const [groupNameEdit, setGroupNameEdit] = useState<string>('');
    const [groupName, setGroupName] = useState<string>('');

    const [isMembersTab, setIsMembersTab] = useState<boolean>(false);
    const [membersToAdded,] = useState<IUser[]>(profiles)
    const [groupMembers, setGroupMembers] = useState<IUser[]>(users);
    const [addedGroupMembers, setAddedGroupMembers] = useState<IUser[]>([]);

    const [profileChildPopup, setProfileChildPopup] = useState<boolean>(false);
    const [selectedGroupMember, setSelectedGroupMember] = useState<IUser | null>(null);

    // const imageArray: string[] = new Array(30).fill(image)


    const [selectedMedia, setSelectedMedia] = useState<string[]>([]);

    //files
    const [allFiles,] = useState<IFiles[]>(files);
    const [selectedFiles, setSelectedFiles] = useState<IFiles[]>([]);

    useEffect(() => {
        console.log(profileInfoTab);
        console.log(overviewDescription);
        console.log('addedGroupMembers is:', addedGroupMembers);
        // console.log(imageArray);
        console.log(images);
        console.log('selectedMedia is:', selectedMedia);
    }, [overviewDescription, profileInfoTab, addedGroupMembers, selectedMedia])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClickOutside = (e: MouseEvent) => {
        e.preventDefault();
        if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target as Node) && toggleButtonRef.current && !toggleButtonRef.current.contains(e.target as Node)) {
            setIsProfileInfoOpen(prevState => !prevState)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [handleClickOutside])

    const handleDescriptionClick = () => {
        if (profileDescription.trim() !== '') {
            setOverviewDescription(profileDescription)
            setProfileDescription('')
        }

    }


    const handleGroupNameUpdateClick = () => {
        if (groupNameEdit.trim() !== '') {
            setGroupName(groupNameEdit)
            setGroupNameEdit('')
        }
    }


    const handleUserCheck = (checkedUser: IUser) => {
        if (groupMembers.includes(checkedUser)) {
            groupMembers.filter((user) => user != checkedUser)

        } else {
            setAddedGroupMembers((prevAddedGroupMember) => prevAddedGroupMember.includes(checkedUser) ? prevAddedGroupMember.filter((user) => user != checkedUser) : [...prevAddedGroupMember, checkedUser])
        }
    }

    const handleUserRemove = (removedUser: IUser) => {
        setAddedGroupMembers((prevAddedGroupMember) => prevAddedGroupMember.filter((user) => user != removedUser))
    }


    const handleChildPopup = (groupMember: IUser, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setProfileChildPopup(true)
        setSelectedGroupMember(groupMember)
    }

    return (
        <div className=''>
            {/* profile info. popup */}
            {isProfileInfoOpen && (
                <div ref={profileDropdownRef} className="absolute z-10 top-16 left-3 md:w-[50%] w-[96%] h-[450px] bg-neutral-900 dark:border border-neutral-700 ms-0">
                    <div className=" flex w-full h-full">

                        <aside className="absolute top-0 left-0 w-[28%] h-full bg-neutral-800 overflow-y-auto overflow-x-hidden dark:border border-neutral-700">
                            {profileMetaData.map((metaData, index) => (
                                <div
                                    key={index}
                                    onClick={() => setProfileInfoTab(metaData.tab)}
                                    className={`flex items-center justify-start my-1 ms-2 px-2 py-1 text-black dark:text-white border-l-4 ${profileInfoTab === metaData.tab ? 'border-green-600' : 'border-transparent'} hover:border-neutral-600 rounded-sm cursor-pointer`}>
                                    {metaData.tab === 'overview' && (
                                        <>
                                            <InformationCircleIcon className="size-4 me-2" />
                                            <p className="text-md font-light text-black  dark:text-neutral-100">{metaData.label}</p>
                                        </>
                                    )}

                                    {metaData.tab === 'members' && (
                                        <>
                                            <UserGroupIcon className="size-4 me-2" />
                                            <p className="text-md font-light text-black  dark:text-neutral-100">{metaData.label}</p>
                                        </>
                                    )}


                                    {metaData.tab === 'media' && (
                                        <>
                                            <FilmIcon className="size-4 me-2" />
                                            <p className="text-md font-light text-black  dark:text-neutral-100">{metaData.label}</p>
                                        </>
                                    )}

                                    {metaData.tab === 'files' && (
                                        <>
                                            <DocumentIcon className="size-4 me-2" />
                                            <p className="text-md font-light text-black  dark:text-neutral-100">{metaData.label}</p>
                                        </>
                                    )}

                                    {metaData.tab === 'links' && (
                                        <>
                                            <LinkIcon className="size-4 me-2" />
                                            <p className="text-md font-light text-black  dark:text-neutral-100">{metaData.label}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </aside>

                        {profileInfoTab === 'media' && <h1 className="ml-[28%] absolute top-0 left-0 mb-2 ps-4 py-1 rounded-b-md text-lg font-semibold z-10 bg-neutral-800 w-[calc(100%-28%)] border-b">Media</h1>}

                        {profileInfoTab === 'files' && <h1 className="ml-[28%] absolute top-0 left-0 mb-2 ps-4 py-1 rounded-b-md text-lg font-semibold z-10 bg-neutral-800 w-[calc(100%-28%)] border-b">Files</h1>}

                        <div className="relative ml-[31%] w-full h-[100%] overflow-y-auto overflow-x-hidden">
                            {/* <h1>Main body</h1> */}
                            {profileInfoTab === 'overview' && (
                                <>
                                    <div className="flex flex-col items-center">
                                        <div className="relative  my-2">
                                            <img
                                                className="h-20w-20 rounded-full ring-8 ring-green-800"
                                                src={avatar1}
                                                alt=""
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-neutral-950/70 rounded-full">
                                                <label
                                                    htmlFor="avatarProfile" className="rounded-full p-1">
                                                    <PencilIcon className="size-5 text-white" />
                                                    <input
                                                        className="hidden"
                                                        type="file" name="" id="avatarProfile" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            {/* group Name edit */}
                                            <div>
                                                {groupName.length > 0 ? (
                                                    <div className="flex items-center">
                                                        <h3 className="text-xl font-medium">{groupName}</h3>
                                                        {groupName.length > 0
                                                            &&
                                                            (<PencilIcon
                                                                onClick={() => {
                                                                    setGroupNameEdit(groupName);
                                                                    setGroupName('');
                                                                }}
                                                                className="size-5 hover:bg-neutral-600 p-1 ms-1 rounded-sm"
                                                            />)}
                                                    </div>
                                                ) : (
                                                    <>
                                                        <input
                                                            className="bg-neutral-700 rounded-md px-3 py-1.5 my-2 border-b-4 border-b-green-600 outline-none"
                                                            placeholder="Enter group description"
                                                            type="text"
                                                            value={groupNameEdit}
                                                            onChange={(e) => setGroupNameEdit(e.target.value)}
                                                            maxLength={20}
                                                        />
                                                        <div className="group inline me-1">
                                                            <button
                                                                onClick={handleGroupNameUpdateClick}
                                                                className="bg-green-700 text-white px-4 py-1 rounded-md relative"
                                                            >
                                                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                                                    Done
                                                                </span>
                                                                <span className="group-hover:opacity-0 transition-opacity duration-300 text-sm font-medium">
                                                                    {`${groupNameEdit.length}/20`}
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Created</h4>
                                    <p className="font-light italic inline-block">6/25/2024  </p>
                                    <span className="font-light italic">&nbsp; 05:21 PM</span>
                                    <h4 className="mt-10">Description</h4>


                                    <div>
                                        {overviewDescription.length > 0 ? (
                                            <div className="flex items-center">
                                                <p className="text-sm italic text-neutral-700 dark:text-neutral-300">
                                                    {overviewDescription}
                                                </p>
                                                {overviewDescription.length > 0
                                                    &&
                                                    (<PencilIcon
                                                        onClick={() => {
                                                            setProfileDescription(overviewDescription);
                                                            setOverviewDescription('');
                                                        }}
                                                        className="size-5 hover:bg-neutral-600 p-1 ms-1 rounded-sm"
                                                    />)}
                                            </div>
                                        ) : (
                                            <>
                                                <input
                                                    className="bg-neutral-700 rounded-md px-3 py-1.5 my-2 border-b-4 border-b-green-600 outline-none"
                                                    placeholder="Enter group description"
                                                    type="text"
                                                    value={profileDescription}
                                                    onChange={(e) => setProfileDescription(e.target.value)}
                                                    maxLength={100}
                                                />
                                                <div className="group inline">
                                                    <button
                                                        onClick={handleDescriptionClick}
                                                        className="bg-green-700 text-white px-4 py-1 rounded-md relative"
                                                    >
                                                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                                            Done
                                                        </span>
                                                        <span className="group-hover:opacity-0 transition-opacity duration-300 text-sm font-medium">
                                                            {`${profileDescription.length}/100`}
                                                        </span>
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>


                                    <button className="block mt-3 bg-neutral-600 px-4 py-1.5 mb-2 rounded-lg text-neutral-100 font-medium text-md">
                                        Exit Group
                                    </button>
                                </>
                            )}

                            {profileInfoTab === 'members' && (
                                <div className="w-full">
                                    <h1 className="text-lg font-medium text-center m-2">Members ({groupMembers.length})</h1>
                                    <div className='flex items-center w-full'>
                                        {isMembersTab && <ArrowLeftIcon
                                            onClick={() => setIsMembersTab(false)}
                                            className='h-9 w-9 p-2 hover:bg-neutral-800 rounded-full' />}
                                        {addedGroupMembers.length === 0 && <div className="flex items-center bg-neutral-600 mx-5 p-1 rounded-lg border-b-4 border-green-600 w-full">
                                            <MagnifyingGlassCircleIcon className="size-5" />
                                            <input
                                                className="bg-neutral-600 rounded-lg ms-2 w-full outline-none"
                                                type="search"
                                                placeholder="Members to search..."
                                            />
                                        </div>}
                                        <div className='overflow-x-auto overflow-y-hidden'>
                                            {addedGroupMembers.map((addedMember) => (
                                                <div key={addedMember.id} className="inline-flex items-center justify-between flex-wrap mx-2">
                                                    <div className="flex bg-slate-600 px-2 py-1 my-1 rounded-full">
                                                        <span className="text-neutral-800 dark:text-white text-sm me-2">{addedMember.name}</span>
                                                        <button
                                                            className="bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                                                            onClick={() => handleUserRemove(addedMember)}
                                                        >X</button>
                                                    </div>

                                                </div>
                                            ))
                                            }
                                            {addedGroupMembers.length != 0 && (
                                                <div className={`flex justify-start space-x-4 my-2 }`}>
                                                    {<>
                                                        <button
                                                            type='button'
                                                            onClick={() => {
                                                                if (isMembersTab) {
                                                                    setGroupMembers([...groupMembers, ...addedGroupMembers])
                                                                    setIsMembersTab(false)
                                                                    setAddedGroupMembers([])
                                                                }
                                                            }
                                                            }
                                                            className="text-lg px-5 py-1 bg-green-700 font-thin rounded-md cursor-pointer hover:bg-green-800">
                                                            {isMembersTab ? 'Create' : 'Next'}
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() => setAddedGroupMembers([])}
                                                            className="text-lg px-5 py-1 bg-gray-300 dark:bg-gray-100 border-gray-500 dark:border-gray-800 text-neutral-800 dark:hover:bg-gray-200 hover:bg-gray-400 font-thin rounded-md cursor-pointer">Cancel</button>
                                                    </>
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative mx-auto w-full h-full my-4">
                                        {isMembersTab === true ? (
                                            <ul className="flex flex-col items-start mx-auto w-full ms-4 px-4">
                                                {membersToAdded.map((member) => (
                                                    <li
                                                        onClick={() => handleUserCheck(member)}
                                                        key={member.id}
                                                        className='flex justify-between items-center space-x-3 my-1 text-neutral-700 dark:text-white hover:bg-neutral-600 w-[80%] cursor-pointer px-2 rounded-md'>
                                                        <div className='flex'>
                                                            <img
                                                                className="w-7 h-7 border border-neutral-500 rounded-full p-1"
                                                                src={member.avatar} alt="" />
                                                            <p>{member.name}</p>

                                                        </div>
                                                        <input
                                                            className="inline-flex justify-end h-5 w-5"
                                                            type="checkbox"
                                                            readOnly
                                                            checked={addedGroupMembers.includes(member)}

                                                        />

                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <ul className="flex flex-col items-start mx-auto w-full ms-4 px-4">
                                                <li
                                                    onClick={
                                                        () => {
                                                            setIsMembersTab(true)
                                                        }
                                                    }
                                                    className='flex space-x-3 my-1 text-neutral-700 dark:text-white hover:bg-neutral-600 w-[80%] cursor-pointer px-2 rounded-md'>
                                                    <UserGroupIcon className="size-7 border border-neutral-500 rounded-full p-1" />
                                                    <p>Add members</p>
                                                </li>
                                                <li className='flex space-x-3 my-1 text-neutral-700 dark:text-white hover:bg-neutral-600 w-[80%] cursor-pointer px-2 rounded-md'>
                                                    <LinkIcon className="size-7 border border-neutral-500 rounded-full p-1" />
                                                    <p>Invite to group via link</p>
                                                </li>
                                                <li className='flex space-x-3 my-1 text-neutral-700 dark:text-white hover:bg-neutral-600 w-[80%] cursor-pointer px-2 rounded-md'>
                                                    <UserIcon className="size-7 border border-neutral-500 rounded-full p-1" />
                                                    <p>You Admin</p>
                                                </li>
                                                {groupMembers.map((groupMember) => (
                                                    <li key={groupMember.id} className='relative w-full'>
                                                        <Link
                                                            className='flex space-x-3 my-1 text-neutral-700 dark:text-white hover:bg-neutral-600 w-[80%] cursor-pointer px-2 rounded-md'
                                                            to={'/usernam'}
                                                            onContextMenu={(e) => {
                                                                // e.preventDefault(); // Prevent the default context menu
                                                                handleChildPopup(groupMember, e);
                                                            }}
                                                        >

                                                            <img
                                                                className="w-7 h-7 border border-neutral-500 rounded-full p-1"
                                                                src={groupMember.avatar} alt="" />
                                                            <p>{groupMember.name}</p>
                                                        </Link>

                                                        {profileChildPopup && selectedGroupMember === groupMember && (
                                                            <div className='absolute top-9 left-3 bg-black z-[1000] border rounded-tr-xl rounded-b-xl'>
                                                                <ul className='p-2'>
                                                                    <li className='text-sm px-2 py-1 hover:bg-neutral-500 rounded-tr-xl rounded-b-xl text-neutral-700 dark:text-neutral-300 bg-white dark:bg-black cursor-pointer'>Open Conversation</li>
                                                                    <li className='text-sm px-2 py-1 hover:bg-neutral-500 rounded-tr-xl rounded-b-xl text-neutral-700 dark:text-neutral-300 bg-white dark:bg-black cursor-pointer'>Remove from group</li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}


                                            </ul>
                                        )}



                                    </div>
                                </div>
                            )}

                            {profileInfoTab === 'media' && (
                                <div className="h-full relative">
                                    {/* <h1 className="absolute top-0 left-0 mb-2 ps-4 py-1 rounded-b-md text-lg font-semibold z-10 bg-neutral-600 w-full">Media</h1> */}
                                    {images.length > 0 ? (
                                        // flex container
                                        <div className="grid grid-cols-3 gap-2 rounded-md mx-3 pt-10 pb-14"> {/* Adjust grid-cols to control number of columns */}
                                            {images.map((imageUrl, index) => (
                                                <div key={index} className="relative group">
                                                    <img
                                                        className={`rounded-md w-full border-2  ${selectedMedia.includes(imageUrl) ? ' border-blue-400 ' : 'border-transparent'}`}
                                                        src={imageUrl}
                                                        alt={`Image ${index + 1}`}
                                                    />
                                                    <input

                                                        onClick={() => {

                                                            setSelectedMedia((prevImgUrl) => prevImgUrl.includes(imageUrl) ? prevImgUrl.filter((prevImgUrl) => prevImgUrl != imageUrl) : [...selectedMedia, imageUrl])

                                                        }}

                                                        id="default-checkbox" type="checkbox" className={`absolute top-[4px] right-[4px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${selectedMedia.includes(imageUrl) ? 'block' : 'hidden group-hover:block'}`}
                                                        checked={selectedMedia.includes(imageUrl)}
                                                        readOnly
                                                    />

                                                </div>
                                            ))}

                                        </div>
                                    ) : (
                                        <small className="w-full h-full flex items-center justify-center text-neutral-700 dark:text-neutral-400">No media to display</small>
                                    )}
                                </div>
                            )}

                            {profileInfoTab === 'files' && (
                                <div className=" relative">
                                    {/* <h1 className="my-2 text-lg font-semibold">Files</h1> */}
                                    {allFiles.length > 0 ? (
                                        <div className='flex flex-col pt-10 pb-14'>
                                            {allFiles.map((file) => (
                                                <div key={file.id} className={`relative flex items-start mb-2 px-2 py-2 hover:bg-neutral-600 rounded-lg cursor-pointer w-[97%] border-2  ${selectedFiles.includes(file) ? 'border-blue-400' : 'border-transparent'} group`}>
                                                    <p className='w-10 h-10 me-1'>
                                                        {file.format === 'PDF' && (
                                                            <PDFIcon />
                                                        )}
                                                    </p>
                                                    <div className='flex flex-col leading-4'>
                                                        <p className='text-sm font-medium text-neutral-300 line-clamp-1 pe-2 me-2'>{file.title}</p>
                                                        <div className='flex'>
                                                            <p className='text-xs text-neutral-400 me-3'>{file.pages} pages</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="6" height="6" viewBox="0 0 3 4" fill="none">
                                                                <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                                                            </svg>
                                                            <p className='text-xs text-neutral-400 mx-2'>{file.size} MB</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="6" height="6" viewBox="0 0 3 4" fill="none">
                                                                <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                                                            </svg>
                                                            <p className='text-xs text-neutral-400 ms-2'>{file.format}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <input
                                                            onClick={() => {
                                                                setSelectedFiles(prevFiles =>
                                                                    prevFiles.includes(file)
                                                                        ?
                                                                        prevFiles.filter(prevfile => prevfile != file)
                                                                        :
                                                                        [...prevFiles, file])
                                                            }}
                                                            className={`absolute top-[0px] right-[0px] h-5 w-5 rounded-md cursor-pointer ${selectedFiles.includes(file) ? 'block' : 'hidden group-hover:block'}`}
                                                            type="checkbox"
                                                            readOnly
                                                            checked={selectedFiles.includes(file)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <small className="w-full h-full flex items-center justify-center text-neutral-700 dark:text-neutral-400">No files to display</small>
                                    )}
                                </div>
                            )}


                            {profileInfoTab === 'links' && (
                                <div className="h-full">
                                    <h1 className="my-2 text-lg font-semibold">Links</h1>

                                    <small className="w-full h-full flex items-center justify-center text-neutral-700 dark:text-neutral-400">No links to display</small>
                                </div>
                            )}


                        </div>
                        {selectedMedia.length > 0 && (
                            <div className='ml-[28%] absolute bottom-0 right-0 left-0 flex justify-between w-[calc(100%-28%)] px-4 py-2 bg-neutral-800 rounded-t-lg border-t'>
                                <div className='flex space-x-5'>
                                    <TrashIcon className='size-6 rounded-full hover:bg-neutral-600 p-1 cursor-pointer ' />
                                    <ArrowUturnRightIcon className='size-6 rounded-full hover:bg-neutral-600 p-1 cursor-pointer ' />
                                </div>

                                <div>
                                    {images.length === selectedMedia.length ? (
                                        <DocumentDuplicateIcon className='size-6 rounded-full hover:bg-neutral-600 p-1 cursor-pointer '
                                            onClick={() => setSelectedMedia([])}
                                        />
                                    ) : (
                                        <div
                                            onClick={() => {
                                                const uniqueArray = Array.from(new Set([...selectedMedia, ...images]))
                                                setSelectedMedia(uniqueArray)
                                            }

                                            }
                                        >
                                            {/* already style its parent svg icon */}
                                            <DocumentDuplictateIconSolid />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {selectedFiles.length > 0 && (
                            <div className='ml-[28%] absolute bottom-0 right-0 left-0 flex justify-between w-[calc(100%-28%)] px-4 py-2 bg-neutral-800 rounded-t-xl border-t'>
                                <div className='flex space-x-5'>
                                    <TrashIcon className='size-6 rounded-full hover:bg-neutral-600 p-1 cursor-pointer ' />
                                    <ArrowUturnRightIcon className='size-6 rounded-full hover:bg-neutral-600 p-1 cursor-pointer ' />
                                </div>

                                <div>
                                    {allFiles.length === selectedFiles.length ? (
                                        <DocumentDuplicateIcon className='size-6 rounded-full hover:bg-neutral-600 p-1 cursor-pointer '
                                            onClick={() => setSelectedFiles([])}
                                        />
                                    ) : (
                                        <div
                                            onClick={() => {
                                                const uniqueArray = Array.from(new Set([...selectedFiles, ...allFiles]))
                                                setSelectedFiles(uniqueArray)
                                            }

                                            }
                                        >
                                            {/* already style its parent svg icon */}
                                            <DocumentDuplictateIconSolid />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default ProfileInfoPopup
