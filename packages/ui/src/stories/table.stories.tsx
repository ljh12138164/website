import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "./table";
import { Input } from "./input";
import { Checkbox } from "./checkbox";
import { Button } from "./button";
import {
    BsPencil,
    BsTrash,
    BsArrowDown,
    BsArrowUp,
    BsChevronDown,
    BsSearch
} from "react-icons/bs";
import { Label } from "./label";

const meta: Meta<typeof Table> = {
    title: "组件/Table",
    component: Table,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "表格组件，用于展示结构化数据。",
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

// 示例数据
const invoices = [
    {
        id: "INV001",
        paymentStatus: "已付款",
        totalAmount: "¥259.00",
        paymentMethod: "支付宝",
        date: "2023-05-04",
    },
    {
        id: "INV002",
        paymentStatus: "待支付",
        totalAmount: "¥99.00",
        paymentMethod: "微信支付",
        date: "2023-06-10",
    },
    {
        id: "INV003",
        paymentStatus: "已付款",
        totalAmount: "¥399.00",
        paymentMethod: "银行卡",
        date: "2023-08-17",
    },
    {
        id: "INV004",
        paymentStatus: "已取消",
        totalAmount: "¥149.00",
        paymentMethod: "支付宝",
        date: "2023-09-22",
    },
    {
        id: "INV005",
        paymentStatus: "待支付",
        totalAmount: "¥599.00",
        paymentMethod: "微信支付",
        date: "2023-11-30",
    },
];

export const Default: Story = {
    render: () => (
        <Table>
            <TableCaption>近期订单列表</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>订单编号</TableHead>
                    <TableHead>支付状态</TableHead>
                    <TableHead>金额</TableHead>
                    <TableHead>支付方式</TableHead>
                    <TableHead>订单日期</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ),
    parameters: {
        docs: {
            description: {
                story: "基本表格示例，展示了带标题、表头和表格内容的表格组件。",
            },
        },
    },
};

export const WithFooter: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>订单编号</TableHead>
                    <TableHead>支付状态</TableHead>
                    <TableHead>金额</TableHead>
                    <TableHead>支付方式</TableHead>
                    <TableHead>订单日期</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.slice(0, 3).map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>总计</TableCell>
                    <TableCell colSpan={2} className="text-right">
                        ¥757.00
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有表格页脚的表格，用于显示汇总信息。",
            },
        },
    },
};

export const WithSelection: Story = {
    render: () => {
        const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

        const toggleRow = (id: string) => {
            setSelectedRows((prev) =>
                prev.includes(id)
                    ? prev.filter((rowId) => rowId !== id)
                    : [...prev, id]
            );
        };

        const toggleAll = () => {
            setSelectedRows((prev) =>
                prev.length === invoices.length
                    ? []
                    : invoices.map((invoice) => invoice.id)
            );
        };

        return (
            <div className="w-full max-w-3xl">
                <div className="flex items-center justify-between py-4">
                    <div>
                        {selectedRows.length > 0 && (
                            <p className="text-sm text-muted-foreground">
                                已选择 {selectedRows.length} 项
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled={selectedRows.length === 0}>
                            批量操作
                        </Button>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">
                                <Checkbox
                                    checked={selectedRows.length === invoices.length}
                                    onCheckedChange={toggleAll}
                                    aria-label="全选"
                                />
                            </TableHead>
                            <TableHead>订单编号</TableHead>
                            <TableHead>支付状态</TableHead>
                            <TableHead>金额</TableHead>
                            <TableHead>支付方式</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow
                                key={invoice.id}
                                data-state={selectedRows.includes(invoice.id) ? "selected" : undefined}
                            >
                                <TableCell>
                                    <Checkbox
                                        checked={selectedRows.includes(invoice.id)}
                                        onCheckedChange={() => toggleRow(invoice.id)}
                                        aria-label={`选择 ${invoice.id}`}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{invoice.id}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.totalAmount}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "可选择的表格，允许用户选择一行或多行数据。",
            },
        },
    },
};

export const WithActions: Story = {
    render: () => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>订单编号</TableHead>
                    <TableHead>支付状态</TableHead>
                    <TableHead>金额</TableHead>
                    <TableHead>支付方式</TableHead>
                    <TableHead className="w-[100px]">操作</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="size-8"
                                >
                                    <BsPencil className="size-4" />
                                    <span className="sr-only">编辑</span>
                                </Button>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="size-8 text-destructive hover:text-destructive"
                                >
                                    <BsTrash className="size-4" />
                                    <span className="sr-only">删除</span>
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ),
    parameters: {
        docs: {
            description: {
                story: "带有操作按钮的表格，可以在每一行执行特定操作。",
            },
        },
    },
};

export const WithSorting: Story = {
    render: () => {
        const [sorting, setSorting] = React.useState<{
            column: string | null;
            direction: "asc" | "desc" | null;
        }>({
            column: null,
            direction: null,
        });

        const sortedData = React.useMemo(() => {
            if (!sorting.column || !sorting.direction) {
                return [...invoices];
            }

            return [...invoices].sort((a, b) => {
                const aValue = a[sorting.column as keyof typeof a];
                const bValue = b[sorting.column as keyof typeof b];

                if (sorting.direction === "asc") {
                    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
                } else {
                    return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
                }
            });
        }, [sorting]);

        const toggleSort = (column: string) => {
            setSorting((prev) => {
                if (prev.column !== column) {
                    return { column, direction: "asc" };
                }
                if (prev.direction === "asc") {
                    return { column, direction: "desc" };
                }
                return { column: null, direction: null };
            });
        };

        const SortableHeader = ({
            column,
            children,
        }: {
            column: string;
            children: React.ReactNode;
        }) => (
            <TableHead
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => toggleSort(column)}
            >
                <div className="flex items-center gap-1">
                    {children}
                    {sorting.column === column && (
                        <span>
                            {sorting.direction === "asc" ? (
                                <BsArrowUp className="size-3.5" />
                            ) : (
                                <BsArrowDown className="size-3.5" />
                            )}
                        </span>
                    )}
                </div>
            </TableHead>
        );

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <SortableHeader column="id">订单编号</SortableHeader>
                        <SortableHeader column="paymentStatus">支付状态</SortableHeader>
                        <SortableHeader column="totalAmount">金额</SortableHeader>
                        <SortableHeader column="paymentMethod">支付方式</SortableHeader>
                        <SortableHeader column="date">订单日期</SortableHeader>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedData.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell className="font-medium">{invoice.id}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.totalAmount}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "支持排序的表格，单击表头可按列进行排序。",
            },
        },
    },
};

export const WithSearch: Story = {
    render: () => {
        const [searchQuery, setSearchQuery] = React.useState("");

        const filteredData = React.useMemo(() => {
            if (!searchQuery) {
                return invoices;
            }

            const lowerCaseQuery = searchQuery.toLowerCase();

            return invoices.filter((invoice) => {
                return (
                    invoice.id.toLowerCase().includes(lowerCaseQuery) ||
                    invoice.paymentStatus.toLowerCase().includes(lowerCaseQuery) ||
                    invoice.paymentMethod.toLowerCase().includes(lowerCaseQuery) ||
                    invoice.totalAmount.toLowerCase().includes(lowerCaseQuery) ||
                    invoice.date.includes(lowerCaseQuery)
                );
            });
        }, [searchQuery]);

        return (
            <div className="w-full max-w-3xl space-y-4">
                <div className="flex items-center">
                    <div className="relative w-64">
                        <BsSearch className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="搜索订单..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9"
                        />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>订单编号</TableHead>
                            <TableHead>支付状态</TableHead>
                            <TableHead>金额</TableHead>
                            <TableHead>支付方式</TableHead>
                            <TableHead>订单日期</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((invoice) => (
                                <TableRow key={invoice.id}>
                                    <TableCell className="font-medium">{invoice.id}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.totalAmount}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell>{invoice.date}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    没有找到匹配的结果
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: "带搜索功能的表格，可以根据关键词过滤表格内容。",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <Table className="border rounded-lg">
            <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-bold">产品名称</TableHead>
                    <TableHead className="font-bold">类别</TableHead>
                    <TableHead className="font-bold">库存</TableHead>
                    <TableHead className="font-bold">价格</TableHead>
                    <TableHead className="font-bold">状态</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">智能手表Pro</TableCell>
                    <TableCell>电子产品</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>¥1299.00</TableCell>
                    <TableCell>
                        <div className="flex items-center">
                            <div className="size-2 rounded-full bg-green-500 mr-2" />
                            <span>在售</span>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">无线耳机</TableCell>
                    <TableCell>电子产品</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>¥699.00</TableCell>
                    <TableCell>
                        <div className="flex items-center">
                            <div className="size-2 rounded-full bg-green-500 mr-2" />
                            <span>在售</span>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">机械键盘</TableCell>
                    <TableCell>外设</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>¥459.00</TableCell>
                    <TableCell>
                        <div className="flex items-center">
                            <div className="size-2 rounded-full bg-red-500 mr-2" />
                            <span>缺货</span>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">游戏鼠标</TableCell>
                    <TableCell>外设</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>¥329.00</TableCell>
                    <TableCell>
                        <div className="flex items-center">
                            <div className="size-2 rounded-full bg-amber-500 mr-2" />
                            <span>低库存</span>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
    parameters: {
        docs: {
            description: {
                story: "自定义表格样式，包括边框、背景色和状态指示器。",
            },
        },
    },
};

export const ResponsiveTable: Story = {
    render: () => (
        <div className="w-full max-w-3xl">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden md:table-cell w-[100px]">ID</TableHead>
                            <TableHead>订单</TableHead>
                            <TableHead className="hidden sm:table-cell">状态</TableHead>
                            <TableHead className="hidden md:table-cell">日期</TableHead>
                            <TableHead className="text-right">金额</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="hidden md:table-cell font-medium">
                                    {invoice.id}
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <div className="font-medium md:hidden">{invoice.id}</div>
                                        <div className="md:hidden text-sm text-muted-foreground">
                                            {invoice.date} · {invoice.paymentStatus}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <div className="flex items-center gap-2">
                                        {invoice.paymentStatus === "已付款" && (
                                            <div className="size-2 rounded-full bg-green-500" />
                                        )}
                                        {invoice.paymentStatus === "待支付" && (
                                            <div className="size-2 rounded-full bg-amber-500" />
                                        )}
                                        {invoice.paymentStatus === "已取消" && (
                                            <div className="size-2 rounded-full bg-red-500" />
                                        )}
                                        {invoice.paymentStatus}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{invoice.date}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "响应式表格设计，在不同屏幕尺寸下适应显示。",
            },
        },
    },
};