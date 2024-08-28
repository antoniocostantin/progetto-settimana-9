/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmI2OTI4YWI5NjAwMTU2NjRmMGEiLCJpYXQiOjE3MjQzMjg4MDksImV4cCI6MTcyNTUzODQwOX0.wnBh_-sJ2xk_WEUOpVkm7v46qPvgLfKyFzSFbs1YXJg";

function AddComment({ asin, changed }) {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  useEffect(() => {
    setComment({
      ...comment,
      elementId: asin,
    });
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        setComment({
          comment: "",
          rate: 1,
          elementId: asin,
        });

        changed();
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label className="text-white-50 fw-bold">Recensione</Form.Label>
          <Form.Control
            type="text"
            className="bg-dark text-white-50"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) => {
              setComment({
                ...comment,
                comment: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="text-white-50 fw-bold">Valutazione</Form.Label>
          <Form.Control
            className="bg-dark text-white-50"
            as="select"
            value={comment.rate}
            onChange={(e) => {
              setComment({
                ...comment,
                rate: e.target.value,
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
}

export default AddComment;
