import React, { TextareaHTMLAttributes } from 'react'

const TextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ ...props }) => {

    return (
        <textarea
            {...props}
        ></textarea>
    )
}

export default TextArea
