import {FC, useEffect} from "react";
import {Row, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {useAppDispatch, useTypedSelector} from "../hooks";
import {fetchTracks} from "../store/asyncActions/track.ts";
import TrackItem from "./TrackItem.tsx";
import styles from "../styles/form.module.css";

const TrackList: FC = () => {
    const dispatch = useAppDispatch();
    const {tracks, loading} = useTypedSelector(state => state.tracks);

    useEffect(() => {
        dispatch(fetchTracks());
    }, [])

    if (loading) {
        return <Spin indicator={<LoadingOutlined />} />
    }

    return (
        <Row gutter={[16, 16]} className={styles.buttons_wrapper}>
            {tracks.map((track, index) => {
               return <TrackItem key={track._id} track={track} index={index}/>
            })}
        </Row>
    );
};

export default TrackList;