import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { animateSVG } from "./animation";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export default function WrapperDIV({ svgLayer, getMaskLayer }) {
	let divRef = useRef(null);

	useEffect(() => {
		if (divRef.current) {
			animateSVG(divRef.current, svgLayer, getMaskLayer);
		}
	}, [svgLayer, getMaskLayer]);

	return <Wrapper ref={divRef}></Wrapper>;
}
