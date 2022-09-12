import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface Climate {
	city_name: string;
	country_code: string;
	temp: number;
	weather: {
		code: number;
		description: string;
		icon: string;
	};
}

interface Position {
	coords: {
		latitude: number;
		longitude: number;
	};
}

interface ClimateProviderProps {
	children: ReactNode;
}

interface ClimateContextData {
	climate: Climate[];
	cityName: string;
	countryCode: string;
	temperature: number;
	description: string;
	icon: string;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchCity: () => void;
}

export const ClimateContext = createContext<ClimateContextData>(
	{} as ClimateContextData
);

export function ClimateProvider({ children }: ClimateProviderProps) {
	const [climate, setClimate] = useState<Climate[]>([]);
	const [cityName, setCityName] = useState('Orlando');
	const [defaultCity, setDefaultCity] = useState('');
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();

	const BASE_URL = 'http://api.weatherbit.io/v2.0/current';
	const API_KEY = '1ec498f88764490dbd9730df1c5f1b95';

	const temperature = climate[0]?.temp;
	const description = climate[0]?.weather.description;
	const icon = climate[0]?.weather.icon;
	const countryCode = climate[0]?.country_code;

	window.navigator.geolocation &&
		window.navigator.geolocation.getCurrentPosition(success);

	function success(position: Position) {
		setLat(position.coords.latitude);
		setLon(position.coords.longitude);
	}

	useEffect(() => {
		async function getData() {
			await axios
				.get(`${BASE_URL}?city=${cityName}&key=${API_KEY}&lang=pt`)
				.then((response) => setClimate(response.data.data))
				.catch((error) => console.log('ERRO:', error));
		}

		getData();
	}, [cityName]);

	function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		return setDefaultCity(e.target.value);
	}

	function handleSearchCity() {
		setCityName(defaultCity);
	}

	return (
		<ClimateContext.Provider
			value={{
				climate,
				onInputChange,
				handleSearchCity,
				cityName,
				countryCode,
				description,
				icon,
				temperature,
			}}
		>
			{children}
		</ClimateContext.Provider>
	);
}
