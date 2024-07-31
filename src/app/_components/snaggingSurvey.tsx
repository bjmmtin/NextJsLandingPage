import Container from "./container";

const SnaggingSurvey = () => {
    return (
        <div className=" py-12  bg-[#f7f7f7]">
            <Container>
                <div className="my-3 mx-7 sm:w-[100%] xl:w-[45%] 2xl:w-[44%]">
                    <div className="text-xl font-light pb-4">
                        <h2 className="2xl:text-4xl text-3xl mb-4 font-bold text-[#52105b]">What’s included in a Snagging Survey?</h2>
                        <p className="mb-4">You’ll need a Snagging Survey if you’re buying a new-build property. The survey will highlight any issues that don’t meet the warranty standards. It’s also designed to catch any ‘snags’ before you move in, these are usually minor, cosmetic issues.</p>
                        <p className="mb-4">Common snags the surveyor will look for are unfinished paint jobs or missing door handles. The snagging survey will then be presented to the developers to carry out the remaining jobs left on the new build property.</p>
                        <p className="mb-1">If you’re buying a new build home, we can connect you with up to 6 Snagging Surveyors to get quotes for the job. Rest assured, they’re all regulated by either RICS or RPSA to give you peace of mind. </p>
                    </div>
                    <p className="my-3"><a  className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>
                <div className="flex my-3 mx-7 sm:w-[100%] xl:w-[46%] 2xl:w-[44%] items-center justify-center">
                    <img src="/assets/img/snagging-inspection.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
            </Container>
        </div>
    );
}
export default SnaggingSurvey;