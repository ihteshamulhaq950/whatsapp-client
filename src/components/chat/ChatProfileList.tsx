import { Link } from "react-router-dom"
import { Profiles } from "../../seeds/Profiles"


const chatprofilelist = () => {
    // console.log("Profiles is:", Profiles);

    return (
        // px - 3 py - 4 overflow - y - scroll overflow - x - hidden h - [100 %]
        <div className="px-3 py-4 overflow-x-hidden  overflow-y-scroll h-[90%]">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-2">
                {Profiles.map((profile) => (
                    <li key={profile.name} className="py-3 sm:py-4 text-gray-900 dark:text-white">
                        <Link to={"/username"}>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={profile.avatar} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium truncate">
                                            {profile.name}
                                        </p>
                                        <p className="inline-flex items-center font-thin text-xs">
                                            {profile.createdAt}
                                        </p>
                                    </div>
                                    <p className="text-sm truncate">
                                        {profile.email}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default chatprofilelist
