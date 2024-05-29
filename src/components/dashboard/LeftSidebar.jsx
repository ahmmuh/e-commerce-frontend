import * as React from "react";
import MainInput from "../../reuseableComponents/forms/MainInput";

const LeftSidebar = () => {
  return (
    <div>
      <MainInput
        type={"email"}
        title={"Email"}
        style={{ border: "1px solid #ced", padding: "1rem" }}
      />
      Lef sidebar
    </div>
  );
};

export default LeftSidebar;
