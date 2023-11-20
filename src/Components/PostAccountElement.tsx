import React, {FC, useState} from "react";
import {PostAccount} from "../model/types";
import ModalWindEdit from "./ModalEdit";
import {exists} from "fs";
import axios from "axios";


interface MyComponentProps {
    postAccount: PostAccount;
}

const PostAccountElement: FC<MyComponentProps> = ({postAccount}) => {
    const deletePost = () => {
        axios.delete(`http://localhost:3000/post/${postAccount.id}`)

            .then(() => {
                console.log('Deleted')
            })
            .catch(() => {
                console.log('Error delete')
            })
    }

    // @ts-ignore
    return (
        <div className="postAccount">


            <div className="meanTitle">{postAccount.title}</div>
            <div className="meanContent">{postAccount.content}</div>
            <div className="meanDate">
                {postAccount.myDate ? postAccount.myDate.toString().split('T')[0] : 'No date available'}
            </div>

            <div className="func">
                <ModalWindEdit oldPost={postAccount}/>
                <button className="delete" onClick={() => deletePost()}>
                    Delete
                </button>
            </div>
        </div>

    )
}
export default PostAccountElement;