
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
  const dotes = new Array(6).fill("");
  return (
    <div className="w-fit flex text-white h-fit gap-1">
      {dotes.map((_,i) => (
        <div key={i} className="p-[2px] bg-white rounded-full"></div>
      ))}
    </div>
  );
};

export { BottomBox, BottomRightBox, Dottes, TopBox };

