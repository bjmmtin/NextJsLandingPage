import Container from "./container";
import Member from "./member";

const HelpingStep = () => {
    return (
        <div>
            <Container>
                <div className="text-center w-[100%] py-12">
                    <h3 className="text-[#52105b] 2xl:text-3xl font-extrabold text-2xl">Helping you every step of your move</h3>
                    <p className="text-xl">Our surveying guide provides expert advice on what to know before hiring a chartered surveyor.</p>
                </div>
                <div className="pb-12 ">
                    <div className="rounded-xl shadow-md border overflow-hidden border-[#d2d2d2] grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
                        <div className="bg-[#52105b] text-white px-8 py-8 text-lg ">
                            <p className="font-extrabold text-2xl mb-4">Surveying Basics</p>
                            <p className="mb-2"> <a className="hover:underline hover:pl-1" href="/">What is a Chartered Surveyor?</a></p>
                            <p className="mb-2"> <a className="hover:underline hover:pl-1" href="/">How to Find a RICS Surveyor</a></p>
                            <p className="mb-2"> <a className="hover:underline hover:pl-1" href="/">What is RICS And Why Is It Important?</a></p>
                            <p className="mb-2"> <a className="hover:underline hover:pl-1" href="/">How Much Does a House Survey Cost in 2024?</a></p>
                        </div>
                        <div className="mx-8 my-8 col-span-1 text-lg sm:border-r sm:border-[#d2d2d2]">
                            <p className="font-extrabold text-2xl mb-4 text-[#52105b]">Survey Types</p>
                            <div className="mb-4 ">
                                <p className="mb-2"><a className="hover:underline hover:ml-1 text-[#55a646]" href="/">What is a Valuation Report?</a></p>
                                <p className="mb-2"><a className="hover:underline hover:pl-1 text-[#55a646]" href="/">What is a Condition Report(Level 1 Survey)?</a></p>
                                <p className="mb-2"><a className="hover:underline hover:pl-1 text-[#55a646]" href="/">What is a HomeBuyers Survey?</a></p>
                                <p className="mb-2"><a className="hover:underline hover:pl-1 text-[#55a646]" href="/">What is a Building Survey?</a></p>
                            </div>

                        </div>
                        <div className="my-8 text-lg col-span-1 ">
                            <p className="font-extrabold text-2xl mb-4 text-[#52105b]">Arraging a Survey</p>
                            <div className="mb-4">
                                <p className="mb-2"><a className="hover:underline hover:pl-1 text-[#55a646]" href="/">What Does a Surveyor do During a Survey?</a></p>
                                <p className="mb-2"><a className="hover:underline hover:ml-1 text-[#55a646]" href="/">Who Organises a Survey When Buying a House?</a></p>
                                <p className="mb-2"><a className="hover:underline hover:pl-1 text-[#55a646]" href="/">Questions to Ask Your Property Surveyor</a></p>
                                <p className="mb-2"><a className="hover:underline hover:pl-1 text-[#55a646]" href="/">What Are Common House Survey Problems?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 grid grid-cols-3">
                    <div className="col-span-1 pr-8">
                        <h3 className="mb-4 text-[#52105b] text-2xl font-extrabold">Our panel of property industry experts ensure our content is accurate and insightful</h3>
                        <p className="pb-5 text-lg">We work with accredited and experienced property industry professionals to fact-check all of our content. Be informed throughout your house move.</p>
                        <p className="my-3"><a href="/" className="py-4 px-8 text-white bg-[#55a646] rounded-full">Our Editorial Process</a></p>
                    </div>
                    <ul className="grid grid-cols-2 col-span-2 gap-3">
                        <Member photo="/assets/img/staff_circles_mike_ashton_2501.png" name="Mike Ashton" job="Director of Cambridge Building Surveyors"></Member>
                        <Member photo="/assets/img/Carol-OLeary_250.png" name="Carol O'Leary" job="Director of Cambridge Building Surveyors"></Member>
                        <Member photo="/assets/img/Jonathan-Rolande_circles_250.png" name="Jonathen Rolande" job="Director of Cambridge Building Surveyors"></Member>
                        <Member photo="/assets/img/staff_circles_steve_jordan_2501.png" name="Steve Jor dan" job="Director of Cambridge Building Surveyors"></Member>
                        <Member photo="/assets/img/1646990442610_circles_250.png" name="David Opie" job="Director of Cambridge Building Surveyors"></Member>
                        <Member photo="/assets/img/martyn_circles_250.png" name="Martin Maxwell" job="Director of Cambridge Building Surveyors"></Member> 
                    </ul>
                </div>
            </Container>
        </div>
    );
}
export default HelpingStep;