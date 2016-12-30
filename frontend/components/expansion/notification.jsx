import React from 'react';

const Notification = ({lastCard}) => {
  if (!lastCard || !lastCard.released) {
    return <div></div>;
  } else {
    return <h2 className="notification">This expansion is already released. <red>All rating is disabled.</red></h2>;
  }
};

export default Notification;
