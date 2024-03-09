import PropTypes from "prop-types";

const Button = ({ children, type }) => {
  let classes = "";

  if (type === "primary") {
    classes = "border-none bg-primary text-xl text-white  hover:bg-[#ff3a23]";
  }

  if (type === "secondary") {
    classes =
      "border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white";
  }

  return (
    <button
      className={`${classes} flex items-center justify-center gap-4 rounded-full px-6 py-3 outline-2 outline-offset-4 outline-primary transition-all duration-300`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
