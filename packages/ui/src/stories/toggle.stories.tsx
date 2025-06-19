import { Toggle } from "./toggle";

export default {
  title: "Toggle 切换",
  component: Toggle,
};

export const Default = () => (
  <Toggle rootProps={{ variant: "default" }}>123</Toggle>
);
