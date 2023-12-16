import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Loading from "./components/Loading";

function App() {
  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      ></RouterProvider>
    </main>
  );
}

export default App;
