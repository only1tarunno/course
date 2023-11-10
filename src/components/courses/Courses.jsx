import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Course from "../course/Course";

const Courses = ({ handleCourses }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full lg:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <Course
          handleCourses={handleCourses}
          course={course}
          key={course.id}
        ></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleCourses: PropTypes.func.isRequired,
};
export default Courses;
