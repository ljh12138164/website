import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Slider } from "./slider";
import {
    BsVolumeUp,
    BsVolumeMute,
    BsSun,
    BsMoon,
    BsThermometerHalf,
    BsSpeedometer,
    BsZoomIn,
    BsZoomOut
} from "react-icons/bs";
import { Label } from "./label";

const meta: Meta<typeof Slider> = {
    title: "组件/Slider",
    component: Slider,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "滑块组件，用于在一定范围内选择值。基于Radix UI的Slider组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        defaultValue: {
            control: "object",
            description: "滑块的默认值",
        },
        min: {
            control: { type: "number" },
            description: "滑块的最小值",
        },
        max: {
            control: { type: "number" },
            description: "滑块的最大值",
        },
        step: {
            control: { type: "number" },
            description: "滑块的步长",
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "radio" },
            description: "滑块的方向",
        },
        disabled: {
            control: "boolean",
            description: "是否禁用滑块",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {
        defaultValue: [50],
    },
    parameters: {
        docs: {
            description: {
                story: "基本的滑块组件，用于在范围内选择单个值。",
            },
        },
    },
};

export const Range: Story = {
    args: {
        defaultValue: [25, 75],
    },
    parameters: {
        docs: {
            description: {
                story: "范围滑块，允许选择值的范围。",
            },
        },
    },
};

export const WithLabels: Story = {
    render: () => {
        const [value, setValue] = React.useState([50]);

        return (
            <div className="w-[300px] space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="slider-label">音量控制</Label>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground">
                        {value}%
                    </span>
                </div>
                <Slider
                    id="slider-label"
                    value={value}
                    onValueChange={setValue}
                    max={100}
                    step={1}
                />
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "带标签和数值显示的滑块。",
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => {
        const [volume, setVolume] = React.useState([50]);

        return (
            <div className="w-[300px] space-y-5">
                <div className="space-y-4">
                    <Label>音量控制</Label>
                    <div className="flex items-center space-x-2">
                        <BsVolumeMute className="size-4 text-muted-foreground" />
                        <Slider
                            value={volume}
                            onValueChange={setVolume}
                            max={100}
                            step={1}
                            className="flex-1"
                        />
                        <BsVolumeUp className="size-4 text-muted-foreground" />
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "两端带图标的滑块，提供视觉指示。",
            },
        },
    },
};

export const ThemeControl: Story = {
    render: () => {
        const [brightness, setBrightness] = React.useState([80]);

        return (
            <div className="w-[300px] space-y-5">
                <div className="space-y-4">
                    <Label>亮度调节</Label>
                    <div className="flex items-center space-x-2">
                        <BsMoon className="size-4 text-muted-foreground" />
                        <Slider
                            value={brightness}
                            onValueChange={setBrightness}
                            max={100}
                            step={1}
                            className="flex-1"
                        />
                        <BsSun className="size-4 text-muted-foreground" />
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        当前亮度: {brightness}%
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "用于亮度调节的滑块示例。",
            },
        },
    },
};

export const Steps: Story = {
    render: () => (
        <div className="w-[300px] space-y-8">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label>步长: 10</Label>
                    <span className="text-sm text-muted-foreground">较大步长</span>
                </div>
                <Slider defaultValue={[40]} step={10} />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label>步长: 5</Label>
                    <span className="text-sm text-muted-foreground">中等步长</span>
                </div>
                <Slider defaultValue={[40]} step={5} />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label>步长: 1</Label>
                    <span className="text-sm text-muted-foreground">精细步长</span>
                </div>
                <Slider defaultValue={[40]} step={1} />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同步长的滑块，控制值的精度。",
            },
        },
    },
};

export const CustomRange: Story = {
    render: () => {
        const [temperature, setTemperature] = React.useState([22]);

        return (
            <div className="w-[300px] space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BsThermometerHalf className="size-4 text-muted-foreground" />
                        <Label>温度控制</Label>
                    </div>
                    <span className="w-12 rounded-md bg-primary/10 px-2 py-0.5 text-right text-sm">
                        {temperature}°C
                    </span>
                </div>
                <Slider
                    value={temperature}
                    onValueChange={setTemperature}
                    min={16}
                    max={30}
                    step={0.5}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>16°C</span>
                    <span>23°C</span>
                    <span>30°C</span>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "自定义范围的滑块，用于特定场景如温度控制。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="w-[300px] space-y-8">
            <div className="space-y-4">
                <Label className="text-muted-foreground">禁用状态（单值）</Label>
                <Slider defaultValue={[50]} disabled />
            </div>

            <div className="space-y-4">
                <Label className="text-muted-foreground">禁用状态（范围）</Label>
                <Slider defaultValue={[30, 70]} disabled />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的滑块，不可交互。",
            },
        },
    },
};

export const Vertical: Story = {
    render: () => (
        <div className="flex items-end gap-8 h-[200px]">
            <div className="space-y-2">
                <Slider
                    defaultValue={[30]}
                    orientation="vertical"
                    className="h-[200px]"
                />
                <span className="text-xs text-center block">单值</span>
            </div>

            <div className="space-y-2">
                <Slider
                    defaultValue={[25, 75]}
                    orientation="vertical"
                    className="h-[200px]"
                />
                <span className="text-xs text-center block">范围</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "垂直方向的滑块。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <div className="w-[300px] space-y-8">
            <div className="space-y-4">
                <Label>默认样式</Label>
                <Slider defaultValue={[50]} />
            </div>

            <div className="space-y-4">
                <Label>蓝色主题</Label>
                <Slider
                    defaultValue={[50]}
                    className="[&>div]:bg-blue-100 [&>div>div]:bg-blue-600"
                />
            </div>

            <div className="space-y-4">
                <Label>渐变轨道</Label>
                <Slider
                    defaultValue={[50]}
                    className="[&>div>div]:bg-gradient-to-r [&>div>div]:from-purple-500 [&>div>div]:to-pink-500"
                />
            </div>

            <div className="space-y-4">
                <Label>大号滑块</Label>
                <Slider
                    defaultValue={[50]}
                    className="[&>div]:h-2.5 [&>span]:size-6"
                />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的滑块，包括颜色、大小等。",
            },
        },
    },
};
