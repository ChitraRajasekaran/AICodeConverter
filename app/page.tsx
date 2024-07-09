import { Header } from "../Components/Header";
import {ApiInput} from "../Components/ApiInput";
import AIModels from "../Components/AIModels";
import LanguageList from "../Components/LanguageList";
import CodeBlockEditor from "../Components/CodeBlockEditor";
export default function Home() {
  return (
    <>
      <Header />
      <ApiInput />
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
