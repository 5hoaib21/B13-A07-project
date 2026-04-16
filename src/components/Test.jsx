import React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast.success("Here is your toast.");
};
const Test = () => {
  return (
    <div className="mt-5 mx-auto">
      <button onClick={notify} className="btn btn-accent">
        Test
      </button>
      <Toaster />
    </div>
  );
};

export default Test;
