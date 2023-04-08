import styled, { css } from "styled-components";
import { firstTextColor } from "../../../config/style";

const OptionTextStyle = css`
	font-size: calc(20px + (28 - 20) * ((100vw - 300px) / (1600 - 300)));
	color: ${firstTextColor};
	letter-spacing: 2px;
	font-weight: bold;
	text-transform: uppercase;
	font-family: 'Rubik', sans-serif;
`;

export const Container = styled.div`
	width: 100%;
	top: 50px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	min-height: 500px;
	position: relative;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		align-items: center;
	}
	* {
		overflow: hidden;
	}
`;

export const ListContainer = styled.ul`
	width: 100%;
	top: 84px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	z-index: 3; /* One level above of the menu dropdown page */
	* {
		list-style-type: none;
	}
`;

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	list-style: none;
	margin-bottom: 42px;
	:hover,
	:active {
		transform: scale(1.1);
		transition: transform 0.35s;
	}
	* {
		color: inherit;
		text-decoration: none;
	}
`;

export const OptionItem = styled.div`
	opacity: 0;
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const OptionTitle = styled.div`
	${OptionTextStyle}
`;
