import {Dispatch, FC, SetStateAction, useRef} from 'react';
import {Button} from "antd";
import {UploadOutlined} from '@ant-design/icons';

interface Props {
    audio: File | null,
    setAudio: Dispatch<SetStateAction<File | null>>
}

const AudioUploadField: FC<Props> = ({audio, setAudio}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = () => {
        inputRef.current?.click();
    }

    const handleFileChange = () => {
        if (inputRef.current && inputRef.current.files && inputRef.current.files[0]) {
            setAudio(inputRef.current.files[0]);
        }
    }

    return (
        <>
            <input style={{display: 'none'}} ref={inputRef} onChange={handleFileChange} type="file" accept="audio/*"
                   name="audio"/>
            <Button onClick={handleInputClick} icon={<UploadOutlined/>}>Click to Upload Track audio</Button>
            {audio ? <h3>{audio.name}</h3> : ''}
        </>
    );
};

export default AudioUploadField;