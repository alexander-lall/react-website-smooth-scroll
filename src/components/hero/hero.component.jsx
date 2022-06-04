import { useState } from 'react';

import VideoSource from '../../assets/videos/background.mp4';

import {
    Container,
    Background,
    Video,
    Content,
    H1,
    P,
    ButtonWrapper,
    ArrowForward,
    ArrowRight
} from './hero.styles';
import { Button } from '../button.styles';

const Hero = () => {
    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <Container id='home'>
            <Background>
                <Video autoPlay loop muted src={VideoSource} type='video/mp4' />
            </Background>
            <Content>
                <H1>Virtual Banking Made Easy</H1>
                <P>Sign up for a new account today and receive and $250 in credit towards your next payment.</P>
                <ButtonWrapper>
                    <Button to='sign-up' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}

export default Hero;