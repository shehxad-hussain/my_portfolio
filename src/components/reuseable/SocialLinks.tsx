import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/shehxadshehzu' },
  { id: 2, icon: 'uil uil-github', url: 'https://github.com/shehxad-hussain' },
  { id: 3, icon: 'uil uil-linkedin', url: 'https://www.linkedin.com/in/shehzad-hussain-762030213/ ' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://www.instagram.com/shehzunorthman/' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/channel/UCR9z7M8rRsPMd65Q2ZyTHww' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
