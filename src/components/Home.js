import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import homeBg from '../images/home-background.png';
import ImgSlider from './ImgSlider';
import Viewer from './Viewer';
import Recommendsa from './Recommends';
import NewDisney from './NewDisney';
import Origanals from './Origanals';
import Trending from './Trending';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movies/moviesSlice';
import { selectUserName } from '../features/user/userSlice';
import { collection, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const [recommend, setRecommend] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    //////////////////////////////////////////////////////////////////
    const moviesCollection = collection(db, 'movies');
    // Subscribe to the collection and log data when it changes
    onSnapshot(moviesCollection, (snapshot) => {
      let tempRecommend = [];
      let tempNewDisney = [];
      let tempOriginals = [];
      let tempTrending = [];
      snapshot.docs.map((doc) => {
        // console.log(recommend)
        switch (doc.data().type) {
          case 'recommend':
            tempRecommend = [...tempRecommend, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            tempNewDisney = [...tempNewDisney, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            tempOriginals = [...tempOriginals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            tempTrending = [...tempTrending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      setRecommend(tempRecommend);
      setNewDisney(tempNewDisney);
      setOriginals(tempOriginals);
      setTrending(tempTrending);
    });

    dispatch(setMovies({
      recommend: recommend,
      newDisney: newDisney,
      original: originals,
      trending: trending,
    }));
  }, [userName, recommend, newDisney, originals, trending])
  return (
    <>
      <Container>
        <ImgSlider />
        <Viewer />
        <Recommendsa />
        <NewDisney />
        <Origanals />
        <Trending />
      </Container>
    </>
  )
}

const Container = styled.main`
position:relative;
min-height:calc(100vh - 250px);
overflow-x:hidden;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);
&:after{
  background:url(${homeBg}) center center / cover no-repeat fixed;
  content:'';
  position:absolute;
  inset:0px;
  opacity:1;
  z-index:-1;
}
`

export default Home
