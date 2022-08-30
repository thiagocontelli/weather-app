import { Climate } from '../Climate'
import { SearchBar } from '../SearchBar'
import { Container } from './style'

export function Home() {
	return (
		<Container>
			<SearchBar />
      <Climate />
		</Container>
	)
}
