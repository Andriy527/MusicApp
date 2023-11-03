import {FC, SetStateAction, Dispatch} from 'react';
import {Input, Form} from "antd";
import {Controller, useForm} from "react-hook-form";
import {IFormData} from "../../models";

interface Props {
    name: string,
    setName: Dispatch<SetStateAction<string>>;
    artist: string,
    setArtist: Dispatch<SetStateAction<string>>;
    text: string,
    setText: Dispatch<SetStateAction<string>>;

}

const TrackInfoFields: FC<Props> = ({name, setName, setText, text, setArtist, artist}) => {
    const {control} = useForm<IFormData>();

    return (
        <>
            <Form.Item label="Track name">
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({field}) => <Input {...field} value={name} onChange={(e) => setName(e.target.value)}
                                                placeholder="Track name"/>}
                />
            </Form.Item>
            <Form.Item label="Track author">
                <Controller
                    name="artist"
                    control={control}
                    defaultValue=""
                    render={({field}) => <Input {...field} value={artist} onChange={(e) => setArtist(e.target.value)}
                                                placeholder="Artist name"/>}
                />
            </Form.Item>
            <Form.Item label="Track text">
                <Controller
                    name="text"
                    control={control}
                    defaultValue=""
                    render={({field}) => <Input {...field} value={text} onChange={(e) => setText(e.target.value)}
                                                placeholder="Enter track text"/>}
                />
            </Form.Item>
        </>
    );
};

export default TrackInfoFields;