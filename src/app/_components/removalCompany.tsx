import Container from "./container";

const RemovalCompany = () => {
    return (
        <div className="py-12 bg-[#f7f7f7]">
            <Container>
                <div className="my-3 mx-7 sm:w-[100%] xl:w-[45%] 2xl:w-[44%] ">
                    <div className="text-xl font-light pb-4 mt-12">
                        <h2 className="2xl:text-4xl text-3xl mb-4 font-bold text-[#52105b]">Need a removal company?</h2>
                        <p className="mb-4">Once you’ve had a property survey carried out, you should start thinking about booking your removal company. Our integrated surveying comparison form lets you <strong>compare removal companies</strong> at the same time in just a few quick and easy steps.</p>
                        <p className="mb-4">You’ll then be matched with <strong>up to 6 surveyors </strong>and<strong> removal companies</strong> to discuss your requirements. Save even more money on your move and compare quotes from local surveyors and moving companies. </p>
                    </div>
                    <p className="mb-4"><a className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>

                <div className="flex mx-7 my-3 sm:w-[100%] xl:w-[46%] 2xl:w-[45%] items-center justify-center">
                    <img src="/assets/img/removal-van.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
            </Container>
        </div>
    );
}
export default RemovalCompany;