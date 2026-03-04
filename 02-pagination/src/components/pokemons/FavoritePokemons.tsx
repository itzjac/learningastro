import type { FavoritePokemon } from "src/interfaces/favorite-pokemon";
import { For, createSignal } from 'solid-js';
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    );
    return favoritePokemons;
}

export const FavoritePokemons = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:gri-cols-4">
            <For each={ pokemons() }>{ (pokemon) => <FavoritePokemonCard pokemon={pokemon}/>}</For>
        </div>
    );
}