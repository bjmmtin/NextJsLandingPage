import Container from "@/app/_components/container";

const CharteredSurvey = () => {
    return (
        <div className=" pt-12">
            <Container >
                <div className="mx-7 my-3 pb-12  sm:w-[100%] xl:w-[45%] 2xl:w-[44%]  ">
                    <div className="text-xl font-thin">
                        <h2 className="mb-4 2xl:text-4xl text-3xl font-extrabold text-[#52105b]" >Why use Compare My Move to find a Chartered Surveyor?</h2>
                        <p className="mb-4" >As the home of moving home, Compare My Move helps over 1 million UK movers get connected with the best professionals in the business every year. We will only connect you with verified RICS or RPSA regulated property surveyors, depending on the service required. This ensures you receive high-quality reports to help you through the moving process.</p>
                        <p className="mb-4" >Arranging a survey quote with us will save you both time and money by connecting you with up to 6 trusted surveyors in your local area. Simply fill out our 30-second form and compare the best regulated experts today.</p>
                        <p className="mb-7" >To find out more, read our <a className="hover:underline font-semibold text-[#55a646]" href="https://www.comparemymove.com/about-us">about us page</a>.</p>
                    </div>

                    <div className="my-3">
                        <a className="text-2xl bg-[#55a646] text-white font-bold rounded-full pt-2 pb-3 px-8">compare now</a>
                    </div>
                </div>
                <div className="mx-7  items-center flex  sm:w-[100%] xl:w-[45%] 2xl:w-[44%] justify-center">
                    <img src="/assets/img/surveying_hand.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
            </Container>

        </div>
    );
}
export default CharteredSurvey;