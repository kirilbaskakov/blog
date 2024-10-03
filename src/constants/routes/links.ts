export const links = {
  home: '/',
  blog: '/blog',
  aboutUs: '/about',
  contactUs: '/contact',
  policy: '/policy',
  author: '/author'
};

const navLinksKeys = ['home', 'blog', 'aboutUs', 'contactUs'] as const;

export const navLinks = Object.fromEntries(
  navLinksKeys.map((key: (typeof navLinksKeys)[number]) => [key, links[key]])
);
