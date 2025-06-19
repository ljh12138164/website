import { AspectRatio } from "./aspect-ratio";

export default {
  title: "AspectRatio 比例",
  component: AspectRatio,
};

export const Default = () => (
  <AspectRatio rootProps={{ ratio: 16 / 2 }}>
    <div className="h-full w-full border">123</div>
  </AspectRatio>
);
