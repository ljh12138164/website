import Accordion from "./accordion";

export default {
  title: "Accordion 折叠面板",
  component: Accordion,
};

export const Default = () => (
  <Accordion
    rootProps={{ className: "w-full", type: "single" }}
    data={[
      { key: "title1", header: "title1", content: "content1" },
      { key: "title2", header: "title2", content: "content2" },
      { key: "title3", header: "title3", content: "content3" },
    ]}
  />
);
