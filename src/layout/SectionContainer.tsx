import React from "react";

const ComponentContainer = ({
  children,
  extraStyle,
}: {
  children: React.ReactNode;
  extraStyle: string;
}) => {
  return (
    <div
      className={`w-full max-w-[1800px] relative ${extraStyle}`}
    >
      {children}
    </div>
  );
};

export default ComponentContainer;
