import React from 'react';

import OurTeamImage from '@/assets/about/OurTeamImage.png';
import WhyWeStarted from '@/assets/about/WhyWeStarted.png';
import AboutUsCard from '@/components/AboutUsCard/AboutUsCard';
import AboutUsHeader from '@/components/AboutUsHeader/AboutUsHeader';
import AuthorsList from '@/components/AuthorsList/AuthorsList';
import JoinUs from '@/components/JoinUs/JoinUs';
import LazyList from '@/components/LazyList/LazyList';
import Overview from '@/components/Overview/Overview';
import initTranslations from '@/i18n';

const aboutUsCards = [
  {
    title: 'teamOfCreatives',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    image: OurTeamImage
  },
  {
    title: 'whyStartedBlog',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    image: WhyWeStarted
  }
];

const About = async ({
  params: { locale }
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ['default']);

  return (
    <main className="main">
      <LazyList>
        <AboutUsHeader />
        <Overview />
        {aboutUsCards.map(({ title, ...params }) => (
          <AboutUsCard key={title} title={t(title)} {...params} />
        ))}
        <AuthorsList />
        <JoinUs />
      </LazyList>
    </main>
  );
};

export default About;
