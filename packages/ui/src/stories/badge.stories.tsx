import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge } from "./badge";
import { IoCheckmarkCircle, IoHourglass, IoWarning } from "react-icons/io5";
import { MdNewReleases, MdAccessTime } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";

const meta: Meta<typeof Badge> = {
    title: "组件/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Badge组件用于显示状态、计数或标签等信息，通常用于突出显示项目的状态或分类。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "secondary", "destructive", "outline"],
            description: "徽章的视觉样式变体",
            table: {
                defaultValue: { summary: "default" },
            },
        },
        asChild: {
            control: "boolean",
            description: "当设置为true时，将徽章渲染为其子元素，保留徽章的样式",
            table: {
                defaultValue: { summary: "false" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: "默认徽章",
    },
    parameters: {
        docs: {
            description: {
                story: "默认的徽章样式，使用主题的主色调。",
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "次要徽章",
    },
    parameters: {
        docs: {
            description: {
                story: "使用次要颜色的徽章，通常用于不太突出但仍需要区分的内容。",
            },
        },
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "危险徽章",
    },
    parameters: {
        docs: {
            description: {
                story: "用于表示危险、错误或需要警惕的状态。",
            },
        },
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "轮廓徽章",
    },
    parameters: {
        docs: {
            description: {
                story: "轮廓样式的徽章，只有边框而无填充背景，视觉效果较为轻量。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge>
                <IoCheckmarkCircle /> 已完成
            </Badge>
            <Badge variant="secondary">
                <IoHourglass /> 处理中
            </Badge>
            <Badge variant="destructive">
                <IoWarning /> 错误
            </Badge>
            <Badge variant="outline">
                <MdAccessTime /> 等待中
            </Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图标的徽章可以增强视觉效果，使信息更加直观。",
            },
        },
    },
};

export const IconOnly: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge className="p-1">
                <IoCheckmarkCircle />
                <span className="sr-only">已完成</span>
            </Badge>
            <Badge variant="secondary" className="p-1">
                <IoHourglass />
                <span className="sr-only">处理中</span>
            </Badge>
            <Badge variant="destructive" className="p-1">
                <IoWarning />
                <span className="sr-only">错误</span>
            </Badge>
            <Badge variant="outline" className="p-1">
                <MdAccessTime />
                <span className="sr-only">等待中</span>
            </Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "仅包含图标的徽章，更加简洁。注意添加sr-only的文本以保持无障碍性。",
            },
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Badge className="text-[0.625rem] px-1.5 py-0">超小号</Badge>
            <Badge className="text-xs px-2 py-0.5">小号</Badge>
            <Badge className="text-sm px-2.5 py-1">中号</Badge>
            <Badge className="text-base px-3 py-1.5">大号</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过自定义类名可以创建不同尺寸的徽章。",
            },
        },
    },
};

export const Rounded: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge className="rounded-md">默认圆角</Badge>
            <Badge className="rounded-full px-3">椭圆形</Badge>
            <Badge className="rounded-none">无圆角</Badge>
            <Badge className="rounded-lg">大圆角</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同的圆角设置可以创建不同形状的徽章。",
            },
        },
    },
};

export const CustomColors: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge className="bg-blue-500 hover:bg-blue-600">蓝色徽章</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">绿色徽章</Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">紫色徽章</Badge>
            <Badge className="bg-orange-500 hover:bg-orange-600">橙色徽章</Badge>
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500">
                渐变徽章
            </Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "可以通过自定义className来设置不同的背景颜色，包括纯色和渐变色。",
            },
        },
    },
};

export const StatusBadges: Story = {
    render: () => (
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Badge className="bg-green-500">
                    <IoCheckmarkCircle /> 活跃
                </Badge>
                <span>用户状态正常，可以访问所有功能。</span>
            </div>
            <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500">
                    <MdAccessTime /> 待审核
                </Badge>
                <span>用户已注册，等待管理员审核。</span>
            </div>
            <div className="flex items-center gap-2">
                <Badge className="bg-red-500">
                    <IoWarning /> 已禁用
                </Badge>
                <span>用户账号已被禁用，无法登录。</span>
            </div>
            <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-blue-500 text-blue-500">
                    <FiActivity /> 新注册
                </Badge>
                <span>新注册用户，注册时间少于7天。</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "状态徽章的常见用例，用于表示项目或实体的不同状态。",
            },
        },
    },
};

export const CountBadges: Story = {
    render: () => (
        <div className="flex flex-wrap gap-6">
            <div className="relative">
                <button className="p-2 rounded-md bg-secondary text-secondary-foreground">
                    消息
                </button>
                <Badge className="absolute -top-2 -right-2 rounded-full h-5 min-w-5 flex items-center justify-center p-0">
                    5
                </Badge>
            </div>

            <div className="relative">
                <button className="p-2 rounded-md bg-secondary text-secondary-foreground">
                    通知
                </button>
                <Badge className="absolute -top-2 -right-2 rounded-full h-5 min-w-5 flex items-center justify-center p-0 bg-red-500">
                    99+
                </Badge>
            </div>

            <div className="flex items-center">
                <span className="mr-2">未读邮件</span>
                <Badge variant="secondary" className="rounded-full">
                    12
                </Badge>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "用作计数指示器的徽章，通常用于显示未读消息、通知或其他项目的数量。",
            },
        },
    },
};

export const InteractiveBadges: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge asChild>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    可点击徽章
                </a>
            </Badge>

            <Badge asChild variant="secondary">
                <button onClick={() => alert("徽章按钮被点击")}>
                    按钮徽章
                </button>
            </Badge>

            <Badge asChild variant="outline">
                <a href="#" onClick={(e) => e.preventDefault()}>
                    <MdNewReleases />
                    新功能
                </a>
            </Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "使用asChild属性可以创建可交互的徽章，如链接或按钮。",
            },
        },
    },
};

export const TagGroup: Story = {
    render: () => (
        <div className="border p-4 rounded-md max-w-md">
            <h3 className="text-sm font-medium mb-2">文章标签:</h3>
            <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-blue-50">
                    React
                </Badge>
                <Badge variant="outline" className="bg-green-50">
                    前端开发
                </Badge>
                <Badge variant="outline" className="bg-purple-50">
                    教程
                </Badge>
                <Badge variant="outline" className="bg-yellow-50">
                    JavaScript
                </Badge>
                <Badge variant="outline" className="bg-pink-50">
                    UI设计
                </Badge>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "使用徽章组作为标签组，展示项目的分类或属性。",
            },
        },
    },
};

export const WithDot: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                在线
            </Badge>
            <Badge variant="outline" className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                离开
            </Badge>
            <Badge variant="outline" className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                忙碌
            </Badge>
            <Badge variant="outline" className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                离线
            </Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "添加小圆点的徽章，通常用于表示状态，如在线状态指示器。",
            },
        },
    },
};

export const Animated: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge className="animate-pulse bg-red-500">
                <AiOutlineFire /> 热门
            </Badge>

            <Badge className="relative bg-blue-500">
                新消息
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-white animate-ping"></span>
            </Badge>

            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient">
                限时特惠
            </Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过添加动画效果，可以使徽章更加引人注目，适用于需要用户特别关注的内容。",
            },
        },
    },
};