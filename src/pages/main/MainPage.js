import styled from 'styled-components';

import {SearchPanel} from "../../components/SearchPanel";
import {SearchResults} from "../../components/SearchResults";


export const MainPage = () => {
    const Header = styled.div`
      padding: 10px;
      font-weight: bold;
      font-size: 22px;
      background-color: #8b0000;
    `;


    return (
        <>
            <Header>Movies Catalog</Header>
            <SearchPanel/>
            <SearchResults/>
        </>
    );
}
