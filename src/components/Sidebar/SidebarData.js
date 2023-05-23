import React from 'react';

import { ReactComponent as Home } from 'images/Icons/Home.svg'
import { ReactComponent as News } from 'images/Icons/News.svg'
import { ReactComponent as Promotions } from 'images/Icons/Promotions.svg'
import { ReactComponent as Documentation } from 'images/Icons/Documentation.svg'
import { ReactComponent as Tutorials } from 'images/Icons/Tutorials.svg'
import { ReactComponent as Account } from 'images/Icons/Account.svg'
import { ReactComponent as BrandAssets } from 'images/Icons/BrandAssets.svg'
import { ReactComponent as Analytics } from 'images/Icons/Analytics.svg'
import { ReactComponent as Support } from 'images/Icons/Support.svg'
import { ReactComponent as Game } from 'images/Icons/Game.svg'

import { findPatch } from 'utils/pages';
export const SidebarData = [
  {
    title: 'Home',
    path: findPatch('home'),
    icon: (props) => <Home {...props} />
  },
  {
    title: 'Games',
    icon: (props) => <Game {...props} />,
    subNav: [
      {
        title: 'Roadmap',
        path: findPatch('roadmap'),
      },
      {
        title: 'All games',
        path: findPatch('all-games'),
      }
    ]
  },
  {
    title: 'Promotions',
    icon: (props) => <Promotions {...props} />,
    subNav: [
      {
        title: 'Network Tournaments',
        path: findPatch('tournaments'),
      },
      {
        title: 'Quests',
        path: findPatch('quests'),
      }
    ]
  },
  {
    title: 'Documentation',
    path: findPatch('documentation'),
    icon: (props) => <Documentation {...props} />
  },
  {
    title: 'News and Updates',
    path: findPatch('news'),
    icon: (props) => <News {...props} />
  },
  {
    title: 'Tutorials',
    path: findPatch('tutorials'),
    icon: (props) => <Tutorials {...props} />
  },
  {
    title: 'Analytics',
    path: findPatch('analytics'),
    icon: (props) => <Analytics {...props} />
  },
  {
    title: 'EVOPLAY Brand Assets',
    path: findPatch('brand-assets'),
    icon: (props) => <BrandAssets {...props} />
  },
  {
    title: 'Support',
    path: findPatch('support'),
    icon: (props) => <Support {...props} />
  },
  {
    title: 'Personal Account',
    path: findPatch('account'),
    icon: (props) => <Account {...props} />
  },
]