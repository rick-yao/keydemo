import Client from "@/app/profile/Client";
import ServerComponent1 from "@/component/ServerComponent1";
import dayjs from "dayjs";

export default function Page() {
  return (
    <div>
      <Client name="client component">
        <ServerComponent1 />
      </Client>
      <div>server component:</div>
      <div>server dayjs: {dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
    </div>
  );
}
