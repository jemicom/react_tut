import React, { useState } from "react";

// const Counter = () => {
//   let num = 0; // 화면을 갱신할 필요 없을때
//   const numPrint = () => {
//     console.log("num : ", ++num);
//   };
//   return <button onClick={numPrint}>Counter {num}</button>;
// };

// const Counter = () => {
//   const [num, setNum] = useState(0);
//   // 화면을 갱신해야 할때

//   const numPrint = () => {
//     setNum(num + 1);
//     console.log("num : ", num);
//   };
//   return <button onClick={numPrint}>Counter {num}</button>;
// };

const Counter = () => {
  const [num, setNum] = useState(0);
  // 화면을 갱신해야 할때
  // 코드를 수정해도 기존의 값을 유지(상태)

  return (
    <button
      onClick={() => {
        setNum(num + 1);
        console.log(num);
      }}
    >
      Counter {num}
    </button>
  );
};

export default Counter;
