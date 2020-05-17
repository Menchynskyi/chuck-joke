export type Joke = {
  id: string;
  text: string;
  url: string;
  updateTime: number | null;
  isLiked: boolean;
  category?: string;
};

export type ApiJoke = {
  id: string;
  icon_url: string;
  url: string;
  value: string;
  created_at: string;
  categories: string[] | [];
  updated_at: string;
};
