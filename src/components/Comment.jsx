import './assets/Comment.css'
function Comment(props){
    const {comment}=props;
    const {name,body,id,email}=comment;
    if(id%2===0){
        return(
            <div className="commentCardGreen">
               <h2 className='title'><span style={{color:'black'}}>Title:</span> {name}</h2>
               <p className='body'><span style={{color:'black'}}>Comment:</span> {body}</p>
               <p style={{textAlign:'left'}}><span style={{color:'black'}}>Email:</span> {email}</p>
            </div>
        )
    }else{
    return(
        <div className="commentCardYellow">
           <h2 className="title"><span style={{color:'black'}}>Title:</span> {name}</h2>
           <p className="body"><span style={{color:'black'}}>Comment:</span> {body}</p>
           <p style={{textAlign:'left'}}><span style={{color:'black'}}>Email:</span> {email}</p>
        </div>
    )
    }
}
export default Comment