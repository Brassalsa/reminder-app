import { Link } from "react-router-dom";
import {
  toggleReminder,
  deleteReminder,
} from "../../features/reminder/remindersSlice";
import { useDispatch } from "react-redux";
import moment from "moment";
import routes from "../../routes/routes";
function ReminderCard({ reminder }: { reminder: Reminder }) {
  const reduxDispatch = useDispatch();
  const isEnabled = reminder.enabled;
  const toggleHanlder = () => {
    reduxDispatch(toggleReminder(reminder.id));
  };

  const deleteReminderHanlder = () => {
    reduxDispatch(deleteReminder(reminder.id));
  };

  return (
    <div className="flex flex-wrap flex-col gap-2 bg-indigo-50 shadow-lg  w-full py-3 justify-center items-center rounded-md hover:bg-indigo-100  transition-all duration-300 cursor-pointer">
      <span className="self-end px-2 flex gap-4">
        <Link
          to={routes.editReminder + reminder.id}
          className="hover:opacity-75"
        >
          ✏️
        </Link>
        <button className="hover:opacity-75" onClick={deleteReminderHanlder}>
          ❌
        </button>
      </span>

      <h2 className="text-base font-semibold"> {reminder.title}</h2>

      <p>{reminder.description}</p>
      <p className="text-gray-700 text-sm">
        {reminder.reoccur == 0 ? (
          "No Repeat"
        ) : (
          <>
            Repeat: {reminder.reoccur} {reminder.reoccur == 1 ? "day" : "days"}
          </>
        )}
      </p>
      <span className="text-sm text-gray-600 italic">
        {moment(new Date(reminder.dateTime)).fromNow()}
      </span>
      <span className="flex gap-5">
        <button
          className={`cursor-pointer ${
            (isEnabled && "bg-blue-400") || "bg-red-400"
          } text-white h-9 w-20 rounded-md hover:opacity-90 active:opacity-100`}
          onClick={toggleHanlder}
        >
          {(isEnabled && "Enabled") || "Disabled"}
        </button>
        <Link
          to={routes.viewReminder + reminder.id}
          className="bg-gray-500 text-white flex justify-center items-center rounded-md  px-2"
        >
          View
        </Link>
      </span>
    </div>
  );
}

export default ReminderCard;
