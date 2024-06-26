

export const Apikey = ({ apiKey, onChange }) => {


    return (
        <div className="mb-4 w-64">
            <input
                type="text"
                id="openai-api-key"
                value={apiKey}
                onChange={(e) => onChange(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter API Key"
            />
        </div>
    );
};

