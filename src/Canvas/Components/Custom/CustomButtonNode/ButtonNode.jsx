import React from "react";

import MenuManager from "../MenuManager";

const ButtonNode = ({ data, hideHandle = false }) => {
  return (
    <div
      className="bg-[#EC5494] text-white rounded-sm p-2  flex justify-start items-center text-xs relative"
      onClick={() => data.onclick && data.onclick()}
    >
      <div className="text-center">{data.label}</div>
      {!hideHandle && (
        <MenuManager
          children={""}
          sourceID={"confirm"}
          handleType="source"
          handleID={data.id}
        />
      )}
    </div>
  );
};

export default ButtonNode;
