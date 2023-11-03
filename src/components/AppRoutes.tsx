import {FC} from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from '../pages/Homepage.tsx'
import Tracks from "../pages/Tracks.tsx";
import AddTrack from "../pages/AddTrack.tsx";
import Track from "../pages/Track.tsx";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route element={<Homepage />} path="/"/>
            <Route element={<Tracks />} path="/tracks"/>
            <Route element={<Track />} path="/track/:id" />
            <Route element={<AddTrack />} path="/tracks/add"/>
        </Routes>
    );
};

export default AppRoutes;