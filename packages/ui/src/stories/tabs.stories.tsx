import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import {
    AiOutlineHome,
    AiOutlineSetting,
    AiOutlineUser,
    AiOutlineFileText
} from "react-icons/ai";
import {
    BsCode,
    BsLayoutTextWindow,
    BsFileEarmarkImage,
    BsFileEarmarkText
} from "react-icons/bs";
import { HiOutlinePhotograph, HiOutlineDocument } from "react-icons/hi";
import { MdInfoOutline, MdOutlinePhotoLibrary } from "react-icons/md";
import { FiUsers, FiVideo, FiBookOpen } from "react-icons/fi";

const meta: Meta<typeof Tabs> = {
    title: "组件/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "标签页组件允许用户在同一视图中显示不同的内容分组。基于Radix UI的Tabs组件构建。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="w-full">
                <TabsTrigger value="account">账户</TabsTrigger>
                <TabsTrigger value="password">密码</TabsTrigger>
                <TabsTrigger value="settings">设置</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">账户设置</h3>
                <p className="text-muted-foreground">
                    管理您的账户信息、个人资料和偏好设置。
                </p>
            </TabsContent>
            <TabsContent value="password" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">密码设置</h3>
                <p className="text-muted-foreground">
                    更改您的密码并管理安全设置。
                </p>
            </TabsContent>
            <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">系统设置</h3>
                <p className="text-muted-foreground">
                    自定义应用程序的外观和行为。
                </p>
            </TabsContent>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本标签页，显示多个内容区域。",
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => (
        <Tabs defaultValue="profile" className="w-[400px]">
            <TabsList className="w-full">
                <TabsTrigger value="profile">
                    <AiOutlineUser className="size-4" />
                    个人资料
                </TabsTrigger>
                <TabsTrigger value="settings">
                    <AiOutlineSetting className="size-4" />
                    设置
                </TabsTrigger>
                <TabsTrigger value="help">
                    <MdInfoOutline className="size-4" />
                    帮助
                </TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">个人资料</h3>
                <p className="text-muted-foreground">
                    查看和编辑您的个人信息。
                </p>
            </TabsContent>
            <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">设置</h3>
                <p className="text-muted-foreground">
                    管理您的应用程序首选项和配置。
                </p>
            </TabsContent>
            <TabsContent value="help" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">帮助中心</h3>
                <p className="text-muted-foreground">
                    获取使用指南和常见问题解答。
                </p>
            </TabsContent>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图标的标签页，使导航更加直观。",
            },
        },
    },
};

export const DisabledTab: Story = {
    render: () => (
        <Tabs defaultValue="active" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="active">活跃用户</TabsTrigger>
                <TabsTrigger value="inactive">非活跃用户</TabsTrigger>
                <TabsTrigger value="deleted" disabled>
                    已删除用户
                </TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">活跃用户</h3>
                <p className="text-muted-foreground">
                    最近30天内有登录记录的用户。
                </p>
            </TabsContent>
            <TabsContent value="inactive" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">非活跃用户</h3>
                <p className="text-muted-foreground">
                    超过30天未登录的用户。
                </p>
            </TabsContent>
            <TabsContent value="deleted" className="p-4 border rounded-lg mt-2">
                <h3 className="text-lg font-medium mb-2">已删除用户</h3>
                <p className="text-muted-foreground">
                    已从系统中删除的用户账户。
                </p>
            </TabsContent>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "包含禁用标签的标签页，表示该选项当前不可用。",
            },
        },
    },
};

export const VerticalTabs: Story = {
    render: () => (
        <Tabs defaultValue="overview" className="flex w-[600px]" orientation="vertical">
            <TabsList className="flex flex-col w-[200px] h-auto mr-4 p-0 bg-transparent">
                <TabsTrigger
                    value="overview"
                    className="justify-start border border-transparent data-[state=active]:border-border mb-1"
                >
                    <AiOutlineHome className="size-4 mr-2" />
                    概览
                </TabsTrigger>
                <TabsTrigger
                    value="analytics"
                    className="justify-start border border-transparent data-[state=active]:border-border mb-1"
                >
                    <BsLayoutTextWindow className="size-4 mr-2" />
                    数据分析
                </TabsTrigger>
                <TabsTrigger
                    value="reports"
                    className="justify-start border border-transparent data-[state=active]:border-border mb-1"
                >
                    <AiOutlineFileText className="size-4 mr-2" />
                    报表
                </TabsTrigger>
                <TabsTrigger
                    value="customers"
                    className="justify-start border border-transparent data-[state=active]:border-border"
                >
                    <FiUsers className="size-4 mr-2" />
                    客户
                </TabsTrigger>
            </TabsList>
            <div className="flex-1 border rounded-lg">
                <TabsContent value="overview" className="p-4">
                    <h3 className="text-lg font-medium mb-2">概览</h3>
                    <p className="text-muted-foreground">
                        查看您的仪表板和关键指标概览。
                    </p>
                </TabsContent>
                <TabsContent value="analytics" className="p-4">
                    <h3 className="text-lg font-medium mb-2">数据分析</h3>
                    <p className="text-muted-foreground">
                        深入了解您的业务数据和趋势。
                    </p>
                </TabsContent>
                <TabsContent value="reports" className="p-4">
                    <h3 className="text-lg font-medium mb-2">报表</h3>
                    <p className="text-muted-foreground">
                        生成和查看自定义报表。
                    </p>
                </TabsContent>
                <TabsContent value="customers" className="p-4">
                    <h3 className="text-lg font-medium mb-2">客户</h3>
                    <p className="text-muted-foreground">
                        管理您的客户数据和互动历史。
                    </p>
                </TabsContent>
            </div>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "垂直布局的标签页，适合显示更多的标签选项或在侧边栏中使用。",
            },
        },
    },
};

export const MediaTabs: Story = {
    render: () => (
        <Tabs defaultValue="photos" className="w-[500px]">
            <TabsList className="w-full">
                <TabsTrigger value="photos">
                    <HiOutlinePhotograph className="size-4 mr-1" />
                    照片
                </TabsTrigger>
                <TabsTrigger value="videos">
                    <FiVideo className="size-4 mr-1" />
                    视频
                </TabsTrigger>
                <TabsTrigger value="documents">
                    <HiOutlineDocument className="size-4 mr-1" />
                    文档
                </TabsTrigger>
            </TabsList>
            <TabsContent value="photos" className="p-4 border rounded-lg mt-2">
                <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={`photo-${i}`}
                            className="aspect-square bg-muted rounded-md flex items-center justify-center"
                        >
                            <MdOutlinePhotoLibrary className="size-6 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="videos" className="p-4 border rounded-lg mt-2">
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={`video-${i}`}
                            className="aspect-video bg-muted rounded-md flex items-center justify-center"
                        >
                            <FiVideo className="size-8 text-muted-foreground" />
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="documents" className="p-4 border rounded-lg mt-2">
                <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={`doc-${i}`}
                            className="p-3 border rounded-md flex items-center"
                        >
                            <BsFileEarmarkText className="size-5 text-muted-foreground mr-2" />
                            <span className="text-sm">文档 {i}.pdf</span>
                        </div>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "用于显示不同类型媒体内容的标签页。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <Tabs defaultValue="code" className="w-[450px]">
            <TabsList className="bg-zinc-800 p-1 rounded-t-lg w-full">
                <TabsTrigger
                    value="code"
                    className="text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
                >
                    <BsCode className="size-4 mr-1" />
                    代码
                </TabsTrigger>
                <TabsTrigger
                    value="preview"
                    className="text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
                >
                    <BsLayoutTextWindow className="size-4 mr-1" />
                    预览
                </TabsTrigger>
                <TabsTrigger
                    value="docs"
                    className="text-zinc-400 data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
                >
                    <FiBookOpen className="size-4 mr-1" />
                    文档
                </TabsTrigger>
            </TabsList>
            <TabsContent
                value="code"
                className="bg-zinc-900 text-zinc-200 p-4 rounded-b-lg font-mono text-sm"
            >
                {`function HelloWorld() {\n  return <h1>你好，世界！</h1>;\n}`}
            </TabsContent>
            <TabsContent
                value="preview"
                className="bg-white border p-4 rounded-b-lg"
            >
                <h1 className="text-xl font-bold">你好，世界！</h1>
            </TabsContent>
            <TabsContent
                value="docs"
                className="bg-white border p-4 rounded-b-lg"
            >
                <h3 className="text-lg font-medium mb-2">组件文档</h3>
                <p className="text-muted-foreground mb-3">
                    HelloWorld 组件是一个简单的示例组件，用于展示基本的组件结构。
                </p>
                <h4 className="font-medium mb-1">属性</h4>
                <p className="text-muted-foreground">
                    该组件不接受任何属性。
                </p>
            </TabsContent>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的标签页，模拟代码编辑器界面。",
            },
        },
    },
};

export const TabsWithForm: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-[500px]">
            <TabsList className="w-full">
                <TabsTrigger value="account">账户信息</TabsTrigger>
                <TabsTrigger value="preferences">偏好设置</TabsTrigger>
                <TabsTrigger value="notifications">通知</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border rounded-lg mt-2">
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium block" htmlFor="name">姓名</label>
                        <input
                            id="name"
                            className="w-full h-9 rounded-md border px-3 py-1 text-sm"
                            placeholder="请输入您的姓名"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium block" htmlFor="email">电子邮件</label>
                        <input
                            id="email"
                            className="w-full h-9 rounded-md border px-3 py-1 text-sm"
                            placeholder="请输入您的电子邮件"
                            type="email"
                        />
                    </div>
                    <div className="pt-2">
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                            保存更改
                        </button>
                    </div>
                </form>
            </TabsContent>
            <TabsContent value="preferences" className="p-4 border rounded-lg mt-2">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium">深色模式</h4>
                            <p className="text-sm text-muted-foreground">启用应用的深色主题</p>
                        </div>
                        <input type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium">自动保存</h4>
                            <p className="text-sm text-muted-foreground">自动保存您的更改</p>
                        </div>
                        <input type="checkbox" defaultChecked />
                    </div>
                    <div className="pt-2">
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                            应用设置
                        </button>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="notifications" className="p-4 border rounded-lg mt-2">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium">电子邮件通知</h4>
                            <p className="text-sm text-muted-foreground">接收电子邮件提醒</p>
                        </div>
                        <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium">推送通知</h4>
                            <p className="text-sm text-muted-foreground">接收推送通知</p>
                        </div>
                        <input type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-medium">营销邮件</h4>
                            <p className="text-sm text-muted-foreground">接收产品更新和优惠信息</p>
                        </div>
                        <input type="checkbox" />
                    </div>
                    <div className="pt-2">
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                            更新偏好
                        </button>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    ),
    parameters: {
        docs: {
            description: {
                story: "在标签页中嵌入表单，用于创建分步设置或设置向导。",
            },
        },
    },
};