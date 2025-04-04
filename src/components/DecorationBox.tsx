const TopBox = ({ w = "100px", h = "100px" }: { w?: string; h?: string }) => {
  return (
    <div
      className={`border-t border-secondary border-dotted border-l`}
      style={{ width: w, height: h }}
    ></div>
  );
};

const BottomBox = () => {
  return (
    <div className="w-[100px] h-[100px] border-b border-secondary border-dotted border-l"></div>
  );
};

const Dottes = () => {
  return <p className="text-4xl text-white text-center w-fit">......</p>;
};

export { TopBox, BottomBox, Dottes };
