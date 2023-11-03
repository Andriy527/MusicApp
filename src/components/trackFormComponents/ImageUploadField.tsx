import {Dispatch, FC, SetStateAction, useRef} from 'react';
import {Button} from "antd";
import {UploadOutlined} from '@ant-design/icons';

interface Props {
    picture: File | null,
    setPicture: Dispatch<SetStateAction<File | null>>
}

const ImageUploadField: FC<Props> = ({picture, setPicture}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = () => {
        inputRef.current?.click();
    }

    const handleFileChange = () => {
        if (inputRef.current && inputRef.current.files && inputRef.current.files[0]) {
            setPicture(inputRef.current.files[0]);
        }
    }
    return (
        <>
            <input style={{display: 'none'}} ref={inputRef} onChange={handleFileChange} type="file" accept="image/*"
                   name="picture"/>
            <Button onClick={handleInputClick} icon={<UploadOutlined/>}>Click to Upload Track image</Button>
            {picture ? <h3>{picture.name}</h3> : ''}
        </>
    );
};

export default ImageUploadField;