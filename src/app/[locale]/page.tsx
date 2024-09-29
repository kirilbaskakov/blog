import AboutUs from '@/components/AboutUs/AboutUs';
import AuthorsList from '@/components/AuthorsList/AuthorsList';
import Categories from '@/components/Categories/Categories';
import Hero from '@/components/Hero/Hero';
import JoinUs from '@/components/JoinUs/JoinUs';
import LazyList from '@/components/LazyList/LazyList';
import Logos from '@/components/Logos/Logos';
import PostsBlock from '@/components/PostsBlock/PostsBlock';
import SpecialPost from '@/components/SpecialPost/SpecialPost';
import Testimonials from '@/components/Testimonials/Testimonials';

export default async function Home() {
  return (
    <>
      <Hero />
      <main>
        <LazyList>
          <PostsBlock />
          <AboutUs />
          <Categories />
          <SpecialPost />
          <AuthorsList />
          <Logos />
          <Testimonials />
          <JoinUs />
        </LazyList>
      </main>
    </>
  );
}
