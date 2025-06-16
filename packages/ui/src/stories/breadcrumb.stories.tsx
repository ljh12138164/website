import type { Meta, StoryObj } from "@storybook/nextjs";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
} from "./breadcrumb";
import { FiHome, FiFolder, FiFile, FiChevronRight, FiSlash } from "react-icons/fi";
import { RiArrowRightSLine, RiMoreLine } from "react-icons/ri";

const meta: Meta<typeof Breadcrumb> = {
    title: "组件/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "面包屑导航组件用于显示用户在网站层次结构中的当前位置，并提供返回上级页面的链接。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">组件</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>面包屑导航</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的面包屑导航，显示当前页面的路径和位置层次。",
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="flex items-center gap-1">
                        <FiHome className="size-4" />
                        <span>首页</span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components" className="flex items-center gap-1">
                        <FiFolder className="size-4" />
                        <span>组件</span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="flex items-center gap-1">
                        <FiFile className="size-4" />
                        <span>面包屑导航</span>
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "在面包屑导航中添加图标，可以增强视觉效果，使不同层级更易区分。",
            },
        },
    },
};

export const CustomSeparator: Story = {
    render: () => (
        <div className="space-y-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">首页</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <RiArrowRightSLine />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">组件</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <RiArrowRightSLine />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>面包屑导航</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">首页</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <FiSlash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">组件</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <FiSlash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>面包屑导航</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">首页</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>•</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">组件</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>•</BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>面包屑导航</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "可以自定义分隔符的外观，例如使用不同的图标或文本字符。",
            },
        },
    },
};

export const WithEllipsis: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbEllipsis />
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components/ui">UI组件</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components/ui/navigation">导航</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>面包屑导航</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "对于层级较深的路径，可以使用省略号来简化显示，避免占用过多空间。",
            },
        },
    },
};

export const Responsive: Story = {
    render: () => (
        <div className="w-full max-w-xs md:max-w-md">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden sm:inline-flex">
                        <BreadcrumbLink href="/">首页</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden sm:inline-flex" />
                    <BreadcrumbItem className="hidden sm:inline-flex">
                        <BreadcrumbLink href="/products">产品</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden sm:inline-flex" />
                    <BreadcrumbItem className="hidden md:inline-flex">
                        <BreadcrumbLink href="/products/electronics">电子产品</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:inline-flex" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>智能手机</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "响应式面包屑导航，在不同屏幕尺寸下显示不同级别的路径信息。",
            },
        },
    },
};

export const CollapsibleBreadcrumb: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />

                {/* 在中等尺寸以下隐藏，使用省略号代替 */}
                <BreadcrumbItem className="hidden md:inline-flex">
                    <BreadcrumbLink href="/products">产品</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:inline-flex" />
                <BreadcrumbItem className="hidden md:inline-flex">
                    <BreadcrumbLink href="/products/electronics">电子产品</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:inline-flex" />
                <BreadcrumbItem className="hidden md:inline-flex">
                    <BreadcrumbLink href="/products/electronics/smartphones">智能手机</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:inline-flex" />

                {/* 在中等尺寸以下显示省略号 */}
                <BreadcrumbItem className="md:hidden">
                    <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator className="md:hidden" />

                <BreadcrumbItem>
                    <BreadcrumbPage>iPhone 15</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "自适应的面包屑导航，在小屏幕上自动折叠中间部分，使用省略号代替。",
            },
        },
    },
};

export const MicroInteractions: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href="/"
                        className="transition-all duration-200 hover:text-primary hover:underline"
                    >
                        首页
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href="/components"
                        className="transition-all duration-200 hover:text-primary hover:underline"
                    >
                        组件
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>面包屑导航</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "添加微交互效果，如悬停时的颜色变化和下划线，提升用户体验。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList className="text-sm font-medium">
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href="/"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <FiHome className="inline mr-1" />
                        首页
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-400" />
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href="/components"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        组件
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-400" />
                <BreadcrumbItem>
                    <BreadcrumbPage className="font-bold">面包屑导航</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义面包屑导航的样式，包括颜色、字体和图标等。",
            },
        },
    },
};

export const DropdownBreadcrumb: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <div className="group relative">
                        <BreadcrumbLink
                            href="#"
                            className="flex items-center"
                            onClick={(e) => e.preventDefault()}
                        >
                            产品
                            <RiArrowRightSLine className="rotate-90 ml-1" />
                        </BreadcrumbLink>
                        <div className="absolute left-0 top-full mt-1 w-40 bg-white shadow-md rounded-md p-1 hidden group-hover:block z-10 border">
                            <a href="/products/electronics" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">电子产品</a>
                            <a href="/products/clothing" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">服装</a>
                            <a href="/products/furniture" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">家具</a>
                            <a href="/products/toys" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">玩具</a>
                        </div>
                    </div>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>智能手机</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
    parameters: {
        docs: {
            description: {
                story: "带下拉菜单的面包屑导航，用于显示同级别的其他选项。",
            },
        },
    },
};