import Achievements from "@/components/Achievements/Achievements";
import AlumniSuccessStory from "@/components/Alumni_Success/AlumniSuccessStory";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import JoinBupRC from "@/components/JoinBupRoboticsClub/JoinBupRC";
import JoinClub from "@/components/JoinClub/JoinClub";
import Nav from "@/components/Nav/Nav";
import SecondCardDesign from "@/components/secondCardDesign/SecondCardDesign";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Nav/>
      <Banner/>
      <Achievements/>
      <UpcomingEvents/>
      <SecondCardDesign/>
      <AlumniSuccessStory/>
      <JoinBupRC/>
      <JoinClub/>
      <Footer/>
    </div>
  );
}
