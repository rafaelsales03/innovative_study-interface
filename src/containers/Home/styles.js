import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #050a0f;

`;

export const Banner = styled.div`

  img{
    width: 100%;
    height: 300px;
  }

`;

export const Content = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 200px);
  gap: 50px;
  margin-top: 60px;
`;

export const Category = styled.div`
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
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  }

  p{
    color: #fff;
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 10px;
  }

`;
