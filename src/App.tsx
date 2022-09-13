import { ClimateProvider } from './hooks/useClimate';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';

function App() {
	return (
		<>
			<ClimateProvider>
				<Home />
			</ClimateProvider>
			<GlobalStyle />
		</>
	);
}

export default App;
