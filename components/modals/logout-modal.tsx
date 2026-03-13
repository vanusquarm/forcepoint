import { IoWarningOutline } from "react-icons/io5";

const LogoutModal = ({
  confirm,
  cancel,
}: {
  confirm: Confirm;
  cancel: Cancel;
}) => {
  const modalStyle =
    "fixed inset-0 bg-black/10 flex items-center justify-center shadow-xl border z-30";
  return (
    <div className={modalStyle}>
      <div className="bg-white rounded-md w-96 flex flex-col items-center space-y-4 py-6 px-4 shadow-lg">
        <IoWarningOutline className="text-red-600 w-28 h-28" />
        <p className="text-base font-bold text-gray-700">
          {" "}
          Are you sure you want to logout?
        </p>
        <div className="flex space-x-2 w-full">
          <button
            className="bg-red-600 p-1.5 text-white rounded w-1/2"
            onClick={confirm}
          >
            {" "}
            Confirm
          </button>
          <button
            className="border p-1.5 text-slate-600 rounded w-1/2"
            onClick={cancel}
          >
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

type Confirm = React.MouseEventHandler<HTMLButtonElement>;
type Cancel = React.MouseEventHandler<HTMLButtonElement>;
