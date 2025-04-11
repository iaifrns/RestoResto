const TopBox = ({ w = "100px", h = "100px" }: { w?: string; h?: string }) => {
  return (
    <div
      className={`border-t border-secondary border-dotted border-l`}
      style={{ width: w, height: h }}
    ></div>
  );
};

const BottomBox = ({
  w = "100px",
  h = "100px",
}: {
  w?: string;
  h?: string;
}) => {
  return (
    <div
      className="border-b border-secondary border-dotted border-l"
      style={{ width: w, height: h }}
    ></div>
  );
};

const BottomRightBox = ({
  w = "100px",
  h = "100px",
}: {
  w?: string;
  h?: string;
}) => {
  return (
    <div
      className="border-b border-secondary border-dotted border-r"
      style={{ width: w, height: h }}
    ></div>
  );
};

const Dottes = () => {
  return <p className="text-4xl text-white text-center w-fit">......</p>;
};

export { TopBox, BottomBox, Dottes, BottomRightBox };
