import Link from "next/link";
import Image from "next/image";

import { SimplePokemons } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  simplePokemon: SimplePokemons;
}

export const PokemonCard = ({ simplePokemon }: Props) => {
  //se hace una desesctruracion del objeto
  const { id, name } = simplePokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={simplePokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${simplePokemon.id}.svg`}
            width={100}
            height={100}
            alt={simplePokemon.name}
            priority={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Ver mas...
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
