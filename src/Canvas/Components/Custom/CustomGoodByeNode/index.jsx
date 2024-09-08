import React from "react";
import { Handle, Position } from "@xyflow/react";

const CustomGoodByeNode = ({ data }) => {
  return (
    <div className="relative bg-white border border-gray-300 rounded-sm shadow-sm p-3 w-52">
      <div className="absolute top-[-20%] p-1 bg-blue-200 rounded-md">
        <p className="text-xs">STARTER</p>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-white rounded-full"
      />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-xs w-full text-start font-semibold text-gray-700 mb-1 truncate">
          {data.label}
        </h3>
        <p className="text-xs text-gray-500 truncate w-full text-start">
          How can i help you!
        </p>
      </div>
    </div>
  );
};

export default CustomGoodByeNode;
