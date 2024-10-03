import { StaticImageData } from 'next/image';

export type AuthorType = {
  id: number;
  name: string;
  description: string;
  job: string;
  origin: string;
  icon: StaticImageData;
};
