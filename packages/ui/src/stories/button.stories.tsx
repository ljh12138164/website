import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";
import { HiMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";

const meta: Meta<typeof Button> = {
    title: "组件/Button",
    component: Button,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Button组件是应用程序中交互的核心元素，用于触发动作、提交表单或导航。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
            description: "按钮的视觉样式变体",
            table: {
                defaultValue: { summary: "default" },
            },
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
            description: "按钮的大小变体",
            table: {
                defaultValue: { summary: "default" },
            },
        },
        asChild: {
            control: "boolean",
            description: "当设置为true时，将按钮渲染为其子元素，保留按钮的样式",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        disabled: {
            control: "boolean",
            description: "控制按钮是否处于禁用状态",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "按钮",
        variant: "default",
    },
    parameters: {
        docs: {
            description: {
                story: "默认按钮样式，用于主要操作。",
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        children: "次要按钮",
        variant: "secondary",
    },
    parameters: {
        docs: {
            description: {
                story: "次要按钮样式，用于辅助操作。",
            },
        },
    },
};

export const Destructive: Story = {
    args: {
        children: "删除",
        variant: "destructive",
    },
    parameters: {
        docs: {
            description: {
                story: "破坏性按钮样式，用于警告用户操作可能导致数据删除或其他不可逆操作。",
            },
        },
    },
};

export const Outline: Story = {
    args: {
        children: "轮廓按钮",
        variant: "outline",
    },
    parameters: {
        docs: {
            description: {
                story: "轮廓按钮样式，只有边框而无填充背景。",
            },
        },
    },
};

export const Ghost: Story = {
    args: {
        children: "幽灵按钮",
        variant: "ghost",
    },
    parameters: {
        docs: {
            description: {
                story: "幽灵按钮样式，无背景和边框，仅在悬停时显示背景。",
            },
        },
    },
};

export const Link: Story = {
    args: {
        children: "链接按钮",
        variant: "link",
    },
    parameters: {
        docs: {
            description: {
                story: "链接按钮样式，看起来像一个链接但保持按钮的可点击区域和交互特性。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <Button>
            <HiMail className="size-4" />
            邮件
        </Button>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有图标的按钮。图标可以增强按钮的含义，使用户更容易理解按钮的功能。",
            },
        },
    },
};

export const IconOnly: Story = {
    args: {
        size: "icon",
        "aria-label": "发送",
        children: <FiSend className="size-4" />,
    },
    parameters: {
        docs: {
            description: {
                story: "仅包含图标的按钮。请务必添加aria-label以确保无障碍性。",
            },
        },
    },
};

export const Disabled: Story = {
    args: {
        children: "禁用按钮",
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: "禁用状态的按钮。用于指示用户当前无法执行该操作。",
            },
        },
    },
};

export const Loading: Story = {
    render: () => (
        <Button disabled>
            <AiOutlineLoading className="mr-2 size-4 animate-spin" />
            处理中...
        </Button>
    ),
    parameters: {
        docs: {
            description: {
                story: "加载状态的按钮，通常在提交表单或异步操作期间使用。",
            },
        },
    },
};

export const Small: Story = {
    args: {
        children: "小按钮",
        size: "sm",
    },
    parameters: {
        docs: {
            description: {
                story: "较小尺寸的按钮，适用于空间有限的界面。",
            },
        },
    },
};

export const Large: Story = {
    args: {
        children: "大按钮",
        size: "lg",
    },
    parameters: {
        docs: {
            description: {
                story: "较大尺寸的按钮，适用于需要更明显的操作。",
            },
        },
    },
};

export const ButtonGroup: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Button variant="outline">取消</Button>
            <Button>保存</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "按钮组示例，展示多个按钮的布局。",
            },
        },
    },
};

export const FloatingActionButton: Story = {
    render: () => (
        <Button
            variant="default"
            size="icon"
            className="rounded-full shadow-lg fixed bottom-4 right-4"
            aria-label="添加"
        >
            <IoAdd className="size-5" />
        </Button>
    ),
    parameters: {
        docs: {
            description: {
                story: "浮动操作按钮(FAB)示例，通常用于主要添加操作，固定在界面的一角。",
            },
        },
    },
};