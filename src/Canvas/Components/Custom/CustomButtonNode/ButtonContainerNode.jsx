import React from "react";
import { Handle, Position } from "@xyflow/react";
import ButtonNode from "./ButtonNode";
import useCanvasStore from "../../../../store";
import { updatedBtnNode } from "../../../data";

const ButtonContainerNode = ({ data: old }) => {
  const storeNode = useCanvasStore((store) => store.getNodeById(old.id));
  const updateNode = useCanvasStore((store) => store.updateNodeById);
  const handleButtonClick = () => {
    updateNode(old.id, updatedBtnNode);
  };
  const { data } = storeNode || {};

  return (
    <div className="bg-[#E6E7F1] border border-gray-200 rounded-md  min-w-40 w-48">
      <div className="flex justify-between items-center min-h-4 bg-white w-full p-1">
        <h4 className="text-sm font-bold m-0 p-0">{data?.label}</h4>
      </div>
      <Handle
        id="s-1"
        type="target"
        isConnectable={true}
        position={Position.Left}
      />
      <div className="flex flex-col space-y-2 items-center p-2">
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-start  items-center p-2 bg-white rounded-sm mb-1 ">
            <p className="text-xs">
              Question:Are you willing to enter your details?
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {data?.buttons?.map((buttonData, index) => (
              <ButtonNode key={index} data={buttonData} />
            ))}
            {!data?.updated && (
              <ButtonNode
                hideHandle
                data={{ label: "Add No Button", onclick: handleButtonClick }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainerNode;
