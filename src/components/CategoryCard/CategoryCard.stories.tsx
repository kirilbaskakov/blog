import CategoryCard from './CategoryCard';
import BusinessIcon from '@/assets/BusinessIcon.png';

export default {
  component: CategoryCard,
  title: 'Category card',
  tags: ['autodocs']
};

export const Default = {
  args: {
    icon: BusinessIcon,
    title: 'Business',
    categoryKey: 'business',
    text: 'Lorem ipsum Lorem ipsum Lorem ipsum'
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};
