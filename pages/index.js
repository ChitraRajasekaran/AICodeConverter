import Header from "@/components/header";
import Apikey from "@/components/apikey";
import ModelOptions from "@/components/modeloptions";
import LanguageOptions from "@/components/languageoptions";

function aicodeconvertor() {
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