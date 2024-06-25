import Header from "@/components/header";
import {Apikey} from "@/components/apikey";
import ModelOptions from "@/components/modeloptions";
import LanguageOptions from "@/components/languageoptions";
import { useState } from "react";

function aicodeconvertor() {
    const [optionsModel, setoptionsModel] = useState('gpt-4');

    const handleChange = (e) => {
        setoptionsModel(e.target.value);
      };

    return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Header />
                <ModelOptions model={optionsModel} onChange={handleChange} />
                <LanguageOptions />
            </div>
    )
}

export default aicodeconvertor;