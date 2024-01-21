import React,{useEffect} from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import homeLogo from '../images/home-icon.svg' z
import homeLogo1 from '../images/search-icon.svg'
import homeLogo2 from '../images/watchlist-icon.svg'
import homeLogo3 from '../images/original-icon.svg'
import homeLogo4 from '../images/movie-icon.svg'
import homeLogo5 from '../images/series-icon.svg'
import { auth, provider } from '../firebase';
import { signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice';
import homeImg from '../images/home-icon.svg'

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const userEmail = useSelector(selectUserEmail)


  const handleAuth = async ()=>{
    if(!userName){
      await signInWithPopup(auth,provider).then((result)=>{
        setUser(result.user)
  
      }).catch((error)=>{alert(error)})
    }
    else if(userName){
      await signOut(auth).then(()=>{
        dispatch(setSignOutState())
        navigate('/')
      }).catch((error)=>{console.log(error.message)})
    }
  } 

  const setUser =(user)=>{
    dispatch(setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo:user.photoURL,
    }))
  } 

  useEffect(()=>{
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        // User is signed in.
        setUser(user);
        navigate('/home')
      }
    })
  },[userName])

                                                                                                  
  return (
    <>
      <Nav>
        <Logo><img src={logo} alt="" /></Logo>
        {!userName ? 
        <Login onClick={handleAuth}>Login</Login> :
         <>
         <NavMenu>
           <Link to='/home'>
            <img src={homeLogo} alt="" />
           <span>Home</span>
           </Link>
           <Link to='/home'>
            <img src={homeLogo1} alt="" />
           <span>Search</span>
           </Link>
           <Link to='/home'>
            <img src={homeLogo2} alt="" />
           <span>Watchlist</span>
           </Link>
           <Link to='/home'>
            <img src={homeLogo3} alt="" />
           <span>Originals</span>
           </Link>
           <Link to='/home'>
            <img src={homeLogo4} alt="" />
           <span>Movies</span>
           </Link>
           <Link to='/home'>
            <img src={homeLogo5} alt="" />
           <span>Series</span>
           </Link>
        </NavMenu>
        <SignOut>
            <UserImg src={userPhoto} alt={userName}/>
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
        </SignOut>
         </>
      }
      
        {/* <Login onClick={handleAuth}>Login</Login> */}
      </Nav>
    </>
  )
}

const Nav = styled.div`                       
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
z-index:3;
letter-spacing:16px;
`

const Logo = styled.div`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }
`
const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0;
padding:0;
position:relative;
margin-right:auto;
margin-left:25px;
a{
  display:flex;
  align-items:center;
  padding:0 12px;
  img{
    height:20px;
    min-width:20px;
    width:20px;
    z-index:auto;
  }
  span{
    color:rgba(249, 249, 249);
    font-size:13px;
    letter-spacing:1.42px;
    line-height:1.08;
    padding:2px 0px;
    white-space:nowrap;
    position:relative;
    &:before{
      background-color:rgb(249, 249, 249);
      border-radius:0px 0px 4px 4px;
      bottom:-6px;
      content:"";
      height:2px;
      opacity:0px;
      position:absolute;
      left:0px;
      right:0px;
      transform-origin:left center;
      transform:scaleX(0);
      transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility:hidden;
      width:auto;
    }
  }
  &:hover{
    span:before{
      transform:scaleX(1);
      visibility:visible; 
      opacity:1; 
    }
  }
}

@media (max-width:768px){
    display:none;
}
`

const Login = styled.a`
background-color:rgba(0, 0, 0, 0.6);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all 0.2s ease 0s;
cursor:pointer;
&:hover{
  background-color:#f9f9f9;
  color:#000;
}
`

const UserImg = styled.img`
height:100%;
`
const DropDown = styled.div`
position:absolute;
top:48px;
right:0px;
background:rgb(19,19,19);
border:1px solid rgba(151, 151, 151, 0.34);
border-radius:4px;
box-shadow:rgb(0,0,0 / 50%) 0px 0px 18px 0px;
padding:10px;
font-size:14px;
letter-spacing:3px;
width:100px;
opacity:0;
`
const SignOut = styled.div`
  position:relative;
  height:48px;
  width:48px;
  display:flex;
  cursor:pointer;
  justify-content:center;
  align-items:center;
  img{
    border-radius:50%;
  }

  &:hover{
    ${DropDown}{
      opacity:1;
      transition-duration:1s;
    }
  }
`

export default Header
