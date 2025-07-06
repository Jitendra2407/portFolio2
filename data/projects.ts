export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'SensAi',
    description:
      'Built an AI-driven career platform with resume generation and interview prep using Next.js, LLMs, Prisma, and Inngest, with a scalable backend and responsive UI.',
    logo: '/logos/sensAi.svg',
    link: 'https://github.com/Jitendra2407/CareerGenie',
    slug: 'driwwwle',
  },
  {
    title: 'RideEase',
    description:
      'An Uber clone enabling real-time ride booking, route tracking, and driver-rider interaction with a smooth UI.',
    logo: '/logos/rideease.svg',
    link: 'https://github.com/Jitendra2407/RideEase',
    slug: 'rideease',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Jitendra2407/portFolio2',
    slug: 'vscode-portfolio',
  },
];
