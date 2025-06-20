import { Skeleton } from "./skeleton";

export default {
  title: "Skeleton 骨架屏",
  component: Skeleton,
};

export const Default = () => {
  return <Skeleton className="w-full h-10" />;
};
