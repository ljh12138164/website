import { Tabs } from "./tabs";

export default {
  title: "Tabs 标签",
  component: Tabs,
};

export const Default = () => (
  <Tabs
    rootProps={{ defaultValue: "1" }}
    data={[
      { label: "1", value: "1", content: "1" },
      { label: "2", value: "2", content: "2" },
    ]}
  />
);
