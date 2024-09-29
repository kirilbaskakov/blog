import tags from '@/constants/tags';

const getTags = (locale: string) => {
  return tags[locale] ?? [];
};

export default getTags;
