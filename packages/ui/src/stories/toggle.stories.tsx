import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Toggle } from "./toggle";
import { Label } from "./label";
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiOutlineAlignLeft,
    AiOutlineAlignCenter,
    AiOutlineAlignRight,
    AiOutlineOrderedList,
    AiOutlineUnorderedList,
    AiOutlineStar,
    AiOutlineHeart,
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlineCode
} from "react-icons/ai";
import {
    BsMoon,
    BsSun,
    BsVolumeMute,
    BsVolumeUp,
    BsPinAngle,
    BsPinFill,
    BsGrid,
    BsListUl
} from "react-icons/bs";

const meta: Meta<typeof Toggle> = {
    title: "组件/Toggle",
    component: Toggle,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "切换按钮组件，用于在两种状态之间切换。基于Radix UI的Toggle组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ["default", "outline"],
            control: { type: "radio" },
            description: "切换按钮的变体样式",
        },
        size: {
            options: ["sm", "default", "lg"],
            control: { type: "radio" },
            description: "切换按钮的尺寸",
        },
        pressed: {
            control: "boolean",
            description: "控制按钮是否被按下",
        },
        disabled: {
            control: "boolean",
            description: "是否禁用按钮",
        },
        asChild: {
            control: "boolean",
            description: "是否将组件渲染为子元素",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    args: {
        children: "切换",
    },
    parameters: {
        docs: {
            description: {
                story: "基本的切换按钮。",
            },
        },
    },
};

export const Outline: Story = {
    args: {
        children: "切换",
        variant: "outline",
    },
    parameters: {
        docs: {
            description: {
                story: "带边框的切换按钮。",
            },
        },
    },
};

export const WithIcon: Story = {
    render: () => (
        <Toggle aria-label="加粗">
            <AiOutlineBold className="size-4" />
        </Toggle>
    ),
    parameters: {
        docs: {
            description: {
                story: "仅带图标的切换按钮。",
            },
        },
    },
};

export const WithIconAndText: Story = {
    render: () => (
        <Toggle>
            <AiOutlineBold className="size-4" />
            <span>加粗</span>
        </Toggle>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图标和文本的切换按钮。",
            },
        },
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Toggle size="sm">
                <AiOutlineStar className="size-3.5" />
                <span>小尺寸</span>
            </Toggle>

            <Toggle size="default">
                <AiOutlineStar className="size-4" />
                <span>默认尺寸</span>
            </Toggle>

            <Toggle size="lg">
                <AiOutlineStar className="size-5" />
                <span>大尺寸</span>
            </Toggle>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同尺寸的切换按钮。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Toggle disabled>
                <AiOutlineBold className="size-4" />
                <span>禁用状态</span>
            </Toggle>

            <Toggle disabled pressed>
                <AiOutlineBold className="size-4" />
                <span>禁用选中</span>
            </Toggle>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的切换按钮。",
            },
        },
    },
};

export const TextFormatting: Story = {
    render: () => (
        <div className="w-[360px] space-y-4">
            <div className="border rounded-lg p-4">
                <div className="flex items-center gap-1 pb-4 border-b">
                    <Toggle aria-label="加粗" variant="outline" size="sm">
                        <AiOutlineBold className="size-4" />
                    </Toggle>
                    <Toggle aria-label="斜体" variant="outline" size="sm">
                        <AiOutlineItalic className="size-4" />
                    </Toggle>
                    <Toggle aria-label="下划线" variant="outline" size="sm">
                        <AiOutlineUnderline className="size-4" />
                    </Toggle>
                    <div className="w-px h-4 bg-border mx-1" />
                    <Toggle aria-label="左对齐" variant="outline" size="sm">
                        <AiOutlineAlignLeft className="size-4" />
                    </Toggle>
                    <Toggle aria-label="居中对齐" variant="outline" size="sm">
                        <AiOutlineAlignCenter className="size-4" />
                    </Toggle>
                    <Toggle aria-label="右对齐" variant="outline" size="sm">
                        <AiOutlineAlignRight className="size-4" />
                    </Toggle>
                    <div className="w-px h-4 bg-border mx-1" />
                    <Toggle aria-label="有序列表" variant="outline" size="sm">
                        <AiOutlineOrderedList className="size-4" />
                    </Toggle>
                    <Toggle aria-label="无序列表" variant="outline" size="sm">
                        <AiOutlineUnorderedList className="size-4" />
                    </Toggle>
                </div>

                <div className="pt-4 text-sm text-muted-foreground">
                    点击上方按钮来格式化文本...
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在文本编辑器工具栏中使用切换按钮。",
            },
        },
    },
};

export const ToggleGroup: Story = {
    render: () => {
        const [alignment, setAlignment] = React.useState("left");
        const [view, setView] = React.useState("grid");

        return (
            <div className="space-y-8">
                <div className="space-y-2">
                    <Label>文本对齐</Label>
                    <div className="inline-flex rounded-md border">
                        <Toggle
                            variant="outline"
                            className="rounded-r-none"
                            pressed={alignment === "left"}
                            onClick={() => setAlignment("left")}
                        >
                            <AiOutlineAlignLeft className="size-4" />
                            <span className="sr-only">左对齐</span>
                        </Toggle>
                        <Toggle
                            variant="outline"
                            className="rounded-none border-l-0 border-r-0"
                            pressed={alignment === "center"}
                            onClick={() => setAlignment("center")}
                        >
                            <AiOutlineAlignCenter className="size-4" />
                            <span className="sr-only">居中对齐</span>
                        </Toggle>
                        <Toggle
                            variant="outline"
                            className="rounded-l-none"
                            pressed={alignment === "right"}
                            onClick={() => setAlignment("right")}
                        >
                            <AiOutlineAlignRight className="size-4" />
                            <span className="sr-only">右对齐</span>
                        </Toggle>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>视图切换</Label>
                    <div className="inline-flex rounded-md border">
                        <Toggle
                            variant="outline"
                            className="rounded-r-none"
                            pressed={view === "grid"}
                            onClick={() => setView("grid")}
                        >
                            <BsGrid className="size-4" />
                            <span className="sr-only md:not-sr-only ml-2 hidden md:inline-block">网格视图</span>
                        </Toggle>
                        <Toggle
                            variant="outline"
                            className="rounded-l-none"
                            pressed={view === "list"}
                            onClick={() => setView("list")}
                        >
                            <BsListUl className="size-4" />
                            <span className="sr-only md:not-sr-only ml-2 hidden md:inline-block">列表视图</span>
                        </Toggle>
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "组合使用切换按钮，创建切换组。",
            },
        },
    },
};

export const DarkModeToggle: Story = {
    render: () => {
        const [isDarkMode, setIsDarkMode] = React.useState(false);

        return (
            <div className="flex flex-col items-center gap-2">
                <Toggle
                    variant="outline"
                    pressed={isDarkMode}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? (
                        <>
                            <BsMoon className="size-4" />
                            <span>暗黑模式</span>
                        </>
                    ) : (
                        <>
                            <BsSun className="size-4" />
                            <span>明亮模式</span>
                        </>
                    )}
                </Toggle>
                <span className="text-sm text-muted-foreground">
                    当前主题: {isDarkMode ? "暗黑模式" : "明亮模式"}
                </span>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "用于切换深色/浅色模式的切换按钮，显示不同的图标。",
            },
        },
    },
};

export const InteractiveStates: Story = {
    render: () => {
        const [favorites, setFavorites] = React.useState<string[]>([]);

        const toggleFavorite = (id: string) => {
            setFavorites((prev) =>
                prev.includes(id)
                    ? prev.filter(item => item !== id)
                    : [...prev, id]
            );
        };

        const items = [
            { id: "1", name: "蓝山咖啡", price: "¥42" },
            { id: "2", name: "拿铁咖啡", price: "¥38" },
            { id: "3", name: "卡布奇诺", price: "¥36" },
        ];

        return (
            <div className="w-[320px] border rounded-lg p-4 space-y-4">
                <h3 className="text-lg font-medium">咖啡菜单</h3>
                <div className="space-y-2">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                        >
                            <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-muted-foreground">{item.price}</div>
                            </div>
                            <Toggle
                                size="sm"
                                variant="outline"
                                pressed={favorites.includes(item.id)}
                                onClick={() => toggleFavorite(item.id)}
                                aria-label={`添加${item.name}到收藏`}
                            >
                                <AiOutlineHeart
                                    className={favorites.includes(item.id) ? "fill-red-500 text-red-500" : ""}
                                />
                            </Toggle>
                        </div>
                    ))}
                </div>
                <div className="text-sm text-muted-foreground pt-2">
                    {favorites.length > 0 ? (
                        <p>已收藏 {favorites.length} 项</p>
                    ) : (
                        <p>点击心形图标收藏喜欢的咖啡</p>
                    )}
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "在列表项中使用切换按钮实现收藏功能。",
            },
        },
    },
};

export const ToggleWithState: Story = {
    render: () => {
        const [showPassword, setShowPassword] = React.useState(false);
        const [muted, setMuted] = React.useState(false);
        const [pinned, setPinned] = React.useState(true);

        return (
            <div className="space-y-6 w-[300px]">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">显示密码</div>
                    <Toggle
                        variant="outline"
                        size="sm"
                        pressed={showPassword}
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="显示/隐藏密码"
                    >
                        {showPassword ? <AiOutlineEye className="size-4" /> : <AiOutlineEyeInvisible className="size-4" />}
                    </Toggle>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">静音</div>
                    <Toggle
                        variant="outline"
                        size="sm"
                        pressed={muted}
                        onClick={() => setMuted(!muted)}
                        aria-label="静音/取消静音"
                    >
                        {muted ? <BsVolumeMute className="size-4" /> : <BsVolumeUp className="size-4" />}
                    </Toggle>
                </div>

                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">置顶</div>
                    <Toggle
                        variant="outline"
                        size="sm"
                        pressed={pinned}
                        onClick={() => setPinned(!pinned)}
                        aria-label="置顶/取消置顶"
                    >
                        {pinned ? <BsPinFill className="size-4" /> : <BsPinAngle className="size-4" />}
                    </Toggle>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "根据状态显示不同内容的切换按钮。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Toggle className="bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                <AiOutlineStar className="size-4 mr-1" />
                蓝色主题
            </Toggle>

            <Toggle className="bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700 data-[state=on]:bg-green-600 data-[state=on]:text-white rounded-full px-3">
                <AiOutlineCode className="size-4 mr-1" />
                圆形按钮
            </Toggle>

            <Toggle className="bg-purple-100 text-purple-600 hover:bg-purple-200 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50 h-12 px-4 rounded-xl">
                <AiOutlineHeart className="size-5 mr-1" />
                大号按钮
            </Toggle>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的切换按钮，展示了不同的颜色、形状和大小。",
            },
        },
    },
};