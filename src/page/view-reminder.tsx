import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../features/store/store";
import ViewReminder from "../components/Reminder/ViewReminder";

function ViewReminderPage() {
  const { reminderId } = useParams();
  const reminder = useSelector((state: RootState) => state.reminders).find(
    (i) => i.id === reminderId
  );
  if (!reminder) {
    throw new Error("Not Found");
  }
  return <ViewReminder reminder={reminder} />;
}

export default ViewReminderPage;
