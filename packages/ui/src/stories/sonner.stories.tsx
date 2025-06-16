import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Toaster } from "./sonner";
import { Button } from "./button";
import { toast } from "sonner";
import {
    BsCheck,
    BsX,
    BsExclamationTriangle,
    BsInfoCircle,
    BsQuestionCircle,
    BsBell,
    BsGear,
    BsArrowClockwise,
    BsEmojiSmile,
    BsGithub
} from "react-icons/bs";

const meta: Meta<typeof Toaster> = {
    title: "组件/Toaster",
    component: Toaster,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Toast通知组件，基于Sonner库构建的轻量级、可自定义的通知系统。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        position: {
            options: ["top-left", "top-right", "bottom-left", "bottom-right", "top-center", "bottom-center"],
            control: { type: "select" },
            description: "Toast通知的显示位置",
        },
        expand: {
            control: "boolean",
            description: "是否展开Toast通知",
        },
        closeButton: {
            control: "boolean",
            description: "是否显示关闭按钮",
        },
        offset: {
            control: "number",
            description: "Toast通知距离视窗边缘的偏移量",
        },
        duration: {
            control: "number",
            description: "Toast通知显示的持续时间（毫秒）",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4">
            <Toaster />
            <Button
                onClick={() => toast("这是一条默认通知")}
            >
                显示通知
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的Toast通知。",
            },
        },
    },
};

export const WithTitle: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4">
            <Toaster />
            <Button
                onClick={() => toast("这是一条带标题的通知", {
                    description: "这里是通知的详细描述内容，可以包含更多信息。",
                })}
            >
                带标题的通知
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有标题和描述的Toast通知。",
            },
        },
    },
};

export const ToastTypes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Toaster />
            <Button
                variant="default"
                onClick={() => toast.success("操作成功", {
                    description: "您的更改已成功保存。",
                    icon: <BsCheck className="size-4" />,
                })}
            >
                成功通知
            </Button>
            <Button
                variant="destructive"
                onClick={() => toast.error("操作失败", {
                    description: "保存更改时出现错误，请重试。",
                    icon: <BsX className="size-4" />,
                })}
            >
                错误通知
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.info("提示信息", {
                    description: "这是一条重要的信息通知。",
                    icon: <BsInfoCircle className="size-4" />,
                })}
            >
                信息通知
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.warning("警告", {
                    description: "请注意，此操作可能导致数据丢失。",
                    icon: <BsExclamationTriangle className="size-4" />,
                })}
            >
                警告通知
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同类型的Toast通知，包括成功、错误、信息和警告。",
            },
        },
    },
};

export const CustomDuration: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Toaster />
            <Button
                onClick={() => toast("短暂通知", {
                    description: "这条通知将在2秒后消失",
                    duration: 2000,
                })}
            >
                短暂通知 (2秒)
            </Button>
            <Button
                onClick={() => toast("持久通知", {
                    description: "这条通知将在8秒后消失",
                    duration: 8000,
                })}
            >
                持久通知 (8秒)
            </Button>
            <Button
                onClick={() => toast("永久通知", {
                    description: "这条通知不会自动消失，需要手动关闭",
                    duration: Infinity,
                })}
            >
                永久通知
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义Toast通知的显示时长。",
            },
        },
    },
};

export const WithActions: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4">
            <Toaster />
            <Button
                onClick={() => {
                    toast("文件已上传", {
                        description: "您可以查看或下载该文件。",
                        action: {
                            label: "查看文件",
                            onClick: () => console.log("查看文件"),
                        },
                    });
                }}
            >
                带单个操作
            </Button>
            <Button
                onClick={() => {
                    toast("邀请已发送", {
                        description: "您已成功邀请用户加入项目。",
                        action: {
                            label: "撤销",
                            onClick: () => console.log("撤销邀请"),
                        },
                        cancel: {
                            label: "关闭",
                            onClick: () => console.log("关闭通知"),
                        },
                    });
                }}
            >
                带多个操作
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有操作按钮的Toast通知。",
            },
        },
    },
};

export const Positions: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Toaster position="top-right" />
            <Button
                onClick={() => toast("右上角通知", {
                    description: "显示在右上角",
                    position: "top-right",
                })}
            >
                右上角
            </Button>
            <Button
                onClick={() => toast("左上角通知", {
                    description: "显示在左上角",
                    position: "top-left",
                })}
            >
                左上角
            </Button>
            <Button
                onClick={() => toast("右下角通知", {
                    description: "显示在右下角",
                    position: "bottom-right",
                })}
            >
                右下角
            </Button>
            <Button
                onClick={() => toast("左下角通知", {
                    description: "显示在左下角",
                    position: "bottom-left",
                })}
            >
                左下角
            </Button>
            <Button
                onClick={() => toast("顶部居中通知", {
                    description: "显示在顶部居中",
                    position: "top-center",
                })}
            >
                顶部居中
            </Button>
            <Button
                onClick={() => toast("底部居中通知", {
                    description: "显示在底部居中",
                    position: "bottom-center",
                })}
            >
                底部居中
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同位置的Toast通知。",
            },
        },
    },
};

export const CustomIcons: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Toaster />
            <Button
                onClick={() => toast("新消息", {
                    description: "您有一条新消息",
                    icon: <BsBell className="size-4" />,
                })}
            >
                通知图标
            </Button>
            <Button
                onClick={() => toast("系统更新", {
                    description: "系统设置已更新",
                    icon: <BsGear className="size-4" />,
                })}
            >
                设置图标
            </Button>
            <Button
                onClick={() => toast("正在同步", {
                    description: "正在同步您的数据",
                    icon: <BsArrowClockwise className="size-4 animate-spin" />,
                })}
            >
                动画图标
            </Button>
            <Button
                onClick={() => toast("问题反馈", {
                    description: "感谢您的反馈",
                    icon: <BsEmojiSmile className="size-4 text-yellow-500" />,
                })}
            >
                彩色图标
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "使用自定义图标的Toast通知。",
            },
        },
    },
};



export const CustomStyling: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <Toaster />
            <Button
                onClick={() => toast("自定义样式", {
                    description: "这是一个自定义样式的通知",
                    className: "bg-blue-500 text-white border-blue-600",
                })}
            >
                蓝色主题
            </Button>
            <Button
                onClick={() => toast("成功通知", {
                    description: "操作已成功完成",
                    className: "bg-green-500 text-white border-green-600",
                    icon: <BsCheck className="size-4" />,
                })}
            >
                绿色主题
            </Button>
            <Button
                onClick={() => toast("品牌通知", {
                    description: "查看我们的GitHub仓库",
                    icon: <BsGithub className="size-4" />,
                    className: "bg-gray-900 text-white border-gray-800",
                })}
            >
                深色主题
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的Toast通知。",
            },
        },
    },
};


export const ToastGroup: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4">
            <Toaster />
            <Button
                onClick={() => {
                    toast("第一条通知", { description: "这是第一条通知" });
                    setTimeout(() => {
                        toast.success("第二条通知", { description: "这是第二条通知" });
                    }, 1000);
                    setTimeout(() => {
                        toast.info("第三条通知", { description: "这是第三条通知" });
                    }, 2000);
                }}
            >
                显示多条通知
            </Button>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "同时显示多条Toast通知。",
            },
        },
    },
};