import Header from "@/components/header";
const { Fragment } = require("react");
import Apikey from "@/components/apikey";

function aicodeconvertor() {
    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center h-screen">
                <Header />
                <Apikey />
            </div>
        </Fragment>
    )
}

export default aicodeconvertor;