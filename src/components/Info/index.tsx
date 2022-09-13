import { useContext } from 'react';
import { ClimateContext } from '../../ClimateContext';
import { Container, Degree, Description, Local } from './style';

export function Info() {
	const { city, countryCode, temperature, description } =
		useContext(ClimateContext);

	return (
		<Container>
			<Local>
				{city?.toUpperCase()} - {countryCode}
			</Local>
			<Degree>{Math?.floor(temperature)}°C</Degree>
			<Description>{description}</Description>
		</Container>
	);
}
