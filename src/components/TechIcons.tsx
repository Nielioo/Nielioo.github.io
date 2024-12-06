import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import { FaJava } from "react-icons/fa6";
import {
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiLivewire,
  SiPhp,
  SiMysql,
  SiUnity,
  SiCsharp,
  SiKotlin,
  SiFlutter,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiBootstrap,
  SiAndroidstudio,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} tipChildren={<p>{current.name}</p>}>
            <li className='text-xl text-gray-700 dark:text-gray-200'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  bootstrap: {
    icon: SiBootstrap,
    name: 'Bootstrap',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  mysql: {
    icon: SiMysql,
    name: 'MySQL',
  },
  postgresql: {
    icon: SiPostgresql,
    name: 'PostgreSQL',
  },
  supabase: {
    icon: SiSupabase,
    name: 'Supabase',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  swift: {
    icon: SiSwift,
    name: 'Swift',
  },
  php: {
    icon: SiPhp,
    name: 'PHP',
  },
  laravel: {
    icon: SiLaravel,
    name: 'Laravel',
  },
  livewire: {
    icon: SiLivewire,
    name: 'LiveWire',
  },
  unity: {
    icon: SiUnity,
    name: 'Unity',
  },
  csharp: {
    icon: SiCsharp,
    name: 'C#',
  },
  androidstudio: {
    icon: SiAndroidstudio,
    name: 'Android Studio',
  },
  java: {
    icon: FaJava,
    name: 'Java',
  },
  kotlin: {
    icon: SiKotlin,
    name: 'Kotlin',
  },
  flutter: {
    icon: SiFlutter,
    name: 'Flutter',
  },
  python: {
    icon: SiPython,
    name: 'Python',
  },
};
