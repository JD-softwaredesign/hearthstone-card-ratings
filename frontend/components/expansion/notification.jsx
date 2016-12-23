import React from 'react';

const Notification = ({lastCard}) => {
  if (!lastCard || !lastCard.released) {
    return <div></div>;
  } else {
    return <h2 className="notification">No expansion is upcoming this time. <red>All rating is disabled.</red> Please wait for the next expansion!</h2>;
  }
};

export default Notification;
