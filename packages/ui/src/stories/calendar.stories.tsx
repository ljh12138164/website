import type { Meta, StoryObj } from "@storybook/nextjs";
import { addDays } from "date-fns";
import * as React from "react";
import {
    BsCalendarEvent,
    BsChevronLeft,
    BsChevronRight
} from "react-icons/bs";
import { Button } from "./button";
import { Calendar } from "./calendar";

// 替换Calendar组件中的lucide-react图标为react-icons
const CalendarWithIcons = (props: React.ComponentProps<typeof Calendar>) => {
    return (
        <Calendar
            {...props}
            components={{
                // @ts-ignore
                IconLeft: ({ ...props }) => (
                    <BsChevronLeft className="size-4" {...props} />
                ),
                IconRight: ({ ...props }) => (
                    <BsChevronRight className="size-4" {...props} />
                ),
            }}
        />
    );
};

const meta: Meta<typeof Calendar> = {
    title: "组件/Calendar",
    component: CalendarWithIcons,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "日历组件允许用户浏览和选择日期或日期范围。基于react-day-picker库构建，提供了丰富的日期选择功能。",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        mode: {
            control: "select",
            options: ["single", "multiple", "range", "default"],
            description: "日历的选择模式：单选、多选或范围选择",
        },
        selected: {
            control: "date",
            description: "当前选中的日期",
        },
        defaultMonth: {
            control: "date",
            description: "默认显示的月份",
        },
        showOutsideDays: {
            control: "boolean",
            description: "是否显示当前月份以外的日期",
        },
        disabled: {
            control: "boolean",
            description: "是否禁用日历",
        },
        fromYear: {
            control: "number",
            description: "可选择的起始年份",
        },
        toYear: {
            control: "number",
            description: "可选择的结束年份",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    render: () => <CalendarWithIcons className="rounded-md border" />,
    parameters: {
        docs: {
            description: {
                story: "基本的日历组件，用于日期显示和选择。",
            },
        },
    },
};

export const Selected: Story = {
    render: () => <CalendarWithIcons className="rounded-md border" selected={new Date()} />,
    parameters: {
        docs: {
            description: {
                story: "带有默认选中日期的日历（选择当前日期）。",
            },
        },
    },
};

export const MultipleSelection: Story = {
    render: () => {
        const [days, setDays] = React.useState<Date[]>([
            new Date(),
            addDays(new Date(), 2),
            addDays(new Date(), 5),
        ]);

        return (
            <div className="space-y-4">
                <CalendarWithIcons
                    className="rounded-md border"
                    mode="multiple"
                    required
                    selected={days}
                    onSelect={setDays}
                />
                <div className="text-sm text-muted-foreground">
                    <p>已选择的日期：</p>
                    <ul className="list-disc list-inside">
                        {days.map((day) => (
                            <li key={day.toString()}>{day.toLocaleDateString("zh-CN")}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "多选模式的日历，允许选择多个不连续的日期。",
            },
        },
    },
};


export const CustomStyling: Story = {
    render: () => (
        <CalendarWithIcons
            className="rounded-md border border-blue-300 bg-blue-50 p-4"
            classNames={{
                day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white",
                day_today: "bg-blue-100 text-blue-900 font-bold",
                caption_label: "text-blue-800 font-bold",
            }}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义样式的日历，展示了如何通过classNames属性更改日历外观。",
            },
        },
    },
};

export const WithDisabledDays: Story = {
    render: () => {
        const today = new Date();
        const disabledDays = [
            // 禁用过去的日期
            { before: today },
            // 禁用特定日期
            addDays(today, 2),
            addDays(today, 5),
            addDays(today, 10),
        ];

        return (
            <div className="space-y-4">
                <CalendarWithIcons
                    className="rounded-md border"
                    disabled={disabledDays}
                    defaultMonth={today}
                />
                <div className="text-sm text-muted-foreground">
                    <p>• 过去的日期被禁用</p>
                    <p>• 今天之后的第2、5和10天被禁用</p>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "包含禁用日期的日历，可以禁用特定日期或日期范围。",
            },
        },
    },
};

export const FormIntegration: Story = {
    render: () => {
        const [date, setDate] = React.useState<Date | undefined>(new Date());

        return (
            <div className="w-[350px] border rounded-md p-4 space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center">
                        <BsCalendarEvent className="mr-2 size-4 text-muted-foreground" />
                        <span className="text-sm font-medium">活动日期</span>
                    </div>
                    <CalendarWithIcons
                        className="rounded-md border"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">已选择日期：</label>
                    <input
                        type="text"
                        className="w-full rounded-md border px-3 py-2 text-sm"
                        value={date ? date.toLocaleDateString("zh-CN") : ""}
                        readOnly
                    />
                </div>

                <Button type="button" className="w-full">
                    确认日期
                </Button>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "在表单中使用日历组件的示例。",
            },
        },
    },
};


export const MultipleMonths: Story = {
    render: () => (
        <CalendarWithIcons
            className="rounded-md border"
            numberOfMonths={2}
            showOutsideDays={false}
        />
    ),
    parameters: {
        docs: {
            description: {
                story: "显示多个月份的日历，便于跨月份选择日期。",
            },
        },
    },
};

export const YearNavigation: Story = {
    render: () => (
        <div className="space-y-4">
            <CalendarWithIcons
                className="rounded-md border"
                captionLayout="dropdown"
                fromYear={2020}
                toYear={2030}
            />
            <div className="text-sm text-muted-foreground">
                <p>此日历允许在2020年至2030年之间导航。</p>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有年份导航的日历，可快速跳转到特定年份。",
            },
        },
    },
};