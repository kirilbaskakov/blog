import AboutUs from '@/components/AboutUs/AboutUs';
import AuthorsList from '@/components/AuthorsList/AuthorsList';
import Categories from '@/components/Categories/Categories';
import Hero from '@/components/Hero/Hero';
import JoinUs from '@/components/JoinUs/JoinUs';
import Logos from '@/components/Logos/Logos';
import PostsBlock from '@/components/PostsBlock/PostsBlock';
import SpecialPost from '@/components/SpecialPost/SpecialPost';
import Testimonials from '@/components/Testimonials/Testimonials';

import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Hero />
      <main className={styles.main}>
        <PostsBlock />
        <AboutUs />
        <Categories />
        <SpecialPost />
        <AuthorsList />
        <Logos />
        <Testimonials />
        <JoinUs />
      </main>
    </div>
  );
}
