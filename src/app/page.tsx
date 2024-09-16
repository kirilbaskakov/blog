import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';
import AuthorsList from '@/components/AuthorsList/AuthorsList';
import Logos from '@/components/Logos/Logos';
import JoinUs from '@/components/JoinUs/JoinUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Categories from '@/components/Categories/Categories';
import AboutUs from '@/components/AboutUs/AboutUs';
import SpecialPost from '@/components/SpecialPost/SpecialPost';

export default function Home() {
  return (
    <div>
      <Hero />
      <main className={styles.main}>
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
