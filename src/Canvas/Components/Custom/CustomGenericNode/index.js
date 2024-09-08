import React from "react";
import { Handle, Position } from "@xyflow/react";

const GenericNodeWithHandles = ({ data }) => {
  return (
    <div className="relative bg-gray-100 border border-gray-300 rounded-sm shadow-sms w-56 min-h-52">
      <div className="flex justify-between items-center min-h-4 bg-white w-full p-2 mb-2">
        <h4 className="text-sm font-bold m-0 p-0">{data?.label}</h4>
        <div className="font-bold">...</div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: "#e3e3e3",
          width: 10,
          height: 10,
          borderRadius: "50%",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: "#e3e3e3",
          width: 10,
          height: 10,
          borderRadius: "50%",
        }}
      />
      <div className="p-2">
        <div className="w-full bg-white p-2 flex justify-start text-start rounded-sm">
          <p className="p-0 m-0">
            Thank you for your information. We will contact soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenericNodeWithHandles;
