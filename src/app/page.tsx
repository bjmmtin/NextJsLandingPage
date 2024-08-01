
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

export default function Index() {

  return (
    <main>
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
    </main>
  );
}
