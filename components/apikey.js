import { useState } from "react";

function Apikey () {
    const [openaiApiKey, setOpenaiApiKey] = useState([]);

    const handleApiKeyChange = (event) => {
        setOpenaiApiKey(event.target.value);
    };

    return (
        <div className="mb-4 w-64">
            <input
                type="text"
                id="openai-api-key"
                value={openaiApiKey}
                onChange={handleApiKeyChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter API Key"
            />
        </div>
    );
};

export default Apikey;