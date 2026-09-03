import { PageConfig } from './types';
import { BROKER10_REGISTER_URL } from './indicatorData';

// O link da corretora para G1 está em uma variável, para facilitar a mudança depois.
const POCKET_OPTION_LINK = "https://example.com/pocket-option-link"; // Insira aqui o link real depois

export const pagesData: Record<string, PageConfig> = {
  g1: {
    id: 'g1',
    name: 'Pocket Option',
    links: [
      {
        id: 'broker',
        title: 'CADASTRE-SE NA POCKET OPTION',
        description: '',
        url: POCKET_OPTION_LINK,
        icon: 'rocket',
      },
      {
        id: 'compounds',
        title: 'GERENCIE SUA BANCA COM O COMPOUNDS',
        description: '',
        url: 'https://compounds.digital/',
        icon: 'chart',
      }
    ],
  },
  g2: {
    id: 'g2',
    name: 'Broker10',
    hasFunnel: true,
    links: [
      {
        id: 'broker',
        title: 'CADASTRE-SE NA BROKER10',
        description: '',
        url: BROKER10_REGISTER_URL,
        icon: 'rocket',
      },
      {
        id: 'compounds',
        title: 'GERENCIE SUA BANCA COM O COMPOUNDS',
        description: '',
        url: 'https://compounds.digital/',
        icon: 'chart',
      }
    ],
  },
  g3: {
    id: 'g3',
    name: 'Safirion',
    links: [
      {
        id: 'broker',
        title: 'CADASTRE-SE NA SAFIRION',
        description: '',
        url: 'https://redirect-link.site',
        icon: 'rocket',
      },
      {
        id: 'compounds',
        title: 'GERENCIE SUA BANCA COM O COMPOUNDS',
        description: '',
        url: 'https://compounds.digital/',
        icon: 'chart',
      }
    ],
  },
};
