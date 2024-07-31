import Container from "./container";

const PartyWallSurvey = () => {
    return (
        <div className="py-12">
            <Container>
                <div className="flex my-3 mx-7 sm:w-[100%] xl:w-[45%] 2xl:w-[44%] items-center justify-center">
                    <img src="/assets/img/who-pays-party-wall.png" width={500} height={361} alt="Surveying Illustrations 1  V 1 01" />
                </div>
                <div className="my-3 mx-7 sm:w-[100%] xl:w-[45%] 2xl:w-[44%] ">
                    <div className="text-xl font-light pb-4 mt-6">
                        <h2 className="2xl:text-4xl text-3xl mb-4 font-bold text-[#52105b]">What is a Party Wall Survey?</h2>
                        <p className="mb-4">A Party Wall Survey is needed if your neighbour disputes or ignores your Party Wall notice.</p>
                        <p className="mb-4">If you can’t agree on the proposed works for the party wall, then the surveyor will inspect the situation and review the work required. They will then be able to draw up a Party Wall Agreement to resolve the issues.</p>
                        <p className="mb-4">Compare My Move have a network of local Party Wall Surveyors to help resolve your party wall issues. Get connected with up to 6 RICS or RPSA surveyors to help save on your surveying costs.</p>
                    </div>
                    <p><a className="bg-[#55a646] text-white rounded-full py-3 px-8 text-xl font-bold" href="/">compare now</a></p>
                </div>
            </Container>
        </div>
    );
}
export default PartyWallSurvey;