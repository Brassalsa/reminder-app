import { FormEvent, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReminder,
  modifyReminder,
} from "../../features/reminder/remindersSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../features/store/store";

type Action = {
  type:
    | "SET_DATE_TIME"
    | "SET_TITLE"
    | "SET_DESCRIPTION"
    | "SET_EMAIL"
    | "SET_PHONE"
    | "SET_SMS"
    | "SET_REOCCUR";
  payload: string;
};

const reducer = (state: Reminder, action: Action) => {
  switch (action.type) {
    case "SET_DATE_TIME":
      return { ...state, dateTime: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_SMS":
      return { ...state, sms: action.payload };
    case "SET_REOCCUR":
      return { ...state, reoccur: action.payload };
    default:
      return state;
  }
};

const initial: Reminder = {
  id: 1,
  dateTime: "",
  title: "",
  description: "",
  email: "",
  phone: "",
  sms: "",
  reoccur: 0,
  enabled: true,
  user: null,
};

const AddReminder = ({ reminder }: { reminder?: Reminder }) => {
  const user = useSelector((state: RootState) => state.user);
  const [state, dispatch] = useReducer(
    reducer,
    reminder || { ...initial, email: user?.email || "", user }
  );
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const assignVal = (type: Action["type"]) => {
    return (e: React.ChangeEvent<any>) => {
      dispatch({ type, payload: e.target.value });
    };
  };

  const goBack = () => {
    navigate(-1);
  };

  // submit values
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!reminder) {
      reduxDispatch(addReminder(state));
    } else {
      reduxDispatch(modifyReminder(state));
    }

    goBack();
  };

  return (
    <section>
      <h1 className="text-xl text-center my-8">Set a new Reminder</h1>
      <form
        className="flex flex-col gap-2 justify-center items-center max-w-5xl mx-auto px-6"
        onSubmit={handleSubmit}
      >
        <span>
          DateTime{" "}
          <input
            type="datetime-local"
            placeholder="Date"
            required
            value={state.dateTime}
            onChange={assignVal("SET_DATE_TIME")}
          />
        </span>
        <span>
          Title
          <input
            type="text"
            placeholder="Title"
            value={state.title}
            onChange={assignVal("SET_TITLE")}
            required
          />
        </span>
        <span>
          Description{" "}
          <textarea
            placeholder="Description..."
            value={state.description}
            onChange={assignVal("SET_DESCRIPTION")}
            required
          />
        </span>
        <span>
          Email{" "}
          <input
            type="email"
            placeholder="email@xyz"
            value={state.email}
            onChange={assignVal("SET_EMAIL")}
            required
          />
        </span>
        <span>
          Phone{" "}
          <input
            type="number"
            placeholder="Contact No."
            value={state.phone}
            onChange={assignVal("SET_PHONE")}
            required
            className="[&::-webkit-inner-spin-button]:appearance-none ::-webkit-outer-spin-button]:m-0"
          />
        </span>
        <span>
          SMS{" "}
          <input
            placeholder="SMS"
            value={state.sms}
            onChange={assignVal("SET_SMS")}
            required
          />
        </span>
        <span>
          {" "}
          Reoccur{" "}
          <select
            name=""
            id=""
            value={state.reoccur}
            onChange={assignVal("SET_REOCCUR")}
          >
            <option value="0">Don't</option>
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="5">5 days</option>
            <option value="7">7 days</option>
          </select>
        </span>
        <span className="flex gap-3 justify-center items-center">
          <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400 active:bg-blue-600">
            Submit
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-400 active:bg-red-600"
            type="button"
            onClick={goBack}
          >
            Cancel
          </button>
        </span>
      </form>
    </section>
  );
};

export default AddReminder;
