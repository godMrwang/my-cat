export interface Product {
  id: string;
  name: string;
  category: 'Dry Food' | 'Wet Food' | 'Supplements' | 'Accessories';
  description: string;
  price: number;
  image: string;
  tags?: string[];
  lifeStage?: 'Kitten' | 'Adult' | 'Senior';
  dietaryPreference?: string[];
  protein?: string[];
  analysis?: {
    protein: string;
    fat: string;
    fiber: string;
    moisture: string;
    taurine?: string;
  };
  ingredients?: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  content?: string;
  author?: string;
  date?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
