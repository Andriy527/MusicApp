import {FC} from 'react';
import {Form, Input} from "antd";
import {useAppDispatch} from "../hooks";
import {searchTracks} from "../store/asyncActions/track.ts";
const Search: FC = () => {
    const dispatch = useAppDispatch();

    const handleSearchChange = (value: string) => {
        dispatch(searchTracks(value));
    }

    return (
        <div>
            <Form>
                <Form.Item>
                    <Input onChange={(e) => handleSearchChange(e.target.value)} placeholder="search track" />
                </Form.Item>
            </Form>
        </div>
    );
};

export default Search;