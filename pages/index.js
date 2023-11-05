import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex md:p-12 p-3 gap-20">
        <div className="w-1/5  md:block hidden">
          <LeftSidebar />
        </div>
        <div className="md:w-3/5 w-full">
          <ContentArea />
        </div>
        <div className="w-1/5 md:block hidden">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
