import type { Meta, StoryObj } from "@storybook/nextjs";
import { Switch } from "./switch";
import { Label } from "./label";
import {
    IoMdNotifications,
    IoMdMoon,
    IoMdAirplane
} from "react-icons/io";
import { MdBluetooth, MdWifi, MdLocationOn } from "react-icons/md";
import { useId } from "react";

const meta: Meta<typeof Switch> = {
    title: "组件/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "开关组件允许用户在两种状态之间切换。通常用于表示启用/禁用状态。基于Radix UI的Switch组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        checked: {
            control: "boolean",
            description: "控制开关是否处于选中状态",
        },
        disabled: {
            control: "boolean",
            description: "控制开关是否被禁用",
        },
        required: {
            control: "boolean",
            description: "指定开关是否为必填项",
        },
        onCheckedChange: {
            action: "checked changed",
            description: "当开关状态变化时触发的回调函数",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: () => {
        const id = useId();
        return (
            <div className="flex items-center space-x-2">
                <Switch id={id} />
                <Label htmlFor={id}>开关</Label>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "基本开关控件，带有标签。",
            },
        },
    },
};

export const Checked: Story = {
    render: () => {
        const id = useId();
        return (
            <div className="flex items-center space-x-2">
                <Switch id={id} defaultChecked />
                <Label htmlFor={id}>已启用</Label>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "默认为选中状态的开关。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
                <Switch id="disabled" disabled />
                <Label htmlFor="disabled" className="text-muted-foreground">
                    禁用状态（关闭）
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Switch id="disabled-checked" disabled defaultChecked />
                <Label htmlFor="disabled-checked" className="text-muted-foreground">
                    禁用状态（开启）
                </Label>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的开关，无法被用户交互。展示了关闭和开启两种禁用状态。",
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <div className="text-muted-foreground pr-2">
                    <IoMdMoon className="size-4" />
                </div>
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">暗黑模式</Label>
            </div>

            <div className="flex items-center space-x-2">
                <div className="text-muted-foreground pr-2">
                    <IoMdNotifications className="size-4" />
                </div>
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">通知</Label>
            </div>

            <div className="flex items-center space-x-2">
                <div className="text-muted-foreground pr-2">
                    <IoMdAirplane className="size-4" />
                </div>
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">飞行模式</Label>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "与图标一起使用的开关，使功能目的更加清晰。",
            },
        },
    },
};

export const SwitchGroup: Story = {
    render: () => (
        <div className="w-[280px] space-y-4 rounded-lg border p-4">
            <div className="pb-2">
                <h3 className="font-medium">设备设置</h3>
                <p className="text-muted-foreground text-sm">管理您的连接和权限设置</p>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MdWifi className="size-4 text-muted-foreground" />
                        <Label htmlFor="wifi">无线网络</Label>
                    </div>
                    <Switch id="wifi" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MdBluetooth className="size-4 text-muted-foreground" />
                        <Label htmlFor="bluetooth">蓝牙</Label>
                    </div>
                    <Switch id="bluetooth" />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MdLocationOn className="size-4 text-muted-foreground" />
                        <Label htmlFor="location">位置服务</Label>
                    </div>
                    <Switch id="location" defaultChecked />
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "开关组示例，用于设置面板中配置多个选项。",
            },
        },
    },
};

export const WithDescription: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <Label htmlFor="airplane">飞行模式</Label>
                    <p className="text-muted-foreground text-sm">
                        启用后将断开所有网络连接
                    </p>
                </div>
                <Switch id="airplane" />
            </div>

            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <Label htmlFor="updates">自动更新</Label>
                    <p className="text-muted-foreground text-sm">
                        当有新版本可用时自动下载并安装
                    </p>
                </div>
                <Switch id="updates" defaultChecked />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有详细描述的开关，提供更多关于选项的信息。",
            },
        },
    },
};

export const CustomSizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Switch className="h-3.5 w-6" />
                <span className="text-sm">小型开关</span>
            </div>

            <div className="flex items-center space-x-2">
                <Switch className="h-[1.15rem] w-8" />
                <span className="text-sm">默认大小</span>
            </div>

            <div className="flex items-center space-x-2">
                <Switch className="h-6 w-11" />
                <span className="text-sm">大型开关</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过自定义className可以创建不同大小的开关。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Switch className="data-[state=checked]:bg-green-500" />
                <Label>绿色主题</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Switch className="data-[state=checked]:bg-blue-500" defaultChecked />
                <Label>蓝色主题</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Switch className="h-5 w-10 data-[state=checked]:bg-purple-500 [&>span]:h-4 [&>span]:w-4" />
                <Label>紫色圆形开关</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Switch className="rounded-md data-[state=checked]:bg-amber-500" />
                <Label>方形开关（琥珀色）</Label>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的开关，展示了如何修改颜色、形状和大小。",
            },
        },
    },
};

export const SwitchWithForm: Story = {
    render: () => (
        <form
            className="space-y-6 border p-6 rounded-lg w-[350px]"
            onSubmit={(e) => {
                e.preventDefault();
                alert("设置已保存！");
            }}
        >
            <div className="space-y-4">
                <h3 className="text-lg font-medium">隐私设置</h3>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="cookie">接受必要的Cookie</Label>
                            <p className="text-muted-foreground text-xs">
                                网站功能所必需的Cookie
                            </p>
                        </div>
                        <Switch id="cookie" defaultChecked disabled />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="analytics">分析Cookie</Label>
                            <p className="text-muted-foreground text-xs">
                                帮助我们改进网站的Cookie
                            </p>
                        </div>
                        <Switch id="analytics" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="marketing">营销Cookie</Label>
                            <p className="text-muted-foreground text-xs">
                                用于向您展示个性化广告的Cookie
                            </p>
                        </div>
                        <Switch id="marketing" />
                    </div>
                </div>
            </div>

            <div className="flex gap-2 justify-end">
                <button
                    type="button"
                    className="border-input hover:bg-accent hover:text-accent-foreground rounded-md border px-3 py-2 text-sm"
                >
                    取消
                </button>
                <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-2 text-sm"
                >
                    保存设置
                </button>
            </div>
        </form>
    ),
    parameters: {
        docs: {
            description: {
                story: "在表单中使用开关的示例，用于用户首选项设置。",
            },
        },
    },
};