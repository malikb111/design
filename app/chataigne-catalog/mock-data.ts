// Types
export type Category = {
  id: string;
  name: string;
  productCount: number;
  image: string;
  color: string;
  description?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  optionListCount: number;
};

export type OptionList = {
  id: string;
  name: string;
  optionCount: number;
  maxChoices: number | null;
  isRequired: boolean;
  isMultiple: boolean;
  color: string;
};

export type Option = {
  id: string;
  name: string;
  price: number;
  image: string;
  optionListId: string;
};

export type Catalog = {
  id: string;
  name: string;
  productCount: number;
  categoryCount: number;
  color: string;
};

export type DiscountType =
  | "percentage"
  | "fixed"
  | "free_product"
  | "bogo"
  | "free_shipping";

export type Discount = {
  id: string;
  name: string;
  description: string;
  type: DiscountType;
  isActive: boolean;
  data: {
    percentage?: number;
    amount?: number;
    maxAmount?: number;
    productId?: string;
  };
  conditions?: {
    startDate?: string;
    endDate?: string;
    minOrderAmount?: number;
    maxOrdersPerCustomer?: number;
    promoCode?: string;
  };
};

// Mock Data
export const mockCatalogs: Catalog[] = [
  {
    id: "1",
    name: "Menu Principal",
    productCount: 86,
    categoryCount: 12,
    color: "orange",
  },
  {
    id: "2",
    name: "Menu du Soir",
    productCount: 42,
    categoryCount: 8,
    color: "blue",
  },
  {
    id: "3",
    name: "Menu du Midi",
    productCount: 28,
    categoryCount: 6,
    color: "purple",
  },
  {
    id: "4",
    name: "Menu Brunch",
    productCount: 35,
    categoryCount: 7,
    color: "pink",
  },
];

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Boissons",
    productCount: 12,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    color: "orange",
    description: "Découvrez notre sélection de boissons rafraîchissantes",
  },
  {
    id: "2",
    name: "Burgers",
    productCount: 8,
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398",
    color: "red",
    description: "Nos délicieux burgers faits maison",
  },
  {
    id: "3",
    name: "Desserts",
    productCount: 15,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    color: "pink",
    description: "Une sélection de desserts gourmands",
  },
  {
    id: "4",
    name: "Salades",
    productCount: 6,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    color: "green",
    description: "Des salades fraîches et healthy",
  },
  {
    id: "5",
    name: "Entrées",
    productCount: 10,
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270",
    color: "yellow",
    description: "Des entrées pour tous les goûts",
  },
  {
    id: "6",
    name: "Plats",
    productCount: 18,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975",
    color: "blue",
    description: "Nos plats signatures",
  },
];

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Burger Classic",
    description: "Steak, salade, tomate, oignon",
    price: 12.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    categoryId: "1",
    optionListCount: 2,
  },
  {
    id: "1",
    name: "Burger Classic",
    description: "Steak, salade, tomate, oignon",
    price: 12.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    categoryId: "1",
    optionListCount: 2,
  },
  {
    id: "1",
    name: "Burger Classic",
    description: "Steak, salade, tomate, oignon",
    price: 12.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    categoryId: "1",
    optionListCount: 2,
  },
  {
    id: "2",
    name: "Pizza Margherita",
    description: "Sauce tomate, mozzarella, basilic",
    price: 14.9,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    categoryId: "2",
    optionListCount: 3,
  },
  {
    id: "3",
    name: "Salade César",
    description: "Laitue, poulet, parmesan, croûtons",
    price: 11.9,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    categoryId: "3",
    optionListCount: 1,
  },
  {
    id: "4",
    name: "Tiramisu",
    description: "Café, mascarpone, cacao",
    price: 7.9,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    categoryId: "4",
    optionListCount: 0,
  },
  {
    id: "5",
    name: "Mojito",
    description: "Rhum, menthe, citron vert",
    price: 9.9,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a",
    categoryId: "5",
    optionListCount: 1,
  },
];

export const mockOptionLists: OptionList[] = [
  {
    id: "1",
    name: "Sauces",
    optionCount: 8,
    maxChoices: 2,
    isRequired: true,
    isMultiple: true,
    color: "purple",
  },
  {
    id: "2",
    name: "Suppléments",
    optionCount: 12,
    maxChoices: null,
    isRequired: false,
    isMultiple: true,
    color: "orange",
  },
  {
    id: "3",
    name: "Cuisson",
    optionCount: 5,
    maxChoices: 1,
    isRequired: true,
    isMultiple: false,
    color: "blue",
  },
  {
    id: "4",
    name: "Boissons",
    optionCount: 15,
    maxChoices: 1,
    isRequired: true,
    isMultiple: false,
    color: "green",
  },
];

export const mockOptions: Option[] = [
  {
    id: "1",
    name: "Sauce Barbecue",
    price: 0.5,
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc",
    optionListId: "1",
  },
  {
    id: "2",
    name: "Sauce Curry",
    price: 0.5,
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc",
    optionListId: "1",
  },
  {
    id: "3",
    name: "Double Steak",
    price: 3.0,
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc",
    optionListId: "2",
  },
  {
    id: "4",
    name: "Bacon",
    price: 1.5,
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc",
    optionListId: "2",
  },
  {
    id: "5",
    name: "Fromage",
    price: 1.0,
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc",
    optionListId: "2",
  },
];

export const mockDiscounts: Discount[] = [
  {
    id: "1",
    name: "Réduction d'été",
    description: "-20% sur tous les produits",
    type: "percentage",
    isActive: true,
    data: {
      percentage: 20,
      maxAmount: 100,
    },
    conditions: {
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      minOrderAmount: 50,
      promoCode: "ETE2024",
    },
  },
  {
    id: "2",
    name: "Menu du midi offert",
    description: "Un menu du midi gratuit pour 50 CHF d'achat",
    type: "free_product",
    isActive: true,
    data: {
      productId: "3",
    },
    conditions: {
      minOrderAmount: 50,
      maxOrdersPerCustomer: 1,
    },
  },
  {
    id: "3",
    name: "Livraison gratuite",
    description: "Livraison gratuite dès 100 CHF d'achat",
    type: "free_shipping",
    isActive: true,
    data: {},
    conditions: {
      minOrderAmount: 100,
    },
  },
  {
    id: "4",
    name: "1 burger acheté = 1 burger offert",
    description: "Pour tout achat d'un burger, le deuxième est offert",
    type: "bogo",
    isActive: true,
    data: {
      productId: "1",
    },
    conditions: {
      maxOrdersPerCustomer: 2,
      endDate: "2024-12-31",
    },
  },
  {
    id: "5",
    name: "10 CHF de réduction",
    description: "10 CHF de réduction sur votre commande",
    type: "fixed",
    isActive: true,
    data: {
      amount: 10,
    },
    conditions: {
      minOrderAmount: 30,
      promoCode: "BIENVENUE",
    },
  },
];
