import PropTypes from "prop-types";

const Cart = ({ addCourses, remaning, time }) => {
  return (
    <div className="w-full lg:w-3/12">
      <div className="bg-white rounded-lg px-6 py-4">
        <div className="pb-3">
          <h2 className="text-[#2F80ED] font-bold text-xl">
            Credit Hour Remaining {remaning} hr
          </h2>
        </div>
        <div className="py-3 border-t ">
          <h2 className="font-bold text-xl">Course Name</h2>
          {addCourses.map((addCourse, idx) => {
            return (
              <h3 key={idx} className=" text-base font-normal p-1">
                {`${idx + 1}.  ${addCourse.title}`}
              </h3>
            );
          })}
        </div>
        <div className="py-3 border-y">
          <h2 className="font-medium text-lg">Total Credit Hour : {time}</h2>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  addCourses: PropTypes.array.isRequired,
  remaning: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};
export default Cart;
