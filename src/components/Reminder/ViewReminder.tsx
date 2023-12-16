import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import { useDispatch } from "react-redux";
import { deleteReminder } from "../../features/reminder/remindersSlice";

const ViewReminder = ({ reminder }: { reminder: Reminder }) => {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    reduxDispatch(deleteReminder(reminder.id));
    navigate(-1);
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-5">
      <h1 className="text-2xl font-semibold my-2 flex w-full justify-center items-center relative">
        {reminder.title}
        <span className="text-base font-normal self-end absolute right-3 flex gap-2">
          <Link
            className="bg-blue-500 hover:bg-blue-400 text-white rounded-md p-2"
            to={routes.editReminder + reminder.id}
          >
            Edit
          </Link>
          <button
            className="bg-red-500 hover:bg-red-400 text-white rounded-md p-2"
            onClick={handleDelete}
          >
            Delete
          </button>
        </span>
      </h1>
      <span className="text-sm text-gray-500">
        {moment(Date.parse(reminder.dateTime)).fromNow()}
      </span>
      <p className="">About: {reminder.description}</p>
      <p>email: {reminder.email}</p>
      <p>Phone: {reminder.phone}</p>
      <p>SMS: {reminder.sms}</p>
      <p>Repeat: {reminder.reoccur}</p>
      <p>Task is {reminder.enabled ? "Enabled" : "Disabled"}</p>
    </div>
  );
};

export default ViewReminder;
