// Generated by https://pagedraw.io/pages/6179
import DropdownWrapper from '../Dropdown';
import Dropdown from './dropdown';
import {FadeIn} from './../Animations';
import React from 'react';
import './app.css';

function render() {
    return <div className="app">
        <div className="app-0">
            <div className="app-app-3">
                <div className="app-0-0-0">
                    <div className="app-hello_world_-9">
                        Pagedraw Interactive Components
                    </div>
                </div>
                <div className="app-0-0-1">
                    <div className="app-welcome_to_your_firs-6">Dropdown</div>
                </div>
                <div className="app-0-0-2">
                    <div className="app-dropdown_instance-7">
                        <Dropdown /> 
                    </div>
                </div>
                <div className="app-0-0-3">
                    <div className="app-welcome_to_your_firs-4">Fade In</div>
                </div>
                <div className="app-0-0-4">
                    <FadeIn>
                        <img src="https://pagedraw-images.s3.amazonaws.com/7290130804773941-1513970259832-A23D58E2-3763-4959-BBA0-DB60D46B13CE.png" className="app-bitmap-7" /> 
                    </FadeIn>
                </div>
                <div className="app-0-0-5" /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}