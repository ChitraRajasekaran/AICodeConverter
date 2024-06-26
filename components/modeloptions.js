import { Fragment, useState } from 'react';
import { Apikey } from './apikey';

const ModelOptions = () => {
  const [optionsModel, setoptionsModel] = useState('gpt-4');

  const [loading, setLoading] = useState(false);
  const [hasConverted, sethasConverted] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  const handleChange = (e) => {
    setoptionsModel(e.target.value);
  };
 
  const handleConvertion = () => {
    if (!apiKey) {
      alert('Please enter an API key.');
      return;
    }

    setLoading(true);
    // Your conversion logic here
    console.log('Starting conversion with API key:', apiKey);
    
    // Simulating conversion process
    setTimeout(() => {
      setLoading(false);
      sethasConverted(true);
      console.log('Conversion complete');
    }, 2000);
  }

  return (
    <Fragment>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <select
            className="h-[40px] w-[140px] rounded-md bg-gray-800 px-4 py-2 text-neutral-200"
            value={optionsModel}
            onChange={handleChange}
          >
            <option value="gpt-4">GPT-4</option>
            <option value="Perplexity">Perplexity</option>
            <option value="Claude">Claude</option>
          </select>
          <button
            className="w-[140px] cursor-pointer rounded-md bg-green-500 px-4 py-2 font-bold hover:bg-green-600 active:bg-green-700"
            onClick={handleConvertion}
            disabled={loading}
          >
            {loading ? 'Converting...' : 'Convert'}
          </button>
        </div>
        <Apikey apiKey={apiKey} onChange={setApiKey}/>
      </div>
      <div className="mt-2 text-center text-xs text-white">
        {loading
          ? 'Converting...'
          : hasConverted
          ? 'Output copied to clipboard!'
          : 'Enter some code and click "Convert"'}
      </div>
    </Fragment>
  );
};

export default ModelOptions;