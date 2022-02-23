import React, { Component, createRef } from "react";
import axios from 'axios';
import { renderToString } from "react-dom/server";
import '../css/Master.css';
import { GENSHIN_NOTIF_LINK } from "../utils/Const";

export default class Master extends Component {

    constructor (props) {
        super(props);
        this.div = createRef();
    }

    state = {
        frame: null
    }

    frameLoaded = e => {
        console.log(document.querySelector('iframe').contentWindow.document);
    }

    componentDidMount () {
    }

    componentDidUpdate () {
    }

    render () {
        return (
            <div ref={this.div}>
                <h1>Header</h1>
                <iframe src={'https://www.hoyolab.com/official/2/notices'} onLoad={this.frameLoaded}></iframe>
            </div>
        )
    }
}
