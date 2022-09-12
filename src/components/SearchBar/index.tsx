import { Container, SearchButton, SearchInput } from './style';
import { AiOutlineSearch } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { ClimateContext } from '../../ClimateContext';

export function SearchBar() {
	const { onInputChange, handleSearchCity, handlePressEnter } =
		useContext(ClimateContext);

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
