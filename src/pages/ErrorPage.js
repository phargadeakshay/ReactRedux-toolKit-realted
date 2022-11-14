import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center h-screen items-center flex-col">
        <p className="text-gray-500 text-8xl font-bold">OPPS!</p>
        <p className="font-bold">Error 404: Page Not Found</p>
        <Link to={"/login"} className="font-bold">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
