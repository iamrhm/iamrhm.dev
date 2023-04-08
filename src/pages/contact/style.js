import styled, { css, keyframes } from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor,
} from "../../config/style";

const rise = keyframes`
  0%{
    transform:translateY(50px)
  }
  100%{
    transform:translateY(0px)
  }
`;

const visible = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:0.8;
  }
`;

const show_scale = keyframes`
  0%{
    opacity:0;
    transform:scale(.9);
  }
  100%{
    opacity:1;
    transform:scale(1);
  }
`;

const scaleUp = keyframes`
  0%{
    opacity:0;
    transform:scale(.9);
  }
  100%{
    opacity:1;
    transform:scale(1);
  }
`;

const BodyTextStyle = css`
	font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
	position: relative;
	font-family: 'Rubik', sans-serif;
	opacity: 0.9;
	color: ${firstTextColor};
	text-align: justify;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
	hyphens: auto;
	line-height: 24px;
`;

const HeadingTextStyle = css`
	font-size: calc(20px + (54 - 20) * ((100vw - 300px) / (1600 - 300)));
	font-weight: bold;
	font-family: 'Rubik', sans-serif;
	color: ${firstTextColor};
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: ${primaryBackgroundColor};
	padding: 0 6%;
	* {
	}
`;

export const WrapperContainer = styled.div`
	width: 100%;
	top: 72px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	overflow-x: hidden;
	overflow-y: auto;
`;

export const Heading = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	@media only screen and (min-device-width: 767px) {
		width: 70%;
		margin: 20px 0;
	}
	overflow: hidden;
`;

export const HeadingText = styled.p`
	transform: translateY(50px);
	color: ${firstTextColor};
	${HeadingTextStyle};
	animation: ${rise} 1.2s ease-in-out 0.2s forwards;
`;

export const BodyContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media only screen and (min-device-width: 767px) {
		margin: 15px 0;
	}
`;

export const StyledPara = styled.p`
	width: 100%;
	${BodyTextStyle};
	padding: 14px 0;
	text-align: center;
	@media only screen and (min-device-width: 767px) {
		width: 60%;
	}
	opacity: 0;
	animation: ${visible} 1.2s ease-in-out 1.2s forwards;
`;

export const Banner = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 40px 0 46px 0;
`;

export const StyledEmail = styled.div`
	${BodyTextStyle};
	text-align: center;
	opacity: 0;
	transform: translateY(10px);
	animation: ${scaleUp} 1.2s ease-in-out 1.2s forwards;
`;

export const EmailAddress = styled.a`
	padding: 10px 10px;
	font-family: 'Rubik', sans-serif;
	opacity: 1;
	font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
	animation: ${show_scale} 1.2s ease-in-out 1.2s forwards;
	color: #fff;
	text-decoration: none;
	font-weight: bold;
`;
