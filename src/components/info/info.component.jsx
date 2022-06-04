import { Button } from '../button.styles';
import { 
    Container,
    Wrapper,
    Row,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    ButtonWrapper,
    ImgWrapper,
    Img
} from './info.styles';

const Info = ({ 
    lightBg, 
    id,
    imgStart, 
    topLine, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt, 
    lightTextDesc,
    primary,
    dark,
    dark2
}) => {
    return (
        <Container lightBg={lightBg} id={id}>
            <Wrapper>
                <Row imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lighText={lightTextDesc}>{headLine}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <ButtonWrapper>
                                <Button to='home' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                            </ButtonWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Column2>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Info;