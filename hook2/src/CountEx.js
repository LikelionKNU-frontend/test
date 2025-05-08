import React, { useState } from "react";

function CountEx() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  const handleClick = () => {
    let newCount;

    if (count >= 10) {
      newCount = 0;
    } else {
      newCount = count + 1;
    }
    setCount(newCount);
  };

  console.log("업데이트");
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}

export default CountEx;
