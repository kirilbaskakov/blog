import posts from '@/constants/data/posts';

const getPosts = (params: URLSearchParams) => {
  const authorId = Number(params.get('author_id'));
  const category = params.get('category');
  const tags = params.get('tags')?.split(', ') ?? [];
  const page = Number(params.get('page') ?? '1');
  const limit = Number(params.get('limit') ?? '4');
  let selected = posts;
  if (authorId) {
    selected = selected.filter(post => post.authorId == authorId);
  }
  if (category) {
    selected = selected.filter(
      post => post.category.toLowerCase() == category.toLowerCase()
    );
  }

  if (tags.length) {
    selected = selected.filter(post =>
      tags.some(tag => post.tags.includes(tag))
    );
  }
  return {
    amount: selected.length,
    posts: selected.slice((page - 1) * limit, page * limit)
  };
};

export default getPosts;
