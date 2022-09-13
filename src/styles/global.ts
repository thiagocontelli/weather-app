import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		user-select: none;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	body {
		font-family: 'Poppins', sans-serif;
    color: white;
    background: rgb(75,115,243);
    background: linear-gradient(90deg, rgba(75,115,243,1) 0%, rgba(75,115,243,1) 35%, rgba(0,159,191,1) 100%);
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;
