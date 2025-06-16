import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import {
    AiOutlineSearch,
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlineCalendar,
    AiOutlineUser,
    AiOutlineLock,
    AiOutlineMail
} from "react-icons/ai";
import {
    MdOutlineAttachMoney,
    MdOutlinePhone,
    MdOutlineLocationOn,
    MdOutlineLink
} from "react-icons/md";

const meta: Meta<typeof Input> = {
    title: "组件/Input",
    component: Input,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "输入框组件允许用户在表单或交互界面中输入文本。提供了灵活的样式定制选项。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["text", "password", "email", "number", "tel", "url", "search", "date", "time", "file"],
            description: "输入框类型",
        },
        placeholder: {
            control: "text",
            description: "占位文本",
        },
        disabled: {
            control: "boolean",
            description: "是否禁用",
        },
        readOnly: {
            control: "boolean",
            description: "是否只读",
        },
        required: {
            control: "boolean",
            description: "是否必填",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: () => <Input placeholder="请输入内容" className="w-[300px]" />,
    parameters: {
        docs: {
            description: {
                story: "基本的输入框组件。",
            },
        },
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">姓名</Label>
            <Input id="name" placeholder="请输入您的姓名" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带标签的输入框组件，提供更好的可访问性和用户体验。",
            },
        },
    },
};

export const InputTypes: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <div className="grid gap-1.5">
                <Label htmlFor="email">电子邮箱</Label>
                <Input id="email" type="email" placeholder="example@example.com" />
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="password">密码</Label>
                <Input id="password" type="password" placeholder="输入密码" />
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="url">网址</Label>
                <Input id="url" type="url" placeholder="https://example.com" />
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="number">数字</Label>
                <Input id="number" type="number" placeholder="0" />
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="date">日期</Label>
                <Input id="date" type="date" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "各种类型的输入框，适用于不同的数据输入需求。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <Input disabled placeholder="禁用状态" />
            <Input disabled value="禁用状态（带值）" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的输入框，用户无法交互。",
            },
        },
    },
};

export const ReadOnly: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <Input readOnly placeholder="只读状态" />
            <Input readOnly value="只读状态（带值）" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "只读状态的输入框，用户无法修改值，但可以选择文本。",
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <div className="relative">
                <AiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                <Input placeholder="用户名" className="pl-9" />
            </div>
            <div className="relative">
                <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                <Input type="password" placeholder="密码" className="pl-9" />
            </div>
            <div className="relative">
                <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                <Input type="email" placeholder="电子邮件" className="pl-9" />
            </div>
            <div className="relative">
                <Input placeholder="搜索..." className="pl-9 pr-9" />
                <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 px-2"
                >
                    搜索
                </Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图标的输入框，提供视觉指引和增强用户体验。",
            },
        },
    },
};

export const TogglePassword: Story = {
    render: () => {
        const [showPassword, setShowPassword] = React.useState(false);
        return (
            <div className="relative w-full max-w-sm">
                <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="输入密码"
                    className="pl-9 pr-9"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible className="size-4" />
                    ) : (
                        <AiOutlineEye className="size-4" />
                    )}
                    <span className="sr-only">
                        {showPassword ? "隐藏密码" : "显示密码"}
                    </span>
                </button>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "密码输入框带切换可见性功能。",
            },
        },
    },
};

export const FormattedInput: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <div className="relative">
                <MdOutlineAttachMoney className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
                <Input placeholder="0.00" className="pl-9" />
            </div>
            <div className="relative">
                <MdOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                <Input placeholder="(XXX) XXX-XXXX" className="pl-9" />
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Input placeholder="年" className="text-center" />
                <Input placeholder="月" className="text-center" />
                <Input placeholder="日" className="text-center" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "格式化的输入框，适用于特定格式的数据输入，如货币、电话号码或日期。",
            },
        },
    },
};

export const InputSizes: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <Input placeholder="小尺寸输入框" className="h-8 text-xs" />
            <Input placeholder="默认尺寸输入框" />
            <Input placeholder="大尺寸输入框" className="h-11" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同尺寸的输入框，可以根据界面需要调整。",
            },
        },
    },
};

export const FileUpload: Story = {
    render: () => (
        <div className="grid gap-4 w-full max-w-sm">
            <Input type="file" />
            <Input type="file" multiple />
            <Input type="file" accept="image/*" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "文件上传输入框，用于文件选择和上传功能。",
            },
        },
    },
};

export const ValidationStates: Story = {
    render: () => (
        <div className="grid gap-6 w-full max-w-sm">
            <div className="grid gap-1.5">
                <Label htmlFor="valid">有效输入</Label>
                <Input
                    id="valid"
                    className="border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/20"
                    value="有效输入示例"
                />
                <p className="text-xs text-green-500">输入有效</p>
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="invalid">无效输入</Label>
                <Input
                    id="invalid"
                    aria-invalid="true"
                    value="无效输入示例"
                />
                <p className="text-xs text-destructive">请输入有效的值</p>
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="required">必填输入</Label>
                <Input
                    id="required"
                    required
                    placeholder="此字段为必填项"
                />
                <p className="text-xs text-muted-foreground">此字段不能为空</p>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同验证状态的输入框，用于表单验证和错误提示。",
            },
        },
    },
};

export const InputGroups: Story = {
    render: () => (
        <div className="grid gap-6 w-full max-w-sm">
            <div className="grid gap-1.5">
                <Label htmlFor="website">网站</Label>
                <div className="flex">
                    <div className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm text-muted-foreground">
                        https://
                    </div>
                    <Input
                        id="website"
                        placeholder="example.com"
                        className="rounded-l-none"
                    />
                </div>
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="phone">电话号码</Label>
                <div className="flex">
                    <div className="inline-flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm text-muted-foreground">
                        +86
                    </div>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="请输入手机号码"
                        className="rounded-l-none"
                    />
                </div>
            </div>
            <div className="grid gap-1.5">
                <Label htmlFor="search">搜索</Label>
                <div className="flex">
                    <Input
                        id="search"
                        placeholder="搜索..."
                        className="rounded-r-none"
                    />
                    <Button type="submit" className="rounded-l-none">
                        搜索
                    </Button>
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "输入框组，将输入框与其他元素（如前缀、后缀或按钮）组合使用。",
            },
        },
    },
};

export const CompleteForm: Story = {
    render: () => (
        <form className="space-y-6 w-full max-w-md border rounded-lg p-6">
            <h2 className="text-lg font-semibold">用户注册</h2>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-1.5">
                        <Label htmlFor="firstName">名字</Label>
                        <Input id="firstName" placeholder="请输入名字" required />
                    </div>
                    <div className="grid gap-1.5">
                        <Label htmlFor="lastName">姓氏</Label>
                        <Input id="lastName" placeholder="请输入姓氏" required />
                    </div>
                </div>
                <div className="grid gap-1.5">
                    <Label htmlFor="email-register">电子邮箱</Label>
                    <div className="relative">
                        <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                        <Input
                            id="email-register"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-9"
                            required
                        />
                    </div>
                </div>
                <div className="grid gap-1.5">
                    <Label htmlFor="password-register">密码</Label>
                    <div className="relative">
                        <AiOutlineLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                        <Input
                            id="password-register"
                            type="password"
                            placeholder="设置密码"
                            className="pl-9"
                            required
                            minLength={8}
                        />
                    </div>
                    <p className="text-xs text-muted-foreground">密码至少需要8个字符</p>
                </div>
                <div className="grid gap-1.5">
                    <Label htmlFor="phone-register">手机号码</Label>
                    <div className="relative">
                        <MdOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                        <Input
                            id="phone-register"
                            type="tel"
                            placeholder="请输入手机号码"
                            className="pl-9"
                        />
                    </div>
                </div>
                <div className="grid gap-1.5">
                    <Label htmlFor="address">地址</Label>
                    <div className="relative">
                        <MdOutlineLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                        <Input
                            id="address"
                            placeholder="请输入您的地址"
                            className="pl-9"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                        我已阅读并同意服务条款和隐私政策
                    </Label>
                </div>
            </div>
            <Button className="w-full">注册账户</Button>
        </form>
    ),
    parameters: {
        docs: {
            description: {
                story: "完整的表单示例，展示了输入框在实际表单中的应用。",
            },
        },
    },
};