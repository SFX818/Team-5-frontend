import React, {useState} from 'react'
import shortid from 'shortid'


const CommentForm = ({eventId, saveComment,addToList})=>{
    const [newComment, setNewComment] = useState('')
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    // const deleteComment = (e) => {

    //     console.log(e)
    //     let res = deleteComment(e)
       
        
        
    //   }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let newID= shortid.generate()
        setNewComment({
            _id: newID,
            name: name,
            content: content
        })
        saveComment(eventId, newID, name, content)
        .then(()=>
        addToList(newComment))
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