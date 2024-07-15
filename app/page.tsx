'use client'
import { Header } from "../Components/Header";
import {ApiInput} from "../Components/ApiInput";
import AIModels from "../Components/AIModels";
import LanguageList from "../Components/LanguageList";
import CodeBlockEditor from "../Components/CodeBlockEditor";
import { useState, useEffect } from "react";


export default function Home() {
  const [apiKey, setApiKey] = useState<string>('');

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);

    localStorage.setItem('apiKey', value);
  };

  useEffect(() => {
    const apiKey = localStorage.getItem('apiKey');

    if (apiKey) {
      setApiKey(apiKey);
    }
  }, []);

  return (
    <>
      <Header />
      <ApiInput apiKey={apiKey} onChange={handleApiKeyChange}/>
      <AIModels />
      <button
          className="w-[140px] cursor-pointer rounded-md bg-green-500 px-4 py-2 font-bold hover:bg-green-600 active:bg-green-700"
      >Convert</button>
      <div className="mt-2 text-xs text-white">
      Enter some code and click "Convert"
      </div>
      <div className="mt-6 flex w-full max-w-[1200px] flex-col justify-between sm:flex-row sm:space-x-4">
        <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
          <div className="text-center text-xl text-white font-bold">Input</div>
            <LanguageList />
            <CodeBlockEditor />
          </div>
        <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
          <div className="text-center text-xl text-white font-bold">Output</div>
            <LanguageList />
            <CodeBlockEditor />
        </div>
      </div>
    </>
      
  );
}
