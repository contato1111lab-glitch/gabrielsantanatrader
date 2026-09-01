export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: 'rocket' | 'chart' | 'bot' | 'music';
}

export interface PageConfig {
  id: string;
  name: string;
  links: LinkItem[];
}
