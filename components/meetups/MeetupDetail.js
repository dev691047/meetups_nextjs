import React from "react";

const MeetupDetail = (props) => {
  {
    console.log(props.id.meetupId);
  }
  return <div>MeetupDetail:{props.id.meetupId}</div>;
};

export default MeetupDetail;
