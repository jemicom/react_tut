import React from "react";

// const TabBtn = (props) => {
//   return (
//     <li
//       onClick={() => {
//         props.setNum(props.index + 1);
//       }}
//       className={props.num === props.index + 1 ? "active" : ""}
//     >
//       {props.btn}
//     </li>
//   );
// };

// 전개해서 props 를 받으면
const TabBtn = ({ id, num, setNum, btn }) => {
  return (
    <li
      onClick={() => {
        setNum(id);
      }}
      className={num === id ? "active" : ""}
    >
      {btn}
    </li>
  );
};

export default TabBtn;
