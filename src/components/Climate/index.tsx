import { Container } from './style';
import { useClimate } from '../../hooks/useClimate';

export function Climate() {
	const { icon } = useClimate();

	return (
		<Container>
			<img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} />
		</Container>
	);
}
