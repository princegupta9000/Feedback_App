import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Button from "./HOC/Button";
import Card from "./HOC/Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {

  const { addFeedback , feedbackEdit , updateFeeback} = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be more than 10 character");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10 && rating) {
      let newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeeback(feedbackEdit.item.id , newFeedback)
      }
      else{
          addFeedback(newFeedback);
      }
      setText("");
      setBtnDisabled(true);
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  return (
    <Card>
      <form onSubmit={handleSumbit}>
        <h2>How do you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Write a review"
          />
          <Button type={"submit"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
