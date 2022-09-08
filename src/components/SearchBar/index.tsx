import { Container, SearchButton, SearchInput } from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { ClimateContext } from '../../ClimateContext';

export function SearchBar() {
	const { climate, searchCity } = useContext(ClimateContext);

	return (
		<Container>
			<SearchInput>
				<input
					type="text"
					name="searchBar"
					id="searchBar"
					placeholder="Digite o nome da cidade"
					onChange={e => searchCity(e)}
				/>
			</SearchInput>
			<SearchButton>
				<AiOutlineSearch />
			</SearchButton>
		</Container>
	);
}
