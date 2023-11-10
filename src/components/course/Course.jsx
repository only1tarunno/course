import PropTypes from "prop-types";

const Course = ({ course, handleCourses }) => {
  const { cover, title, description, price, course_time } = course;
  return (
    <div>
      <div className="card bg-white shadow-xl">
        <figure className="pt-5 px-4">
          <img src={cover} alt={title} className="w-full" />
        </figure>
        <div className="py-5 px-4 space-y-2 items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-start text-[#1c1b1b99]">{description}</p>
          <div className="flex items-center pt-2 pb-4">
            <div className="w-6/12">
              <p className="text-start text-[#1c1b1b99]">
                <span>
                  <i className="fa-solid fa-dollar-sign"></i>
                </span>{" "}
                Price : {price}
              </p>
            </div>
            <div className="w-6/12">
              <p className="text-end text-[#1c1b1b99]">
                <span>
                  <i className="fa-solid fa-book-open"></i>
                </span>{" "}
                Credit : {course_time}hr
              </p>
            </div>
          </div>
          <div className="card-actions">
            <button
              className="btn bg-[#2F80ED] hover:bg-[#063574] text-white font-semibold text-lg w-full"
              onClick={() => handleCourses(course)}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourses: PropTypes.func.isRequired,
};
export default Course;
