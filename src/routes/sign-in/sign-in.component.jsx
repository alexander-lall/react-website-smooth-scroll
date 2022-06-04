import {
    Container,
    Wrapper,
    FormContent,
    Form,
    H1,
    Label,
    Input,
    Button
} from './sign-in.styles';

const SignIn = () => {
    return (
        <Container>
            <Wrapper>
                <FormContent>
                    <Form action='#'>
                        <H1>Sign in to your account</H1>
                        <Label htmlFor='for'>Email</Label>
                        <Input type='email' required/>
                        <Label htmlFor='for'>Password</Label>
                        <Input type='password' required/>
                        <Button type='submit'>Continue</Button>
                        <Label>Forgot password?</Label>
                    </Form>
                </FormContent>
            </Wrapper>
        </Container>
    )
}

export default SignIn;