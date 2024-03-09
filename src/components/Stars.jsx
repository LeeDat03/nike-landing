const Stars = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="./src/assets/icons/star.svg"
        alt="Star icon"
        width={30}
        height={30}
      />
      <p className="text-2xl  text-slate-500">(4.5)</p>
    </div>
  );
};

export default Stars;
