import React, { useState } from "react";

// const ALink = () => {
//   return (
//     <a
//       href="http://www.naver.com"
//       style={{
//         textDecoration: "none",
//         color: "inherit",
//         fontSize: "16px",
//       }}
//     >
//       Naver
//     </a>
//   );
// };

// css 적용 2번째 방법
// const ALink = () => {
//   const linkStyle = {
//     textDecoration: "none",
//     color: "inherit",
//     fontSize: "16px",
//   };

//   return (
//     <a href="http://www.naver.com" style={linkStyle}>
//       Naver
//     </a>
//   );
// };

const ALink = () => {
  const [num, setNum] = useState(0);

  const linkStyle = {
    textDecoration: num === 0 ? "none" : "underline",
    color: num === 0 ? "inherit" : "red",
    fontSize: num === 0 ? "16px" : "18px",
  };

  return (
    <a
      href="http://www.naver.com"
      style={linkStyle}
      onMouseOver={() => {
        setNum(1);
      }}
      onMouseOut={() => {
        setNum(0);
      }}
    >
      Naver
    </a>
  );
};

export default ALink;
