import Container from "./container";

const ValuationReport = () => {
    return (
        <div className="py-12 ">
            <Container>
                <div className="flex my-3 mx-7 sm:w-[100%] xl:w-[46%] 2xl:w-[45%] items-center justify-center">
                    <img src="/assets/img/valuation.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
                <div className="my-3 mx-7 sm:w-[100%] xl:w-[45%] 2xl:w-[44%]">
                    <div className="text-lg  font-light pb-4">
                        <h2 className="2xl:text-4xl text-3xl mb-4 font-bold text-[#52105b]">What’s included in a Valuation Report?</h2>
                        <p className="mb-4">A RICS <a className="font-bold text-[#55a646] hover:underline" href="/">Valuation Report</a> will provide you with the true market value of your property or the property you plan to buy. It can cost <strong>£320</strong> for the average property in the UK valued at £267,000. However, our research found that costs can be as low as £160 and as high as £600.</p>
                        <p className="mb-4">A valuation is suited for all property types and will let you know that the building is worth what you’re paying for. All of our valuations are carried out by RICS registered valuers which means your valuation is much more comprehensive and impartial compared to others.</p>
                        <p className="mb-1">It should be noted that this isn’t a property survey and won’t include a conclusion on the property’s condition but will provide a highly accurate valuation. Some lenders will include a valuation for free or they may start the pricing as little as £75, as long as you choose one of the surveyors they recommend.</p>
                    </div>
                    <p className="my-3"><a className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>
            </Container>

        </div>
    );
}
export default ValuationReport;