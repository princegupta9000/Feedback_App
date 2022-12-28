import React, { useContext } from "react";
import Feedbackitem from "./Feedbackitem";
import FeedbackContext from "./context/FeedbackContext";

function Feedbacklist() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  console.log("feedback", feedback);

  return (
    <>
      {feedback.map((item, index) => (
        <Feedbackitem item={item} key={index} />
      ))}
    </>
  );
}

export default Feedbacklist;
