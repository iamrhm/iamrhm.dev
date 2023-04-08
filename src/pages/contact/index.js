import React, { useContext } from "react";
import {
	Container,
	Heading,
	StyledPara,
	WrapperContainer,
	BodyContainer,
	Banner,
	StyledEmail,
	EmailAddress,
	HeadingText,
} from "./style";

import { PortfolioContext } from "../../context";
import FloatingScreen from "../../components/dummies/background-screen/floating";

function ContactPage() {
	const { contact } = useContext(PortfolioContext);
	return (
		<Container>
			<FloatingScreen />
			<WrapperContainer>
				<Heading>
					<HeadingText>{contact.header}</HeadingText>
				</Heading>
				<BodyContainer>
					<StyledPara>{contact.firstText}</StyledPara>
					<ContactBanner contact={contact} />
				</BodyContainer>
			</WrapperContainer>
		</Container>
	);
}

export default ContactPage;

export const ContactBanner = ({ contact }) => {
	return (
		<Banner>
			<StyledEmail>
				Drop me a mail on
				<br />
				<br />
				<EmailAddress
					href={`mailto:${contact.email}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{contact.email}
				</EmailAddress>
			</StyledEmail>
		</Banner>
	);
};
