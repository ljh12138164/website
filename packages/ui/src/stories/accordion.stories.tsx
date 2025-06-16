import type { Meta, StoryObj } from "@storybook/nextjs";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "./accordion";

const meta: Meta<typeof Accordion> = {
    title: "组件/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "手风琴组件允许用户通过可折叠的部分显示或隐藏相关内容，节省空间并组织信息。基于Radix UI的手风琴组件构建。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const SingleItem: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[350px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>这是一个手风琴项</AccordionTrigger>
                <AccordionContent>
                    这是内容区域，在这里可以放置与标题相关的详细信息。当用户点击标题时，此内容将会显示或隐藏。
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "单个手风琴项示例，默认为折叠状态，设置了collapsible属性，允许所有项都可以折叠。",
            },
        },
    },
};

export const MultipleItems: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[350px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>第一项</AccordionTrigger>
                <AccordionContent>
                    第一项的内容区域。手风琴组件非常适合FAQ页面或设置面板等场景。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>第二项</AccordionTrigger>
                <AccordionContent>
                    第二项的内容区域。每个内容区域可以包含文本、链接、表单或其他组件。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>第三项</AccordionTrigger>
                <AccordionContent>
                    第三项的内容区域。默认情况下，同时只能展开一个项。
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "多个手风琴项的示例，使用type='single'确保一次只能打开一个项目。",
            },
        },
    },
};

export const MultipleOpen: Story = {
    render: () => (
        <Accordion type="multiple" className="w-[350px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>第一项</AccordionTrigger>
                <AccordionContent>
                    第一项的内容区域。在这个示例中，可以同时打开多个项目。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>第二项</AccordionTrigger>
                <AccordionContent>
                    第二项的内容区域。type='multiple'允许用户同时展开多个内容区域。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>第三项</AccordionTrigger>
                <AccordionContent>
                    第三项的内容区域。这种模式适合用户可能需要同时参考多个内容的场景。
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "设置type='multiple'，允许用户同时打开多个手风琴项。",
            },
        },
    },
};

export const DefaultOpen: Story = {
    render: () => (
        <Accordion type="single" defaultValue="item-2" className="w-[350px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>第一项</AccordionTrigger>
                <AccordionContent>第一项的内容区域。</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>第二项（默认打开）</AccordionTrigger>
                <AccordionContent>
                    第二项的内容区域。设置defaultValue使此项在初始加载时打开。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>第三项</AccordionTrigger>
                <AccordionContent>第三项的内容区域。</AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "通过设置defaultValue属性指定默认打开的项。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[350px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>可用项</AccordionTrigger>
                <AccordionContent>这个项可以正常交互。</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger disabled>禁用项</AccordionTrigger>
                <AccordionContent>
                    此项的触发器已被禁用，用户无法点击展开或折叠它。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>可用项</AccordionTrigger>
                <AccordionContent>这个项也可以正常交互。</AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "可以为特定的AccordionTrigger添加disabled属性来禁用它。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[350px]">
            <AccordionItem value="item-1" className="border-b-2 border-blue-300">
                <AccordionTrigger className="text-blue-600 hover:text-blue-800">
                    自定义样式
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-gray-50 p-2 rounded-md">
                    通过传递className属性，可以自定义AccordionItem、AccordionTrigger和AccordionContent的样式。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-2 border-green-300">
                <AccordionTrigger className="text-green-600 hover:text-green-800">
                    更多自定义样式
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-gray-50 p-2 rounded-md">
                    每个组件都接受className属性，使用Tailwind CSS可以轻松定制样式。
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "展示如何使用className属性自定义手风琴组件的样式。",
            },
        },
    },
};

export const NestedAccordion: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[400px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>父级项目</AccordionTrigger>
                <AccordionContent>
                    <p className="mb-2">父级内容区域</p>
                    <Accordion type="single" collapsible className="border rounded-md">
                        <AccordionItem value="nested-1">
                            <AccordionTrigger>嵌套项目 1</AccordionTrigger>
                            <AccordionContent>这是嵌套手风琴的内容 1</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="nested-2">
                            <AccordionTrigger>嵌套项目 2</AccordionTrigger>
                            <AccordionContent>这是嵌套手风琴的内容 2</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>另一个父级项目</AccordionTrigger>
                <AccordionContent>常规内容，无嵌套</AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
    parameters: {
        docs: {
            description: {
                story: "展示如何在手风琴内部嵌套另一个手风琴，创建层次结构。",
            },
        },
    },
};