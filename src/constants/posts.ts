import PostImage1 from '@/assets/post1.jpg';
import PostImage2 from '@/assets/post2.jpg';
import PostImage3 from '@/assets/post3.jpg';
import PostImage4 from '@/assets/post4.jpg';

const posts = [
  {
    id: 1,
    authorId: 1,
    author: 'Andrew Johnson',
    date: '12 Aug, 2024',
    image: PostImage1,
    category: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 2,
    authorId: 1,
    author: 'Andrew Johnson',
    date: '14 Aug, 2024',
    image: PostImage2,
    category: 'Business',
    title: 'How to build rapport with your web design clients',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 3,
    authorId: 2,
    author: 'John Doe',
    date: '10 Aug, 2024',
    image: PostImage3,
    category: 'Startup',
    title:
      'Logo design trends to avoid in 2022Logo design trends to avoid in 2022',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    id: 4,
    authorId: 2,
    author: 'John Doe',
    date: '20 Aug, 2024',
    image: PostImage4,
    category: 'Technology',
    title: '8 Figma design systems you can download for free today',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  }
];

export default posts;
