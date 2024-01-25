import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import detailActions from "../redux/actions/detailActions.jsx";
import DetailCard from "../components/detailCard.jsx";

function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { getVideo } = useSelector((state) => state.getVideo);

    useEffect(() => {
        dispatch(detailActions(id));
    }, [dispatch, id]);

    return (
        <div>
            {getVideo?.items?.map((video, i) => (
                <DetailCard key={i} video={video}></DetailCard>
            ))}
        </div>
    );
}

export default Details;
