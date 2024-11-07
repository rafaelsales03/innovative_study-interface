import styled from 'styled-components';
import BannerAnimes from '../assets/bannerAnimes.jpg';

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #050a0f;

`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;

border-bottom: 3px solid rgba(255,255,255,0.70);
-webkit-box-shadow: 0px 8px 48px 0px rgba(255,255,255,0.92); 
box-shadow: 0px 8px 48px 0px rgba(255,255,255,0.92);
height: 600px;
background-image: url(${BannerAnimes});
filter: brightness(0.5);
background-size: cover;
background-position: center;


`;

export const Title = styled.h3`
  font-family: 'Road Rage', sans-serif;
  font-size: 150px;
  font-weight: 400;
  color: #fff;
`;

export const Content = styled.div`
  gap: 50px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 200px);
  padding: 100px;

  @media (max-width: 1024px) {
  grid-template-columns: repeat(3, 200px);
    
  }

  @media (max-width: 750px) {
  grid-template-columns: repeat(2, 200px);
    
  }
  @media (max-width: 500px) {
  grid-template-columns: repeat(1, 200px);
    
  }
`;

export const Element = styled.div`
  height: auto; 
  border: 2px solid #ddd;
  cursor: pointer;
  text-align: center;
  border-radius: 20px;
  transition: transform 0.3s ease;


  &:hover {
    transform: scale(1.1);
  }

  img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  }

  p{
    color: #fff;
    font-size: 27px;
    font-family: 'Road Rage', sans-serif;

  }

`;

export const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;

`;
