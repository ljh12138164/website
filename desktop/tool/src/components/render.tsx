import ReactMarkdown from 'react-markdown'; // 解析 markdown
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm'; // markdown 对表格/删除线/脚注等的支持
import remarkMath from 'remark-math';

// 代码高亮主题风格
import { darcula, oneDark, prism, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Code from './code';

export function copy(content: string) {
  navigator.clipboard.writeText(content);
}
// 主题枚举

export enum ThemeEnum {
  DEFAULT = 0,
  ONEDARK = 1,
  Darcula = 2,
  VS = 3,
}
export const theme = {
  [ThemeEnum.DEFAULT]: prism,
  [ThemeEnum.ONEDARK]: oneDark,
  [ThemeEnum.Darcula]: darcula,
  [ThemeEnum.VS]: vs,
};
interface Props {
  content: string;
  theme?: ThemeEnum;
}

const MdPreview: React.FC<Props> = ({ content, theme = ThemeEnum.DEFAULT }) => {
  let index = 0;
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkGemoji]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      components={{
        code({ children, className }) {
          // 匹配否指定语言
          return (
            <Code theme={theme} className={className}>
              {children}
            </Code>
          );
        },
        h1({ children }) {
          return (
            <h1 id={`heading-${++index}`} className="heading">
              {children}
            </h1>
          );
        },
        h2({ children }) {
          return (
            <h2 id={`heading-${++index}`} className="heading">
              {children}
            </h2>
          );
        },
        h3({ children }) {
          return (
            <h3 id={`heading-${++index}`} className="heading">
              {children}
            </h3>
          );
        },
        h4({ children }) {
          return (
            <h4 id={`heading-${++index}`} className="heading">
              {children}
            </h4>
          );
        },
        h5({ children }) {
          return (
            <h5 id={`heading-${++index}`} className="heading">
              {children}
            </h5>
          );
        },
        h6({ children }) {
          return (
            <h6 id={`heading-${++index}`} className="heading">
              {children}
            </h6>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MdPreview;
