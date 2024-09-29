import PostCard from './PostCard';
import PostImage1 from '@/assets/post1.jpg';

export default {
  component: PostCard,
  title: 'Post card',
  tags: ['autodocs']
};

export const Default = {
  args: {
    id: 1,
    image: PostImage1,
    category: 'business',
    title: 'Post title',
    text: 'Post text. Post text. Post text. Post text. Post text'
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
