import {FC} from "react";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {ICommentData} from "../models";
import {Button, Card, Form, Input} from "antd";
import $axios from "../http";
import {useAppDispatch} from "../hooks";
import {addComment} from "../store/slices/tracksSlice.ts";

interface Props {
    trackId: string,
    trackIndex: number
}

const AddCommentForm: FC<Props> = ({trackId, trackIndex}) => {
    const {handleSubmit, control} = useForm<ICommentData>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<ICommentData> = async (data) => {
        const requestBody = {
            username: data.name,
            text: data.comment,
            trackId: trackId
        }

        const response = await $axios.post('tracks/comment', requestBody);

        const payload = {
            trackIndex: trackIndex,
            comment: response.data
        }

        dispatch(addComment(payload));
    }

    return (
        <Card title="Add comment">
            <Form onFinish={handleSubmit(onSubmit)}>
                <Form.Item label="Your name">
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({field}) => <Input {...field} placeholder="Your name"/>}
                    />
                </Form.Item>
                <Form.Item label="Your comment">
                    <Controller
                        name="comment"
                        control={control}
                        defaultValue=""
                        render={({field}) => <Input {...field} placeholder="Your comment"/>}
                    />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Done
                </Button>
            </Form>
        </Card>
    );
};

export default AddCommentForm;