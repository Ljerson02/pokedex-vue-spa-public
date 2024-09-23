import Axios from '@/config/axiosConfig';
interface Type {
  name: string;
  url: string;
}

interface TypeSlot {
  slot: number;
  type: Type;
}

interface Sprites {
  back_default: string;
  front_default: string;
}

export interface PokemonDTO {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  sprites: Sprites,
  types: TypeSlot[];
  weight: number;
}



export interface PokemonsDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string }[];
}

interface IPokeApi {
  getPokemons(limit: number, offset: number): Promise<PokemonsDTO>;
  getPokemon(name: string): Promise<PokemonDTO>;
}

class PokeApiAxiosAdapter implements IPokeApi {
  async getPokemons(limit: number, offset: number): Promise<PokemonsDTO> {
    try {
      const response = await Axios.get<PokemonsDTO>('/pokemon', {
        params: { limit, offset },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }
  }

  async getPokemon(name: string): Promise<PokemonDTO> {
    try {
      const response = await Axios.get<PokemonDTO>(`/pokemon/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }
  }
}

const pokeApi: IPokeApi = new PokeApiAxiosAdapter();

export default pokeApi;