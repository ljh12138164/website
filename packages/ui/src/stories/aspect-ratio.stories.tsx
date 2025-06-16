import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { AspectRatio } from "./aspect-ratio";
import { cn } from "@workspace/ui/lib/utils";

const meta: Meta<typeof AspectRatio> = {
    title: "组件/AspectRatio",
    component: AspectRatio,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "纵横比组件，用于维持内容的固定宽高比。基于Radix UI的AspectRatio组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        ratio: {
            control: { type: "number" },
            description: "宽高比值（宽度/高度）",
        },
        className: {
            control: "text",
            description: "自定义CSS类名",
        },
    },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
    render: () => (
        <div className="w-[400px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <div className="flex h-full items-center justify-center">
                    16:9 纵横比
                </div>
            </AspectRatio>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本的纵横比组件，设置为16:9比例。",
            },
        },
    },
};

export const Square: Story = {
    render: () => (
        <div className="w-[300px]">
            <AspectRatio ratio={1} className="bg-muted">
                <div className="flex h-full items-center justify-center">
                    1:1 正方形
                </div>
            </AspectRatio>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "1:1比例的纵横比组件，创建正方形。",
            },
        },
    },
};

export const WithImage: Story = {
    render: () => (
        <div className="w-[400px] overflow-hidden rounded-lg">
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="风景图片"
                    className="object-cover w-full h-full"
                />
            </AspectRatio>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带图片的纵横比组件，保持图片的16:9比例。",
            },
        },
    },
};

export const Portrait: Story = {
    render: () => (
        <div className="w-[300px] overflow-hidden rounded-lg">
            <AspectRatio ratio={3 / 4}>
                <img
                    src="https://images.unsplash.com/photo-1564923630403-2284b87c0041?w=800&dpr=2&q=80"
                    alt="人像照片"
                    className="object-cover w-full h-full"
                />
            </AspectRatio>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "3:4比例的纵横比组件，适合人像照片。",
            },
        },
    },
};

export const MultipleRatios: Story = {
    render: () => (
        <div className="grid grid-cols-3 gap-4 max-w-3xl">
            <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={1} className="bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="风景图片"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                        <span className="text-white text-xs">1:1</span>
                    </div>
                </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={4 / 3} className="bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="风景图片"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                        <span className="text-white text-xs">4:3</span>
                    </div>
                </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="风景图片"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                        <span className="text-white text-xs">16:9</span>
                    </div>
                </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={3 / 2} className="bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="风景图片"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                        <span className="text-white text-xs">3:2</span>
                    </div>
                </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={2 / 3} className="bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1564923630403-2284b87c0041?w=800&dpr=2&q=80"
                        alt="人像照片"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                        <span className="text-white text-xs">2:3</span>
                    </div>
                </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-lg">
                <AspectRatio ratio={9 / 16} className="bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1564923630403-2284b87c0041?w=800&dpr=2&q=80"
                        alt="人像照片"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                        <span className="text-white text-xs">9:16</span>
                    </div>
                </AspectRatio>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同纵横比的组件展示。",
            },
        },
    },
};

export const WithVideo: Story = {
    render: () => (
        <div className="w-[400px] overflow-hidden rounded-lg">
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </AspectRatio>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带视频的纵横比组件，保持视频的16:9比例。",
            },
        },
    },
};

export const CardWithImage: Story = {
    render: () => (
        <div className="w-[300px] overflow-hidden rounded-lg border">
            <AspectRatio ratio={16 / 9}>
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="风景图片"
                    className="object-cover w-full h-full"
                />
            </AspectRatio>
            <div className="p-4">
                <h3 className="text-lg font-medium">美丽风景</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    这是一张美丽的风景照片，展示了大自然的壮丽景色。
                </p>
                <button className="mt-3 text-sm text-primary">查看更多</button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在卡片中使用纵横比组件来控制图片的比例。",
            },
        },
    },
};

export const ProductCard: Story = {
    render: () => (
        <div className="w-[250px] overflow-hidden rounded-lg border">
            <AspectRatio ratio={1}>
                <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&dpr=2&q=80"
                    alt="产品图片"
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    新品
                </div>
            </AspectRatio>
            <div className="p-3">
                <h3 className="text-sm font-medium">智能手表</h3>
                <p className="text-sm text-muted-foreground mt-1">¥1299.00</p>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "产品卡片中使用纵横比组件，保持产品图片为正方形。",
            },
        },
    },
};

export const ResponsiveGallery: Story = {
    render: () => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-3xl">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-md">
                    <AspectRatio ratio={1}>
                        <img
                            src={`https://picsum.photos/seed/${i + 1}/400/400`}
                            alt={`图片 ${i + 1}`}
                            className={cn(
                                "object-cover w-full h-full transition-transform duration-300",
                                "hover:scale-110"
                            )}
                        />
                    </AspectRatio>
                </div>
            ))}
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "响应式图片画廊，使用纵横比组件保持所有图片为正方形。",
            },
        },
    },
};

export const MapEmbed: Story = {
    render: () => (
        <div className="w-[400px] overflow-hidden rounded-lg border">
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215139800267!2d-73.9896811!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629828555183!5m2!1sen!2sus"
                    title="地图"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                />
            </AspectRatio>
            <div className="p-3">
                <h3 className="text-sm font-medium">帝国大厦</h3>
                <p className="text-xs text-muted-foreground mt-1">
                    纽约市曼哈顿区第五大道350号
                </p>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "嵌入地图时使用纵横比组件，保持地图的16:9比例。",
            },
        },
    },
};