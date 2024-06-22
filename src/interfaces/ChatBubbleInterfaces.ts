// Base interface for common properties
interface BaseChatBubbleProps {
    avatar: string;
    senderName: string;
    timestamp: string;
    status: string;
    isSentByMe?: boolean;
}


// Interface for text chat bubble
interface TextChatBubbleProps extends BaseChatBubbleProps {
    chatType: "text";
    message: string;
}

// Interface for voice chat bubble
interface VoiceChatBubbleProps extends BaseChatBubbleProps {
    chatType: "voice";
    duration: string;
    audioFile: string;
}

// Interface for image chat bubble
interface ImageChatBubbleProps extends BaseChatBubbleProps {
    chatType: "image";
    message?: string;
    imageUrl: string;
}

// Interface for gallery chat bubble
interface GalleryChatBubbleProps extends BaseChatBubbleProps {
    chatType: "gallery";
    message?: string;
    images: string[];
}

interface FileChatBubbleProps extends BaseChatBubbleProps {
    chatType: "file";
    fileName: string;
    fileSize: string;
    fileType: string;
    pages?: number;
    fileIcon?: string
}


type ChatBubbleProps =
    | TextChatBubbleProps
    | VoiceChatBubbleProps
    | VoiceChatBubbleProps
    | ImageChatBubbleProps
    | GalleryChatBubbleProps
    | FileChatBubbleProps;



export type {
    BaseChatBubbleProps,
    TextChatBubbleProps,
    VoiceChatBubbleProps,
    ImageChatBubbleProps,
    GalleryChatBubbleProps,
    FileChatBubbleProps,
    ChatBubbleProps
};