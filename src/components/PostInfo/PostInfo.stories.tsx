import PostInfo from './PostInfo';

export default {
  component: PostInfo,
  title: 'Post Info',
  tags: ['autodocs']
};

export const Default = {
  args: {
    id: 1,
    authorId: 1,
    title: 'Post title',
    author: 'John Doe',
    date: 1660262400000
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
