import { Badge } from "./badge";

export default {
  title: "Badge 徽章",
  component: Badge,
};

export const Default = () => (
  <Badge rootProps={{ variant: "default" }}>123</Badge>
);
