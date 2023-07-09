import Client1 from "@/app/profile/client1";
import dayjs from "dayjs";

export default function ServerComponent1() {
  return (
    <div>
      <div>ServerComponent1 dayjs: {dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
      <div>
        <Client1 />
      </div>
    </div>
  );
}
