import {MdCancel} from "react-icons/md";
export const Modal = ({ title, children, cancel }: { title:string;children: React.ReactNode; cancel: Cancel }) => {


  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg p-6 w-96 relative flex flex-col items-start">
        <p className="text-base font-bold text-gray-700 mb-4">
          {" "}
          {title || "Create"}
        </p>

        {false && (
          <span className="text-xs text-red-600 font-medium p-1 "> hello </span>
        )}
        {false && (
          <span className="text-xs text-green-600 font-medium p-1 ">
            {" "}
            Added successfully
          </span>
        )}

        {children}
        <button
          type="button"
          className="absolute -top-4 -right-4 rounded-full"
          onClick={cancel}
        >
          <MdCancel className="h-10 w-10 text-red-600" />
        </button>
      </div>
    </div>
  );
};


type Cancel = React.MouseEventHandler<HTMLButtonElement>;
