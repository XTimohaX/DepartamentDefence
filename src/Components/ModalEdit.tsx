import React, {FC, useState} from 'react';
import Modal from 'react-modal';
import {PostAccount} from "../model/types";
// @ts-ignore
import cross from "../Img/cross.png";
// @ts-ignore
import calendar from "../Img/calendar.png";
import PostAccountElement from "./PostAccountElement";
import axios from "axios";
import DatePicker from "react-datepicker";


interface IPostAccount{
    oldPost:PostAccount;

}

const ModalWindEdit: FC<IPostAccount> = ({oldPost}) => {
    const [post,setPost] = useState<PostAccount>(oldPost)

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {

            width: '550px',
            height: '400px',
            margin: '150px auto',
            borderRadius: '10px',
        },

    };
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    const updatePost = ()=>{
        axios.put(`http://localhost:3000/post/${post.id}`,{...post} )
            .then(() => {
                console.log('Edited')
                closeModal()
            })
            .catch(() => {
                console.log('Error edit')
            })
        closeModal()
    }
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);



    return (
        <div className="modalWindow">
            <button className="edit" onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className="blockModal">
                    <h2 className="createText">Edit news</h2>
                    <img className="cross"
                         src={cross}
                         onClick={closeModal}></img>

                    <h3 className="inpName">Title</h3>
                    <input className="inp" type="text" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/>
                    <h3 className="inpName">Content</h3>
                    <textarea className="inpContent"  value={post.content} onChange={(e) => setPost({...post, content: e.target.value})}/>




                    <div className="blockDate">
                        <div className="start">

                            <h3 className="inpName">Date</h3>
                            <div className="date">

                                {post.myDate && (
                                    <DatePicker selected={new Date(post.myDate)} onChange={(selectedDate)=>setPost({...post,myDate:selectedDate} )}
                                                showYearDropdown
                                    />
                                )}

                                <img className="cal"
                                     src={calendar}
                                     alt=""/>
                            </div>

                        </div>
                    </div>
                    <div className="csBlock">
                        <div className="cancel" onClick={closeModal}>
                            Cancel
                        </div>
                        <div className="save" onClick={() =>  {
                            updatePost()
                        }}>
                            Save
                        </div>
                    </div>

                </div>
            </Modal>

        </div>
    );
};

export default ModalWindEdit;