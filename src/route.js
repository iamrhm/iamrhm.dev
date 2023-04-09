import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Helmet} from "react-helmet";

import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";
import AboutPage from "./pages/about";
import ProjectPage from "./pages/project";
import ContactPage from "./pages/contact";

import { GlobalStyle, WrapperContainer, PageContainer } from "./style";
import ogImage from './assets/ogImage.png'

function App() {
	return (
		<React.Fragment>
			<WrapperContainer>
				<GlobalStyle />
				<Helmet>
          <title> iamrhm: Dev Portfolio | Frontend/Fullstack Engineer </title>
					<meta name="description" content="A design-driven developer bent on making Web a beautiful place since 2017 with fullstack experience of IT industry." />
					<meta property="og:url" content="https://iamrhm.dev" />
					<meta property="og:type" content="website" />
					<meta name="og:description" content="A design-driven developer bent on making Web a beautiful place since 2017 with fullstack experience of IT industry." />
					<meta property="og:image" content={ogImage} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:domain" content="https://iamrhm.dev" />
					<meta property="twitter:url" content="https://iamrhm.dev" />
					<meta name="twitter:title" content="iamrhm: Dev Portfolio | Frontend/Fullstack Engineer" />
					<meta name="twitter:description" content="A design-driven developer bent on making Web a beautiful place since 2017 with fullstack experience of IT industry." />
					<meta name="twitter:image" content={ogImage} />
        </Helmet>
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
