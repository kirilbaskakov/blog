import { TagType } from '@/types/TagType';

const tags: Record<string, Array<TagType>> = {
  en: [
    {
      value: 'business',
      title: 'Business'
    },
    {
      value: 'experience',
      title: 'Experience'
    },
    {
      value: 'screen',
      title: 'Screen'
    },
    {
      value: 'technology',
      title: 'Technology'
    },
    {
      value: 'marketing',
      title: 'Marketing'
    },
    {
      value: 'life',
      title: 'Life'
    }
  ],
  ru: [
    {
      value: 'business',
      title: 'Бизнес'
    },
    {
      value: 'experience',
      title: 'Опыт'
    },
    {
      value: 'screen',
      title: 'Экран'
    },
    {
      value: 'technology',
      title: 'Технологии'
    },
    {
      value: 'marketing',
      title: 'Маркетинг'
    },
    {
      value: 'life',
      title: 'Жизнь'
    }
  ]
};

export default tags;
