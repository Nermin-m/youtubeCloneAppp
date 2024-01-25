import HomeCard from "../components/homeCard.jsx";
import Filter from "../components/filter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import homeActions from "../redux/actions/homedata.jsx";

function Home() {
    const[letter,setLetter]=useState('new');
    const dispatch=useDispatch()
    const {getVideos}=useSelector(state=>state.getVideos);
    useEffect(()=>{
dispatch(homeActions(letter))
    },[dispatch,letter]);
    console.log("Get videos::",getVideos)
    return (
        <div className='m-3'>
            <Filter setLetter={setLetter}></Filter>
            <div className='flex flex-wrap m-2'>
                {
                    getVideos?.items?.map((video,i)=>(
                        <HomeCard key={i} video={video}></HomeCard>
                    ))
                }

            </div>
        </div>
    );
}

export default Home;
