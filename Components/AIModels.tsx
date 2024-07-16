import { OpenAIModel } from '@/models/models';
import { FC } from 'react';

interface Props {
    model: OpenAIModel;
    onChange: (model: OpenAIModel) => void;
  }





const AIModels : FC<Props> = ({ model, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value as OpenAIModel);
    };
  return (
    <select
      className="h-[40px] w-[140px] rounded-md bg-black px-4 py-2 text-white"
      value={model}
      onChange={handleChange}
    >
      <option value="gpt-4">GPT-4</option>
      {/* <option value="Claude">Claude</option>
      <option value="Perplexity">Perplexity</option> */}
    </select>
  )
}

export default AIModels