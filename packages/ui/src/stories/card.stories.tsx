import type { Meta, StoryObj } from "@storybook/nextjs";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction,
} from "./card";
import { BiDotsVertical, BiEdit, BiShare } from "react-icons/bi";
import { MdOutlineCreditCard, MdOutlineShoppingCart, MdSync } from "react-icons/md";
import { AiOutlineUser, AiOutlineSetting, AiOutlineCalendar } from "react-icons/ai";
import { FiMoreHorizontal, FiArrowRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const meta: Meta<typeof Card> = {
    title: "组件/Card",
    component: Card,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Card组件提供了一个灵活的容器，用于在清晰定义的区域内展示相关内容。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>卡片标题</CardTitle>
                <CardDescription>卡片的简短描述信息</CardDescription>
            </CardHeader>
            <CardContent>
                <p>卡片内容区域，这里可以放置任何需要展示的主要信息。</p>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-muted-foreground">卡片底部信息</p>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本卡片结构，包含标题、描述、内容和底部区域。",
            },
        },
    },
};

export const WithAction: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>通知设置</CardTitle>
                <CardDescription>配置您希望接收的通知类型</CardDescription>
                <CardAction>
                    <button className="rounded-full p-1 hover:bg-muted">
                        <BiDotsVertical className="size-4" />
                        <span className="sr-only">更多选项</span>
                    </button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">电子邮件通知</label>
                        <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">推送通知</label>
                        <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">短信通知</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-between">
                <button className="text-sm text-muted-foreground hover:underline">
                    取消
                </button>
                <button className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm">
                    保存更改
                </button>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有操作按钮的卡片，CardAction 可以放置在标题区域的右侧。",
            },
        },
    },
};

export const PaymentMethod: Story = {
    render: () => (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MdOutlineCreditCard className="size-5" />
                    支付方式
                </CardTitle>
                <CardDescription>管理您的支付方式</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="bg-muted/50 flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full">
                                <span className="text-xs font-medium">MC</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Mastercard •••• 4821</p>
                                <p className="text-muted-foreground text-xs">过期时间: 06/24</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="text-muted-foreground hover:text-foreground rounded-full p-1">
                                <BiEdit className="size-4" />
                                <span className="sr-only">编辑</span>
                            </button>
                            <button className="text-muted-foreground hover:text-foreground rounded-full p-1">
                                <IoMdClose className="size-4" />
                                <span className="sr-only">删除</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-muted/50 flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-500 text-white flex size-8 items-center justify-center rounded-full">
                                <span className="text-xs font-medium">V</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Visa •••• 2456</p>
                                <p className="text-muted-foreground text-xs">过期时间: 11/25</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="text-muted-foreground hover:text-foreground rounded-full p-1">
                                <BiEdit className="size-4" />
                                <span className="sr-only">编辑</span>
                            </button>
                            <button className="text-muted-foreground hover:text-foreground rounded-full p-1">
                                <IoMdClose className="size-4" />
                                <span className="sr-only">删除</span>
                            </button>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <button className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium">
                    <span>添加新支付方式</span>
                    <FiArrowRight className="size-3.5" />
                </button>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "支付方式卡片示例，展示如何在卡片中组织和显示结构化数据。",
            },
        },
    },
};

export const MetricsCard: Story = {
    render: () => (
        <div className="flex gap-4 flex-wrap">
            <Card className="w-[240px]">
                <CardHeader>
                    <CardDescription>总收入</CardDescription>
                    <CardTitle className="text-2xl">¥45,231.89</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-muted-foreground flex items-center text-xs">
                        <MdSync className="mr-1 size-3.5" />
                        <span>相比上月 +20.1%</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-[240px]">
                <CardHeader>
                    <CardDescription>订单数量</CardDescription>
                    <CardTitle className="text-2xl">+2350</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-muted-foreground flex items-center text-xs">
                        <MdSync className="mr-1 size-3.5" />
                        <span>相比上月 +10.3%</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-[240px]">
                <CardHeader>
                    <CardDescription>客户数量</CardDescription>
                    <CardTitle className="text-2xl">+12,234</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-muted-foreground flex items-center text-xs">
                        <MdSync className="mr-1 size-3.5" />
                        <span>相比上月 +2.5%</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "指标卡片示例，用于展示关键业务数据和统计信息。",
            },
        },
    },
};

export const ProfileCard: Story = {
    render: () => (
        <Card className="w-[300px]">
            <div className="aspect-video w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1024&auto=format&fit=crop"
                    alt="背景图"
                    className="h-full w-full object-cover"
                />
            </div>
            <CardHeader className="mt-[-24px]">
                <div className="flex items-center gap-3">
                    <div className="bg-background border-background flex size-14 items-center justify-center overflow-hidden rounded-full border-4">
                        <AiOutlineUser className="size-8 text-muted-foreground" />
                    </div>
                    <div>
                        <CardTitle>张小明</CardTitle>
                        <CardDescription>产品设计师</CardDescription>
                    </div>
                    <CardAction>
                        <button className="rounded-full p-1.5 hover:bg-muted">
                            <AiOutlineSetting className="size-5 text-muted-foreground" />
                            <span className="sr-only">设置</span>
                        </button>
                    </CardAction>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <div className="text-center">
                            <p className="text-2xl font-bold">142</p>
                            <p className="text-muted-foreground text-sm">项目</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">28</p>
                            <p className="text-muted-foreground text-sm">完成</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">86%</p>
                            <p className="text-muted-foreground text-sm">满意度</p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-between">
                <button className="border-input hover:bg-accent hover:text-accent-foreground flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm">
                    <BiShare className="size-4" />
                    <span>分享</span>
                </button>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1 rounded-md px-3 py-1.5 text-sm">
                    <span>查看作品集</span>
                    <FiArrowRight className="size-4" />
                </button>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "个人资料卡片示例，可用于展示用户信息和核心统计数据。",
            },
        },
    },
};

export const HorizontalCard: Story = {
    render: () => (
        <Card className="flex flex-row w-[500px] py-0 overflow-hidden">
            <div className="w-[180px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600956054489-a44dd16e6c84?q=80&w=1024&auto=format&fit=crop"
                    alt="产品图片"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col flex-1">
                <CardHeader>
                    <CardTitle>现代风格办公椅</CardTitle>
                    <CardDescription>舒适的人体工学设计，适合长时间办公</CardDescription>
                    <CardAction>
                        <button className="rounded-full p-1 hover:bg-muted">
                            <FiMoreHorizontal className="size-4" />
                            <span className="sr-only">更多选项</span>
                        </button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-bold text-primary">¥1,299.00</p>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                        <div className="flex items-center">
                            <span className="text-yellow-500">★★★★</span>
                            <span className="text-muted-foreground">★</span>
                        </div>
                        <span className="text-muted-foreground">(32条评价)</span>
                    </div>
                </CardContent>
                <CardFooter className="mt-auto justify-between">
                    <button className="border-input hover:bg-accent hover:text-accent-foreground rounded-md border px-3 py-1 text-sm">
                        收藏
                    </button>
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-1 rounded-md px-3 py-1 text-sm">
                        <MdOutlineShoppingCart className="size-4" />
                        <span>加入购物车</span>
                    </button>
                </CardFooter>
            </div>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "水平布局的卡片，适合展示产品信息，左侧为图片，右侧为详细信息。",
            },
        },
    },
};

export const EventCard: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="bg-primary/10 text-primary flex size-10 flex-col items-center justify-center rounded-lg">
                        <AiOutlineCalendar className="size-5" />
                    </div>
                    <div>
                        <CardTitle>团队会议</CardTitle>
                        <CardDescription>讨论本周进度和下周计划</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">日期:</span>
                        <span>2023年9月15日</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">时间:</span>
                        <span>10:00 - 11:30</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">地点:</span>
                        <span>线上会议室 (Zoom)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">与会者:</span>
                        <div className="flex -space-x-2">
                            <div className="bg-blue-500 text-white flex size-6 items-center justify-center rounded-full text-xs">ZL</div>
                            <div className="bg-green-500 text-white flex size-6 items-center justify-center rounded-full text-xs">WH</div>
                            <div className="bg-purple-500 text-white flex size-6 items-center justify-center rounded-full text-xs">CJ</div>
                            <div className="bg-background border-muted flex size-6 items-center justify-center rounded-full border text-xs">+2</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-between">
                <button className="border-input hover:bg-muted rounded-md border px-3 py-1 text-sm">
                    取消
                </button>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1 text-sm">
                    加入会议
                </button>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "事件卡片示例，用于展示会议、约会或活动的详细信息。",
            },
        },
    },
};

export const Skeleton: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="space-y-2">
                    <div className="bg-muted h-5 w-1/2 rounded-md"></div>
                    <div className="bg-muted h-4 w-4/5 rounded-md"></div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="bg-muted h-4 w-full rounded-md"></div>
                    <div className="bg-muted h-4 w-full rounded-md"></div>
                    <div className="bg-muted h-4 w-4/5 rounded-md"></div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="bg-muted h-9 w-full rounded-md"></div>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: "卡片的骨架屏示例，在内容加载过程中显示。",
            },
        },
    },
};