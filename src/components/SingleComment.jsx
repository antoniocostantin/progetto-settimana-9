import { Button, ListGroup } from 'react-bootstrap'
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmI2OTI4YWI5NjAwMTU2NjRmMGEiLCJpYXQiOjE3MjQzMjg4MDksImV4cCI6MTcyNTUzODQwOX0.wnBh_-sJ2xk_WEUOpVkm7v46qPvgLfKyFzSFbs1YXJg";


const SingleComment = ({ comment, changed }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: key,
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
        changed()
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item className='bg-dark text-white-50'>
      {comment.comment} 
      <Button
        variant="outline-danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        <i class="bi bi-trash3-fill"></i>
      </Button><br/>
      <p>{comment.author} ----- {comment.rate}<i class="bi bi-star-fill text-white-50 ms-2"></i></p>
    </ListGroup.Item>
  )
}

export default SingleComment
