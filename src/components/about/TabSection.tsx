import * as React from 'react';
import TabButton from '@/components/buttons/TabButton';
import useLoaded from '@/hooks/useLoaded';
import clsx from 'clsx';

const TAB_DATA = [
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-4 text-gray-600 dark:text-gray-300'>
        <li>Bachelor of Informatics Engineering - Ciputra University Batch 2020, Surabaya</li>
        <li>iOS Developer - Apple Developer Academy Cohort 2023, Surabaya</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-4 text-gray-600 dark:text-gray-300'>
        <li>Alibaba Cloud Certified Developers</li>
      </ul>
    ),
  },
  {
    title: 'Awards',
    id: 'awards',
    content: (
      <ul className='list-disc pl-4 text-gray-600 dark:text-gray-300'>
        <li>2th Runner Up Application Business Idea on Faculty of Information Technology Competition 2022</li>
        <li>3th Winner Web/Mobile Application on LO KREATIF 2021</li>
        <li>Best Student in Academic Performance Award Informatics 2020</li>
      </ul>
    ),
  },
];

export default function TabSection() {
  const isLoaded = useLoaded();
  const [tab, setTab] = React.useState('education');

  return (
    <section className={clsx('layout py-8', isLoaded && 'fade-in-start')}>
      <div data-fade="6" className='flex border-b border-gray-200 dark:border-gray-600'>
        {TAB_DATA.map((tabItem) => (
          <TabButton
            key={tabItem.id}
            active={tab === tabItem.id}
            onClick={() => setTab(tabItem.id)}
          >
            {tabItem.title}
          </TabButton>
        ))}
      </div>
      <div data-fade="7" className='mt-6'>
        {TAB_DATA.find((t) => t.id === tab)?.content}
      </div>
    </section>
  );
}