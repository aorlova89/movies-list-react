import styled from 'styled-components';
import {Link} from "react-router-dom";


export const Header = styled.div`
      padding: 15px;
      font-weight: bold;
      font-size: 22px;
      background-color: #8b0000;
    `;

export const StyledLink = styled(Link)`
        text-decoration: none;
        color: black;
      background-color: #8b0000;
       `;

export const MovieInfo = styled.div`
      width: 500px;
      padding: 20px;
    `;

export const Container = styled.div`
      height: 100%;
      display: flex;
      flex-direction: row;
      //background-color: #191919;
    `;

export const Title = styled.div`
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    `;

export const Overview = styled.div`
      font-size: 16px;
      color: #ffffff;
    `;

export const Details = styled.div`
      margin: 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 14px;
      color: #696969;
    `;

export const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
    `;
