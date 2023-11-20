import React, {FC, useState} from 'react';
import Modal from 'react-modal';
import {PostAccount} from "../model/types";
// @ts-ignore
import cross from "../Img/cross.png";
// @ts-ignore
import calendar from "../Img/calendar.png";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";


const ModalWind: FC = () => {
    const [post, setPost] = useState({} as PostAccount)

    const addPost = () => {
        axios.post('http://localhost:3000/post', {...post})
            .then(() => {
                console.log('Add was suc..')
                closeModal()
            })
            .catch(() => {
                console.log('Error add')
            })
        closeModal()
    }

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

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (
        <div className="modalWindow">
            <button className="openButt" onClick={openModal}>Create news</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className="blockModal">
                    <h2 className="createText">Create account</h2>
                    <img className="cross"
                         src={cross}
                         onClick={closeModal}></img>

                    <h3 className="inpName">Name</h3>
                    <input className="inp" type="text" onChange={(e) => setPost({...post, title: e.target.value})}/>
                    <h3 className="inpName">Content</h3>
                    <textarea className="inpContent"
                           onChange={(e) => setPost({...post, content: e.target.value})}/>


                    <div className="blockDate">
                        <div className="start">
                            <h3 className="inpName">Date</h3>
                            <div className="date">
                                <DatePicker selected={post.myDate}  onChange={(selectedDate) => setPost({ ...post, myDate: selectedDate })}
                                            showYearDropdown
                                />
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
                        <div className="save" onClick={() => {
                            addPost()
                        }}>
                            Save
                        </div>
                    </div>

                </div>
            </Modal>

        </div>
    );
};

export default ModalWind;