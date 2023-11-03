import {FC, useState} from "react";
import {Steps, Button, Form} from "antd";
import {useForm, SubmitHandler} from "react-hook-form";
import TrackInfoFields from "../components/trackFormComponents/TrackInfoFields.tsx";
import ImageUploadField from "../components/trackFormComponents/ImageUploadField.tsx";
import {IFormData} from "../models";
import AudioUploadField from "../components/trackFormComponents/AudioUploadField.tsx";
import $axios from "../http";
import styles from "../styles/form.module.css";

const AddTrack:FC = () => {
     const [name, setName] = useState('');
     const [artist, setArtist] = useState('');
     const [text, setText] = useState('');
     const [picture, setPicture] = useState<File | null>(null);
     const [audio, setAudio] = useState<File | null>(null)

    const steps = [
        {
            title: 'Set track into',
            content: <TrackInfoFields name={name} setName={setName} artist={artist} setArtist={setArtist} text={text} setText={setText} />,
        },
        {
            title: 'Upload track image',
            content: <ImageUploadField picture={picture} setPicture={setPicture} />,
        },
        {
            title: 'Upload track audio',
            content: <AudioUploadField audio={audio} setAudio={setAudio} />,
        },
    ];
    const {handleSubmit} = useForm<IFormData>();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const onSubmit: SubmitHandler<IFormData> = async () => {
        try {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('artist', artist);
        formData.append('text', text);

        if (picture) {
            formData.append('picture', picture);
        }

        if (audio) {
            formData.append('audio', audio);
        }

        await $axios.post('tracks', formData);
        } catch (e) {
            return (e as Error).message;
        }

    }

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <>
            <Steps current={current} items={items} />
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                <div className={styles.form_content_wrapper}>{steps[current].content}</div>

                {current === steps.length - 1 && (
                    <Button className={styles.buttons_wrapper} type="primary" htmlType="submit">
                        Upload track
                    </Button>
                )}
            </Form>
            <div className={styles.buttons_wrapper}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
}

export default AddTrack;