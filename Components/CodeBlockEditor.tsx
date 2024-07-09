'use client';

import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';

const CodeBlockEditor = () => {
  return (
    <div className="relative border border-gray-600 rounded-md overflow-hidden">
      <button
        className="absolute right-2 top-2 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
      >
        copy
      </button>
      <CodeMirror
        height="500px"
        extensions={[StreamLanguage.define(go)]}
        theme={tokyoNight}
        className="bg-[#2D2E3A]"
      />
    </div>
  );
};

export default CodeBlockEditor;
