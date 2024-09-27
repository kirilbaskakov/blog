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
import initTranslations from '../i18n';
import { I18nextProvider } from 'react-i18next';

export default async function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ['default']);
  console.log(t('blog'));
  return (
    <I18nextProvider></I18nextProvider>
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
