import { Button } from "./button";

export default {
  title: "Button 按钮",
  component: Button,
};

export const Default = () => (
  <Button
    rootProps={{
      variant: "default",
      size: "default",
      onClick: () => {
        console.log("123");
      },
    }}
  >
    123
  </Button>
);
