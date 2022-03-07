import React from "react";
import styled from 'styled-components';

export const Button = (props) => {
    const {name, onClick, className, isActive} = props;

    const Btn = styled.button`
      background-color: ${props => (props.isActive ? `#8b0000` : `#808080`)};
      color: white;
      width: ${props => (props.className ? `30px` : `200px`)};
      margin-bottom: ${props =>(props.className ? `5px` : `0`)};
      margin-right: ${props =>(props.className ? `3px` : `0`)};
      font-size: 18px;
      border: none;
      padding: 5px 0;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
    `;

    return <Btn
        isActive = {isActive}
        className = {className}
        id = {name}
        onClick = {onClick}>
        {name}
    </Btn>
}

