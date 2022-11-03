import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 0px;
`;

export const Cards = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 8px;
  position: relative;

  img {
    width: 100%;
    border-radius: 8px;
  }

  .infos{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%); 
    border-radius: 8px;

    #title{
      color: #ffffff;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      font-family: 'Fredoka One', cursive;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    #subTitle{
      color: #D4D4D8;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .containerTitle{
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    padding-left: 16px;
  }
`;