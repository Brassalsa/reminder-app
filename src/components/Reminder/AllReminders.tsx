import { Link } from "react-router-dom";
import ReminderCard from "./Card";
import routes from "../../routes/routes";

const AllReminders = ({ data }: { data: Reminder[] }) => {
  return (
    <div className="flex flex-wrap gap-3 ">
      <h1 className="text-xl w-full font-medium flex justify-between my-4">
        Your Reminders
        <Link
          to={routes.addReminder}
          className="text-xl font-bold bg-blue-500 text-white px-2 rounded-md hover:bg-sky-400"
        >
          +
        </Link>
      </h1>

      {data.map((reminder) => (
        <ReminderCard reminder={reminder} key={reminder.id} />
      ))}
      {data.length == 0 && (
        <div className="h-44 flex justify-center items-center w-full">
          It's Empty
        </div>
      )}
    </div>
  );
};

export default AllReminders;
