import { Collapsible } from "./collapsible";

export default {
  title: "Collapsible 折叠",
  component: Collapsible,
};

export const Default = () => {
  return (
    <Collapsible
      rootProps={{ className: "w-full" }}
      triggerProps={{ children: "Collapsible" }}
      contentProps={{ children: "Collapsible" }}
    />
  );
};
