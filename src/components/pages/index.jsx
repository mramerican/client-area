import Analytics from 'components/pages/Analytics';
import Documentation from 'components/pages/Documentation';
import EvoplayBrandAssets from 'components/pages/EvoplayBrandAssets';
import Home from 'components/pages/Home/Home';
import NewsAndUpdates from 'components/pages/NewsAndUpdates';
import PersonalAccount from 'components/pages/PersonalAccount';
import Support from 'components/pages/Support';
import Tutorials from 'components/pages/Tutorials';
import Roadmap from 'components/pages/Roadmap';
import AllGames from 'components/pages/AllGames';
import Search from 'components/pages/Search';
import Quests from 'components/pages/Quests';
import Tournaments from 'components/pages/Tournaments';

export const Pages = {
  'home': {
    path: '/client-area',
    element: <Home/>
  },
  'all-games': {
    path: '/all-games',
    element: <AllGames/>
  },
  'roadmap': {
    path: '/roadmap',
    element: <Roadmap/>
  },
  'documentation': {
    path: '/documentation',
    element: <Documentation/>
  },
  'news': {
    path: '/news',
    element: <NewsAndUpdates/>
  },
  'tutorials': {
    path: '/tutorials',
    element: <Tutorials/>
  },
  'analytics': {
    path: '/analytics',
    element: <Analytics/>
  },
  'brand-assets': {
    path: '/brand-assets',
    element: <EvoplayBrandAssets/>
  },
  'support': {
    path: '/support',
    element: <Support/>
  },
  'account': {
    path: '/account',
    element: <PersonalAccount/>
  },
  'quests': {
    path: '/quests',
    element: <Quests/>
  },
  'tournaments': {
    path: '/tournaments',
    element: <Tournaments/>
  },
  'search': {
    path: '/search/:searchText',
    element: <Search/>
  }
}