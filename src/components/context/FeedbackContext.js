import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../../Data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit , setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeed) => {
    newFeed.id = uuidv4();
    setFeedback([newFeed, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are You Sure You Want To Delete Feedback ?")) {
      setFeedback((feedback) => feedback.filter((item) => item.id !== id));
    }
  };

  // set item to be updated
  const onEditFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  //update actual item
  const updateFeeback = (id , updatedData) => {
    setFeedback(feedback.map((item) => (item.id === id ? {...item , ...updatedData} : item)))
    setFeedbackEdit({item: {} , edit:false})
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        onEditFeedback,
        updateFeeback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
