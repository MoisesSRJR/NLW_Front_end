import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #2A2634;
  margin-top: 32px;
  height: 112px;
  border-radius: 8px;
  border-top: 2px solid #9572FC;
  box-sizing: border-box;
  justify-content: space-between;
  width: 89%;
  margin-left: auto;
  margin-right: auto;

.titleContainer{
  display: flex;
  flex-direction: column;
  height: 64px;
  margin-top: 24px;

  #title{
    font-family: 'Fredoka One', cursive;
    font-size: 24px;
    font-weight: 900;
    color: #FFFFFF;
    padding-left: 32px;
  }

  #subTitle{
    font-size: 16px;
    font-weight: 100;
    color: #A1A1AA;
    padding-left: 32px;
  }
}

.buttonContainer{
  display: flex;
  align-items: center;
  height: 64px;
  margin-top: 24px;
  padding-right: 32px;

  #button{
    background-color: #8B5CF6;
    border-radius: 6px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 193px;
    height: 48px;
    font-size: 16px;
    color: #FFFFFF;
    cursor: pointer;

  :hover{
    background-color: #311058;
  }

    p{
      margin-left: 10px;
    }
  }
}
`;
