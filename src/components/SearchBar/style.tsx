import styled from 'styled-components';

interface IContainer {
	isOnFocus: boolean;
}

export const Container = styled.div<IContainer>`
	width: 250px;
	height: 50px;

	background: white;

	border-radius: 3rem;

	display: flex;
	align-items: center;
	justify-content: space-around;

	transition: all ease 0.5s;

	box-shadow: ${({ isOnFocus }) =>
		isOnFocus && '4px 4px 5px rgba(0, 0, 0, 0.25)'};

	:hover {
		box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
	}
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

	:hover {
		filter: brightness(0.8);
	}
`;
