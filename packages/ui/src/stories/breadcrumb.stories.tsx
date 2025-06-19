import { Breadcrumb } from "./breadcrumb";

export default {
  title: "Breadcrumb 面包屑",
  component: Breadcrumb,
};

export const Default = () => (
  <Breadcrumb data={[{ label: "123", href: "#123" }]} />
);
