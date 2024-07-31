import Container from "./container";

const LevelThreeSurvey = () => {
    return (
        <div className=" py-12  bg-[#f7f7f7]">
            <Container>
                <div className="my-3 mx-7  sm:w-[100%] xl:w-[45%] 2xl:w-[44%]">
                    <div className="text-lg  font-light pb-4">
                        <h2 className="2xl:text-4xl text-3xl mb-4 font-bold text-[#52105b]">What's included in a Building Survey (Level 3 Survey)?</h2>
                        <p className="mb-4">A RICS<a className="font-bold text-[#55a646] hover:underline" href="/"> Building Survey</a>, or Level 3 Home Survey, offers an in-depth and detailed report on the construction and condition of the building. The inspection will be very thorough with surveyors reviewing internal and external factors of the property, as well as hard to access areas. This type of home survey will cost an average of <strong>£800</strong> in the UK, though it could be as cheap as £630 and as expensive as £1,200.</p>
                        <p className="mb-4">Compare My Move recommends this kind of survey if you’re buying a large home, an older build house, a thatched cottage, or a period property that you plan to renovate. Our building survey quote could save you headaches in the long run and ensure you make an informed decision.</p>
                        <p className="mb-1">It’s important that you know the building is safe and that any changes you plan to make can be safely carried out. The qualified Chartered Surveyor you find through Compare My Move's level 3 survey quotes will happily discuss their findings with you.</p>
                    </div>
                    <p className="my-3"><a className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>
                <div className="flex my-3 mx-7 items-center justify-center  sm:w-[100%] xl:w-[45%] 2xl:w-[44%]">
                    <img src="/assets/img/surveying_illustrations_2_V_1_01.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
            </Container>

        </div>
    );
}
export default LevelThreeSurvey;