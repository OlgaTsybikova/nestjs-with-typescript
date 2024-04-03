export class Pokemon {
  /*  public id: number;
    public name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        console.log('constructor llamado')
    } */
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  constructor(
    public id: number,

    public readonly name: string
  ) {}
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }
  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(3, "Charmander");
console.log(charmander);
charmander.scream();
charmander.speak();
