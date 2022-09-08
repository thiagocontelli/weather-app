import { Container, SearchButton, SearchInput } from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { useContext } from 'react';
import { ClimateContext } from '../../ClimateContext';

export function SearchBar() {
	return (
		<Container>
			<SearchInput>
				<input
					type="text"
					name="searchBar"
					id="searchBar"
					placeholder="Digite o nome da cidade"
				/>
			</SearchInput>
			<SearchButton>
				<AiOutlineSearch />
			</SearchButton>
		</Container>
	);
}
