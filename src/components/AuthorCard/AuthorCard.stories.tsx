import AuthorCard from './AuthorCard';
import AuthorIcon from '@/assets/authorIcon.jpg';

export default {
  component: AuthorCard,
  title: 'Author card',
  tags: ['autodocs']
};

export const Default = {
  args: {
    id: 1,
    icon: AuthorIcon,
    name: 'Business',
    job: 'Content writer'
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};