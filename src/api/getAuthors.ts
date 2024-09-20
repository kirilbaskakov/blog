import authors from '@/constants/authors';

const getAuthors = ({ limit = 4 }: { limit?: number } = {}) => {
  return authors.slice(0, limit);
};

export default getAuthors;
