import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";
import Navbar from "./_components/navbar";
import MiddleSticky from "./_components/middleSticky";
import MiddleHeader from "./middleHeader";
import CharteredSurvey from "./_components/chateredSurvey";
import CustomerReview from "./_components/customerReview"
import SurveyingCompanies from "./_components/surveyingCompanies";
import CompareHomebuyer from "./_components/compareHomebuyer";
import HomeSurvey from "./_components/homeSurvey";
import LevelTwoSurvey from "./_components/levelTwosurvey";
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

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
