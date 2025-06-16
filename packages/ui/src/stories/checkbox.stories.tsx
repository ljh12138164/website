import type { Meta, StoryObj } from "@storybook/nextjs";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta: Meta<typeof Checkbox> = {
    title: "组件/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "复选框组件允许用户从一组选项中选择一个或多个选项。基于Radix UI的Checkbox组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        checked: {
            control: "boolean",
            description: "控制复选框是否被选中",
        },
        disabled: {
            control: "boolean",
            description: "控制复选框是否被禁用",
        },
        required: {
            control: "boolean",
            description: "指定复选框是否为必填项",
        },
        onCheckedChange: {
            action: "checked changed",
            description: "当复选框状态变化时触发的回调函数",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => <Checkbox />,
    parameters: {
        docs: {
            description: {
                story: "基本复选框，没有标签或其他修饰。",
            },
        },
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">接受服务条款和隐私政策</Label>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有标签的复选框。通过使用Label组件并关联对应的id，可以创建可访问的复选框。",
            },
        },
    },
};

export const Checked: Story = {
    render: () => <Checkbox defaultChecked />,
    parameters: {
        docs: {
            description: {
                story: "默认选中状态的复选框。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="text-muted-foreground">
                    禁用状态（未选中）
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="disabled-checked" disabled defaultChecked />
                <Label htmlFor="disabled-checked" className="text-muted-foreground">
                    禁用状态（已选中）
                </Label>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的复选框，无法被用户交互。展示了未选中和已选中两种禁用状态。",
            },
        },
    },
};

export const Required: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="required" required />
            <Label htmlFor="required">
                必填项 <span className="text-destructive">*</span>
            </Label>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "必填状态的复选框，通常用于表单验证。",
            },
        },
    },
};

export const CheckboxGroup: Story = {
    render: () => (
        <div className="space-y-3">
            <div className="mb-3 font-medium">请选择您感兴趣的主题：</div>
            <div className="flex items-center space-x-2">
                <Checkbox id="react" />
                <Label htmlFor="react">React</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="vue" defaultChecked />
                <Label htmlFor="vue">Vue</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="angular" />
                <Label htmlFor="angular">Angular</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="svelte" />
                <Label htmlFor="svelte">Svelte</Label>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "复选框组示例，允许用户从多个选项中选择多个值。",
            },
        },
    },
};

export const WithDescription: Story = {
    render: () => (
        <div className="grid gap-1.5">
            <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <div className="grid gap-0.5">
                    <Label htmlFor="marketing">营销通知</Label>
                    <p className="text-muted-foreground text-sm">
                        接收来自我们的产品和服务的营销邮件。
                    </p>
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有附加描述的复选框，提供更详细的信息说明。",
            },
        },
    },
};

export const FormExample: Story = {
    render: () => (
        <form
            className="space-y-6 border p-6 rounded-lg w-[350px]"
            onSubmit={(e) => {
                e.preventDefault();
                alert("表单已提交！");
            }}
        >
            <div className="space-y-4">
                <h3 className="text-lg font-medium">账户设置</h3>

                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="email-notifications" defaultChecked />
                        <Label htmlFor="email-notifications">电子邮件通知</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="push-notifications" defaultChecked />
                        <Label htmlFor="push-notifications">推送通知</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="updates" />
                        <div className="grid gap-0.5">
                            <Label htmlFor="updates">产品更新</Label>
                            <p className="text-muted-foreground text-xs">
                                接收产品的新功能和更新通知。
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <div className="grid gap-0.5">
                            <Label htmlFor="newsletter">订阅通讯</Label>
                            <p className="text-muted-foreground text-xs">
                                每周接收我们的产品动态和行业新闻。
                            </p>
                        </div>
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
                    保存更改
                </button>
            </div>
        </form>
    ),
    parameters: {
        docs: {
            description: {
                story: "在表单中使用复选框的示例，展示了更实际的使用场景。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="custom1" className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
                <Label htmlFor="custom1">蓝色主题</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="custom2" className="rounded-full data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
                <Label htmlFor="custom2">圆形复选框</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="custom3" className="size-6 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500" />
                <Label htmlFor="custom3">更大的复选框</Label>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过自定义className，可以修改复选框的外观，包括颜色、大小和形状。",
            },
        },
    },
};

