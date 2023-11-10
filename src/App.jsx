import { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import Cart from "./components/cart/Cart";
import Courses from "./components/courses/courses";

function App() {
  const [addCourses, setAddCourses] = useState([]);
  const [remaning, setRemaining] = useState(20);
  const [time, setTime] = useState(0);
  const handleCourses = (course) => {
    const isExist = addCourses.find((element) => element.id === course.id);
    let count = course.course_time;
    if (!isExist) {
      addCourses.forEach((element) => {
        count = count + element.course_time;
      });

      const timeRemains = 20 - count;

      if (count > 20) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your Credit Hour is insufficient. You can not add any more course.",
        });
      } else {
        setTime(count);
        setRemaining(timeRemains);
        setAddCourses([...addCourses, course]);
      }
    } else {
      Swal.fire(`You have already selected it.`);
    }
  };
  return (
    <div className="container mx-auto pb-16 px-5 lg:px-0">
      <div>
        <h1 className="text-center text-[#1C1B1B] font-bold text-3xl md:text-5xl pt-8 pb-14">
          Course Registration
        </h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <Courses handleCourses={handleCourses}></Courses>
        <Cart addCourses={addCourses} remaning={remaning} time={time}></Cart>
      </div>
    </div>
  );
}

export default App;
