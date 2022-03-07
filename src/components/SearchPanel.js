import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Button} from "./Button";
import {getMovies} from "../store/movies/thunk";
import {setParam} from "../store/params/actions";
import {StyledSearchPanel, SearchButton, SearchBar, SearchInput, StyledDiv, StyledSpan} from './SearchPageStyles';


export const SearchPanel = () => {
    const params = useSelector(state => state.params);

    const {query, searchBy, limit} = params;

    const dispatch = useDispatch();

    useEffect(() => dispatch(getMovies()), [searchBy, limit]);

    function setQuery(e) {
        dispatch(setParam("query", e.target.value));
    }

    function setSearchBy(e) {
        dispatch(setParam("searchBy", e.target.id));
    }

    function onSearchClick()  {
        dispatch(getMovies());
    }

    function getButtons() {
        const className = "results-btn";
        const limits = ["10", "20", "30"];

        return limits.map(button => (
            <Button
                name={button}
                onClick = {() => dispatch(setParam("limit", button))}
                className = {className}
                isActive = {button === limit}
            />
        ));
    }

    return (
        <StyledSearchPanel>
            <SearchBar>
                <SearchInput
                    type="text"
                    onChange = {setQuery}
                    className="search-bar-input"
                    placeholder={"Enter movie name"}>
                </SearchInput>
                <SearchButton
                    onClick = {onSearchClick}
                    name="SEARCH"
                    isActive>
                    SEARCH
                </SearchButton>
            </SearchBar>
            <StyledDiv>
                <StyledSpan>Search By:</StyledSpan>
                <Button
                    name="TITLE"
                    onClick = {setSearchBy}
                    isActive = {searchBy === "TITLE"}
                />
                <Button
                    name="GENRES"
                    onClick = {setSearchBy}
                    isActive = {searchBy === "GENRES"}
                />
            </StyledDiv>
            <StyledDiv>
                <StyledSpan>Show Results:</StyledSpan>
                {getButtons()}
            </StyledDiv>
        </StyledSearchPanel>
    );
}
