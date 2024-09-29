import TagCard from './TagCard';

export default {
  component: TagCard,
  title: 'Tag card',
  tags: ['autodocs']
};

export const Default = {
  args: {
    title: 'Experience',
    onDelete: () => {}
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
