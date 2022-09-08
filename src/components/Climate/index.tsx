import { Container } from './style';
import { useContext } from 'react';
import { ClimateContext } from '../../ClimateContext';

export function Climate() {
	const { icon } = useContext(ClimateContext);

	return (
		<Container>
			<img
				src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
			/>
		</Container>
	);
}
