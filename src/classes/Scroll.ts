//father of all the Warscrolls, each has name,price and faction
interface Scroll {
  name: string;
  price: number;
  faction: string[];
  role: string[];
  models: number;
  unique: boolean;

  getName();
  getPrice();
  getFaction();
  getRole();
  getModels();
  isUnique();
}
