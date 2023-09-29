import React from "react";

const Title = (props) => {
  return (
    <div className="site-title">
      <h1 onClick={props.onPageBack}>Mooovies</h1>
    </div>
  );
};

export default Title;
