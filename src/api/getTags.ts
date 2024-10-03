import tags from '@/constants/data/tags';

const getTags = (params: URLSearchParams) => {
  const locale = params.get('locale') ?? 'en';
  return tags[locale] ?? tags['en'];
};

export default getTags;
