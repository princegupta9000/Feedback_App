import React, { useContext } from "react";
import Card from "./HOC/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";

const Feedbackitem = ({ item }) => {
  const { deleteFeedback, onEditFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => onEditFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
