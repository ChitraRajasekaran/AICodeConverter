import { Fragment, useState } from 'react';

const ModelOptions = ({ model, onChange }) => {
  const [optionsModel, setoptionsModel] = useState(model);
  const [loading, setLoading] = useState(false);
  const [hasConverted, sethasConverted] = useState(false);

  const handleChange = (e) => {
    setoptionsModel(e.target.value);
    onChange(e.target.value);
  };
 
  const handleConvertion = (e) => {
    console.log('im here')
  }
  return (
    <Fragment>
        <div class="flex gap-4">
            <select
                class="h-[40px] w-[140px] rounded-md bg-gray-800 px-4 py-2 text-neutral-200"
                value={optionsModel}
                onChange={handleChange}
            >
                <option value="gpt-4">GPT-4</option>
                <option value="Perplexity">Perplexity</option>
                <option value="Claude">Claude</option>
            </select>
            <button
                class="w-[140px] cursor-pointer rounded-md bg-green-500 px-4 py-2 font-bold hover:bg-green-600 active:bg-green-700"
                onClick={() => handleConvertion()}
                disabled={loading}
            >
                {loading ? 'Converting...' : 'Convert'}
            </button>
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