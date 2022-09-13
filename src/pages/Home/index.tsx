import { useClimate } from '../../hooks/useClimate';
import { Climate } from '../../components/Climate';
import { Info } from '../../components/Info';
import { SearchBar } from '../../components/SearchBar';
import { Container } from './styles';

import LoadingIcons from 'react-loading-icons';

export function Home() {
	const { isLoading } = useClimate();

	return (
		<>
			{isLoading ? (
				<Container>
					<LoadingIcons.ThreeDots />
				</Container>
			) : (
				<Container>
					<SearchBar />
					<Climate />
					<Info />
				</Container>
			)}
		</>
	);
}
