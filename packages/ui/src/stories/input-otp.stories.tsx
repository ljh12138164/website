import { useState } from "react";
import { InputOTP } from "./input-otp";

export default {
  title: "InputOTP 输入验证码",
  component: InputOTP,
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <InputOTP
      rootProps={{
        className: "w-full",
        value,
        onChange: setValue,
        maxLength: 6,
      }}
      groupProps={{ className: "w-full" }}
      itemPros={{ key: 6, className: "w-10" }}
    />
  );
};
