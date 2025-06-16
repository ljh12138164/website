import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "./select";
import { Label } from "./label";
import { BiCheck } from "react-icons/bi";
import { FaUser, FaGlobe, FaFlag, FaCalendarAlt, FaBell, FaTag } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdOutlineWeb, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { BsGlobe2, BsCheck } from "react-icons/bs";

// 自定义Select组件，使用react-icons替代lucide-react
const SelectWithIcons = ({ children, ...props }: React.ComponentProps<typeof Select>) => {
    return <Select {...props}>{children}</Select>;
};

const SelectTriggerWithIcon = ({
    children,
    ...props
}: React.ComponentProps<typeof SelectTrigger>) => {
    return (
        <SelectTrigger {...props}>
            {children}
            <MdOutlineKeyboardArrowDown className="size-4 opacity-50" />
        </SelectTrigger>
    );
};

const SelectContentWithIcons = ({
    children,
    ...props
}: React.ComponentProps<typeof SelectContent>) => {
    return (
        <SelectContent
            {...props}
            // @ts-ignore
            scrollUpButton={
                <div className="flex cursor-default items-center justify-center py-1">
                    <MdOutlineKeyboardArrowUp className="size-4" />
                </div>
            }
            scrollDownButton={
                <div className="flex cursor-default items-center justify-center py-1">
                    <MdOutlineKeyboardArrowDown className="size-4" />
                </div>
            }
        >
            {children}
        </SelectContent>
    );
};

// 修改SelectItem以使用react-icons
const SelectItemWithIcon = ({
    children,
    ...props
}: React.ComponentProps<typeof SelectItem>) => {
    return (
        <SelectItem {...props}>
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
                <BiCheck className="size-4" />
            </span>
            {children}
        </SelectItem>
    );
};

const meta: Meta<typeof Select> = {
    title: "组件/Select",
    component: SelectWithIcons,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "下拉选择组件允许用户从预定义的选项列表中进行选择。基于Radix UI的Select组件构建。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => (
        <SelectWithIcons>
            <SelectTriggerWithIcon className="w-[180px]">
                <SelectValue placeholder="选择水果" />
            </SelectTriggerWithIcon>
            <SelectContentWithIcons>
                <SelectItemWithIcon value="apple">苹果</SelectItemWithIcon>
                <SelectItemWithIcon value="banana">香蕉</SelectItemWithIcon>
                <SelectItemWithIcon value="orange">橙子</SelectItemWithIcon>
                <SelectItemWithIcon value="grape">葡萄</SelectItemWithIcon>
                <SelectItemWithIcon value="watermelon">西瓜</SelectItemWithIcon>
            </SelectContentWithIcons>
        </SelectWithIcons>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的下拉选择组件，提供简单的选择功能。",
            },
        },
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="fruit">选择水果</Label>
            <SelectWithIcons>
                <SelectTriggerWithIcon className="w-[180px]" id="fruit">
                    <SelectValue placeholder="选择一项" />
                </SelectTriggerWithIcon>
                <SelectContentWithIcons>
                    <SelectItemWithIcon value="apple">苹果</SelectItemWithIcon>
                    <SelectItemWithIcon value="banana">香蕉</SelectItemWithIcon>
                    <SelectItemWithIcon value="orange">橙子</SelectItemWithIcon>
                </SelectContentWithIcons>
            </SelectWithIcons>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有标签的下拉选择组件，提供更好的可访问性。",
            },
        },
    },
};

export const WithGroups: Story = {
    render: () => (
        <SelectWithIcons defaultValue="cn">
            <SelectTriggerWithIcon className="w-[200px]">
                <SelectValue />
            </SelectTriggerWithIcon>
            <SelectContentWithIcons>
                <SelectGroup>
                    <SelectLabel>亚洲</SelectLabel>
                    <SelectItemWithIcon value="cn">
                        <div className="flex items-center gap-2">
                            <FaFlag className="size-3.5 text-red-500" />
                            中国
                        </div>
                    </SelectItemWithIcon>
                    <SelectItemWithIcon value="jp">
                        <div className="flex items-center gap-2">
                            <FaFlag className="size-3.5 text-red-600" />
                            日本
                        </div>
                    </SelectItemWithIcon>
                    <SelectItemWithIcon value="kr">
                        <div className="flex items-center gap-2">
                            <FaFlag className="size-3.5 text-blue-500" />
                            韩国
                        </div>
                    </SelectItemWithIcon>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                    <SelectLabel>欧洲</SelectLabel>
                    <SelectItemWithIcon value="uk">
                        <div className="flex items-center gap-2">
                            <FaFlag className="size-3.5 text-blue-600" />
                            英国
                        </div>
                    </SelectItemWithIcon>
                    <SelectItemWithIcon value="fr">
                        <div className="flex items-center gap-2">
                            <FaFlag className="size-3.5 text-blue-800" />
                            法国
                        </div>
                    </SelectItemWithIcon>
                    <SelectItemWithIcon value="de">
                        <div className="flex items-center gap-2">
                            <FaFlag className="size-3.5 text-yellow-500" />
                            德国
                        </div>
                    </SelectItemWithIcon>
                </SelectGroup>
            </SelectContentWithIcons>
        </SelectWithIcons>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有分组的下拉选择组件，将相关选项组织在一起。",
            },
        },
    },
};

export const WithIcons: Story = {
    render: () => (
        <SelectWithIcons>
            <SelectTriggerWithIcon className="w-[200px]">
                <SelectValue placeholder="选择一个主题" />
            </SelectTriggerWithIcon>
            <SelectContentWithIcons>
                <SelectItemWithIcon value="light">
                    <div className="flex items-center gap-2">
                        <FaUser className="size-4 text-amber-500" />
                        个人信息
                    </div>
                </SelectItemWithIcon>
                <SelectItemWithIcon value="system">
                    <div className="flex items-center gap-2">
                        <FaGlobe className="size-4 text-blue-500" />
                        语言设置
                    </div>
                </SelectItemWithIcon>
                <SelectItemWithIcon value="dark">
                    <div className="flex items-center gap-2">
                        <FaBell className="size-4 text-purple-500" />
                        通知中心
                    </div>
                </SelectItemWithIcon>
            </SelectContentWithIcons>
        </SelectWithIcons>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有图标的下拉选择组件，使选项更直观易懂。",
            },
        },
    },
};

export const WithIconValueDisplay: Story = {
    render: () => (
        <SelectWithIcons defaultValue="zh">
            <SelectTriggerWithIcon className="w-[200px]">
                <SelectValue />
            </SelectTriggerWithIcon>
            <SelectContentWithIcons>
                <SelectItemWithIcon value="zh">
                    <div className="flex items-center gap-2">
                        <BsGlobe2 className="size-4 text-blue-500" />
                        简体中文
                    </div>
                </SelectItemWithIcon>
                <SelectItemWithIcon value="en">
                    <div className="flex items-center gap-2">
                        <BsGlobe2 className="size-4 text-blue-500" />
                        English
                    </div>
                </SelectItemWithIcon>
                <SelectItemWithIcon value="ja">
                    <div className="flex items-center gap-2">
                        <BsGlobe2 className="size-4 text-blue-500" />
                        日本語
                    </div>
                </SelectItemWithIcon>
                <SelectItemWithIcon value="ko">
                    <div className="flex items-center gap-2">
                        <BsGlobe2 className="size-4 text-blue-500" />
                        한국어
                    </div>
                </SelectItemWithIcon>
            </SelectContentWithIcons>
        </SelectWithIcons>
    ),
    parameters: {
        docs: {
            description: {
                story: "选择后在触发器中显示带图标的选项。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <SelectWithIcons disabled>
                    <SelectTriggerWithIcon className="w-[180px]">
                        <SelectValue placeholder="禁用状态" />
                    </SelectTriggerWithIcon>
                    <SelectContentWithIcons>
                        <SelectItemWithIcon value="apple">苹果</SelectItemWithIcon>
                        <SelectItemWithIcon value="banana">香蕉</SelectItemWithIcon>
                        <SelectItemWithIcon value="orange">橙子</SelectItemWithIcon>
                    </SelectContentWithIcons>
                </SelectWithIcons>
                <span className="text-sm text-muted-foreground">整个选择器被禁用</span>
            </div>

            <div className="flex items-center gap-4">
                <SelectWithIcons>
                    <SelectTriggerWithIcon className="w-[180px]">
                        <SelectValue placeholder="部分禁用" />
                    </SelectTriggerWithIcon>
                    <SelectContentWithIcons>
                        <SelectItemWithIcon value="apple">苹果</SelectItemWithIcon>
                        <SelectItemWithIcon value="banana" disabled>香蕉</SelectItemWithIcon>
                        <SelectItemWithIcon value="orange">橙子</SelectItemWithIcon>
                    </SelectContentWithIcons>
                </SelectWithIcons>
                <span className="text-sm text-muted-foreground">部分选项被禁用</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的下拉选择组件，可以禁用整个选择器或特定选项。",
            },
        },
    },
};

export const WithDefaultValue: Story = {
    render: () => (
        <SelectWithIcons defaultValue="banana">
            <SelectTriggerWithIcon className="w-[180px]">
                <SelectValue />
            </SelectTriggerWithIcon>
            <SelectContentWithIcons>
                <SelectItemWithIcon value="apple">苹果</SelectItemWithIcon>
                <SelectItemWithIcon value="banana">香蕉</SelectItemWithIcon>
                <SelectItemWithIcon value="orange">橙子</SelectItemWithIcon>
            </SelectContentWithIcons>
        </SelectWithIcons>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有默认选中值的下拉选择组件。",
            },
        },
    },
};

export const FormExample: Story = {
    render: () => (
        <form className="w-[350px] space-y-6 rounded-lg border p-4">
            <h3 className="text-lg font-medium">用户注册</h3>

            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">姓名</Label>
                    <input
                        id="name"
                        type="text"
                        className="rounded-md border px-3 py-1.5"
                        placeholder="请输入姓名"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="gender">性别</Label>
                    <SelectWithIcons>
                        <SelectTriggerWithIcon className="w-full" id="gender">
                            <SelectValue placeholder="请选择性别" />
                        </SelectTriggerWithIcon>
                        <SelectContentWithIcons>
                            <SelectItemWithIcon value="male">男</SelectItemWithIcon>
                            <SelectItemWithIcon value="female">女</SelectItemWithIcon>
                            <SelectItemWithIcon value="other">其他</SelectItemWithIcon>
                        </SelectContentWithIcons>
                    </SelectWithIcons>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="country">国家/地区</Label>
                    <SelectWithIcons>
                        <SelectTriggerWithIcon className="w-full" id="country">
                            <SelectValue placeholder="请选择国家或地区" />
                        </SelectTriggerWithIcon>
                        <SelectContentWithIcons>
                            <SelectGroup>
                                <SelectLabel>常用</SelectLabel>
                                <SelectItemWithIcon value="cn">中国</SelectItemWithIcon>
                                <SelectItemWithIcon value="us">美国</SelectItemWithIcon>
                                <SelectItemWithIcon value="jp">日本</SelectItemWithIcon>
                            </SelectGroup>
                            <SelectSeparator />
                            <SelectGroup>
                                <SelectLabel>其他</SelectLabel>
                                <SelectItemWithIcon value="uk">英国</SelectItemWithIcon>
                                <SelectItemWithIcon value="ca">加拿大</SelectItemWithIcon>
                                <SelectItemWithIcon value="au">澳大利亚</SelectItemWithIcon>
                            </SelectGroup>
                        </SelectContentWithIcons>
                    </SelectWithIcons>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="occupation">职业</Label>
                    <SelectWithIcons>
                        <SelectTriggerWithIcon className="w-full" id="occupation">
                            <SelectValue placeholder="请选择职业" />
                        </SelectTriggerWithIcon>
                        <SelectContentWithIcons>
                            <SelectItemWithIcon value="engineer">工程师</SelectItemWithIcon>
                            <SelectItemWithIcon value="designer">设计师</SelectItemWithIcon>
                            <SelectItemWithIcon value="teacher">教师</SelectItemWithIcon>
                            <SelectItemWithIcon value="student">学生</SelectItemWithIcon>
                            <SelectItemWithIcon value="other">其他</SelectItemWithIcon>
                        </SelectContentWithIcons>
                    </SelectWithIcons>
                </div>
            </div>

            <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2 text-sm font-medium"
            >
                提交
            </button>
        </form>
    ),
    parameters: {
        docs: {
            description: {
                story: "在表单中使用下拉选择组件的示例。",
            },
        },
    },
};

export const CustomSizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <SelectWithIcons>
                    <SelectTriggerWithIcon className="w-[180px]" size="sm">
                        <SelectValue placeholder="小尺寸" />
                    </SelectTriggerWithIcon>
                    <SelectContentWithIcons>
                        <SelectItemWithIcon value="small">小号选项</SelectItemWithIcon>
                        <SelectItemWithIcon value="medium">中号选项</SelectItemWithIcon>
                        <SelectItemWithIcon value="large">大号选项</SelectItemWithIcon>
                    </SelectContentWithIcons>
                </SelectWithIcons>
                <span className="text-sm text-muted-foreground">小尺寸</span>
            </div>

            <div className="flex items-center gap-4">
                <SelectWithIcons>
                    <SelectTriggerWithIcon className="w-[180px]" size="default">
                        <SelectValue placeholder="默认尺寸" />
                    </SelectTriggerWithIcon>
                    <SelectContentWithIcons>
                        <SelectItemWithIcon value="small">小号选项</SelectItemWithIcon>
                        <SelectItemWithIcon value="medium">中号选项</SelectItemWithIcon>
                        <SelectItemWithIcon value="large">大号选项</SelectItemWithIcon>
                    </SelectContentWithIcons>
                </SelectWithIcons>
                <span className="text-sm text-muted-foreground">默认尺寸</span>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同尺寸的下拉选择组件。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <SelectWithIcons>
            <SelectTriggerWithIcon className="w-[200px] border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100">
                <SelectValue placeholder="自定义样式" />
            </SelectTriggerWithIcon>
            <SelectContentWithIcons className="bg-blue-50 border-blue-300">
                <SelectItemWithIcon value="option1" className="focus:bg-blue-100 focus:text-blue-800">
                    选项一
                </SelectItemWithIcon>
                <SelectItemWithIcon value="option2" className="focus:bg-blue-100 focus:text-blue-800">
                    选项二
                </SelectItemWithIcon>
                <SelectItemWithIcon value="option3" className="focus:bg-blue-100 focus:text-blue-800">
                    选项三
                </SelectItemWithIcon>
                <SelectSeparator className="bg-blue-200" />
                <SelectItemWithIcon value="option4" className="focus:bg-blue-100 focus:text-blue-800">
                    选项四
                </SelectItemWithIcon>
            </SelectContentWithIcons>
        </SelectWithIcons>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的下拉选择组件，展示了如何修改颜色和背景。",
            },
        },
    },
};

export const WithSearchSimulation: Story = {
    render: () => {
        const [searchTerm, setSearchTerm] = React.useState("");
        const options = [
            { value: "react", label: "React" },
            { value: "vue", label: "Vue" },
            { value: "angular", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "ember", label: "Ember" },
            { value: "backbone", label: "Backbone" },
            { value: "next", label: "Next.js" },
            { value: "nuxt", label: "Nuxt.js" },
        ];

        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="space-y-4">
                <div className="w-[250px]">
                    <input
                        type="text"
                        placeholder="搜索框架..."
                        className="w-full rounded-md border px-3 py-1.5 mb-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <SelectWithIcons>
                        <SelectTriggerWithIcon className="w-full">
                            <SelectValue placeholder="选择框架" />
                        </SelectTriggerWithIcon>
                        <SelectContentWithIcons>
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <SelectItemWithIcon key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItemWithIcon>
                                ))
                            ) : (
                                <div className="px-2 py-4 text-center text-sm text-muted-foreground">
                                    未找到匹配项
                                </div>
                            )}
                        </SelectContentWithIcons>
                    </SelectWithIcons>
                </div>

                <div className="text-sm text-muted-foreground">
                    <p>此示例演示了如何实现带搜索过滤功能的选择组件。</p>
                    <p>注：这种方法适用于客户端过滤，对于大型数据集，请考虑使用专门的可搜索下拉组件。</p>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "带搜索功能的下拉选择组件的简单模拟实现。",
            },
        },
    },
};