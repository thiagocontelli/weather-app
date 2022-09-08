import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

interface Climate {
	city_name: string;
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

export const ClimateContext = createContext<Climate[]>([]);

export function ClimateProvider({ children }: ClimateProviderProps) {
	const [climate, setClimate] = useState<Climate[]>([]);
	const BASE_URL = 'http://api.weatherbit.io/v2.0/current';
	const API_KEY = '1ec498f88764490dbd9730df1c5f1b95';

	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();

	if (window.navigator.geolocation) {
		window.navigator.geolocation.getCurrentPosition(success);
	}

	function success(position: Position) {
		setLat(position.coords.latitude);
		setLon(position.coords.longitude);
	}

	console.log(`LAT: ${lat}, LON: ${lon}`);

	useEffect(() => {
		async function getData() {
			await axios
				.get(`${BASE_URL}?lat=${lat}&lon=${lon}&key=${API_KEY}&lang=pt`)
				.then((response) => setClimate(response.data.data))
				.catch((error) => console.log('ERRO:', error));
		}

		getData();
	}, [lat]);

	return (
		<ClimateContext.Provider value={climate}>
			{children}
		</ClimateContext.Provider>
	);
}
