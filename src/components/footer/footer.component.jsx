import { animateScroll as scroll } from 'react-scroll/modules';

import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin 
} from 'react-icons/fa';

import {
    Container,
    Wrapper,
    LinksContainer,
    LinksWrapper,
    LinkItems,
    LinkTitle,
    Link,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './footer.styles';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    
    return (
        <Container>
            <Wrapper>
                <LinksContainer>
                    <LinksWrapper>
                        <LinkItems>
                            <LinkTitle>About Us</LinkTitle>
                            <Link to='/'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>                        
                        </LinkItems>
                        <LinkItems>
                            <LinkTitle>Contact Us</LinkTitle>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>                   
                        </LinkItems>
                    </LinksWrapper>
                    <LinksWrapper>
                        <LinkItems>
                            <LinkTitle>Videos</LinkTitle>
                            <Link to='/'>Submit Videos</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>                        
                        </LinkItems>
                        <LinkItems>
                            <LinkTitle>Social Media</LinkTitle>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Linkedin</Link>                      
                        </LinkItems>
                    </LinksWrapper>
                </LinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>dolla © {new  Date().getFullYear() } All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </Wrapper>
        </Container>
    )
}

export default Footer;