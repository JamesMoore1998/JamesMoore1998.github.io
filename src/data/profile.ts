export const profile = {
  name: 'James Moore',
  role: 'Ph.D. candidate in Biochemistry & Molecular Biology',
  institution: 'University of Nevada, Reno',
  affiliation: 'Murray Lab, Desert Research Institute',
  email: 'James.Moore@DRI.edu',
  expectedGraduation: 'Spring 2030',
  site: 'https://jamesmoore1998.github.io',
  github: 'https://github.com/JamesMoore1998',
  linkedin: 'https://www.linkedin.com/in/james-moore-6b5338333/',
  headline: 'Biochemistry, synthetic biology & computational biology',
  introduction:
    'I study biological systems by bringing together experimental biology, molecular methods, and quantitative reasoning. My research interests center on microbial natural products, biosynthetic gene clusters, and the tools that make biological research more reproducible.',
} as const;

export const navigation = [
  { label: 'About', href: '/about/' },
  { label: 'Research', href: '/research/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Skills', href: '/skills/' },
  { label: 'Publications', href: '/contributions/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Contact', href: '/contact/' },
] as const;
