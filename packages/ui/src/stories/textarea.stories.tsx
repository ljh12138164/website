import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Button } from "./button";

const meta: Meta<typeof Textarea> = {
    title: "组件/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "文本域组件，用于多行文本输入。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            control: "boolean",
            description: "是否禁用文本域",
        },
        placeholder: {
            control: "text",
            description: "占位符文本",
        },
        rows: {
            control: { type: "number" },
            description: "文本域的行数",
        },
        value: {
            control: "text",
            description: "文本域的值",
        },
        onChange: {
            action: "changed",
            description: "值变化时的回调函数",
        },
        className: {
            control: "text",
            description: "自定义CSS类名",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        placeholder: "请输入内容...",
    },
    parameters: {
        docs: {
            description: {
                story: "基本的文本域组件。",
            },
        },
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">消息</Label>
            <Textarea id="message" placeholder="请输入您的消息..." />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带标签的文本域。",
            },
        },
    },
};

export const WithDescription: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="description">描述</Label>
            <Textarea id="description" placeholder="请输入产品描述..." />
            <p className="text-sm text-muted-foreground">
                您的产品描述将显示在产品页面上。
            </p>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带描述文本的文本域。",
            },
        },
    },
};

export const Disabled: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="disabled">禁用状态</Label>
            <Textarea
                id="disabled"
                placeholder="此文本域已禁用..."
                disabled
                value="此文本域无法编辑"
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "禁用状态的文本域。",
            },
        },
    },
};

export const WithRows: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="rows">自定义行数</Label>
            <Textarea
                id="rows"
                placeholder="此文本域有5行高度..."
                rows={5}
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "指定行数的文本域。",
            },
        },
    },
};

export const WithDefaultValue: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="default-value">带默认值</Label>
            <Textarea
                id="default-value"
                defaultValue="这是文本域的默认内容，可以被用户编辑。"
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有默认值的文本域。",
            },
        },
    },
};

export const Required: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <div className="flex items-center gap-1">
                <Label htmlFor="required">反馈意见</Label>
                <span className="text-sm text-red-500">*</span>
            </div>
            <Textarea
                id="required"
                placeholder="请提供您的反馈意见..."
                required
            />
            <p className="text-sm text-muted-foreground">
                此字段为必填项。
            </p>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "必填的文本域。",
            },
        },
    },
};

export const WithCharacterCount: Story = {
    render: () => {
        const [value, setValue] = React.useState("");
        const maxLength = 100;

        return (
            <div className="grid w-full gap-1.5">
                <Label htmlFor="character-count">产品评论</Label>
                <Textarea
                    id="character-count"
                    placeholder="请输入您的评论..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    maxLength={maxLength}
                />
                <div className="flex justify-end">
                    <p className="text-sm text-muted-foreground">
                        {value.length}/{maxLength} 字符
                    </p>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "带字符计数的文本域。",
            },
        },
    },
};

export const FormExample: Story = {
    render: () => (
        <div className="w-full max-w-md space-y-4 border rounded-lg p-4">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">联系我们</h3>
                <p className="text-sm text-muted-foreground">
                    请填写以下表单，我们会尽快回复您。
                </p>
            </div>

            <div className="space-y-4">
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="name">姓名</Label>
                    <input
                        id="name"
                        className="border-input focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                        placeholder="请输入您的姓名"
                    />
                </div>

                <div className="grid w-full gap-1.5">
                    <Label htmlFor="email">电子邮箱</Label>
                    <input
                        id="email"
                        type="email"
                        className="border-input focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                        placeholder="请输入您的电子邮箱"
                    />
                </div>

                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message-form">留言内容</Label>
                    <Textarea
                        id="message-form"
                        placeholder="请输入您的留言内容..."
                        rows={4}
                    />
                </div>

                <Button className="w-full">提交</Button>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "在表单中使用文本域的示例。",
            },
        },
    },
};

export const Resizable: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="resizable">可调整大小</Label>
            <Textarea
                id="resizable"
                placeholder="此文本域可以调整大小..."
                className="resize-y min-h-20"
            />
            <p className="text-sm text-muted-foreground">
                您可以拖动右下角调整文本域的大小。
            </p>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "可调整大小的文本域。",
            },
        },
    },
};

export const ReadOnly: Story = {
    render: () => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="readonly">只读状态</Label>
            <Textarea
                id="readonly"
                readOnly
                value="这是一段只读文本，用户无法编辑，但可以选择和复制。"
            />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "只读状态的文本域，用户可以查看和复制内容，但不能编辑。",
            },
        },
    },
};

export const WithValidation: Story = {
    render: () => {
        const [value, setValue] = React.useState("");
        const [error, setError] = React.useState<string | null>(null);

        const validateInput = (text: string) => {
            if (!text.trim()) {
                setError("反馈内容不能为空");
            } else if (text.length < 10) {
                setError("反馈内容至少需要10个字符");
            } else {
                setError(null);
            }
        };

        return (
            <div className="grid w-full gap-1.5">
                <Label htmlFor="validation" className={error ? "text-destructive" : ""}>
                    您的反馈
                </Label>
                <Textarea
                    id="validation"
                    placeholder="请输入您的反馈..."
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        validateInput(e.target.value);
                    }}
                    onBlur={() => validateInput(value)}
                    className={error ? "border-destructive ring-destructive/20" : ""}
                    aria-invalid={!!error}
                />
                {error && (
                    <p className="text-sm text-destructive">{error}</p>
                )}
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "带验证的文本域，显示错误状态和错误消息。",
            },
        },
    },
};

export const AutoResize: Story = {
    render: () => {
        const textareaRef = React.useRef<HTMLTextAreaElement>(null);

        const handleChange = () => {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        };

        return (
            <div className="grid w-full gap-1.5">
                <Label htmlFor="auto-resize">自动调整高度</Label>
                <Textarea
                    ref={textareaRef}
                    id="auto-resize"
                    placeholder="输入文字时会自动调整高度..."
                    onChange={handleChange}
                    className="overflow-hidden"
                    rows={1}
                />
                <p className="text-sm text-muted-foreground">
                    文本域会随着内容增加自动调整高度。
                </p>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "自动调整高度的文本域，随着内容的增加而增高。",
            },
        },
    },
};