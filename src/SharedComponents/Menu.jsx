import { buttonNode, finalNode, genericNode } from "../Canvas/data";
import useCanvasStore from "../store";

export default function MenuBar({ close, source, handleID, target }) {
  const addNode = useCanvasStore((store) => store.addNode);

  const onButtonClick = () => {
    addNode(buttonNode, source, handleID, target);
    close();
  };
  const onGoodByeClick = () => {
    addNode(finalNode, source, handleID, target);
    close();
  };
  const handleGenericAdd = () => {
    addNode(genericNode, source, handleID, target);
    close();
  };
  return (
    <div className="bg-white p-2 rounded-lg shadow-md text-black min-w-44">
      <div className="flex justify-between items-center">
        <input
          type="text"
          name="serach"
          value=""
          className="rounded-md border border-gray-300 w-[90%] p-2"
          placeholder="Search by Name"
        />
        <div
          onClick={close}
          className="cursor-pointer text-sm font-semibold bg-white text-gray-500 hover:text-gray-700 transition"
        >
          ✕
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <h2 className="font-bold text-sm p-0 m-0">Select</h2>
      </div>

      <nav>
        <ul className="space-y-2 overflow-hidden overflow-y-scroll h-[150px]">
          <li onClick={onButtonClick}>
            <div className="w-full px-4 py-1 bg-white hover:bg-blue-200 rounded-sm cursor-pointer flex justify-start items-center gap-2">
              <span>Button</span>
            </div>
          </li>
          <li onClick={onGoodByeClick}>
            <div className="w-full px-4 py-1 bg-white hover:bg-blue-200 rounded-sm cursor-pointer flex justify-start items-center gap-2">
              <span>GoodByeMessage</span>
            </div>
          </li>
          <li onClick={handleGenericAdd}>
            <div className="w-full px-4 py-1 bg-white hover:bg-blue-200 rounded-sm cursor-pointer flex justify-start items-center gap-2">
              <span>Generic</span>
            </div>
          </li>
          <li>
            <div className="w-full px-4 py-1 bg-white hover:bg-blue-200 rounded-sm cursor-pointer flex justify-start items-center gap-2">
              <span>Contacts</span>
            </div>
          </li>
          <li>
            <div className="w-full px-4 py-1 bg-white hover:bg-blue-200 rounded-sm cursor-pointer flex justify-start items-center gap-2">
              <span>Settings</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
