import { Avatar } from "./avatar";

export default {
  title: "Avatar 头像",
  component: Avatar,
};

export const Default = () => (
  <Avatar
    rootProps={{ className: "h-30 w-30" }}
    imageProps={{ src: "https://placehold.co/200" }}
    fallbackProps={{
      children: "CN",
    }}
  />
);
