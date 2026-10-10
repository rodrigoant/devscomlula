import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-3 overflow-hidden rounded-xl border border-neutral-800 bg-[#0d0d0e] shadow-sm">
      {filename && (
        <div className="flex items-center justify-between border-b border-neutral-800/80 px-3.5 py-1.5 text-[11px] sm:text-xs text-neutral-400">
          <span className="font-mono">{filename}</span>
          <span className="uppercase text-[10px] tracking-wider text-neutral-500">{language}</span>
        </div>
      )}
      <div className="relative p-3.5 sm:p-4 font-mono text-xs sm:text-[13px] leading-relaxed text-neutral-200">
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copiar código"
          className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700/60 bg-neutral-800/60 text-neutral-400 hover:border-neutral-600 hover:bg-neutral-700 hover:text-white"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
        <pre className="overflow-x-auto pr-7 sm:pr-8">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
