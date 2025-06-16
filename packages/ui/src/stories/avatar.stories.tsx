import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";

const meta: Meta<typeof Avatar> = {
    title: "组件/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Avatar组件用于在界面中表示用户或实体的图像头像。基于Radix UI的Avatar组件构建，支持图像加载失败时的回退显示。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
            <AvatarFallback>用户</AvatarFallback>
        </Avatar>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有图像的基本头像组件。当图像加载成功时，显示图像；如果加载失败，则显示回退内容。",
            },
        },
    },
};

export const WithFallback: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="用户头像" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
    parameters: {
        docs: {
            description: {
                story: "当图像无法加载时（例如URL无效或网络问题），会显示回退内容。这里使用用户缩写作为回退内容。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="用户头像" />
            <AvatarFallback>
                <FiUser className="w-4 h-4" />
            </AvatarFallback>
        </Avatar>
    ),
    parameters: {
        docs: {
            description: {
                story: "在回退内容中使用图标代替文本。这种方式适用于不知道用户姓名或需要通用表示的场合。",
            },
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="size-6">
                <AvatarFallback>XS</AvatarFallback>
            </Avatar>

            <Avatar className="size-8">
                <AvatarFallback>SM</AvatarFallback>
            </Avatar>

            <Avatar className="size-12">
                <AvatarFallback>MD</AvatarFallback>
            </Avatar>

            <Avatar className="size-16">
                <AvatarFallback>LG</AvatarFallback>
            </Avatar>

            <Avatar className="size-24">
                <AvatarFallback>XL</AvatarFallback>
            </Avatar>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过修改className中的size属性，可以创建不同尺寸的头像组件，适应不同的界面需求。",
            },
        },
    },
};

export const DifferentShapes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" alt="圆形头像" />
                <AvatarFallback>圆</AvatarFallback>
            </Avatar>

            <Avatar className="rounded-md">
                <AvatarImage src="https://github.com/shadcn.png" alt="圆角矩形头像" />
                <AvatarFallback>角</AvatarFallback>
            </Avatar>

            <Avatar className="rounded-none">
                <AvatarImage src="https://github.com/shadcn.png" alt="方形头像" />
                <AvatarFallback>方</AvatarFallback>
            </Avatar>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过修改边框圆角，可以创建不同形状的头像。默认为圆形，但也可以是圆角矩形或方形。",
            },
        },
    },
};

export const WithBorder: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar className="border-2 border-primary">
                <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                <AvatarFallback>用</AvatarFallback>
            </Avatar>

            <Avatar className="border-2 border-blue-500">
                <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                <AvatarFallback>户</AvatarFallback>
            </Avatar>

            <Avatar className="ring-2 ring-red-500 ring-offset-2">
                <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                <AvatarFallback>像</AvatarFallback>
            </Avatar>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "添加边框或环形装饰可以增强头像的视觉效果，突出重要用户或特定状态。",
            },
        },
    },
};

export const Group: Story = {
    render: () => (
        <div className="flex -space-x-2">
            <Avatar className="border-2 border-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="用户1" />
                <AvatarFallback>用</AvatarFallback>
            </Avatar>

            <Avatar className="border-2 border-background">
                <AvatarImage src="https://avatars.githubusercontent.com/u/124599" alt="用户2" />
                <AvatarFallback>户</AvatarFallback>
            </Avatar>

            <Avatar className="border-2 border-background">
                <AvatarFallback className="bg-blue-500 text-white">张</AvatarFallback>
            </Avatar>

            <Avatar className="border-2 border-background">
                <AvatarFallback className="bg-green-500 text-white">李</AvatarFallback>
            </Avatar>

            <Avatar className="border-2 border-background flex items-center justify-center bg-muted">
                <span className="text-xs text-muted-foreground">+8</span>
            </Avatar>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过负边距创建重叠的头像组，用于表示一组用户或参与者。适用于协作工具、聊天室等场景。",
            },
        },
    },
};

export const DifferentFallbacks: Story = {
    render: () => (
        <div className="flex gap-4">
            <Avatar>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar>
                <AvatarFallback>
                    <FiUser />
                </AvatarFallback>
            </Avatar>

            <Avatar>
                <AvatarFallback>
                    <FaUserCircle />
                </AvatarFallback>
            </Avatar>

            <Avatar>
                <AvatarFallback>
                    <MdPersonOutline />
                </AvatarFallback>
            </Avatar>

            <Avatar>
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold">
                    ZL
                </AvatarFallback>
            </Avatar>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "展示不同类型的回退内容，包括文字缩写、不同风格的图标和渐变背景等。",
            },
        },
    },
};

export const StatusIndicator: Story = {
    render: () => (
        <div className="flex gap-6">
            <div className="relative">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                    <AvatarFallback>用</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
            </div>

            <div className="relative">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                    <AvatarFallback>户</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-yellow-500 border-2 border-white dark:border-gray-800" />
            </div>

            <div className="relative">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                    <AvatarFallback>在</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-red-500 border-2 border-white dark:border-gray-800" />
            </div>

            <div className="relative">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                    <AvatarFallback>线</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-gray-500 border-2 border-white dark:border-gray-800" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过添加小圆点作为状态指示器，可以显示用户的在线状态（在线、离开、忙碌、离线等）。",
            },
        },
    },
};

export const WithTooltip: Story = {
    render: () => (
        <div className="flex items-center justify-center">
            <div className="group relative cursor-pointer">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="用户头像" />
                    <AvatarFallback>用</AvatarFallback>
                </Avatar>
                <div className="bg-black text-white text-xs rounded py-1 px-2 absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    张三 (产品经理)
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "为头像添加鼠标悬停提示，显示更多用户信息。使用了简单的CSS解决方案，实际应用可以考虑使用专门的工具提示组件。",
            },
        },
    },
};