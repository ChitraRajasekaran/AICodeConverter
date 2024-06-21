import Header from "@/components/header";
import Apikey from "@/components/apikey";
import ModelOptions from "@/components/modeloptions";
import LanguageOptions from "@/components/languageoptions";
import { Block } from "@/components/block";

function aicodeconvertor() {
    const handleChange = (e) => {
        console.log('im here')
    }
    return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Header />
                <Apikey />
                <ModelOptions />
                <LanguageOptions />
            </div>
    )
}

export default aicodeconvertor;