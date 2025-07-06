import esbuild from 'esbuild-wasm';
import React from 'react';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import * as Textarea from '@/components/ui/textarea';
import * as Accordion from '@/components/ui/accordion';
import * as Alert from '@/components/ui/alert';
import * as AlertDialog from '@/components/ui/alert-dialog';
import * as AspectRatio from '@/components/ui/aspect-ratio';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Breadcrumb from '@/components/ui/breadcrumb';
import * as Calendar from '@/components/ui/calendar';
import * as Card from '@/components/ui/card';
import * as Carousel from '@/components/ui/carousel';
import * as Chart from '@/components/ui/chart';
import * as Checkbox from '@/components/ui/checkbox';
import * as Collapsible from '@/components/ui/collapsible';
import * as ContextMenu from '@/components/ui/context-menu';
import * as Dialog from '@/components/ui/dialog';
import * as Drawer from '@/components/ui/drawer';
import * as DropdownMenu from '@/components/ui/dropdown-menu';
import * as Form from '@/components/ui/form';
import * as HoverCard from '@/components/ui/hover-card';
import * as InputOTP from '@/components/ui/input-otp';
import * as Label from '@/components/ui/label';
import * as Menubar from '@/components/ui/menubar';
import * as NavigationMenu from '@/components/ui/navigation-menu';
import * as Pagination from '@/components/ui/pagination';
import * as Popover from '@/components/ui/popover';
import * as Progress from '@/components/ui/progress';
import * as RadioGroup from '@/components/ui/radio-group';
import * as Resizable from '@/components/ui/resizable';
import * as ScrollArea from '@/components/ui/scroll-area';
import * as Select from '@/components/ui/select';
import * as Separator from '@/components/ui/separator';
import * as Sheet from '@/components/ui/sheet';
import * as Sidebar from '@/components/ui/sidebar';
import * as Skeleton from '@/components/ui/skeleton';
import * as Slider from '@/components/ui/slider';
import * as Sonner from '@/components/ui/sonner';
import * as Switch from '@/components/ui/switch';
import * as Table from '@/components/ui/table';
import * as Tabs from '@/components/ui/tabs';
import * as Toggle from '@/components/ui/toggle';
import * as ToggleGroup from '@/components/ui/toggle-group';
import * as Tooltip from '@/components/ui/tooltip';
import to from 'await-to-js';

// 定义模块类型
interface ModuleType {
  exports: Record<string, unknown>;
}

// 定义UI组件映射类型
type UIComponentMap = Record<string, Record<string, React.ComponentType<unknown> | unknown>>;

// 定义require函数类型
type RequireFunction = (moduleName: string) => unknown;

/**
 * 安全地执行动态生成的代码
 * @param params 执行所需的参数名称数组
 * @param code 要执行的代码字符串
 * @param args 传递给执行函数的参数
 * @returns 执行结果
 */
function safeEvalFunction(params: string[], code: string, ...args: unknown[]): unknown {
  try {
    // 使用Function构造器创建函数
    const fn = new Function(...params, code);
    // 执行函数并返回结果
    return fn(...args);
  } catch (error) {
    console.error('执行动态代码时出错:', error);
    throw new Error(`执行动态代码失败: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// 编译 + 执行 + 返回组件
export async function compileAndRender(
  code: Uint8Array,
  component: [string, string][],
): Promise<React.ComponentType<unknown>> {
  // 使用更简单的转换配置
  const [error, result] = await to(
    esbuild.transform(code, {
      loader: 'tsx',
      format: 'cjs', // 使用CommonJS格式
      target: 'es2015',
    }),
  );
  if (error) {
    console.error(error);
    throw error;
  }

  // 创建模块执行环境
  const module: ModuleType = { exports: {} };

  // 定义require函数
  const require: RequireFunction = (mod: string) => {
    if (mod === 'react') return React;
    if (mod === 'react/jsx-runtime') {
      return {
        jsx: React.createElement,
        jsxs: React.createElement,
        Fragment: React.Fragment,
      };
    }

    // shadcn/ui 组件映射
    const uiComponentMap: UIComponentMap = {
      '@/components/ui/button': { default: Button.Button, ...Button },
      '@/components/ui/input': { default: Input.Input, ...Input },
      '@/components/ui/textarea': { default: Textarea.Textarea, ...Textarea },
      '@/components/ui/accordion': { default: Accordion.Accordion, ...Accordion },
      '@/components/ui/alert': { default: Alert.Alert, ...Alert },
      '@/components/ui/alert-dialog': { default: AlertDialog.AlertDialog, ...AlertDialog },
      '@/components/ui/aspect-ratio': { default: AspectRatio.AspectRatio, ...AspectRatio },
      '@/components/ui/avatar': { default: Avatar.Avatar, ...Avatar },
      '@/components/ui/badge': { default: Badge.Badge, ...Badge },
      '@/components/ui/breadcrumb': { default: Breadcrumb.Breadcrumb, ...Breadcrumb },
      '@/components/ui/calendar': { default: Calendar.Calendar, ...Calendar },
      '@/components/ui/card': { default: Card.Card, ...Card },
      '@/components/ui/carousel': { default: Carousel.Carousel, ...Carousel },
      '@/components/ui/chart': { default: Chart.ChartContainer, ...Chart },
      '@/components/ui/checkbox': { default: Checkbox.Checkbox, ...Checkbox },
      '@/components/ui/collapsible': { default: Collapsible.Collapsible, ...Collapsible },
      '@/components/ui/context-menu': { default: ContextMenu.ContextMenu, ...ContextMenu },
      '@/components/ui/dialog': { default: Dialog.Dialog, ...Dialog },
      '@/components/ui/drawer': { default: Drawer.Drawer, ...Drawer },
      '@/components/ui/dropdown-menu': { default: DropdownMenu.DropdownMenu, ...DropdownMenu },
      '@/components/ui/form': { default: Form.Form, ...Form },
      '@/components/ui/hover-card': { default: HoverCard.HoverCard, ...HoverCard },
      '@/components/ui/input-otp': { default: InputOTP.InputOTP, ...InputOTP },
      '@/components/ui/label': { default: Label.Label, ...Label },
      '@/components/ui/menubar': { default: Menubar.Menubar, ...Menubar },
      '@/components/ui/navigation-menu': {
        default: NavigationMenu.NavigationMenu,
        ...NavigationMenu,
      },
      '@/components/ui/pagination': { default: Pagination.Pagination, ...Pagination },
      '@/components/ui/popover': { default: Popover.Popover, ...Popover },
      '@/components/ui/progress': { default: Progress.Progress, ...Progress },
      '@/components/ui/radio-group': { default: RadioGroup.RadioGroup, ...RadioGroup },
      '@/components/ui/resizable': { default: Resizable.ResizableHandle, ...Resizable },
      '@/components/ui/scroll-area': { default: ScrollArea.ScrollArea, ...ScrollArea },
      '@/components/ui/select': { default: Select.Select, ...Select },
      '@/components/ui/separator': { default: Separator.Separator, ...Separator },
      '@/components/ui/sheet': { default: Sheet.Sheet, ...Sheet },
      '@/components/ui/sidebar': { default: Sidebar.Sidebar, ...Sidebar },
      '@/components/ui/skeleton': { default: Skeleton.Skeleton, ...Skeleton },
      '@/components/ui/slider': { default: Slider.Slider, ...Slider },
      '@/components/ui/sonner': { default: Sonner.Toaster, ...Sonner },
      '@/components/ui/switch': { default: Switch.Switch, ...Switch },
      '@/components/ui/table': { default: Table.Table, ...Table },
      '@/components/ui/tabs': { default: Tabs.Tabs, ...Tabs },
      '@/components/ui/toggle': { default: Toggle.Toggle, ...Toggle },
      '@/components/ui/toggle-group': { default: ToggleGroup.ToggleGroup, ...ToggleGroup },
      '@/components/ui/tooltip': { default: Tooltip.Tooltip, ...Tooltip },
    };

    // 检查是否是ui组件
    if (uiComponentMap[mod]) {
      return uiComponentMap[mod];
    }

    // 处理自定义组件导入
    const customComponent = component.find((item) => item[0] === mod);
    if (customComponent) {
      // 创建一个模块对象来执行导入的组件代码
      const componentModule: ModuleType = { exports: {} };
      const componentRequire: RequireFunction = (innerMod: string) => require(innerMod);

      try {
        // 执行组件代码，填充componentModule.exports
        safeEvalFunction(
          ['React', 'module', 'exports', 'require'],
          customComponent[1],
          React,
          componentModule,
          componentModule.exports,
          componentRequire,
        );

        return componentModule.exports;
      } catch (err) {
        console.error(`加载组件模块 "${mod}" 时出错:`, err);
      }
    }

    throw new Error(`Cannot require module "${mod}"`);
  };

  // 定义一个与React绑定的执行函数
  safeEvalFunction(
    ['React', 'module', 'exports', 'require'],
    result.code,
    React,
    module,
    module.exports,
    require,
  );

  // 获取导出的组件
  const Component = module.exports;

  // 直接从编译后的代码中获取组件
  const findComponentInExports = (
    obj: Record<string, unknown>,
  ): React.ComponentType<unknown> | null => {
    // 检查default导出
    if (obj && typeof obj.default === 'function') {
      return obj.default as React.ComponentType<unknown>;
    }

    // 检查直接导出
    if (typeof obj === 'function') {
      return obj as React.ComponentType<unknown>;
    }

    // 查找所有可能的组件
    if (obj && typeof obj === 'object') {
      for (const key in obj) {
        if (typeof obj[key] === 'function') {
          return obj[key] as React.ComponentType<unknown>;
        }
      }
    }

    return null;
  };

  // 尝试查找组件
  const foundComponent = findComponentInExports(Component as Record<string, unknown>);

  if (!foundComponent) {
    throw new Error('编译后的代码未导出有效的React组件');
  }

  // 创建一个包装组件确保props传递正确
  const WrappedComponent: React.ComponentType<unknown> = (props: unknown) => {
    try {
      // 检查foundComponent是否是有效的组件类型
      if (typeof foundComponent !== 'function') {
        throw new Error(`无效的组件: ${typeof foundComponent}`);
      }

      // 确保props不为null
      return React.createElement(foundComponent, props || {});
    } catch (error) {
      console.error('渲染组件时出错:', error);
      return React.createElement(
        'div',
        null,
        `渲染组件时出错: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  };

  return WrappedComponent;
}

/**
 * 编译代码
 * @param code 要编译的代码数组，每个元素包含名称和代码内容
 * @returns 编译后的结果数组
 */
export async function compile(
  code: [string, Uint8Array][],
): Promise<{ name: string; code: string }[]> {
  const result = await Promise.all(
    code.map((item) =>
      esbuild.transform(item[1], {
        loader: 'tsx',
        format: 'cjs',
        target: 'es2015',
      }),
    ),
  );
  return result.map((item, index) => ({
    name: code[index][0],
    code: item.code,
  }));
}
