import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { FaBars } from 'react-icons/fa';

import { 
    Navbar, 
    Container, 
    Logo, 
    MobileIcon, 
    Menu, 
    Item, 
    Link, 
    SignInContainer, 
    ButtonLink 
} from './header.styles.jsx';

const Header = ({ toggleSidebar }) => {
    const [ scrollNav, setScrollNav ] = useState(false);

    const changeNav = () => {
        setScrollNav(window.scrollY >= 80);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Navbar scrollNav={scrollNav}>
            <Container>
                <Logo to='/' onClick={toggleHome}>
                    dolla
                </Logo>
                <MobileIcon onClick={toggleSidebar}>
                    <FaBars/>
                </MobileIcon>
                <Menu>
                    <Item>
                        <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            About
                        </Link>
                    </Item>
                    <Item>
                        <Link to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Discover
                        </Link>
                    </Item>
                    <Item>
                        <Link to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Services
                        </Link>
                    </Item>
                    <Item>
                        <Link to='sign-up' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Sign Up
                        </Link>
                    </Item>
                </Menu>
                <SignInContainer>
                    <ButtonLink to='/sign-in'>Sign In</ButtonLink>
                </SignInContainer>
            </Container>
        </Navbar>
    )
}

export default Header;