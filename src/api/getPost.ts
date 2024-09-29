import posts from '@/constants/posts';

const getPost = (postId: number) => {
  return posts.find(({ id }) => id == postId);
};

export default getPost;
