import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";
import AboutPage from "./pages/about";
import ProjectPage from "./pages/project";
import ContactPage from "./pages/contact";

import { GlobalStyle, WrapperContainer, PageContainer } from "./style";

function App() {
	return (
		<React.Fragment>
			<WrapperContainer>
				<GlobalStyle />
				<Router>
						<MenuPage />
						<PageContainer>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/about" component={AboutPage} />
							<Route exact path="/contact-me" component={ContactPage} />
							<Route exact path="/project" component={ProjectPage} />
						</PageContainer>
				</Router>
			</WrapperContainer>
		</React.Fragment>
	);
}

export default App;
