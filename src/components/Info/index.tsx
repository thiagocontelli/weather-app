import { useClimate } from '../../hooks/useClimate';
import { Container, Degree, Description, Local } from './style';

export function Info() {
	const { city, countryCode, temperature, description } = useClimate();

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
