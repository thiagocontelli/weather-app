import { Container, SearchButton, SearchInput } from './style'

import lupaImg from '../../assets/190.png'

export function SearchBar() {
	return (
		<Container>
			<SearchInput>
				<input
          type='text'
          name='searchBar'
          id='searchBar'
          placeholder='Digite o nome da cidade'
        />
			</SearchInput>
			<SearchButton>
				<img
          src={lupaImg}
          alt="Search"
        />
			</SearchButton>
		</Container>
	)
}
