import React, { useState } from 'react';
import { Block } from './block';
const LanguageSelect = ({ language, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={language}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  { value: 'Pascal', label: 'Pascal' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Python', label: 'Python' },
  { value: 'TSX', label: 'TSX' },
  { value: 'JSX', label: 'JSX' },
  { value: 'Vue', label: 'Vue' },
  { value: 'Go', label: 'Go' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: 'Visual Basic .NET', label: 'Visual Basic .NET' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Swift', label: 'Swift' },
  { value: 'SwiftUI', label: 'SwiftUI' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'R', label: 'R' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'Perl', label: 'Perl' },
  { value: 'SAS', label: 'SAS' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Rust', label: 'Rust' },
  { value: 'Haskell', label: 'Haskell' },
  { value: 'Lua', label: 'Lua' },
  { value: 'Groovy', label: 'Groovy' },
  { value: 'Elixir', label: 'Elixir' },
  { value: 'Clojure', label: 'Clojure' },
  { value: 'Lisp', label: 'Lisp' },
  { value: 'Julia', label: 'Julia' },
  { value: 'Matlab', label: 'Matlab' },
  { value: 'Fortran', label: 'Fortran' },
  { value: 'COBOL', label: 'COBOL' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Powershell', label: 'Powershell' },
  { value: 'PL/SQL', label: 'PL/SQL' },
  { value: 'CSS', label: 'CSS' },
  { value: 'SCSS', label: 'SCSS' },
  { value: 'Tailwind', label: 'Tailwind' },
  { value: 'Racket', label: 'Racket' },
  { value: 'HTML', label: 'HTML' },
  { value: 'NoSQL', label: 'NoSQL' },
  { value: 'Natural Language', label: 'Natural Language' },
  { value: 'CoffeeScript', label: 'CoffeeScript' },
];

function Languageoptions() {
    const [inputLanguage, setInputLanguage] = useState('');
    const [outputLanguage, setOutputLanguage] = useState('');
    const [inputCode, setInputCode] = useState('Your code here');
    const [outputCode, setOutputCode] = useState('Converted code will appear here');
  
    return (
      <div className="mt-6 flex w-full max-w-[1200px] flex-col justify-between sm:flex-row sm:space-x-4">
        <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
          <div className="text-center text-xl text-white font-bold">Input</div>
            <LanguageSelect language={inputLanguage} onChange={setInputLanguage} />
            <Block
                content={inputCode}
                editable={true}
                onChange={setInputCode}
                mode="code"
            />
        </div>
        <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
          <div className="text-center text-xl text-white font-bold">Output</div>
            <LanguageSelect language={outputLanguage} onChange={setOutputLanguage} />
            <Block
                content={outputCode}
                editable={false}
                mode="code"
            />
        </div>
      </div>
    );
  }
  
  export default Languageoptions;