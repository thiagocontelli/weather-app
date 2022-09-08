import styled from 'styled-components';

export const Container = styled.div`
	width: 250px;
	height: 50px;

	background: #ffffff;

	border-radius: 3rem;
	border: 2px solid gray;

	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const SearchInput = styled.div`
	width: 190px;
	height: 35px;

	background: transparent;

	border-radius: 3rem;

	input {
		width: 100%;
		height: 100%;

		padding: 1rem;

		border: none;
		outline: none;

		background: transparent;

		&::placeholder {
			color: #797979;
		}
	}
`;

export const SearchButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 35px;
	height: 35px;

	border: none;
	border-radius: 100%;
	background: transparent;

	svg {
		color: gray;
		font-size: 1.5rem;
	}
`;
