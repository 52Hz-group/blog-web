import styled from 'styled-components'

const IndexStyled  = styled.div`
    height: 400px;
    margin: 0;
    display: grid;
    place-items: center;
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    background: #318CFE;
    font-family: 'Montserrat', sans-serif;

  .c {
    position: relative;
  }

  .text-c {
    display: grid;
    place-items: center;
    position: relative;
  }

  h1 {
    position: relative;
    font-size: 72px;
    color: white;
    line-height: 0;
  }

  .drop {
    position: absolute;
    height: 200px;
    width: 200px;
    background: #54ABFB;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    opacity: 0.8;
    border: 2px solid #3d93ff;
  }

  .drop::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #318CFE;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    box-shadow: -20px 30px 16px #1B6CFB, -40px 60px 32px #1b6cfb, inset -6px 6px 10px #1B6CFB, inset 2px 6px 10px #1a74e5, inset 20px -20px 22px white, inset 40px -40px 44px #a8ceff;
  }

  .drop::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    background: #E6FDFB;
    border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
    left: 130px;
    top: 40px;
    box-shadow: 16px 40px 0 -10px white;
    opacity: 0.8;
  }

  .drop1 {
    left: -100px;
    top: -50px;
  }

  .drop2 {
    right: -100px;
    bottom: -50px;
    border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
  }

  .drop2::before {
    border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
  }

  p {
    line-height: 0;
    color: white;
    font-size: 20px;
    font-family: "Montserrat"
  }
`

export default IndexStyled