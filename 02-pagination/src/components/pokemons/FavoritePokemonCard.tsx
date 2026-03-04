import type { FavoritePokemon } from "src/interfaces/favorite-pokemon";
import { createSignal, type Component, Show } from 'solid-js';

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({pokemon}) => {
    const [ isVisible, setIsVisible ] = createSignal(true);

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`;
    
    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem('favorites') ?? '[]'
        ) as FavoritePokemon[];

        const newFavorites = favorites.filter(p => p.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsVisible(false);
    }
    return (
        <Show when={isVisible}>
        <div class="flex flex-col justify-center items-center">
            <a href={`/pokemons/${pokemon.name}`}>
                <img
                src={ imgSrc }
                alt={pokemon.name}
                width="96"
                height="96"
                style={`view-transition-name: ${pokemon.name}-image`}
                >
                </img>
                <p class="capitalize">
                    {pokemon.id} {pokemon.name}
                </p>
            </a>
            <button 
            onClick={deleteFavorite}
            class="text-red-400">Remove Me</button>

        </div>
        </Show>
    );
}