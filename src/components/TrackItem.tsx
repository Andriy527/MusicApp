import {FC} from "react";
import {ITrack} from "../models";
import {Avatar, Card, Col} from "antd";
import {EditOutlined, PlayCircleOutlined} from "@ant-design/icons";
import {BASE_URL} from "../http";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../hooks";
import {selectTrack} from "../store/slices/playerSlice.ts";

interface Props {
    track: ITrack,
    index: number
}

const {Meta} = Card;
const TrackItem: FC<Props> = ({track, index}) => {
    const dispatch = useAppDispatch();

    const handlePlayClick = () => {
        dispatch(selectTrack(track))
    }

    return (
        <Col span={6} key={track._id}> <Card
            actions={[
                <PlayCircleOutlined onClick={handlePlayClick}/>,
                <Link to={`/track/${index}`}><EditOutlined key="edit"/> </Link>
            ]}
        >
            <Meta
                avatar={<Avatar src={BASE_URL + track.picture}/>}
                title={track.artist}
                description={track.text}
            />
        </Card></Col>
    );
};

export default TrackItem;