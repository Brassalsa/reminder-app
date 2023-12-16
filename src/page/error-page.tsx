import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col gap-4 justify-center items-center min-h-[20rem]"
    >
      <h1 className="text-2xl font-semibold">Oops!</h1>
      <p className="text-lg text-gray-600">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-400">
        <i>{error?.statusText || error?.message} !</i>
      </p>
    </div>
  );
}
