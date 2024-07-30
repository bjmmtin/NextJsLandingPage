import Container from "./container";

const HomeSurvey = () => {
    return (
        <div className="px-8 bg-[#f7f7f7]">
            <Container>
                <div className="my-3 sm:w-[100%] xl:w-[46%] 2xl:w-[42%]">
                    <div className="text-xl font-light pb-4">
                        <h2 className="text-3xl mb-4 font-bold text-[#52105b]">Which home survey do you need?</h2>
                        <p className="mb-4">An accurate property survey will give you advice on the property, its construction and any potential environmental issues. This can be crucial information when buying or selling a property as it highlights whether the purchase is a worthy investment.</p>
                        <p className="mb-4">There are a number of property surveys to choose from. These include:</p>
                        <div className="mb-4"><li>Valuation Report</li>
                            <li>Snagging Survey</li>
                            <li>Condition Report (Level 1 Survey)</li>
                            <li>Homebuyers Survey (level 2 Survey)</li>
                            <li>Building Survey (level 3 Survey)</li>
                        </div>
                        <p className="mb-4">Each home survey will include a different type of investigation and will be suited to different property types. The Level 3 Survey, for example, is the most thorough and will include a detailed report on both the interior and exterior of the home. To help you compare surveying quotes, we've outlined each survey type below.</p>
                    </div>
                    <p><a className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>
                <div>
                    
                </div>
            </Container>
        </div>
    );
}
export default HomeSurvey;