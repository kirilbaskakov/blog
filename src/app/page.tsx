import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';
import AuthorsList from '@/components/AuthorsList/AuthorsList';
import Logos from '@/components/Logos/Logos';
import JoinUs from '@/components/JoinUs/JoinUs';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AuthorsList />
      <Logos />
      <Testimonials />
      <JoinUs />
    </div>
  );
}
