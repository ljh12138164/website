import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
    title: "组件/Separator",
    component: Separator,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "分隔符组件，用于视觉上分隔不同内容。基于Radix UI的Separator组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "radio" },
            description: "分隔符的方向",
        },
        decorative: {
            control: "boolean",
            description: "指定分隔符是否纯装饰性的",
        },
        className: {
            control: "text",
            description: "自定义样式类名",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
    render: () => (
        <div className="w-[400px] space-y-4">
            <div>上方内容</div>
            <Separator />
            <div>下方内容</div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的水平分隔符。",
            },
        },
    },
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-6 items-center space-x-4 text-sm">
            <div>左侧</div>
            <Separator orientation="vertical" />
            <div>中间</div>
            <Separator orientation="vertical" />
            <div>右侧</div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "垂直方向的分隔符。",
            },
        },
    },
};

export const WithLabels: Story = {
    render: () => (
        <div className="w-[400px] space-y-6">
            <div className="space-y-1">
                <h4 className="text-sm font-medium">个人信息</h4>
                <p className="text-sm text-muted-foreground">
                    更新您的个人信息和联系方式。
                </p>
            </div>
            <Separator />
            <div className="space-y-1">
                <h4 className="text-sm font-medium">安全设置</h4>
                <p className="text-sm text-muted-foreground">
                    管理密码和二次验证。
                </p>
            </div>
            <Separator />
            <div className="space-y-1">
                <h4 className="text-sm font-medium">通知偏好</h4>
                <p className="text-sm text-muted-foreground">
                    设置电子邮件和应用通知。
                </p>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在内容块之间使用分隔符。",
            },
        },
    },
};

export const CustomStyles: Story = {
    render: () => (
        <div className="w-[400px] space-y-6">
            <div className="flex items-center">
                <div>基本分隔符</div>
                <Separator className="mx-4 flex-1" />
                <div>末尾</div>
            </div>

            <div className="flex items-center">
                <div>加粗</div>
                <Separator className="mx-4 flex-1 h-0.5" />
                <div>分隔符</div>
            </div>

            <div className="flex items-center">
                <div>红色</div>
                <Separator className="mx-4 flex-1 bg-red-500" />
                <div>分隔符</div>
            </div>

            <div className="flex items-center">
                <div>虚线</div>
                <Separator className="mx-4 flex-1 border-t border-dashed border-border bg-transparent" />
                <div>分隔符</div>
            </div>

            <div className="flex items-center">
                <div>渐变</div>
                <Separator className="mx-4 flex-1 h-[2px] bg-gradient-to-r from-primary to-transparent" />
                <div>分隔符</div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义分隔符样式，包括颜色、高度和样式。",
            },
        },
    },
};

export const WithContent: Story = {
    render: () => (
        <div className="w-[400px] my-6 relative">
            <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-background px-2 text-xs text-muted-foreground">
                    或者继续使用
                </span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在分隔符中添加文本内容，常用于登录/注册表单中。",
            },
        },
    },
};

export const ListDivider: Story = {
    render: () => (
        <div className="w-[300px] rounded-lg border p-4">
            <h4 className="mb-4 text-sm font-medium">应用设置</h4>
            <div className="space-y-1.5">
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm">隐私设置</span>
                    <span className="text-xs text-muted-foreground">已配置</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm">通知</span>
                    <span className="text-xs text-muted-foreground">全部开启</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm">外观偏好</span>
                    <span className="text-xs text-muted-foreground">暗色模式</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm">语言设置</span>
                    <span className="text-xs text-muted-foreground">简体中文</span>
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在列表项之间使用分隔符。",
            },
        },
    },
};

export const SectionHeaders: Story = {
    render: () => (
        <div className="w-[350px] space-y-4">
            <div className="flex items-center">
                <h4 className="text-sm font-medium whitespace-nowrap">个人设置</h4>
                <Separator className="ml-4 flex-1" />
            </div>
            <div className="ml-2 space-y-1">
                <p className="text-sm">个人资料</p>
                <p className="text-sm">账户安全</p>
            </div>

            <div className="flex items-center pt-4">
                <h4 className="text-sm font-medium whitespace-nowrap">通知设置</h4>
                <Separator className="ml-4 flex-1" />
            </div>
            <div className="ml-2 space-y-1">
                <p className="text-sm">电子邮件通知</p>
                <p className="text-sm">推送通知</p>
            </div>

            <div className="flex items-center pt-4">
                <h4 className="text-sm font-medium whitespace-nowrap">应用设置</h4>
                <Separator className="ml-4 flex-1" />
            </div>
            <div className="ml-2 space-y-1">
                <p className="text-sm">语言与区域</p>
                <p className="text-sm">外观选项</p>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在带有标题的分隔符，用于标记内容节。",
            },
        },
    },
};

export const NavigationWithSeparator: Story = {
    render: () => (
        <div className="w-[240px] space-y-2 rounded-lg border p-4">
            <div className="flex justify-center pb-2">
                <div className="text-lg font-semibold">控制面板</div>
            </div>
            <Separator />
            <div className="py-1.5">首页</div>
            <div className="py-1.5">我的任务</div>
            <div className="py-1.5">消息</div>
            <Separator className="my-2" />
            <div className="py-1.5">设置</div>
            <div className="py-1.5">帮助中心</div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在导航菜单中使用分隔符。",
            },
        },
    },
};

export const CardWithSeparator: Story = {
    render: () => (
        <div className="w-[380px] rounded-lg border p-6">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">订单详情</h3>
                <p className="text-sm text-muted-foreground">订单号 #12345</p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span>产品价格</span>
                    <span>¥299.00</span>
                </div>
                <div className="flex justify-between">
                    <span>优惠折扣</span>
                    <span className="text-green-600">-¥30.00</span>
                </div>
                <div className="flex justify-between">
                    <span>运费</span>
                    <span>¥10.00</span>
                </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between">
                <span className="font-medium">总计</span>
                <span className="font-medium">¥279.00</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在卡片组件中使用分隔符分隔不同内容区域。",
            },
        },
    },
};