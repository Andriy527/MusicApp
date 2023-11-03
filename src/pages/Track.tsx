import {FC} from "react";
import {useParams} from "react-router";
import {useTypedSelector} from "../hooks";
import {ITrack} from "../models";
import {Row, Col, Card} from "antd";
import {BASE_URL} from "../http";
import AddCommentForm from "../components/AddCommentForm.tsx";
import styles from "../styles/track.module.css"

const Track: FC = () => {
    const {id} = useParams();
    const {tracks} = useTypedSelector(state => state.tracks);
    const currentTrack: ITrack = tracks[id];

    return (
        <div className={styles.tracks_wrapper}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={10}>
                    <Card>
                        <img
                            src={BASE_URL + currentTrack.picture}
                            alt="Track Image"
                            className={styles.track_image}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={14}>
                    <Card title="Track Information">
                        <h2>Artist: {currentTrack.artist}</h2>
                        <h3>Track text: {currentTrack.text}</h3>
                        <h3>Track listen count: {currentTrack.listens}</h3>
                    </Card>
                </Col>
                <Col xs={24}>
                    <AddCommentForm trackId={currentTrack._id} trackIndex={id}/>
                </Col>
                <Col xs={24}>
                    <Card title="Comments">
                        {currentTrack.comments.map(comment => {
                            return <h3 key={comment._id}><b>{comment.username}:</b> {comment.text}</h3>
                        })}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Track;