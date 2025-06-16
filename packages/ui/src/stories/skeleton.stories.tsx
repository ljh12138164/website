import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Skeleton } from "./skeleton";
import { Card } from "./card";

const meta: Meta<typeof Skeleton> = {
    title: "组件/Skeleton",
    component: Skeleton,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "骨架屏组件，用于加载状态的占位显示。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        className: {
            description: "自定义CSS类名",
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => <Skeleton className="h-4 w-48" />,
    parameters: {
        docs: {
            description: {
                story: "基本的骨架屏占位符。",
            },
        },
    },
};

export const Shapes: Story = {
    render: () => (
        <div className="flex flex-col gap-6">
            <div className="space-y-2">
                <h3 className="text-sm font-medium">线条形状</h3>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-40" />
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">圆形</h3>
                <div className="flex gap-4">
                    <Skeleton className="size-12 rounded-full" />
                    <Skeleton className="size-8 rounded-full" />
                    <Skeleton className="size-6 rounded-full" />
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">矩形</h3>
                <div className="flex gap-4">
                    <Skeleton className="h-16 w-16 rounded-md" />
                    <Skeleton className="h-12 w-24 rounded-md" />
                    <Skeleton className="h-8 w-20 rounded-md" />
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同形状的骨架屏组件。",
            },
        },
    },
};

export const CardSkeleton: Story = {
    render: () => (
        <Card className="w-[360px] p-6 space-y-4">
            <div className="space-y-2">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
            </div>

            <Skeleton className="h-32 w-full rounded-md" />

            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
            </div>

            <div className="flex justify-between items-center gap-4 pt-2">
                <Skeleton className="h-9 w-24 rounded-md" />
                <Skeleton className="h-9 w-24 rounded-md" />
            </div>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "卡片内容的骨架屏，用于文章、产品卡片等内容加载时的占位显示。",
            },
        },
    },
};

export const UserProfile: Story = {
    render: () => (
        <div className="w-[300px] space-y-4">
            <div className="flex gap-4 items-center">
                <Skeleton className="size-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </div>

            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
            </div>

            <div className="flex gap-2">
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-8 w-16 rounded-md" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "用户个人资料的骨架屏，显示头像、姓名、简介等信息的加载状态。",
            },
        },
    },
};

export const TableSkeleton: Story = {
    render: () => (
        <div className="w-[560px] space-y-2">
            <div className="flex gap-4 py-2">
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-5 w-1/4" />
            </div>

            {Array(5).fill(null).map((_, index) => (
                <div key={index} className="flex gap-4 py-4">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "表格数据的骨架屏，用于表格数据加载时的占位显示。",
            },
        },
    },
};

export const ListSkeleton: Story = {
    render: () => (
        <div className="w-[400px] space-y-4">
            {Array(5).fill(null).map((_, index) => (
                <div key={index} className="flex gap-3">
                    <Skeleton className="size-10 rounded-md" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-3/5" />
                    </div>
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "列表项的骨架屏，适用于消息列表、通知列表等场景。",
            },
        },
    },
};

export const FormSkeleton: Story = {
    render: () => (
        <div className="w-[400px] space-y-6">
            <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-20 w-full rounded-md" />
            </div>

            <div className="pt-2">
                <Skeleton className="h-10 w-24 rounded-md" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "表单的骨架屏，显示表单字段和按钮的加载状态。",
            },
        },
    },
};

export const ProductCard: Story = {
    render: () => (
        <div className="flex gap-6">
            {Array(3).fill(null).map((_, index) => (
                <Card key={index} className="w-60 overflow-hidden">
                    <Skeleton className="h-40 w-full rounded-t-lg" />
                    <div className="p-4 space-y-3">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <div className="flex justify-between items-center pt-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "产品卡片的骨架屏，显示图片、标题、价格等信息的加载状态。",
            },
        },
    },
};

export const AnimationControl: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-sm font-medium">默认动画</h3>
                <Skeleton className="h-8 w-48" />
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">无动画</h3>
                <Skeleton className="h-8 w-48 animate-none" />
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">慢速动画</h3>
                <Skeleton className="h-8 w-48 animate-[pulse_3s_infinite]" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "控制骨架屏的动画效果。",
            },
        },
    },
};

export const CustomColors: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-sm font-medium">默认颜色</h3>
                <Skeleton className="h-8 w-48" />
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">灰色</h3>
                <Skeleton className="h-8 w-48 bg-gray-200" />
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">蓝色</h3>
                <Skeleton className="h-8 w-48 bg-blue-100" />
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-medium">带渐变</h3>
                <Skeleton className="h-8 w-48 bg-gradient-to-r from-gray-200 to-gray-100" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义骨架屏的颜色。",
            },
        },
    },
};