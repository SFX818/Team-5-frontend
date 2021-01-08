import Comment from './Comment'

const CommentsList = ({comments, eventId}) => {
    return (
      <>
      <div class="card">
        <h5 class="card-header">Comments</h5>
            <div class="card-body">
            {comments.map(comment=>(
            < Comment 
                key= {comment._id}    
                name= {comment.name} 
                content= {comment.content} 
                comment= {comment}
                eventId={eventId}        
            />
            ))}
            </div>
        </div>
      </>
    );
};
  
  export default CommentsList;
  