import { ReactComponent as Home } from 'images/Icons/Home.svg';
import { ReactComponent as News } from 'images/Icons/News.svg';
import { ReactComponent as Promotions } from 'images/Icons/Promotions.svg';
import { ReactComponent as Documentation } from 'images/Icons/Documentation.svg';
import { ReactComponent as Tutorials } from 'images/Icons/Tutorials.svg';
import { ReactComponent as Account } from 'images/Icons/Account.svg';
import { ReactComponent as BrandAssets } from 'images/Icons/BrandAssets.svg';
import { ReactComponent as Analytics } from 'images/Icons/Analytics.svg';
import { ReactComponent as Support } from 'images/Icons/Support.svg';
import { ReactComponent as Game } from 'images/Icons/Game.svg';

import { findPatchPages } from 'utils/pages';
export const SidebarData = [
  {
    title: 'Home',
    path: findPatchPages('home'),
    icon: (props) => <Home {...props} />,
  },
  {
    title: 'Games',
    icon: (props) => <Game {...props} />,
    subNav: [
      {
        title: 'Roadmap',
        path: findPatchPages('roadmap'),
      },
      {
        title: 'All games',
        path: findPatchPages('all-games'),
      },
    ],
  },
  {
    title: 'Promotions',
    icon: (props) => <Promotions {...props} />,
    subNav: [
      {
        title: 'Network Tournaments',
        path: findPatchPages('tournaments'),
      },
      {
        title: 'Quests',
        path: findPatchPages('quests'),
      },
    ],
  },
  {
    title: 'Documentation',
    path: findPatchPages('documentation'),
    icon: (props) => <Documentation {...props} />,
  },
  {
    title: 'News and Updates',
    path: findPatchPages('news'),
    icon: (props) => <News {...props} />,
  },
  {
    title: 'Tutorials',
    path: findPatchPages('tutorials'),
    icon: (props) => <Tutorials {...props} />,
  },
  {
    title: 'Analytics',
    path: findPatchPages('analytics'),
    icon: (props) => <Analytics {...props} />,
  },
  {
    title: 'EVOPLAY Brand Assets',
    path: findPatchPages('brand-assets'),
    icon: (props) => <BrandAssets {...props} />,
  },
  {
    title: 'Support',
    path: findPatchPages('support'),
    icon: (props) => <Support {...props} />,
  },
  {
    title: 'Personal Account',
    path: findPatchPages('account'),
    icon: (props) => <Account {...props} />,
  },
];
