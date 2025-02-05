import { PokemonsResponse, SimplePokemons } from "@/pokemons";
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';


const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemons[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  // throw new Error ('erro page');
  // throw notFound();

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small>Estatico</small>
      </span>

      <PokemonGrid pokemons={pokemons}/>
    
    </div>
  );
}
