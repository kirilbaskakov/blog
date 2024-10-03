import authors from '@/constants/data/authors';

const getAuthors = (params: URLSearchParams) => {
  const limit = Number(params.get('limit') ?? '4');
  return authors.slice(0, limit);
};

export default getAuthors;
