import {FC, useEffect} from 'react';
import {Button, Col, Row} from "antd";
import {PlayCircleOutlined, PauseCircleOutlined, SoundFilled} from '@ant-design/icons';
import {Slider} from "antd";
import {useAppDispatch, useTypedSelector} from "../hooks";
import {BASE_URL} from "../http";
import {setCurrentTime, setDuration, setPause, setVolume} from "../store/slices/playerSlice.ts";
import styles from "../styles/player.module.css";

let currentAudio: HTMLAudioElement;

const Player: FC = () => {
    const {selectTrack, duration, currentTime, pause, volume} = useTypedSelector(state => state.player);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (selectTrack) {
            initTrack();
            setTrackPause();
        }
    }, [selectTrack])

    if (!selectTrack) {
        return null;
    }
    const initTrack = () => {
        currentAudio = new Audio();
        currentAudio.src = BASE_URL + selectTrack.audio;
        currentAudio.volume = Math.min(1, Math.max(0, volume / 100));
        currentAudio.onloadedmetadata = () => {
            dispatch(setDuration(Math.ceil(currentAudio.duration)));
        }
        currentAudio.ontimeupdate = () => {
            dispatch(setCurrentTime(Math.ceil(currentAudio.currentTime)))
        }
    }

    const setTrackPause = () => {
        if(pause) {
            dispatch(setPause(false));
            currentAudio.pause();
        } else {
            dispatch(setPause(true));
            currentAudio.play();
        }
    }

    const setTrackCurrentTime = (value: number) => {
         dispatch(setCurrentTime(value));
         currentAudio.currentTime = value;
    }

    const setTrackVolume = (value:number) => {
          dispatch(setVolume(value));
          currentAudio.volume = Math.min(1, Math.max(0, value / 100));
    }


    return (
        <div className={styles.player_wrapper}>
            <Row className={styles.player}>
                <Col span={4} className={styles.align_center}>
                    <Row className={styles.align_center}>
                    <Button type="primary" shape="circle" onClick={setTrackPause} icon={pause ? <PauseCircleOutlined /> : <PlayCircleOutlined /> } size="large" />
                    <div className={styles.info_wrapper}>
                        <h3>{selectTrack.text}</h3>
                        <h4><b>{selectTrack.artist}</b></h4>
                    </div>
                    </Row>
                </Col>
                <Col span={6}>
                    <Slider onChange={setTrackCurrentTime} value={currentTime} min={0} max={duration} />
                    <span>{currentTime} / {duration}</span>
                </Col>
                <Col span={6}>
                    <div className={styles.slider_wrapper}>
                        <SoundFilled />
                       <Slider className={styles.slider} onChange={setTrackVolume} value={volume} min={0} max={100} />
                    </div>
                    <span>{volume} / 100</span>
                </Col>
            </Row>
        </div>
    );
};

export default Player;