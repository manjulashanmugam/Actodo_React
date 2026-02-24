import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const data = useLocation();

  const username = data?.state?.user || "Guest";

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={username} />

        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"February 20"} subtitle={"14:23:08"} />
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
        </div>

        <TodoContainer />
      </div>
    </div>
  );
}

export default Landing;   // ✅ VERY IMPORTANT