import { ClimateProvider } from './ClimateContext';
import { Climate } from './components/Climate';
import { Info } from './components/Info';
import { SearchBar } from './components/SearchBar';

import { GlobalStyle } from './styles/global';
import { Container } from './styles/home';

function App() {
	return (
		<>
			<ClimateProvider>
				<Container>
					<SearchBar />
					<Climate />
					<Info />
				</Container>
			</ClimateProvider>
			<GlobalStyle />
		</>
	);
}

export default App;
