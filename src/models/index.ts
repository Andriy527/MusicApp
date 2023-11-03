export interface ITrackState {
    tracks: ITrack[],
    loading: boolean,
    error: null | string
}

export interface IPlayerState {
    selectTrack: ITrack | null,
    volume: number,
    duration: number,
    currentTime: number,
    pause: boolean
}

export interface ITrack {
    comments: IComment[],
    _id: string,
    artist: string,
    listens: number,
    audio: string,
    picture: string,
    text: string
}

export interface IComment {
    _id: string;
    username: string;
    text: string
}

export interface IFormData {
    name: string,
    text: string,
    artist: string,
    picture: string,
    audio: string
}

export interface ICommentData {
    name: string,
    comment: string
}