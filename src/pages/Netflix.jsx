import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Backgroundimage from "../assets/home.jpg";
//import Home from '../assets/home.jpg'
import MovieLogo from "../assets/homeTitle.webp"
import { FaPlay } from 'react-icons/fa';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Slider from '../components/Slider';
export default function Netflix() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate =useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset===0 ? false:true);
    return ()=> (window.onscroll=null);
  };

    return (
      <Container>
      <div>
        <NavBar isScrolled={isScrolled} />
        <div className='hero'>
          <img src={Backgroundimage} alt="background" className='background-image'/>
          <div className='container'>
            <div className='logo'>
              <img src={MovieLogo} alt="Movie Logo" />
            </div>
          
          <div className='buttons flex'>
            <button className='flex j-center a-center' onClick={()=>navigate("/Player")}><FaPlay/>Play  </button>
            <a href='https://www.pexels.com/video/watching-rain-on-the-road-in-worm-s-eye-view-3343679/'  >        
            <button className='flex j-center a-center' ><AiOutlineInfoCircle />MoreInfo  </button> </a> 
          </div>
        </div>
      </div>
      </div>
      <Slider movies={movies}/>
      </Container>
      );
  }


  const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;