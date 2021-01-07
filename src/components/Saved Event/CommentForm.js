import React, {useState} from 'react'

const CommentForm = ({addComment})=>{

    const [newComment, setNewComment] = useState('')
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setNewComment({
            name: name,
            content: content
        })
        addComment(newComment)
    }


    return (
        <form onSubmit={handleSubmit}>
        <input
            name="formName"
            value={name}
            onChange={handleNameChange}
            placeholder="New comment name"
        />
        <input
            name="formContent"
            value={content}
            onChange={handleContentChange}
            placeholder="Content goes here..."
        />
        <button onSubmit={handleSubmit}>Add Comment</button>
        </form>
    );
}

export default CommentForm;