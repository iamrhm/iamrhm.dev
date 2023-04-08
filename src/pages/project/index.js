import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Wrapper,
	Container,
	Header,
	Slider,
	Item,
	ItemText,
	Title,
	SubTitle,
	Avatar,
	Footer,
	DummyItem,
} from "./style";

import FloatingScreen from "../../components/dummies/background-screen/floating";
import RepeatingScreen from "../../components/dummies/background-screen/repeating";
import { maskProjectSVG } from "./animation";
import AnimeWrapper from "../../components/anime-wrapper";
import {
	ProjectLandingAnimation,
	blinkAnimation,
	HeaderAnimations
} from "./animation";

import ProjectSVG from "../../assets/svg/project/project.svg";

const ProjectCarousel = () => {
	const [isFetched, setIsFetched] = React.useState(false);
	const [repoList, setState] = useState([]);

	const fetchRepos = async() => {
		setIsFetched(false);
		try {
			let reposeList = await axios.get(
				"https://api.github.com/users/iamrhm/repos"
			);
			reposeList = (reposeList.data|| []).filter(r => !r.fork).map(repo => {
				let repoObj = {
					name: repo.name,
					url: repo.html_url,
					owner: repo.owner.login,
					profileImage: repo.owner.avatar_url,
					description: repo.description
				};
				return repoObj;
			});
			setState(reposeList.length ? [...reposeList] : []);
		} catch(err) {
			console.log(err);
		} finally {
			setIsFetched(true);
		}
	}

	const renderDummyTile = () => {
		return (
			<>
				{[1,2,3,4,5,6].map(d => <DummyItem key={d} />)}
			</>
		)
	}

	useEffect(() => {
		fetchRepos();
	}, []);

	return (
		<Slider>
			{
				!isFetched && !repoList.length ? renderDummyTile() : (
					<>
						{repoList.length ? <>{repoList.map((repo, index) => {
							return <RepoTiles repo={repo} key={index} />;
						})}</>: <> Something went wrong </>}
					</>
				)
			}
		</Slider>
	);
};

const RepoTiles = ({ repo }) => {
	return (
		<Item
			href={repo.url}
			target="_blank"
			rel="noopener noreferrer"
		>
			<ItemText>
				<Title>Name:</Title>
				<SubTitle>{repo.name}</SubTitle>
			</ItemText>
			<ItemText>
				<Title>Description:</Title>
				<SubTitle>{repo.description}</SubTitle>
			</ItemText>
			<Footer>
				<ItemText>
					<Title>Owner:</Title> <SubTitle>{repo.owner}</SubTitle>
				</ItemText>
				<Avatar>
					<img src={repo.profileImage} alt="profile avatar" />
				</Avatar>
			</Footer>
		</Item>
	);
};

function ProjectPage() {
	return (
		<Wrapper>
			<AnimeWrapper animeProps={HeaderAnimations}>
				<Header>
					<FloatingScreen withShadow={true}>
						<RepeatingScreen
							svgLayer={ProjectSVG}
							getMaskLayer={maskProjectSVG}
						/>
					</FloatingScreen>
				</Header>
			</AnimeWrapper>
			<AnimeWrapper animeProps={ProjectLandingAnimation}>
				<Container>
					<FloatingScreen withShadow={false} type={"secondary"} />
					<AnimeWrapper animeProps={blinkAnimation}>
						<ProjectCarousel />
					</AnimeWrapper>
				</Container>
			</AnimeWrapper>
		</Wrapper>
	);
}

export default ProjectPage;
