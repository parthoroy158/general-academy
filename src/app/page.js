import Image from "next/image";
import Banner from "./components/Banner";
import Body from "./components/Body";
import MentorsDetails from "./components/MentorsDetails";
import AllCoursesNav from "./allCourses/components/AllcoursesNav";


export default function Home() {

  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <MentorsDetails></MentorsDetails>
    </div>
  );
}
