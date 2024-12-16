import * as React from 'react';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import {SiDiscord, SiGithub, SiInstagram, SiLine, SiLinkedin, SiTelegram } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
// import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

// import { spotifyFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <FooterLinks />

        {/* {spotifyFlag && <Spotify className='mt-8' />} */}

        <p className='mt-12 font-medium text-gray-600 dark:text-gray-300'>
          Reach me out
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Daniel Aprillio {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, text, tooltip }) => (
        <Tooltip interactive={false} key={href} tipChildren={tooltip}>
          <UnstyledLink
            className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
            href={href}
            onClick={() => {
              trackEvent(`Footer Link: ${text}`, { type: 'link' });
            }}
          >
            {text}
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Click the mail logo to copy '
                : 'Copied to clipboard 🥳'}
              <Accent className='inline-block font-medium'>
                nieliocc@gmail.com
              </Accent>
            </div>
          }
        >
          <button
            onClick={() => {
              copy('nieliocc@gmail.com').then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 1500);
              });
            }}
            className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </button>
        </Tooltip>
      </div>
      {socials.map((social) => (
        <Tooltip
          interactive={false}
          key={social.href}
          tipChildren={social.text}
        >
          <UnstyledLink
            className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
            }}
          >
            <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

const footerLinks: { href: string; text: string; tooltip: React.ReactNode }[] =
  [
    {
      href: 'https://github.com/Nielioo/Nielioo.github.io',
      text: 'Source Code',
      tooltip: 'This website source code',
    },
    {
      href: '/design',
      text: 'Design',
      tooltip: 'This website color palette',
    },
    {
      href: '/guestbook',
      text: 'Guestbook',
      tooltip:
        'Leave whatever you like to say—message, appreciation, suggestions',
    }
  ];

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'https://github.com/Nielioo',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className='font-medium'>Github</Accent>
      </>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/daniel-aprillio/',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    ),
  },
  {
    href: 'https://line.me/ti/p/~daniel_aprillio',
    icon: SiLine,
    id: 'Line',
    text: (
      <>
        You can chat me on <Accent className='font-medium'>Line</Accent>
      </>
    ),
  },
  {
    href: 'https://t.me/Nielioo',
    icon: SiTelegram,
    id: 'Telegram',
    text: (
      <>
        You can chat me on <Accent className='font-medium'>Telegram</Accent>
      </>
    ),
  },
  {
    href: 'https://discord.com/users/551736880014819329',
    icon: SiDiscord,
    id: 'Discord',
    text: (
      <>
        You can chat me on <Accent className='font-medium'>Discord</Accent>
      </>
    ),
  },
  {
    href: 'https://www.instagram.com/daniel_aprillio/',
    icon: SiInstagram,
    id: 'Instagram',
    text: (
      <>
        Find me on <Accent className='font-medium'>Instagram</Accent>
      </>
    ),
  },
];
