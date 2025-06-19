import { Carousel } from "./carousel";

export const Default = () => {
  return (
    <Carousel
      rootProps={{ className: "w-[200px] h-[300px] mx-auto" }}
      data={[
        {
          src: "https://picsum.photos/200/300",
          alt: "1",
          width: 200,
          height: 300,
        },
        {
          src: "https://picsum.photos/200/300",
          alt: "2",
          width: 200,
          height: 300,
        },
        {
          src: "https://picsum.photos/200/300",
          alt: "3",
          width: 200,
          height: 300,
        },
      ]}
    />
  );
};

export default {
  title: "Carousel 轮播图",
  component: Carousel,
};
