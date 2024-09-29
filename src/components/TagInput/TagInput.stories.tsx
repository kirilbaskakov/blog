import TagInput from './TagInput';

export default {
  component: TagInput,
  title: 'Tag input',
  tags: ['autodocs']
};

export const Default = {
  args: {
    onSelect: () => {},
    onSearch: () => {}
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
