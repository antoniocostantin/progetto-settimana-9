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
    <ListGroup.Item className='bg-body-tertiary'>
      {comment.comment} 
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button><br/>
      <small className='text-secondary '>{comment.author} ----- {comment.rate}<i class="bi bi-star-fill"></i></small>
    </ListGroup.Item>
  )
}

export default SingleComment
