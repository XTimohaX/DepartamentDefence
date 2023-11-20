import React, {useEffect, useState} from 'react';
import {PostAccount} from "./model/types";
import Header from "./Components/Header";
import ModalWind from "./Components/Modal";
import PostAccountElement from "./Components/PostAccountElement";
import axios from "axios";
import Footer from "./Components/Footer";
// @ts-ignore
import oplot from "../Img/oplot.jpg";

const Home = () => {
    const [modalActive, setModalActive] = useState(true)
    const [posts, setPosts] = useState([] as PostAccount[])

    useEffect(() => {
        axios.get("http://localhost:3000/post")
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
    return (
        <div className="container">
            <Header/>
            <div className="content">

                <div className="test">

                </div>
                <div className="accountlist">
                    <div className="toptext">
                        <p className="newsText"> News ({posts.length})</p>
                        <ModalWind/>
                    </div>
                    {posts.map(post =>
                        <PostAccountElement postAccount={post}/>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;