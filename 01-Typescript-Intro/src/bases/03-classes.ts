import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

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
  async getMoves():Promise<Move[]>{

    const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    return data.moves;
  }
}


export const charmander = new Pokemon(4, "Charmander");
console.log(charmander);
charmander.scream();
charmander.speak();
console.log(charmander.getMoves())
