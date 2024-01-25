import SearchCard from "../components/searchCard.jsx";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import searchActions from "../redux/actions/searchActions.jsx";

function Search() {
    const dispatch=useDispatch()
    const{keyword}=useParams()
    const {getSearch} = useSelector(state => state.getSearch);
    console.log('search', getSearch);
    useEffect(() => {
        dispatch(searchActions(keyword));
    }, [dispatch, keyword]);

    return (
        <div>
            {
                getSearch?.items?.map((search,i)=>(
                    <SearchCard key={i} search={search}></SearchCard>
                ))
            }

        </div>
    );
}

export default Search;
