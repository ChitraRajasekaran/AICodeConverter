import React, { useEffect, useState } from 'react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { go } from '@codemirror/lang-go';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';

export const Block = ({
  content,
  editable = false,
  onChange = () => {},
  mode
}) => {
  const [copyText, setCopyText] = useState('Copy');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copyText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopyText('Copied!');
  };

  if (mode === 'text') {
    return (
      <textarea
        className="min-h-[500px] w-full bg-[#2D2E3A] p-4 text-[15px] text-neutral-200 focus:outline-none border border-gray-600 rounded-md"
        style={{ resize: 'none' }}
        value={content}
        onChange={(e) => onChange(e.target.value)}
        disabled={!editable}
      />
    );
  }

  return (
    <div className="relative border border-gray-600 rounded-md overflow-hidden">
      <button
        className="absolute right-2 top-2 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
        onClick={handleCopy}
      >
        {copyText}
      </button>
      <CodeMirror
        value={content}
        height="500px"
        editable={editable}
        extensions={[go()]}
        theme={tokyoNight}
        onChange={(value) => onChange(value)}
        className="bg-[#2D2E3A]"
      />
    </div>
  );
};