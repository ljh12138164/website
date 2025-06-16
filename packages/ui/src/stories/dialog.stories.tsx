import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { FiX } from "react-icons/fi";
import { BsCheck2Circle, BsExclamationTriangle } from "react-icons/bs";
import { FaTrash, FaEdit, FaUser, FaInfoCircle } from "react-icons/fa";
import { AiOutlineQuestionCircle, AiOutlineWarning } from "react-icons/ai";

const meta: Meta<typeof Dialog> = {
    title: "组件/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "对话框组件用于展示重要信息或需要用户交互的内容。基于Radix UI的Dialog组件构建。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// 自定义DialogContent，使用react-icons替代lucide-react
const DialogContentWithIcon = React.forwardRef<
    React.ElementRef<typeof DialogContent>,
    React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ children, ...props }, ref) => {
    return (
        <DialogContent {...props} ref={ref}>
            {children}
            <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
                <FiX className="size-4" />
                <span className="sr-only">关闭</span>
            </DialogClose>
        </DialogContent>
    );
});
DialogContentWithIcon.displayName = "DialogContentWithIcon";

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">打开对话框</Button>
            </DialogTrigger>
            <DialogContentWithIcon>
                <DialogHeader>
                    <DialogTitle>对话框标题</DialogTitle>
                    <DialogDescription>
                        这是一个基本的对话框示例，展示了标题、描述和操作按钮。
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">保存更改</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的对话框，包含标题、描述和操作按钮。",
            },
        },
    },
};

export const WithForm: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>编辑个人资料</Button>
            </DialogTrigger>
            <DialogContentWithIcon>
                <DialogHeader>
                    <DialogTitle>编辑个人资料</DialogTitle>
                    <DialogDescription>
                        在下方表单中更新您的个人信息。完成后点击保存。
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            姓名
                        </Label>
                        <Input
                            id="name"
                            defaultValue="张三"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            用户名
                        </Label>
                        <Input
                            id="username"
                            defaultValue="zhangsan"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            电子邮箱
                        </Label>
                        <Input
                            id="email"
                            defaultValue="zhangsan@example.com"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">取消</Button>
                    <Button>保存更改</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "包含表单的对话框，适用于编辑或输入数据的场景。",
            },
        },
    },
};

export const Confirmation: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">
                    <FaTrash className="mr-2 size-4" />
                    删除账户
                </Button>
            </DialogTrigger>
            <DialogContentWithIcon className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <AiOutlineWarning className="size-5 text-destructive" />
                        <DialogTitle>确认删除账户？</DialogTitle>
                    </div>
                    <DialogDescription>
                        此操作将永久删除您的账户及所有关联数据，且无法恢复。
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                        请输入"DELETE"以确认删除：
                    </p>
                    <Input className="mt-2" />
                </div>
                <DialogFooter>
                    <Button variant="outline">取消</Button>
                    <Button variant="destructive">永久删除</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "确认对话框，用于确认重要操作，如删除操作。",
            },
        },
    },
};

export const SuccessDialog: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>查看结果</Button>
            </DialogTrigger>
            <DialogContentWithIcon className="sm:max-w-[425px]">
                <DialogHeader className="justify-center items-center pb-2">
                    <div className="text-green-500 mb-2">
                        <BsCheck2Circle className="size-16 mx-auto" />
                    </div>
                    <DialogTitle>操作成功！</DialogTitle>
                    <DialogDescription>
                        您的文件已成功上传到服务器。
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center py-4">
                    <div className="bg-muted p-3 rounded-md text-sm">
                        <p>
                            <span className="font-medium">文件名：</span> report-2023.pdf
                        </p>
                        <p>
                            <span className="font-medium">大小：</span> 2.4 MB
                        </p>
                        <p>
                            <span className="font-medium">上传时间：</span> 2023-06-15 10:30
                        </p>
                    </div>
                </div>
                <DialogFooter className="sm:justify-center">
                    <Button variant="secondary">查看文件</Button>
                    <Button>完成</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "成功对话框，用于显示操作成功完成的反馈。",
            },
        },
    },
};

export const ErrorDialog: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">显示错误</Button>
            </DialogTrigger>
            <DialogContentWithIcon className="sm:max-w-[425px]">
                <DialogHeader className="justify-center items-center pb-2">
                    <div className="text-destructive mb-2">
                        <BsExclamationTriangle className="size-16 mx-auto" />
                    </div>
                    <DialogTitle>连接错误</DialogTitle>
                    <DialogDescription>
                        连接服务器时发生错误，请检查您的网络连接后重试。
                    </DialogDescription>
                </DialogHeader>
                <div className="bg-muted/50 border rounded-md p-3 my-4">
                    <code className="text-xs text-muted-foreground">
                        Error Code: 503 - Service Unavailable
                    </code>
                </div>
                <DialogFooter className="sm:justify-center">
                    <Button variant="outline">联系支持</Button>
                    <Button>重试</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "错误对话框，用于显示出错信息和可能的解决方案。",
            },
        },
    },
};

export const CustomSize: Story = {
    render: () => (
        <div className="flex gap-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">小尺寸</Button>
                </DialogTrigger>
                <DialogContentWithIcon className="sm:max-w-[300px]">
                    <DialogHeader>
                        <DialogTitle>小型对话框</DialogTitle>
                        <DialogDescription>
                            这是一个小尺寸的对话框示例。
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button>确定</Button>
                    </DialogFooter>
                </DialogContentWithIcon>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">大尺寸</Button>
                </DialogTrigger>
                <DialogContentWithIcon className="sm:max-w-[700px]">
                    <DialogHeader>
                        <DialogTitle>大型对话框</DialogTitle>
                        <DialogDescription>
                            这是一个较大尺寸的对话框示例，可以容纳更多内容。
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-6">
                        <p className="text-muted-foreground">
                            使用大尺寸对话框来展示复杂的表单、图表或详细信息。通过调整 max-w-[700px] 的值来控制对话框的宽度。
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="border rounded-md p-4">
                                <h4 className="text-sm font-medium mb-2">左侧面板</h4>
                                <p className="text-sm text-muted-foreground">
                                    可以在这里放置额外的内容，如图表、图片或说明。
                                </p>
                            </div>
                            <div className="border rounded-md p-4">
                                <h4 className="text-sm font-medium mb-2">右侧面板</h4>
                                <p className="text-sm text-muted-foreground">
                                    适合放置表单、列表或其他交互元素。
                                </p>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline">取消</Button>
                        <Button>确定</Button>
                    </DialogFooter>
                </DialogContentWithIcon>
            </Dialog>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同尺寸的对话框，可以通过className调整大小以适应不同内容。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FaUser className="mr-2 size-4" />
                    用户信息
                </Button>
            </DialogTrigger>
            <DialogContentWithIcon>
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <FaUser className="text-primary size-5" />
                        <DialogTitle>用户详情</DialogTitle>
                    </div>
                    <DialogDescription>
                        查看和管理用户信息。
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <FaUser className="size-6" />
                        </div>
                        <div>
                            <h4 className="font-medium">张三</h4>
                            <p className="text-sm text-muted-foreground">管理员</p>
                        </div>
                    </div>

                    <div className="space-y-2 mt-4">
                        <div className="border-b pb-2">
                            <p className="text-sm text-muted-foreground">电子邮箱</p>
                            <p className="font-medium">zhangsan@example.com</p>
                        </div>
                        <div className="border-b pb-2">
                            <p className="text-sm text-muted-foreground">手机号码</p>
                            <p className="font-medium">138****1234</p>
                        </div>
                        <div className="border-b pb-2">
                            <p className="text-sm text-muted-foreground">注册日期</p>
                            <p className="font-medium">2022-05-15</p>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">
                        <FaEdit className="mr-2 size-4" />
                        编辑
                    </Button>
                    <Button>
                        确定
                    </Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图标的对话框，增强视觉效果和用户体验。",
            },
        },
    },
};

export const Nested: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>打开设置</Button>
            </DialogTrigger>
            <DialogContentWithIcon>
                <DialogHeader>
                    <DialogTitle>应用设置</DialogTitle>
                    <DialogDescription>
                        配置您的应用首选项。
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">通知</h4>
                            <p className="text-sm text-muted-foreground">
                                管理您的通知设置
                            </p>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">配置</Button>
                            </DialogTrigger>
                            <DialogContentWithIcon className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>通知设置</DialogTitle>
                                    <DialogDescription>
                                        配置您想要接收的通知类型。
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="py-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="email-notif">电子邮件通知</Label>
                                        <input type="checkbox" id="email-notif" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="push-notif">推送通知</Label>
                                        <input type="checkbox" id="push-notif" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="sms-notif">短信通知</Label>
                                        <input type="checkbox" id="sms-notif" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button variant="outline">取消</Button>
                                    <Button>保存设置</Button>
                                </DialogFooter>
                            </DialogContentWithIcon>
                        </Dialog>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">账户安全</h4>
                            <p className="text-sm text-muted-foreground">
                                管理密码和安全选项
                            </p>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">配置</Button>
                            </DialogTrigger>
                            <DialogContentWithIcon className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>安全设置</DialogTitle>
                                    <DialogDescription>
                                        管理您的账户安全选项。
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="py-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium">修改密码</h4>
                                            <p className="text-sm text-muted-foreground">
                                                更新您的登录密码
                                            </p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            更改
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium">双重验证</h4>
                                            <p className="text-sm text-muted-foreground">
                                                启用额外的安全层
                                            </p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            设置
                                        </Button>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button>完成</Button>
                                </DialogFooter>
                            </DialogContentWithIcon>
                        </Dialog>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">取消</Button>
                    <Button>保存所有设置</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "嵌套对话框，允许在一个对话框内打开另一个对话框，适用于多级设置或向导。",
            },
        },
    },
};

export const WithHelp: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>添加支付方式</Button>
            </DialogTrigger>
            <DialogContentWithIcon className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>添加支付方式</DialogTitle>
                    <DialogDescription>
                        添加新的信用卡或借记卡。
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cardname" className="text-right">
                            持卡人姓名
                        </Label>
                        <Input
                            id="cardname"
                            placeholder="输入持卡人姓名"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cardnumber" className="text-right">
                            卡号
                        </Label>
                        <Input
                            id="cardnumber"
                            placeholder="•••• •••• •••• ••••"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="expiry" className="text-right">
                            有效期
                        </Label>
                        <div className="col-span-3 grid grid-cols-2 gap-2">
                            <Input id="expiry" placeholder="MM / YY" />
                            <Input id="cvc" placeholder="CVC" />
                        </div>
                    </div>
                </div>

                <div className="bg-muted rounded-md p-3 flex gap-2 mt-2 mb-4 text-sm">
                    <div className="text-blue-500 flex-shrink-0">
                        <FaInfoCircle className="size-4 mt-0.5" />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">安全支付</p>
                        <p className="text-muted-foreground">
                            您的卡信息受到安全加密保护。我们不会存储完整的卡号。
                        </p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="text-blue-500 hover:underline mt-1 inline-flex items-center">
                                    <AiOutlineQuestionCircle className="mr-1 size-3.5" />
                                    了解更多
                                </button>
                            </DialogTrigger>
                            <DialogContentWithIcon className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>支付安全说明</DialogTitle>
                                    <DialogDescription>
                                        了解我们如何保护您的支付信息。
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <p className="text-sm">
                                        我们使用行业标准的加密技术来保护您的敏感信息。所有支付数据都通过TLS 1.2+加密传输，并且我们符合PCI DSS安全标准。
                                    </p>
                                    <p className="text-sm">
                                        我们只存储支付信息的有限部分，以保护您的安全。完整的卡号和安全码从不存储在我们的服务器上。
                                    </p>
                                </div>
                                <DialogFooter>
                                    <Button>我明白了</Button>
                                </DialogFooter>
                            </DialogContentWithIcon>
                        </Dialog>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline">取消</Button>
                    <Button>保存</Button>
                </DialogFooter>
            </DialogContentWithIcon>
        </Dialog>
    ),
    parameters: {
        docs: {
            description: {
                story: "带帮助信息的对话框，提供上下文帮助和额外说明。",
            },
        },
    },
};