'use client'
interface Props {
    apiKey: string;
    onChange: (apiKey: string) => void;
  }

export const ApiInput : React.FC<Props> = ({ apiKey, onChange }) => {
    return (
        <input
            type="password"
            id="api-key"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter API Key"
            value={apiKey}
            onChange={(e) => onChange(e.target.value)}
        />
    );
  }
  
