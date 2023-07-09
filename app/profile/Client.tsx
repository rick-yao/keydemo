"use client";

import dayjs from "dayjs";
import { ReactNode, useState } from "react";

type Props = {
  name: string;
  children: ReactNode;
};
export default function Client({ name, children }: Props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>client component</div>
      <div>name: {name}</div>
      <div>children: {children}</div>
      <div>client count: {count}</div>
      <div>client dayjs: {dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
    </>
  );
}
