import { useContext } from 'react';
import { ClimateContext } from '../../ClimateContext';
import { Container, Degree, Local } from './style';

export function Info() {
	const climate = useContext(ClimateContext);

	const cityName = climate[0]?.city_name;
	const temp = climate[0]?.temp;

	return (
		<Container>
			<Local>{cityName?.toUpperCase()}</Local>
			<Degree>{Math?.floor(temp)}°C</Degree>
      <p>{climate[0]?.weather.description}</p>
		</Container>
	);
}
