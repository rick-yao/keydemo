"use client";

import { useState } from "react";

export default function Example1() {
  const [isCompany, setIsCompany] = useState(false);
  // 输入的数值没有变化
  return (
    <>
      <button onClick={() => setIsCompany(!isCompany)}>reverse</button>
      {isCompany ? (
        <input
          id="company-tax-id-number"
          placeholder="Enter you company Tax ID"
        />
      ) : (
        <input
          id="person-tax-id-number"
          placeholder="Enter you personal Tax ID"
        />
      )}
    </>
  );
}
// [
// 	{
// 	  type: button,
// 	},
// 	{
// 	  type: Input, // our conditional input
// 	}
//       ]
