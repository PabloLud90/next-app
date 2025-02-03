import { SimplePokemons } from "../interfaces/simple-pokemon"
import { PokemonCard } from './PokemonCard';

interface Props {
    pokemons: SimplePokemons[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
              pokemons.map(pokemon => (
                <PokemonCard  key={pokemon.id} simplePokemon={pokemon}/>
              ))
        
      }

    </div>


  )
}

