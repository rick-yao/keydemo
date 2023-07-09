"use client";

import { useState } from "react";

export default function Example3() {
  const [isCompany, setIsCompany] = useState(false);
  // 强行重复使用值
  return (
    <>
      <button onClick={() => setIsCompany(!isCompany)}>reverse</button>
      {isCompany ? <input id="company-tax-id-number" key="tax-input" /> : null}
      {!isCompany ? <input id="person-tax-id-number" key="tax-input" /> : null}
    </>
  );
}
