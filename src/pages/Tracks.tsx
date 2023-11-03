import {FC} from "react";
import TracksList from "../components/TracksList.tsx";
import {Button} from "antd";
import {Link} from "react-router-dom";
import Search from "../components/Search.tsx";

const Tracks: FC = () => {
    return (
        <>
            <div>
                <Button type="primary"><Link to="/tracks/add">Add new track</Link></Button>
                <Search />
            </div>
            <TracksList/>
        </>
    )
}

export default Tracks;