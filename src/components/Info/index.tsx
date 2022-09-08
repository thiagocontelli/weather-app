import { useContext } from 'react';
import { ClimateContext } from '../../ClimateContext';
import { Container, Degree, Local } from './style';

export function Info() {
	const { cityName, temperature, description } = useContext(ClimateContext);


	return (
		<Container>
			<Local>{cityName?.toUpperCase()}</Local>
			<Degree>{Math?.floor(temperature)}°C</Degree>
      <p>{description}</p>
		</Container>
	);
}
