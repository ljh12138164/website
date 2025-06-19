import { Card } from "./card";

export const Default = () => {
  return (
    <Card
      title="Card Title"
      description="Card Description"
      content="Card Content"
      footer="Card Footer"
    />
  );
};

export default {
  title: "Card 卡片",
  component: Card,
};
