import Icon1 from '../../assets/images/svg-1.svg';
import Icon2 from '../../assets/images/svg-4.svg';
import Icon3 from '../../assets/images/svg-3.svg';

import {
    Container,
    H1,
    H2,
    Wrapper,
    Card,
    Icon,
    P
} from './services.styles';

const Services = () => {
    return (
        <Container id='services'>
            <H1>Our Services</H1>
            <Wrapper>
                <Card>
                    <Icon src={Icon1} />
                    <H2>Reduce expenses</H2>
                    <P>We help reduce your fees and increase your overall revenue.</P>
                </Card>
                <Card>
                    <Icon src={Icon2} />
                    <H2>Virtual Offices</H2>
                    <P>You can access our platform online anywhere in the world.</P>
                </Card>
                <Card>
                    <Icon src={Icon3} />
                    <H2>Premium Benefits</H2>
                    <P>Unlock our special membership card that returns 5% cash back.</P>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default Services;