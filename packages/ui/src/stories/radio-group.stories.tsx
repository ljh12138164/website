import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { BsCircleFill } from "react-icons/bs";

// 替换原组件中的CircleIcon
const CircleIcon = () => <BsCircleFill className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />;

// 修改RadioGroupItem组件以使用react-icons
const CustomRadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupItem>,
    React.ComponentPropsWithoutRef<typeof RadioGroupItem>
>((props, ref) => (
    <RadioGroupItem ref={ref} {...props}>
        <div className="relative flex items-center justify-center">
            <CircleIcon />
        </div>
    </RadioGroupItem>
));
CustomRadioGroupItem.displayName = "CustomRadioGroupItem";

const meta: Meta<typeof RadioGroup> = {
    title: "组件/RadioGroup",
    component: RadioGroup,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "单选按钮组组件，用于从一组选项中选择一个选项。基于Radix UI的RadioGroup组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        defaultValue: {
            control: "text",
            description: "默认选中的值",
        },
        value: {
            control: "text",
            description: "当前选中的值",
        },
        disabled: {
            control: "boolean",
            description: "是否禁用整个单选按钮组",
        },
        required: {
            control: "boolean",
            description: "是否必选",
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: { type: "radio" },
            description: "排列方向",
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">选项一</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">选项二</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">选项三</Label>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的单选按钮组。",
            },
        },
    },
};

export const Horizontal: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one" className="flex space-x-4 space-y-0">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="h-option-one" />
                <Label htmlFor="h-option-one">选项一</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="h-option-two" />
                <Label htmlFor="h-option-two">选项二</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="h-option-three" />
                <Label htmlFor="h-option-three">选项三</Label>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "水平排列的单选按钮组。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <RadioGroup defaultValue="option-two" disabled>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="d-option-one" />
                <Label htmlFor="d-option-one" className="text-muted-foreground">
                    已禁用选项一
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="d-option-two" />
                <Label htmlFor="d-option-two" className="text-muted-foreground">
                    已禁用选项二（已选中）
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="d-option-three" />
                <Label htmlFor="d-option-three" className="text-muted-foreground">
                    已禁用选项三
                </Label>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的单选按钮组。",
            },
        },
    },
};

export const DisabledItems: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="di-option-one" />
                <Label htmlFor="di-option-one">选项一</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="di-option-two" disabled />
                <Label htmlFor="di-option-two" className="text-muted-foreground">
                    已禁用选项二
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="di-option-three" />
                <Label htmlFor="di-option-three">选项三</Label>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "部分选项禁用的单选按钮组。",
            },
        },
    },
};

export const WithDescription: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="option-one" id="wd-option-one" className="mt-1" />
                <div>
                    <Label htmlFor="wd-option-one">标准配送</Label>
                    <p className="text-sm text-muted-foreground">
                        4-10 个工作日送达
                    </p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="option-two" id="wd-option-two" className="mt-1" />
                <div>
                    <Label htmlFor="wd-option-two">快速配送</Label>
                    <p className="text-sm text-muted-foreground">
                        2-5 个工作日送达
                    </p>
                </div>
            </div>
            <div className="flex items-start space-x-2">
                <RadioGroupItem value="option-three" id="wd-option-three" className="mt-1" />
                <div>
                    <Label htmlFor="wd-option-three">次日达</Label>
                    <p className="text-sm text-muted-foreground">
                        下一个工作日送达（需在16:00前下单）
                    </p>
                </div>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "带描述文本的单选按钮组。",
            },
        },
    },
};

export const Required: Story = {
    render: () => (
        <div className="space-y-3">
            <div className="flex items-center space-x-1">
                <Label>支付方式</Label>
                <span className="text-sm text-red-500">*</span>
            </div>
            <RadioGroup defaultValue="card" required>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="r-option-one" />
                    <Label htmlFor="r-option-one">信用卡</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="r-option-two" />
                    <Label htmlFor="r-option-two">PayPal</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="alipay" id="r-option-three" />
                    <Label htmlFor="r-option-three">支付宝</Label>
                </div>
            </RadioGroup>
            <p className="text-sm text-muted-foreground">
                此字段为必选项
            </p>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "必选的单选按钮组。",
            },
        },
    },
};

export const WithCard: Story = {
    render: () => (
        <RadioGroup defaultValue="card">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">信用卡</Label>
                    </div>
                    <div className="ml-6 mt-2 text-sm text-muted-foreground">
                        使用您的信用卡进行支付
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                    </div>
                    <div className="ml-6 mt-2 text-sm text-muted-foreground">
                        使用您的PayPal账户进行支付
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="apple" id="apple" />
                        <Label htmlFor="apple">Apple Pay</Label>
                    </div>
                    <div className="ml-6 mt-2 text-sm text-muted-foreground">
                        使用Apple Pay进行支付
                    </div>
                </div>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "卡片式布局的单选按钮组。",
            },
        },
    },
};

export const WithImages: Story = {
    render: () => (
        <RadioGroup defaultValue="light">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="relative">
                    <RadioGroupItem
                        value="light"
                        id="theme-light"
                        className="peer sr-only"
                    />
                    <Label
                        htmlFor="theme-light"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <div className="mb-3 rounded-md border border-muted p-2">
                            <div className="space-y-2">
                                <div className="h-2 w-12 rounded-md bg-muted-foreground/30" />
                                <div className="h-2 w-10 rounded-md bg-muted-foreground/30" />
                                <div className="h-2 w-8 rounded-md bg-muted-foreground/30" />
                            </div>
                        </div>
                        <div>浅色主题</div>
                    </Label>
                </div>
                <div className="relative">
                    <RadioGroupItem
                        value="dark"
                        id="theme-dark"
                        className="peer sr-only"
                    />
                    <Label
                        htmlFor="theme-dark"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <div className="mb-3 rounded-md border border-muted bg-slate-900 p-2">
                            <div className="space-y-2">
                                <div className="h-2 w-12 rounded-md bg-slate-400" />
                                <div className="h-2 w-10 rounded-md bg-slate-400" />
                                <div className="h-2 w-8 rounded-md bg-slate-400" />
                            </div>
                        </div>
                        <div>深色主题</div>
                    </Label>
                </div>
                <div className="relative">
                    <RadioGroupItem
                        value="system"
                        id="theme-system"
                        className="peer sr-only"
                    />
                    <Label
                        htmlFor="theme-system"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <div className="mb-3 flex rounded-md border border-muted p-2">
                            <div className="w-1/2 space-y-2">
                                <div className="h-2 w-6 rounded-md bg-muted-foreground/30" />
                                <div className="h-2 w-5 rounded-md bg-muted-foreground/30" />
                                <div className="h-2 w-4 rounded-md bg-muted-foreground/30" />
                            </div>
                            <div className="w-1/2 space-y-2 bg-slate-900">
                                <div className="ml-auto h-2 w-6 rounded-md bg-slate-400" />
                                <div className="ml-auto h-2 w-5 rounded-md bg-slate-400" />
                                <div className="ml-auto h-2 w-4 rounded-md bg-slate-400" />
                            </div>
                        </div>
                        <div>跟随系统</div>
                    </Label>
                </div>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图像的单选按钮组，用于主题选择。",
            },
        },
    },
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = React.useState("option-one");

        return (
            <div className="space-y-4">
                <RadioGroup value={value} onValueChange={setValue}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="c-option-one" />
                        <Label htmlFor="c-option-one">选项一</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="c-option-two" />
                        <Label htmlFor="c-option-two">选项二</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-three" id="c-option-three" />
                        <Label htmlFor="c-option-three">选项三</Label>
                    </div>
                </RadioGroup>

                <div className="text-sm">
                    当前选中: <span className="font-medium">{value}</span>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "受控的单选按钮组，通过React状态控制选中项。",
            },
        },
    },
};

export const FormExample: Story = {
    render: () => (
        <div className="w-full max-w-sm space-y-6 border rounded-lg p-6">
            <div>
                <h3 className="text-lg font-medium">问卷调查</h3>
                <p className="text-sm text-muted-foreground">
                    请回答以下问题，帮助我们改进产品。
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>您使用我们的产品多久了？</Label>
                    <RadioGroup defaultValue="less-than-month">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="less-than-month" id="less-than-month" />
                            <Label htmlFor="less-than-month">不到一个月</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="one-to-six" id="one-to-six" />
                            <Label htmlFor="one-to-six">1-6个月</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="six-to-twelve" id="six-to-twelve" />
                            <Label htmlFor="six-to-twelve">6-12个月</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="more-than-year" id="more-than-year" />
                            <Label htmlFor="more-than-year">一年以上</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-2">
                    <Label>您对我们的产品满意度如何？</Label>
                    <RadioGroup defaultValue="satisfied">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                            <Label htmlFor="very-satisfied">非常满意</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="satisfied" id="satisfied" />
                            <Label htmlFor="satisfied">满意</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="neutral" id="neutral" />
                            <Label htmlFor="neutral">一般</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                            <Label htmlFor="dissatisfied">不满意</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在表单中使用单选按钮组的示例。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value="option-one"
                    id="cs-option-one"
                    className="border-blue-500 data-[state=checked]:border-blue-700 data-[state=checked]:bg-blue-100"
                />
                <Label htmlFor="cs-option-one">蓝色风格</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value="option-two"
                    id="cs-option-two"
                    className="border-green-500 data-[state=checked]:border-green-700 data-[state=checked]:bg-green-100"
                />
                <Label htmlFor="cs-option-two">绿色风格</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value="option-three"
                    id="cs-option-three"
                    className="border-purple-500 data-[state=checked]:border-purple-700 data-[state=checked]:bg-purple-100"
                />
                <Label htmlFor="cs-option-three">紫色风格</Label>
            </div>
        </RadioGroup>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的单选按钮组。",
            },
        },
    },
};