import { StaticImageData } from 'next/image';

export type PostType = {
  id: number;
  authorId: number;
  author: string;
  date: string;
  category: string;
  image: StaticImageData;
  title: string;
  text: string;
};
