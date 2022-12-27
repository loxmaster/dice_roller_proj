class Unit implements Scroll {
  //generic stats
  private name: string;
  private price: number;
  private faction: string[] = [];
  private role: string[];
  //maybe transform into stats array ?
  private attacks: number;
  private toHit: number;
  private toWound: number;
  private rend: number;

  //defensive stats
  private toSave: number;
  private toWard: number = 7;

  //other stats
  private move: number;
  private models: number;
  private wounds: number = 1;
  private unique: boolean = false;

  //constructor(name: string, price: number, faction: string[], role: string[]) {}
}
