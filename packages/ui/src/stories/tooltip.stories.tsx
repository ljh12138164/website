import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import {
    FaInfoCircle,
    FaQuestionCircle,
    FaExclamationCircle,
    FaHeart,
    FaCog,
    FaUser,
    FaChartLine
} from "react-icons/fa";
import {
    AiOutlineQuestionCircle,
    AiOutlineInfoCircle,
    AiOutlineEdit,
    AiOutlinePlusCircle,
    AiOutlineDelete
} from "react-icons/ai";

const meta: Meta<typeof Tooltip> = {
    title: "组件/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "工具提示组件为元素添加悬停时的浮动信息提示。基于Radix UI的Tooltip组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        delayDuration: {
            control: {
                type: "number",
                min: 0,
                max: 1000,
                step: 100,
            },
            description: "工具提示显示前的延迟时间（毫秒）",
        },
        defaultOpen: {
            control: "boolean",
            description: "工具提示是否默认打开",
        },
        open: {
            control: "boolean",
            description: "控制工具提示的打开状态",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                    <FaInfoCircle className="size-4" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                这是一个基本的工具提示
            </TooltipContent>
        </Tooltip>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的工具提示，悬停在按钮上时显示信息。",
            },
        },
    },
};

export const TextTrigger: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger className="underline decoration-dotted underline-offset-4">
                悬停在文本上
            </TooltipTrigger>
            <TooltipContent>
                这是有关此文本的附加信息
            </TooltipContent>
        </Tooltip>
    ),
    parameters: {
        docs: {
            description: {
                story: "使用文本作为触发器的工具提示。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                        <FaInfoCircle className="size-4 text-blue-500" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="flex items-center gap-1.5">
                        <FaInfoCircle className="size-3.5 text-blue-300" />
                        <span>提供有用的信息</span>
                    </div>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                        <FaQuestionCircle className="size-4 text-amber-500" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="flex items-center gap-1.5">
                        <FaQuestionCircle className="size-3.5 text-amber-300" />
                        <span>需要帮助？</span>
                    </div>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                        <FaExclamationCircle className="size-4 text-red-500" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <div className="flex items-center gap-1.5">
                        <FaExclamationCircle className="size-3.5 text-red-300" />
                        <span>警告：请小心操作</span>
                    </div>
                </TooltipContent>
            </Tooltip>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有图标的工具提示，增强视觉效果和可读性。",
            },
        },
    },
};

export const Positions: Story = {
    render: () => (
        <div className="flex flex-wrap gap-8 items-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">上方提示</Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={5}>
                    工具提示显示在上方
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">右侧提示</Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                    工具提示显示在右侧
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">下方提示</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={5}>
                    工具提示显示在下方
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">左侧提示</Button>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={5}>
                    工具提示显示在左侧
                </TooltipContent>
            </Tooltip>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "工具提示可以在四个不同位置显示：上、右、下、左。",
            },
        },
    },
};

export const DelayDuration: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <Button variant="outline">无延迟</Button>
                </TooltipTrigger>
                <TooltipContent>
                    立即显示（延迟 0ms）
                </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                    <Button variant="outline">短延迟</Button>
                </TooltipTrigger>
                <TooltipContent>
                    短暂延迟（延迟 500ms）
                </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={1000}>
                <TooltipTrigger asChild>
                    <Button variant="outline">长延迟</Button>
                </TooltipTrigger>
                <TooltipContent>
                    较长延迟（延迟 1000ms）
                </TooltipContent>
            </Tooltip>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过调整delayDuration属性来控制工具提示显示前的延迟时间。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="border-blue-500 text-blue-500">
                        蓝色提示
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-blue-500 text-blue-50">
                    自定义蓝色工具提示
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="border-green-500 text-green-500">
                        绿色提示
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-green-500 text-green-50">
                    自定义绿色工具提示
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" className="border-purple-500 text-purple-500">
                        紫色提示
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-purple-500 text-purple-50">
                    自定义紫色工具提示
                    <div className="bg-purple-500 rotate-45 size-2.5 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </TooltipContent>
            </Tooltip>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义工具提示的样式，包括颜色和背景。",
            },
        },
    },
};

export const WithDescription: Story = {
    render: () => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline">
                    <FaCog className="mr-2 size-4" />
                    设置
                </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-[220px]">
                <div className="space-y-1">
                    <h4 className="font-semibold">系统设置</h4>
                    <p className="text-[10px] font-normal leading-snug">
                        管理您的账户偏好、界面设置和通知选项。
                    </p>
                </div>
            </TooltipContent>
        </Tooltip>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有标题和描述的工具提示，提供更详细的信息。",
            },
        },
    },
};

export const InlineToolTips: Story = {
    render: () => (
        <div className="max-w-md bg-muted/40 p-4 rounded-md space-y-4">
            <h3 className="text-lg font-medium">隐私政策</h3>
            <p className="text-sm text-muted-foreground">
                我们会收集您的个人信息
                <Tooltip>
                    <TooltipTrigger className="inline-flex mx-1 cursor-help underline decoration-dotted underline-offset-4">
                        用户数据
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                        用户数据包括您的姓名、电子邮件地址、IP地址和设备信息。
                    </TooltipContent>
                </Tooltip>
                以提升您的使用体验。我们不会出售您的
                <Tooltip>
                    <TooltipTrigger className="inline-flex mx-1 cursor-help underline decoration-dotted underline-offset-4">
                        个人隐私
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                        个人隐私包括但不限于您的联系方式、支付信息和浏览历史。
                    </TooltipContent>
                </Tooltip>
                给第三方。
            </p>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在文本中内联使用工具提示，为特定术语提供解释。",
            },
        },
    },
};

export const InteractiveComponents: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                        <AiOutlineEdit className="mr-1 size-4" /> 编辑
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    编辑当前文档
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                        <AiOutlinePlusCircle className="mr-1 size-4" /> 新建
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    创建新文档
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline" size="sm" className="text-red-500 border-red-200">
                        <AiOutlineDelete className="mr-1 size-4" /> 删除
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    永久删除此文档
                </TooltipContent>
            </Tooltip>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "为交互组件添加工具提示，提供额外的操作说明。",
            },
        },
    },
};

export const ChartTooltips: Story = {
    render: () => (
        <div className="w-full max-w-sm p-4 border rounded-lg">
            <h3 className="text-sm font-medium mb-4">月度销售数据</h3>
            <div className="h-[160px] flex items-end justify-between gap-2">
                {[32, 46, 28, 40, 57, 48, 68, 72, 55, 60, 49, 58].map((value, index) => {
                    const month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"][index];
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <div
                                    className="bg-primary/80 hover:bg-primary rounded-sm w-5 cursor-pointer transition-colors"
                                    style={{ height: `${value * 1.8}px` }}
                                ></div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <div className="text-[10px] space-y-1">
                                    <div className="font-medium">{month}月销售额</div>
                                    <div className="flex items-center">
                                        <FaChartLine className="mr-1 size-3" />
                                        {value}万元
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <div>1月</div>
                <div>12月</div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在数据可视化中使用工具提示，显示详细的数据点信息。",
            },
        },
    },
};

export const ControlledTooltip: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);

        return (
            <div className="flex flex-col items-center gap-4">
                <Tooltip open={open} onOpenChange={setOpen}>
                    <TooltipTrigger asChild>
                        <Button variant="outline">受控工具提示</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        这个工具提示由React状态控制
                    </TooltipContent>
                </Tooltip>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "隐藏" : "显示"}工具提示
                </Button>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "使用React状态控制工具提示的显示和隐藏，可以通过编程方式控制工具提示。",
            },
        },
    },
};