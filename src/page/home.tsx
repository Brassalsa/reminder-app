import AllReminders from "../components/Reminder/AllReminders";
import { useSelector } from "react-redux";
import { RootState } from "../features/store/store";

const Landing = () => {
  const user = useSelector((state: RootState) => state.user);
  const reminders = useSelector((state: RootState) =>
    state.reminders.filter(
      (i) =>
        i.user?.email === user?.email && i.user?.password === user?.password
    )
  );

  return <AllReminders data={reminders} />;
};

export default Landing;
