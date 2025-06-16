import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Progress } from "./progress";
import { Label } from "./label";
import { Button } from "./button";

const meta: Meta<typeof Progress> = {
    title: "组件/Progress",
    component: Progress,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "进度条组件用于显示操作的当前进度。基于Radix UI的Progress组件构建。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 100, step: 1 },
            description: "进度条的值（0-100）",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: {
        value: 40,
        className: "w-[300px]",
    },
    parameters: {
        docs: {
            description: {
                story: "基本的进度条组件，显示40%的进度。",
            },
        },
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="w-[300px] space-y-2">
            <div className="flex justify-between text-sm">
                <Label>进度</Label>
                <span>60%</span>
            </div>
            <Progress value={60} />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有标签的进度条，显示当前进度的百分比。",
            },
        },
    },
};

export const CustomColors: Story = {
    render: () => (
        <div className="space-y-4 w-[300px]">
            <div className="space-y-1.5">
                <Label className="text-green-600">成功（75%）</Label>
                <Progress value={75} className="bg-green-200">
                    <div className="bg-green-600 h-full w-full flex-1 transition-all" style={{ transform: `translateX(-${100 - 75}%)` }} />
                </Progress>
            </div>

            <div className="space-y-1.5">
                <Label className="text-amber-600">警告（45%）</Label>
                <Progress value={45} className="bg-amber-200">
                    <div className="bg-amber-600 h-full w-full flex-1 transition-all" style={{ transform: `translateX(-${100 - 45}%)` }} />
                </Progress>
            </div>

            <div className="space-y-1.5">
                <Label className="text-red-600">错误（20%）</Label>
                <Progress value={20} className="bg-red-200">
                    <div className="bg-red-600 h-full w-full flex-1 transition-all" style={{ transform: `translateX(-${100 - 20}%)` }} />
                </Progress>
            </div>

            <div className="space-y-1.5">
                <Label className="text-blue-600">信息（90%）</Label>
                <Progress value={90} className="bg-blue-200">
                    <div className="bg-blue-600 h-full w-full flex-1 transition-all" style={{ transform: `translateX(-${100 - 90}%)` }} />
                </Progress>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义颜色的进度条，可以用不同的颜色表示不同的状态或类别。",
            },
        },
    },
};

export const CustomSizes: Story = {
    render: () => (
        <div className="space-y-6 w-[300px]">
            <div className="space-y-1.5">
                <Label className="text-xs">小尺寸（h-1）</Label>
                <Progress value={50} className="h-1" />
            </div>

            <div className="space-y-1.5">
                <Label className="text-sm">默认尺寸（h-2）</Label>
                <Progress value={50} />
            </div>

            <div className="space-y-1.5">
                <Label className="text-base">中等尺寸（h-3）</Label>
                <Progress value={50} className="h-3" />
            </div>

            <div className="space-y-1.5">
                <Label className="text-lg">大尺寸（h-4）</Label>
                <Progress value={50} className="h-4" />
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不同高度的进度条，可以根据界面需求选择合适的尺寸。",
            },
        },
    },
};

export const Animated: Story = {
    render: () => {
        const [progress, setProgress] = React.useState(13);

        React.useEffect(() => {
            const timer = setTimeout(() => setProgress(66), 500);
            return () => clearTimeout(timer);
        }, []);

        return (
            <div className="w-[300px] space-y-2">
                <div className="flex justify-between text-sm">
                    <Label>下载中...</Label>
                    <span>{progress}%</span>
                </div>
                <Progress
                    value={progress}
                    className="bg-blue-200"
                >
                    <div
                        className="bg-blue-600 h-full w-full flex-1 transition-all duration-700 ease-out"
                        style={{ transform: `translateX(-${100 - progress}%)` }}
                    />
                </Progress>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "动画效果的进度条，用于展示正在进行的操作。",
            },
        },
    },
};

export const LoadingStates: Story = {
    render: () => {
        const [loading, setLoading] = React.useState(false);
        const [progress, setProgress] = React.useState(0);

        React.useEffect(() => {
            if (loading) {
                const interval = setInterval(() => {
                    setProgress((prevProgress) => {
                        if (prevProgress >= 100) {
                            clearInterval(interval);
                            setLoading(false);
                            return 100;
                        }
                        return prevProgress + 5;
                    });
                }, 200);

                return () => clearInterval(interval);
            }

            return undefined;
        }, [loading]);

        return (
            <div className="w-[300px] space-y-4">
                <div className="space-y-2">
                    {loading && (
                        <>
                            <div className="flex justify-between text-sm">
                                <span>处理中...</span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} />
                        </>
                    )}
                    {!loading && progress === 100 && (
                        <div className="text-center text-green-600 text-sm py-2">
                            处理完成！
                        </div>
                    )}
                </div>

                <Button
                    onClick={() => {
                        setProgress(0);
                        setLoading(true);
                    }}
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? "处理中..." : "开始处理"}
                </Button>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "模拟加载状态的进度条，展示了如何在实际应用中使用进度条。",
            },
        },
    },
};

export const IndeterminateProgress: Story = {
    render: () => (
        <div className="w-[300px] space-y-6">
            <div className="space-y-2">
                <Label className="flex justify-between">
                    <span>加载中...</span>
                </Label>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                    <div className="animate-indeterminate absolute h-full w-1/3 bg-primary rounded-full" />
                </div>
                <style jsx global>{`
          @keyframes indeterminate {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
          .animate-indeterminate {
            animation: indeterminate 1.5s infinite cubic-bezier(0.65, 0.815, 0.735, 0.395);
          }
        `}</style>
            </div>

            <div className="space-y-2">
                <Label className="flex justify-between">
                    <span>加载中（脉冲效果）...</span>
                </Label>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
                    <div className="animate-pulse absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1/2 bg-primary rounded-full opacity-75" />
                    </div>
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "不确定状态的进度条，适用于无法估计完成时间的操作。",
            },
        },
    },
};

export const ProgressSteps: Story = {
    render: () => {
        const steps = [
            { name: "账户创建", status: "complete" },
            { name: "个人信息", status: "complete" },
            { name: "商业信息", status: "current" },
            { name: "确认信息", status: "upcoming" }
        ];

        const currentStep = steps.findIndex((step) => step.status === "current") + 1;
        const progress = (currentStep - 1) / (steps.length - 1) * 100;

        return (
            <div className="w-[400px] space-y-6">
                <Progress value={progress} />

                <div className="flex justify-between">
                    {steps.map((step, index) => (
                        <div key={step.name} className="flex flex-col items-center">
                            <div className={`
                size-8 flex items-center justify-center rounded-full border-2 text-sm font-medium
                ${step.status === "complete" ? "border-primary bg-primary text-primary-foreground" : ""}
                ${step.status === "current" ? "border-primary text-primary" : ""}
                ${step.status === "upcoming" ? "border-muted bg-muted text-muted-foreground" : ""}
              `}>
                                {index + 1}
                            </div>
                            <span className={`mt-2 text-xs font-medium
                ${step.status === "complete" || step.status === "current" ? "text-foreground" : "text-muted-foreground"}
              `}>
                                {step.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "进度步骤示例，用于多步骤流程的可视化表示。",
            },
        },
    },
};

export const FileUploadProgress: Story = {
    render: () => {
        const [uploading, setUploading] = React.useState(false);
        const [progress, setProgress] = React.useState(0);
        const [files, setFiles] = React.useState([
            { name: "document.pdf", size: "2.4 MB", progress: 100, status: "complete" },
            { name: "image.jpg", size: "1.2 MB", progress: 100, status: "complete" },
        ]);

        React.useEffect(() => {
            if (uploading) {
                const interval = setInterval(() => {
                    setProgress((prevProgress) => {
                        if (prevProgress >= 100) {
                            clearInterval(interval);
                            setUploading(false);
                            setFiles((prevFiles) => [
                                ...prevFiles,
                                { name: "presentation.pptx", size: "3.8 MB", progress: 100, status: "complete" }
                            ]);
                            return 0;
                        }
                        return prevProgress + 4;
                    });
                }, 200);

                return () => clearInterval(interval);
            }

            return undefined;
        }, [uploading]);

        return (
            <div className="w-[400px] border rounded-lg p-4">
                <h3 className="font-medium mb-4">文件上传</h3>

                <div className="space-y-4">
                    {files.map((file) => (
                        <div key={file.name} className="space-y-1.5">
                            <div className="flex justify-between text-sm">
                                <span>{file.name}</span>
                                <span>{file.size}</span>
                            </div>
                            <Progress value={file.progress} className="h-1.5" />
                        </div>
                    ))}

                    {uploading && (
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-sm">
                                <span>presentation.pptx</span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-1.5" />
                        </div>
                    )}

                    <Button
                        onClick={() => setUploading(true)}
                        disabled={uploading}
                        size="sm"
                        className="mt-2"
                    >
                        {uploading ? "上传中..." : "上传文件"}
                    </Button>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "文件上传进度示例，展示了如何在文件上传场景使用进度条。",
            },
        },
    },
};