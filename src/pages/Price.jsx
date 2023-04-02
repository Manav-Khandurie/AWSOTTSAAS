import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function Price() {
  return (
       <Container>
          <BackgroundImage />
          <div className="content">
          <div className="body flex column a-center j-center">
              <div className="text flex column">
                  <h1>Looking For Prices ?? &#x1F4B0; </h1>
                  <h4>Comming Very Soon &#x1F4B2; &#x1F4B2;</h4>
              </div>
           </div>
          </div>
    </Container>
  );
    
}
const Container=styled.div`
position: relative;
.content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
  .body{
    gap: 1rem;
    .text{
      gap: 1rem;
      text-align:  center;
      font-size : 2rem;
      h1{
        padding : 0 25rem;
      }
    }
    
      
  
    }
  }
`;