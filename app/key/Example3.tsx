"use client";

import { useState } from "react";

export default function Example3() {
  const [isCompany, setIsCompany] = useState(false);
  // 输入的数值变化
  return (
    <>
      <button onClick={() => setIsCompany(!isCompany)}>reverse</button>
      {isCompany ? <input id="company-tax-id-number" /> : null}
      {!isCompany ? <input id="person-tax-id-number" /> : null}
    </>
  );
}

// [
// 	{ type: button },
// 	null,
// 	{ type: Input }
//       ]
