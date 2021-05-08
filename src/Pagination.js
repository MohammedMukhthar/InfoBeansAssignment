import React from "react";
const Pagination = (props) => {
  return (
    <div className="Pagination">
      <a className="active" onClick={props.onClick}>
        1
      </a>
      <a onClick={props.onClick}>2</a>
      <a onClick={props.onClick}>3</a>
      <a onClick={props.onClick}>4</a>
      <a onClick={props.onClick}>5</a>
    </div>
  );
};

export default React.memo(Pagination);
