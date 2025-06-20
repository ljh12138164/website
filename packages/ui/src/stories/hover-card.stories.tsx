import { HoverCard } from "./hover-card";

export default {
  title: "HoverCard 悬浮卡片",
  component: HoverCard,
};

export const Default = () => {
  return (
    <HoverCard
      rootProps={{ className: "w-full" }}
      triggerProps={{ children: "HoverCard" }}
      contentProps={{ children: "HoverCard Content" }}
    />
  );
};
