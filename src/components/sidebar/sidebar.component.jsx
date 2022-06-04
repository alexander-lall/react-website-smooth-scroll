import { 
    Container, 
    Icon, 
    CloseIcon,
    MenuWrapper,
    Menu,
    Link,
    ButtonWrapper,
    ButtonLink 
} from './sidebar.styles';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <Container isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
            <Icon> onClick={toggleSidebar}
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <Menu>
                    <Link to='about' onClick={toggleSidebar}>
                        About
                    </Link>
                    <Link to='discover' onClick={toggleSidebar}>
                        Discober
                    </Link>
                    <Link to='services' onClick={toggleSidebar}>
                        Services
                    </Link>
                    <Link to='sign-up' onClick={toggleSidebar}>
                        Sign Up
                    </Link>
                </Menu>
                <ButtonWrapper>
                    <ButtonLink to='/sign-in'>Sign In</ButtonLink>
                </ButtonWrapper>
            </MenuWrapper>
        </Container>
    )
}

export default Sidebar;