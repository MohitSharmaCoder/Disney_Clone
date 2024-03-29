import React from 'react'
import styled from 'styled-components'
import loginBgImage from '../images/login-background.jpg'
import ctaLogo from '../images/cta-logo-one.svg'
import ctaLogoT from '../images/cta-logo-two.png'

const Login = (props) => {
  return (
    <>
      <Container>
        <Content>
            <CTA>
                <CTALogoOne src={ctaLogo} />
                <SignUp to='/'>GET IT ALL THERE</SignUp>
                <Description>Go get premium access Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi, molestiae nisi ducimus mollitia voluptate animi. Nihil autem dolore numquam incidunt, quod esse illo aliquam alias, molestiae, at pariatur soluta!</Description>
                <CTALogoTwo src={ctaLogoT} />
            </CTA>
            <BgImage/>
        </Content>
      </Container>
    </>
  )
}

const Container = styled.div`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`
const BgImage = styled.div`
background-image: url(${loginBgImage});
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
// width:100%;
position:absolute;
top:0;
left:0;
right:0;
z-index:-1;
`

const CTA = styled.div`
max-width:650px; 
width:100%;
display:flex;
flex-direction:column;
// margin-bottom:2vw;
// flex-wrap:wrap;
// justify-content:center;
// margin-top:0;
// align-items:center;
// text-align:center;
// margin-right:auto;
// margin-left:auto;
// transition-timing-function: ease-out;
// transition:opacity 0.2s;
`
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`
const SignUp = styled.div`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;
&:hover{
    background-color:#0483ee;
}
`

const Description = styled.p`
color:hsla(0, 0%, 95.3%, 1);
font-size:11px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
`
const CTALogoTwo = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:inline-block;
width:100%;
`

export default Login
