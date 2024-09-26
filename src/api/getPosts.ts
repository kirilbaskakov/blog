import posts from '@/constants/posts';

const getPosts = ({
  authorId,
  category,
  tags = [],
  page = 1,
  limit = 4
}: {
  authorId?: number;
  category?: string;
  tags?: string[];
  page?: number;
  limit?: number;
} = {}) => {
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
