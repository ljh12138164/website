import { ChevronDown, Copy } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { copy, type ThemeEnum, theme as themeMap } from './render';
import { Button } from './ui/button';

export default function Code({
  children,
  className,
  theme,
}: {
  children: React.ReactNode;
  className: string | undefined;
  theme: ThemeEnum;
}) {
  const match: any = /language-(\w+)/.exec(className || '');
  const [isShowCode, setIsShowCode] = useState(true);
  const [isShowCopy, setIsShowCopy] = useState(false);
  return (
    <>
      {/* 代码头部 */}
      <div className="code-header">
        <Button
          style={{ cursor: 'pointer', marginRight: '10px', transformOrigin: '8px' }}
          className={isShowCode ? 'code-rotate-down' : 'code-rotate-right'}
          onClick={() => setIsShowCode(!isShowCode)}
        >
          <ChevronDown />
        </Button>
        <div>{match[1]}</div>
        <Button
          className="preview-code-copy"
          onClick={() => {
            setIsShowCopy(true);
            copy(String(children));
            setTimeout(() => {
              setIsShowCopy(false);
            }, 1500);
          }}
        >
          {isShowCopy && <span className="opacity-0-1-0 copy-success">复制成功</span>}
          <Copy />
        </Button>
      </div>
      {isShowCode && (
        // @ts-ignore
        <SyntaxHighlighter showLineNumbers={true} style={themeMap[theme]} language={match?.[1]}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      )}
    </>
  );
}
