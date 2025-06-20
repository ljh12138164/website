import { Sidebar } from "./sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
const items = [
  {
    title: "Home",
    children: (
      <>
        <Home className="size-4" />
        <span>Home</span>
      </>
    ),
  },
  {
    title: "Inbox",
    children: (
      <>
        <Inbox className="size-4" />
        <span>Inbox</span>
      </>
    ),
  },
  {
    title: "Calendar",
    children: (
      <>
        <Calendar className="size-4" />
        <span>Calendar</span>
      </>
    ),
  },
  {
    title: "Search",
    children: (
      <>
        <Search className="size-4" />
        <span>Search</span>
      </>
    ),
  },
  {
    title: "Settings",
    children: (
      <>
        <Settings className="size-4" />
        <span>Settings</span>
      </>
    ),
  },
];

export default {
  title: "Sidebar 侧边栏",
  component: Sidebar,
};

export const Default = () => {
  return (
    <Sidebar
      rootProps={{
        className: "w-64 h-[calc(100vh-300px)]",
      }}
      MenuItemProps={{
        data: items,
        className: "w-64",
      }}
    >
      哈哈
    </Sidebar>
  );
};
