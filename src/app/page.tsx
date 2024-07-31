import Container from "@/app/_components/container";


import Header from "@/app/_components/header";
import Navbar from "./_components/navbar";
import MiddleSticky from "./_components/middleSticky";
import MiddleHeader from "./_components/middleHeader";
import CharteredSurvey from "./_components/chateredSurvey";
import CustomerReview from "./_components/customerReview"
import SurveyingCompanies from "./_components/surveyingCompanies";
import CompareHomebuyer from "./_components/compareHomebuyer";
import HomeSurvey from "./_components/homeSurvey";
import LevelTwoSurvey from "./_components/levelTwosurvey";
import LevelThreeSurvey from "./_components/levelThreesurvey";
import ValuationReport from "./_components/valuationReport";
import SnaggingSurvey from "./_components/snaggingSurvey";
import PartyWallSurvey from "./_components/partyWallSurvey";
import RemovalCompany from "./_components/removalCompany";
import HelpingStep from "./_components/helpingStep";
import Footer from "./_components/footer";
export default function Index() {

  return (
    <main>
      <Header></Header>
      <Navbar/>
      <CompareHomebuyer/>
      <MiddleSticky/>
      <MiddleHeader/>
      <CharteredSurvey/>
      <CustomerReview/>
      <SurveyingCompanies/>
      <HomeSurvey/>
      <LevelTwoSurvey/>
      <LevelThreeSurvey/>
      <ValuationReport/>
      <SnaggingSurvey/>
      <PartyWallSurvey/>
      <RemovalCompany/>
      <HelpingStep/>
      <Footer/>
      {/* <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container> */}
    </main>
  );
}
