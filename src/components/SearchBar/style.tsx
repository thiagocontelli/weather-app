import styled from 'styled-components'

export const Container = styled.div`
	width: 250px;
	height: 50px;

	background: #bfbfbf;

	border-top: 2px solid white;
	border-left: 2px solid white;
	border-right: 2px solid black;
	border-bottom: 2px solid black;

	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const SearchInput = styled.div`
	width: 190px;
	height: 35px;

	background: #d9d9d9;

	border-top: 2px solid black;
	border-left: 2px solid black;
	border-right: 2px solid white;
	border-bottom: 2px solid white;

	input {
		width: 100%;
		height: 100%;

		padding: 1rem;

		border: none;
		outline: none;

		background: transparent;

		&::placeholder {
			color: black;
		}
	}
`

export const SearchButton = styled.button`
	width: 35px;
	height: 35px;

	border: none;
	background: #070caf;

	border-top: 2px solid white;
	border-left: 2px solid white;
	border-right: 2px solid black;
	border-bottom: 2px solid black;

  img {
    width: 90%;
  }
`
