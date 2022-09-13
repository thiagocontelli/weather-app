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
	city: string;
	countryCode: string;
	temperature: number;
	description: string;
	icon: string;
	isLoading: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchCity: () => void;
	handlePressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const ClimateContext = createContext<ClimateContextData>(
	{} as ClimateContextData
);

export function ClimateProvider({ children }: ClimateProviderProps) {
	const [climate, setClimate] = useState<Climate[]>([]);
	const [cityName, setCityName] = useState('');
	const [defaultCity, setDefaultCity] = useState('');
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();

	const [isLoading, setIsLoading] = useState(true);

	const url = 'http://api.weatherbit.io/v2.0/current?';
	const key = import.meta.env.VITE_APP_API_KEY;

	const city = climate[0]?.city_name;
	const temperature = climate[0]?.temp;
	const description = climate[0]?.weather.description;
	const icon = climate[0]?.weather.icon;
	const countryCode = climate[0]?.country_code;

	useEffect(() => {
		if (navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition((position) => {
				setLat(position.coords.latitude);
				setLon(position.coords.longitude);
			});
		} else {
			alert('Sorry, no position available.');
		}
	}, []);

	useEffect(() => {
		async function getData() {
			await axios
				.get(`${url}lat=${lat}&lon=${lon}&key=${key}&lang=pt`)
				.then((response) => {
					setClimate(response.data.data);
					setIsLoading(false);
				})
				.catch((error) => console.log('ERRO:', error));
		}

		getData();
	}, [lat, lon]);

	useEffect(() => {
		async function getData() {
			await axios
				.get(`${url}city=${cityName}&key=${key}&lang=pt`)
				.then((response) => setClimate(response.data.data))
				.catch((error) => console.log('ERRO:', error));
		}

		getData();
	}, [cityName]);

	function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setDefaultCity(e.target.value);
	}

	function handleSearchCity() {
		setCityName(defaultCity);
	}

	function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>) {
		e.key === 'Enter' && setCityName(defaultCity);
	}

	return (
		<ClimateContext.Provider
			value={{
				climate,
				onInputChange,
				handleSearchCity,
				handlePressEnter,
				cityName,
				city,
				countryCode,
				description,
				icon,
				temperature,
				isLoading,
			}}
		>
			{children}
		</ClimateContext.Provider>
	);
}
