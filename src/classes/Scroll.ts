//father of all the Warscrolls, each has name,price and faction
class Scroll {
  name = null;
  price = 0;
  faction = [];
  role = undefined;
  constructor(name, price, faction, role) {
    this.name = name;
    this.price = price;
    this.faction = faction;
    if (role) this.role = role;
  }
}
