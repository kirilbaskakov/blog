import AuthorInfo from './AuthorInfo';

export default {
  component: AuthorInfo,
  title: 'Author info',
  tags: ['autodocs']
};

export const Default = {
  args: {
    authorId: 1
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
