'use client'
import Head from 'next/head';
import {ApiInput} from "../Components/ApiInput";
import AIModels from "../Components/AIModels";
import LanguageList from "../Components/LanguageList";
import CodeBlockEditor from "../Components/CodeBlockEditor";
import { EditableTextBlock } from "../Components/EditableTextBlock";
import { useState, useEffect } from "react";
import { OpenAIModel, TranslateBody } from "@/models/models";



export default function Home() {
  const [apiKey, setApiKey] = useState<string>('');
  const [inputLanguage, setInputLanguage] = useState<string>('JavaScript');
  const [outputLanguage, setOutputLanguage] = useState<string>('Python');
  const [inputCode, setInputCode] = useState<string>('');
  const [outputCode, setOutputCode] = useState<string>('');
  const [model, setModel] = useState<OpenAIModel>('gpt-4');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasConverted, setHasConverted] = useState<boolean>(false);




  
  const handleApiKeyChange = (value: string) => {
    setApiKey(value);

    localStorage.setItem('apiKey', value);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  

  const handleConvertion = async () => {
    const maxCodeLength = model === 'gpt-4' ? 6000 : 12000;

    if (!apiKey) {
      alert('Please enter an API key.');
      return;
    }

    if (inputLanguage === outputLanguage) {
      alert('Please select different languages.');
      return;
    }

    if (!inputCode) {
      alert('Please enter some code.');
      return;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
      );
      return;
    }

    setLoading(true);
    setOutputCode('');

    const controller = new AbortController();

    const body: TranslateBody = {
      inputLanguage,
      outputLanguage,
      inputCode,
      model,
      apiKey,
    };

    const response = await fetch('/api/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      setLoading(false);
      alert('Something went wrong.');
      return;
    }

    const data = response.body;

    if (!data) {
      setLoading(false);
      alert('Something went wrong.');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let code = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      code += chunkValue;

      setOutputCode((prevCode) => prevCode + chunkValue);
    }

    setLoading(false);
    setHasConverted(true);
    copyToClipboard(code);
  };








  useEffect(() => {
    if (hasConverted) {
      handleConvertion();
    }
  }, [outputLanguage]);

  useEffect(() => {
    const apiKey = localStorage.getItem('apiKey');

    if (apiKey) {
      setApiKey(apiKey);
    }
  }, []);

  return (
    <>
      <Head>
        <title> AI Code Converter</title>
        <meta name="description" content="Use AI to convert code from one language to another."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex h-full min-h-screen flex-col items-center bg-[#0E1117] px-4 pb-20 text-neutral-200 sm:px-10">
        <div className="mt-10 flex flex-col items-center justify-center sm:mt-20">
          <div className="text-4xl font-bold text-white">AI Code Converter</div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <ApiInput apiKey={apiKey} onChange={handleApiKeyChange}/>
        </div>

        <div className="mt-2 flex items-center space-x-2">
          <AIModels model={model} onChange={(value) => setModel(value)}/>
          <button
              className="w-[140px] cursor-pointer rounded-md bg-green-500 px-4 py-2 font-bold hover:bg-green-600 active:bg-green-700"
              onClick={() => handleConvertion()}
              disabled={loading}
            >
              {loading ? 'Converting' : 'Convert'}
            </button>
        </div>

        <div className="mt-2 text-center text-xs">
          {loading
            ? 'Converting'
            : hasConverted
            ? 'Output copied to clipboard!'
            : 'Enter some code and click "Convert"'}
        </div>

        <div className="mt-6 flex w-full max-w-[1200px] flex-col justify-between sm:flex-row sm:space-x-4">
          <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
            <div className="text-center text-xl text-white font-bold">Input</div>
              <LanguageList  language={inputLanguage}
              onChange={(value) => {
                setInputLanguage(value);
                setHasConverted(false);
                setInputCode('');
                setOutputCode('');
                }} />

                {inputLanguage === 'Natural Language' ? (
                  <EditableTextBlock
                    text={inputCode}
                    editable={!loading}
                    onChange={(value) => {
                      setInputCode(value);
                      setHasConverted(false);
                    }}
                  />
                ): (
              <CodeBlockEditor code={inputCode}
              editable={!loading}
              onChange={(value) => {
                setInputCode(value);
                setHasConverted(false);
              }}
            />
            )}
          </div>

          <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
            <div className="text-center text-xl text-white font-bold">Output</div>
              <LanguageList language={outputLanguage}
              onChange={(value) => {
                setOutputLanguage(value);
                setOutputCode('');
              }}/>
              {outputLanguage === 'Natural Language' ? (
              <EditableTextBlock text={outputCode} />
            ) : (
              <CodeBlockEditor code={outputCode} />
            )}
          </div>
        </div>
    </div>
    </>
      
  );
}
