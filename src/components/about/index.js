import React from 'react';

import {ImageContainer, Header, Image, Name, Description, Text, Footer, ContactList, ListItem, SideBar} from './styles/about';

function About({children, ...restProps}) {
    return  <SideBar {...restProps}>{children}</SideBar>
}

About.Header = function AboutHeader({children,...restProps}) {
   return <Header {...restProps}>{children}</Header>
}

About.ImageContainer = function AboutImageContainer({children,...restProps}) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>
}

About.Image = function AboutImage({...restProps}) {
    return <Image {...restProps} />
}

About.Name = function AboutName({children,...restProps}) {
    return <Name {...restProps}>{children}</Name>
}


About.Description = function AboutDescription({children,...restProps}) {
    return <Description {...restProps}>{children}</Description>
}

About.Text = function AboutText({children,...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

About.Footer = function AboutFooter({children,...restProps}) {
    return <Footer {...restProps}>{children}</Footer>
}

About.ContactList = function AboutContactList({children,...restProps}) {
    return <ContactList {...restProps}>{children}</ContactList>
}

About.ListItem = function AboutListItem({children,...restProps}) {
    return <ListItem {...restProps}>{children}</ListItem>
}

export default About