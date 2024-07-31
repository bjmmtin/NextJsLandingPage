import Container from "./container";

const SurveyingCompanies = () => {
    return (
        <div className="">
            <Container>
                <div className="text-center pb-8 pt-12 text-xl font-light w-[100%]">
                    <h3 className="text-[#52105b] 2xl:text-3xl  text-2xl font-bold mb-1">Over 100 local surveying companies</h3>
                    <p className="">Compare My Move works with <a className="font-bold text-[#55a646] hover:underline" href="/">local surveying companies</a> across the UK.</p>
                    <p className="mb-4">Wherever you're moving house, get the best deals from top surveying firms.</p>
                </div>
                <div className="text-[#55a646] pb-12 flex justify-between text-left w-[100%] text-lg font-semibold">
                    <div className="w-[33%] mb-4">
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/coventry">Coventry Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/london">London Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/manchester">Manchester Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/london/merton">Merton Surveyors</a></p>
                    </div>
                    <div className="w-[33%]">
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/sheffield">Sheffield Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/brighton">Brighton Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/london/romford">Romford Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/liverpool">Liverpool Surveyors</a></p>
                    </div >
                    <div className="w-[33%]">
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/london/bromley">Bromley Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/dartford">Dartford Surveyors</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/leicester">Leicester Removals</a></p>
                        <p className="pb-2"><a className="hover:underline hover:pl-1" href="/chartered-surveyors/derby">Derby Surveyors</a></p>
                    </div>
                </div >
            </Container >
        </div >
    );
}
export default SurveyingCompanies;