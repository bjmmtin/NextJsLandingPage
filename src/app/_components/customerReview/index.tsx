import Container from "../container";
import Feedback from "./feedback";

const CustomerReview = () => {
    return (
        <div className="bg-[#f7f7f7] pt-12">
            <Container>
                <div className="w-[100%]  text-center mb-4">
                    <h3 className=" text-[#52105b] 2xl:text-3xl  font-bold text-2xl">Customer Reviews</h3>
                    <p className="text-xl font-light" >We regularly monitor our partners to ensure they are working to high standards.</p>
                    <p className="text-xl font-light">   Take a look at some of our 5-star reviews from happy customers.</p>
                </div>
                <div className="flex-wrap flex justify-center py-8">
                    <Feedback writerName="Moving from Birmingham" date="Alex Cheshire on 17/07/24" content="The main contact I had (James) was incredibly thorough, helpful, always willing to take my calls and answers any and all silly questions I had. Can't recommend them enough!" />
                    <Feedback writerName="Moving from Canterbury" date="James Davies on 17/07/24" content="Very professional detailed report confirmed both written and verbal." />
                    <Feedback writerName="Moving from Ipswich" date="Sanjay Gautama on 15/07/24" content="Very professional and thorough service - right through from discussing the need, the actual survey and then the extensive and informative reports. Would recommend!" />
                    <Feedback writerName="Moving from Leeds" date="Thomas Harmer on 14/07/24" content="The surveyor had excellent communication skills. He engaged with me on a weekend and was informative and helpful. His advice and reports whether written or spoken were helpful regarding my purchase. I would not hesitate to recommend this company." />
                </div>
            </Container>
        </div>
    );
}
export default CustomerReview;