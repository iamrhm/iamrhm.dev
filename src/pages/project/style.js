import styled, { css, keyframes } from "styled-components";
import {
	primaryBackgroundColor,
	firstTextColor,
	NOTForCopy
} from "../../config/style";

const BodyTextStyle = css`
	font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
	font-family: 'Rubik', sans-serif;
	color: ${firstTextColor};
`;

const show = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const placeholderShimmer = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 590px;
	min-width: 300px;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	* {
		${NOTForCopy}
		flex-shrink: 0;
	}
`;

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: left;
`;

export const Header = styled.div`
	position: relative;
	top: 0;
	left: 0%;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: ${primaryBackgroundColor};
`;

export const Slider = styled.div`
	max-width: 1124px;
	margin: 0 auto;
	width: 100%;
	padding: 0 6%;
	padding-top: 32px;
	display: flex;
	position: relative;
	flex-wrap: wrap;
	opacity: 0;
	animation: ${show} 1.2s ease-in-out 2.5s forwards;
	justify-content: center;
	@media only screen and (max-device-width: 767px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Item = styled.a`
	width: calc(30% - 15px);
	margin-bottom: 15px;
	background: #252525;
	position: relative;
	border-radius: 6px;
	margin-right: 15px;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	padding: 12px 16px;
	text-decoration: none;
	@media only screen and (max-device-width: 767px) {
		width: calc(80%);
	}
	@media only screen and (min-device-width: 767px) {
		&:nth-child(3n + 3) {
			margin-right: 0px;
		}
	}
`;

export const ItemText = styled.div`
	${BodyTextStyle};
	padding: 8px 0;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	${BodyTextStyle};
	font-weight: bold;
	padding: 4px;
	overflow: hidden;
`;

export const SubTitle = styled.p`
	${BodyTextStyle};
	padding: 4px 4px;
	font-style: italic;
	opacity: 0.8;

	font-size: 12px;
	font-weight: 300;

	display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Avatar = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
`;

export const Footer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;


export const DummyItem = styled.div`
	width: calc(30% - 15px);
	height: 224px;
	margin-bottom: 15px;
	background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 224px;
  display: inline-block;
  position: relative;
	border-radius: 6px;
	margin-right: 15px;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;



	&:nth-child(3n + 3) {
		margin-right: 0px;
  }

	@media only screen and (max-device-width: 767px) {
		width: calc(80%);
	}
`;
