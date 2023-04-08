import React, { useReducer, useEffect } from "react";

import Header from "../../components/dummies/header";
import Slider from "../../components/menu-utils/slider";
import {
	menuOpen,
	menuClose,
	menuInitial,
	menuReset,
} from "../../components/menu-utils/animation";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-menu":
			return {
				isActive: !state.isActive,
				currentAnimation: !state.isActive ? menuOpen : menuClose,
				applyMask: state.isActive
			};
		case "load-menu":
			return {
				isActive: false,
				currentAnimation: menuInitial
			};
		case "toggle-mask":
			return { ...state, applyMask: !state.applyMask && !state.isActive };
		case "display-none":
			return {
				...state,
				isActive: false,
				applyMask: false,
				currentAnimation: menuReset,
			};
		default:
			return { isActive: false, currentAnimation: {} };
	}
}

const InitialState = {
	isActive: false,
	currentAnimation: menuInitial,
	routeLocation: "",
	applyMask: false
};

function Menu() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	const navigation = (e, isSameRoute) => {
		e.preventDefault();
		if (isSameRoute) {
			dispatch({ type: "toggle-menu" });
		} else {
			dispatch({ type: "display-none" });
		}
	}

	useEffect(() => {
		dispatch({ type: "load-menu" });
	}, []);

	return (
		<React.Fragment>
			<Header
				isActive={state.isActive}
				currentAnimation={state.currentAnimation}
				onClick={e => {
					e.preventDefault();
					dispatch({ type: "toggle-menu" });
				}}
				toggleMask={() => dispatch({ type: "toggle-mask" })}
				applyMask={state.applyMask}
			/>
			<Slider
				isActive={state.isActive}
				currentAnimation={state.currentAnimation}
				onClick={navigation}
				toggleMask={() => dispatch({ type: "toggle-mask" })}
				applyMask={state.applyMask}
			/>
		</React.Fragment>
	);
}

export default Menu;
