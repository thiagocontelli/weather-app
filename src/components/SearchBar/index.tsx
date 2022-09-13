import { Container, SearchButton, SearchInput } from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { useClimate } from '../../hooks/useClimate';

export function SearchBar() {
	const { onInputChange, handleSearchCity, handlePressEnter } = useClimate();

	const [isOnFocus, setIsOnFocus] = useState(false);

	return (
		<Container isOnFocus={isOnFocus}>
			<SearchInput>
				<input
					type="text"
					name="searchBar"
					id="searchBar"
					placeholder="Digite o nome da cidade"
					onChange={(e) => onInputChange(e)}
					onKeyDown={(e) => handlePressEnter(e)}
					onFocus={() => setIsOnFocus(true)}
					onBlur={() => setIsOnFocus(false)}
				/>
			</SearchInput>
			<SearchButton onClick={handleSearchCity}>
				<AiOutlineSearch />
			</SearchButton>
		</Container>
	);
}
