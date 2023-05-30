import { ReactComponent as FireIcon } from 'images/Icons/HotOfferIcon.svg';

const map = {
  'New Game': {
    color: '#8ACB00',
  },
  'TOP Performer': {
    color: '#A33EE8',
  },
  'EVOPLAY’s Сhoice': {
    color: '#0099FA',
  },
  'TOP Asia': {
    color: '#FF4321',
  },
  'TOP Europe': {
    color: '#F0338C',
  },
  'TOP Asia/Europe': {
    color: '#0069FF',
  },
  'Hot Offer': {
    color: '#FDB10E',
    icon: (props) => <FireIcon {...props} />,
  },
  'Unique Graphics': {
    color: '#8ACB00',
  },
};

export const getType = (type) => (map[type] ? map[type] : null);
