import { Climate } from '../Climate'
import { Info } from '../Info'
import { SearchBar } from '../SearchBar'
import { Container } from './style'

export function Home() {
	return (
		<Container>
			<SearchBar />
			<Climate />
      <Info />
		</Container>
	)
}
