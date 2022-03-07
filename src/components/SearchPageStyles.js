import styled from "styled-components";
import {Link} from "react-router-dom";


export const StyledSearchPanel = styled.div`
  width: 80%;
  margin: auto;
`;

export const SearchButton = styled.button`
  background-color: #8b0000;
  border: none;
  color: white;
  width: 15%;
  padding: 5px 0;
  font-size: 18px;
  cursor: pointer
`;

export const SearchBar = styled.div`
  margin-top: 25px;
`;

export const SearchInput = styled.input`
  width: 80%;
  background-color: #000000;
  color: white;
  border-color: #000000;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export const StyledDiv = styled.div`
  margin-top: 25px;
`;

export const StyledSpan = styled.span`
  color: white;
  font-size: 18px;
  margin: 5px;
`;

export const SearchResultsDiv = styled.div`
  position:absolute;
  right:0;
  left: 0;
  top: 21%;
  bottom: 0;
  overflow: auto;

  width: 95%;
  height: 75%;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    background-color: #383C3C;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #8b0000;
    border-radius: 20px;
    border: 3px solid #8b0000;
  }
`;

export const MovieItem = styled(Link)`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const MovieYear = styled.span`
  font-size: 14px;
`;

export const Img = styled.img`
  height: 90%;
  width: 90%;
`;

