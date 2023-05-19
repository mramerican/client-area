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

export const BASE_PATH = '/client-area'

export const Pages = {
  'home': {
    path: BASE_PATH,
    element: <Home/>
  },
  'all-games': {
    path: BASE_PATH + '/all-games',
    element: <AllGames/>
  },
  'roadmap': {
    path: BASE_PATH + '/roadmap',
    element: <Roadmap/>
  },
  'documentation': {
    path: BASE_PATH + '/documentation',
    element: <Documentation/>
  },
  'news': {
    path: BASE_PATH + '/news',
    element: <NewsAndUpdates/>
  },
  'tutorials': {
    path: BASE_PATH + '/tutorials',
    element: <Tutorials/>
  },
  'analytics': {
    path: BASE_PATH + '/analytics',
    element: <Analytics/>
  },
  'brand-assets': {
    path: BASE_PATH + '/brand-assets',
    element: <EvoplayBrandAssets/>
  },
  'support': {
    path: BASE_PATH + '/support',
    element: <Support/>
  },
  'account': {
    path: BASE_PATH + '/account',
    element: <PersonalAccount/>
  },
  'quests': {
    path: BASE_PATH + '/quests',
    element: <Quests/>
  },
  'tournaments': {
    path: BASE_PATH + '/tournaments',
    element: <Tournaments/>
  },
  'search': {
    path: BASE_PATH + '/search/:searchText',
    element: <Search/>
  }
}