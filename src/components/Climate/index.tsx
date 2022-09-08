import { Container } from './style';
import { useContext } from 'react';
import { ClimateContext } from '../../ClimateContext';

export function Climate() {
	const climate = useContext(ClimateContext);

	return (
		<Container>
			<img
				src={`https://www.weatherbit.io/static/img/icons/${climate[0]?.weather.icon}.png`}
			/>
		</Container>
	);
}
