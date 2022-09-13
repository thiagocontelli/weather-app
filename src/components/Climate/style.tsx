import styled from 'styled-components';

export const Container = styled.div`
	width: 200px;
	height: 200px;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.25));
	}
`;
