import type { Meta, StoryObj } from "@storybook/nextjs";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { BiInfoCircle } from "react-icons/bi";
import { RiErrorWarningLine, RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";

const meta: Meta<typeof Alert> = {
    title: "组件/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Alert组件用于向用户显示简短、重要的消息，如通知、警告或错误提示。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive"],
            description: "控制警告框的视觉样式变体",
            table: {
                defaultValue: { summary: "default" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    render: () => (
        <Alert className="w-[400px]">
            <AlertTitle>提示</AlertTitle>
            <AlertDescription>
                这是一个基本的警告提示框，用于显示一般性的信息。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "基础警告框，不包含图标，适用于简单的提示信息。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <Alert className="w-[400px]">
            <BiInfoCircle className="size-4" />
            <AlertTitle>提示</AlertTitle>
            <AlertDescription>
                带图标的警告框可以更清晰地传达信息类型。图标应放在组件的开头。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "在警告框前添加图标可以增强视觉效果，帮助用户快速理解消息的性质。",
            },
        },
    },
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive" className="w-[400px]">
            <RiCloseCircleLine className="size-4" />
            <AlertTitle>错误</AlertTitle>
            <AlertDescription>
                您的会话已过期。请重新登录以继续使用系统。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "破坏性变体的警告框，通常用于错误消息或需要用户立即注意的警告。",
            },
        },
    },
};

export const Success: Story = {
    render: () => (
        <Alert className="border-green-500 text-green-600 w-[400px]">
            <RiCheckboxCircleLine className="size-4 text-green-500" />
            <AlertTitle>成功</AlertTitle>
            <AlertDescription className="text-green-600/90">
                您的更改已成功保存。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过自定义样式创建的成功警告框。使用绿色边框和文本表示操作成功。",
            },
        },
    },
};

export const Warning: Story = {
    render: () => (
        <Alert className="border-yellow-500 text-yellow-600 w-[400px]">
            <RiErrorWarningLine className="size-4 text-yellow-500" />
            <AlertTitle>警告</AlertTitle>
            <AlertDescription className="text-yellow-600/90">
                您的账户存储空间不足，请考虑升级或清理旧文件。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过自定义样式创建的警告提示框。使用黄色边框和文本表示需要注意但不是错误的情况。",
            },
        },
    },
};

export const SimpleText: Story = {
    render: () => (
        <Alert className="w-[400px]">
            <BiInfoCircle className="size-4" />
            <AlertDescription>
                简单的警告框，只包含描述文本，没有标题。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "只包含描述文本的简化警告框，适用于简短的通知。",
            },
        },
    },
};

export const WithActions: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <BiInfoCircle className="size-4" />
            <AlertTitle>浏览器通知</AlertTitle>
            <AlertDescription>
                <p className="mb-2">您可以启用浏览器通知以接收实时更新。</p>
                <div className="flex gap-2 mt-2">
                    <button className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary/90">
                        允许
                    </button>
                    <button className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
                        稍后再说
                    </button>
                </div>
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "警告框中可以包含交互元素，如按钮，让用户直接对信息采取行动。",
            },
        },
    },
};

export const CustomStyle: Story = {
    render: () => (
        <Alert className="bg-purple-50 border-purple-200 text-purple-800 w-[400px]">
            <AlertTitle className="text-purple-800">自定义样式</AlertTitle>
            <AlertDescription className="text-purple-700">
                通过添加自定义className，可以完全控制警告框的外观。
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "可以通过自定义className来创建符合项目设计系统的独特警告框样式。",
            },
        },
    },
};

export const WithList: Story = {
    render: () => (
        <Alert className="w-[450px]">
            <BiInfoCircle className="size-4" />
            <AlertTitle>更新说明</AlertTitle>
            <AlertDescription>
                本次更新包含以下内容：
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>修复了登录界面的显示问题</li>
                    <li>提升了图片加载速度</li>
                    <li>新增了暗色主题支持</li>
                </ul>
            </AlertDescription>
        </Alert>
    ),
    parameters: {
        docs: {
            description: {
                story: "警告框的描述部分可以包含格式化内容，如列表，以更好地组织信息。",
            },
        },
    },
};