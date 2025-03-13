import Achievements from "@/components/Achievements/Achievements";
import AlumniSuccessStory from "@/components/Alumni_Success/AlumniSuccessStory";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import JoinBupRC from "@/components/JoinBupRoboticsClub/JoinBupRC";
import Nav from "@/components/Nav/Nav";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Achievements/>
      <UpcomingEvents/>
      <AlumniSuccessStory/>
      <JoinBupRC/>
      <Footer/>
    </div>
  );
}
