import posts from '@/constants/posts';

const getPosts = ({
  authorId,
  category,
  limit = 4
}: {
  authorId?: number;
  category?: string;
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
  return selected.slice(0, limit);
};

export default getPosts;
