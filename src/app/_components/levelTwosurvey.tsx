import Container from "./container";

const LevelTwoSurvey = () => {
    return (
        <div className=" py-12 ">
            <Container>
                <div className="flex mx-7 my-3 items-center justify-center  sm:w-[100%] xl:w-[45%] 2xl:w-[44%] ">
                    <img src="/assets/img/surveying_illustrations_3_V_1_01.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
                <div className="my-3 mx-7 sm:w-[100%] xl:w-[45%] 2xl:w-[44%]">
                    <div className="text-lg  font-light pb-4">
                        <h2 className="2xl:text-4xl text-3xl mb-4 font-bold text-[#52105b]">What's included in a HomeBuyer Survey (Level 2 Survey)?</h2>

                        <p className="mb-4">Now known as a RICS Home Survey Level 2 Report, the <a className="font-bold text-[#55a646] hover:underline" href="/">HomeBuyers Survey</a> is recommended for most buyers and modern property types. Our home buyer survey quotes will help you find a reliable surveyor to inspect the property and produce an accurate report. The average cost of a Level 2 Survey is <strong>£500</strong> - this was calculated for a property valued at the average UK house price of £267,000.</p>
                        <p className="mb-4">This inspection efficiently covers the entire property - both inside and outside. Areas of the home will be given a condition rating of 1, 2 or 3 and the report will cover all obvious defects and anything that could have a detrimental effect on the value of the property.</p>
                        <p className="mb-1">Some of our surveyors may also be able to offer a valuation alongside the level 2 home survey if it is requested when further discussing your quotation and personal requirements. This additional service can cost around £50 extra. If you require a valuation for your mortgage agreement, check with your lender beforehand to ensure they accept this type of report.</p>

                    </div>
                    <p className="my-3"><a className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>
            </Container>

        </div>
    );
}
export default LevelTwoSurvey;