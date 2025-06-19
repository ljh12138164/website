import { useState } from "react";
import { ToggleGroup } from "./toggle-group";

export default {
  title: "ToggleGroup 切换组",
  component: ToggleGroup,
};

export const Default = () => {
  const [value, setValue] = useState<string[]>(["1"]);
  return (
    <ToggleGroup
      data={[
        { label: "1", value: "1" },
        { label: "2", value: "2" },
      ]}
      value={value}
      onValueChange={(value) => setValue(value)}
    />
  );
};
