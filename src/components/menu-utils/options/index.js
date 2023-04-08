import React from "react";

import {
	Container,
	Item,
	OptionItem,
	ListContainer,
	OptionTitle,
} from "./style";
import AnimeWrapper from "../../anime-wrapper";

import { withRouter } from "react-router-dom";

import {
	getHarmonicDelay,
	getProgressiveDelay,
} from "../animation";

const MenuOptions = ({ isActive, currentAnimation, onClick, history }) => {
	const options = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/project" },
		{ name: "Contact", path: "/contact-me" }
	];

	const routeNavigation = (e, path) => {
		onClick(e, history.location.pathname === path);
		history.push(`${path}`);
	}

	const list = options.map((option, index) => {
		let delay =
			currentAnimation === {}
				? () => {}
				: isActive
				? getHarmonicDelay(index, options.length, 300, 900)
				: getProgressiveDelay(index, 200);

		return (
			<Item
				key={index}
				onClick={e => {
					routeNavigation(e, option.path);
				}}
			>
				<AnimeWrapper
					options={true}
					animeProps={{ ...currentAnimation.riseAnimation, delay: delay }}
				>
					<OptionItem>
						<OptionTitle>{option.name}</OptionTitle>
					</OptionItem>
				</AnimeWrapper>
			</Item>
		);
	});

	return (
		<Container>
			<ListContainer>{list}</ListContainer>
		</Container>
	);
};

export default withRouter(MenuOptions);
