import posts from '@/constants/data/posts';

const getPost = (postId: number) => {
  return posts.find(({ id }) => id == postId);
};

export default getPost;
