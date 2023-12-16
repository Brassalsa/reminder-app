import { useParams } from "react-router-dom";
import { store } from "../features/store/store";
import AddReminder from "../components/Reminder/AddReminder";

function EditReminder() {
  const { reminderId } = useParams();

  const reminder = store
    .getState()
    ["reminders"].find((i) => i.id === reminderId);

  return <AddReminder reminder={reminder} />;
}

export default EditReminder;
