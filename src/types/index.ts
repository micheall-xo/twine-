// ... existing interfaces ...

export interface SearchResult {
  id: string;
  type: 'user' | 'post';
  name?: string;
  username?: string;
  avatar?: string;
  content?: string;
  image?: string;
  user?: User;
}

export interface Filter {
  name: string;
  css: string;
}