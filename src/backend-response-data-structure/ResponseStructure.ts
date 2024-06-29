import avatar from '/avatar.jpg';

const searchAvailableUsers = [
    { id: 'ObjectId(123456789)', avatar: avatar, username: 'ali', email: 'ali@gmail.com' },
    { id: 'ObjectId(123456789)', avatar: avatar, username: 'mutafa', email: 'mutafa@gmail.com' },
    { id: 'ObjectId(123456789)', avatar: avatar, username: 'moben', email: 'moben@gmail.com' },
    { id: 'ObjectId(123456789)', avatar: avatar, username: 'usman', email: 'usman@gmail.com' },
    { id: 'ObjectId(123456789)', avatar: avatar, username: 'jon', email: 'jon@gmail.com' },

]

// for individual chat(chat between two users)
const OneOnOneChat = [
    {
        _id: 'ObjectId(123456789)',
        name: 'One On One Chat',
        isGroupChat: false,
        lastMessage: [
            {
                _id: 'ObjectId(123456789)',
                sender: [
                    {
                        username: 'Ali',
                        avatar: avatar,
                        email: 'ali@gmail.com'
                    },
                ],
                content: "Hi how are you!",
                attachment: [
                    { url: '/pdf1.pdf', localPath: '' },
                    { url: '/pdf1.pdf', localPath: '' },
                    { url: '/pdf1.pdf', localPath: '' },
                ],
                chat: 'ObjectId(123456789)'
            },
        ],
        participant: [
            {
                _id: 'ObjectId(123456789)',
                avatar: { url: avatar, localPath: '' },
                username: 'yousaf',
                email: 'yousal@gmail.com',
                role: { User: 'User' },
                loginType: 'EMAIL_PASSWORD',
                isEmailVerified: true,
            },
        ],
        admin: 'ObjectId(123456789)', // Ali user id
        // it is actually lastMessage
        lastMessages: {
            _id: 'ObjectId(123456789)',
            sender: [
                {
                    username: 'Ali',
                    avatar: avatar,
                    email: 'ali@gmail.com'
                },
            ],
            content: "Hi how are you!",
            attachment: [
                { url: '/pdf1.pdf', localPath: '' },
                { url: '/pdf1.pdf', localPath: '' },
                { url: '/pdf1.pdf', localPath: '' },
            ],
            chat: 'ObjectId(123456789)'
        }
    }
]









// group chat (chat among many users)
const groupChat = [
    {
        _id: 'ObjectId(123456789)',
        name: 'One On One Chat',
        isGroupChat: false,
        lastMessage: [
            {
                _id: 'ObjectId(123456789)',
                sender: [
                    {
                        username: 'Ali',
                        avatar: avatar,
                        email: 'ali@gmail.com'
                    },
                ],
                content: "Hi how are you!",
                attachment: [
                    { url: '/pdf1.pdf', localPath: '' },
                    { url: '/pdf1.pdf', localPath: '' },
                    { url: '/pdf1.pdf', localPath: '' },
                ],
                chat: 'ObjectId(123456789)'
            },
        ],
        participant: [
            {
                _id: 'ObjectId(123456789)',
                avatar: { url: avatar, localPath: '' },
                username: 'yousaf',
                email: 'yousal@gmail.com',
                role: { User: 'User' },
                loginType: 'EMAIL_PASSWORD',
                isEmailVerified: true,
            },
            {
                _id: 'ObjectId(123456789)',
                avatar: { url: avatar, localPath: '' },
                username: 'usman',
                email: 'usman@gmail.com',
                role: { User: 'User' },
                loginType: 'EMAIL_PASSWORD',
                isEmailVerified: true,
            },
            {
                _id: 'ObjectId(123456789)',
                avatar: { url: avatar, localPath: '' },
                username: 'abubakar',
                email: 'abubakar@gmail.com',
                role: { User: 'User' },
                loginType: 'EMAIL_PASSWORD',
                isEmailVerified: true,
            },
            {
                _id: 'ObjectId(123456789)',
                avatar: { url: avatar, localPath: '' },
                username: 'abbas',
                email: 'abbas@gmail.com',
                role: { User: 'User' },
                loginType: 'EMAIL_PASSWORD',
                isEmailVerified: true,
            },
            {
                _id: 'ObjectId(123456789)',
                avatar: { url: avatar, localPath: '' },
                username: 'ihtesham',
                email: 'ihtesham@gmail.com',
                role: { User: 'User' },
                loginType: 'EMAIL_PASSWORD',
                isEmailVerified: true,
            }
        ],
        admin: 'ObjectId(123456789)', // Ali user id
        // it is actually lastMessage
        lastMessages: {
            _id: 'ObjectId(123456789)',
            sender: [
                {
                    username: 'Ali',
                    avatar: avatar,
                    email: 'ali@gmail.com'
                },
            ],
            content: "Hi how are you!",
            attachment: [
                { url: '/pdf1.pdf', localPath: '' },
                { url: '/pdf1.pdf', localPath: '' },
                { url: '/pdf1.pdf', localPath: '' },
            ],
            chat: 'ObjectId(123456789)'
        }
    }
]




const message = [
    {
        _id: 'ObjectId(123456789)',
        sender: [
            {
                username: 'Ali',
                avatar: avatar,
                email: 'ali@gmail.com'
            },
        ],
        content: "Hi how are you!",
        attachment: [
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
        ],
        chat: 'ObjectId(123456789)',
        //actually sender in mongdb
        sender1: {
            username: 'Ali',
            avatar: avatar,
            email: 'ali@gmail.com'
        }
    }
]



// array of messages
const getAllMessages = [
    {
        _id: 'ObjectId(123456789)',
        sender: [
            {
                username: 'Ali',
                avatar: avatar,
                email: 'ali@gmail.com'
            },
        ],
        content: "Hi how are you!",
        attachment: [
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
        ],
        chat: 'ObjectId(123456789)',
        //actually sender in mongdb
        sender1: {
            username: 'Ali',
            avatar: avatar,
            email: 'ali@gmail.com'
        }
    },
    {
        _id: 'ObjectId(123456789)',
        sender: [
            {
                username: 'Ali',
                avatar: avatar,
                email: 'ali@gmail.com'
            },
        ],
        content: "Hi how are you!",
        attachment: [
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
        ],
        chat: 'ObjectId(123456789)',
        //actually sender in mongdb
        sender1: {
            username: 'Ali',
            avatar: avatar,
            email: 'ali@gmail.com'
        }
    },
    {
        _id: 'ObjectId(123456789)',
        sender: [
            {
                username: 'Ali',
                avatar: avatar,
                email: 'ali@gmail.com'
            },
        ],
        content: "Hi how are you!",
        attachment: [
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
        ],
        chat: 'ObjectId(123456789)',
        //actually sender in mongdb
        sender1: {
            username: 'Ali',
            avatar: avatar,
            email: 'ali@gmail.com'
        }
    },
    {
        _id: 'ObjectId(123456789)',
        sender: [
            {
                username: 'Ali',
                avatar: avatar,
                email: 'ali@gmail.com'
            },
        ],
        content: "Hi how are you!",
        attachment: [
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
            { url: '/pdf1.pdf', localPath: '' },
        ],
        chat: 'ObjectId(123456789)',
        //actually sender in mongdb
        sender1: {
            username: 'Ali',
            avatar: avatar,
            email: 'ali@gmail.com'
        }
    }
];



export {
    searchAvailableUsers,
    OneOnOneChat,
    groupChat,
    message,
    getAllMessages
}