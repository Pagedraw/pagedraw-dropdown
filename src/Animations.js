import React, { Component } from 'react';
import { InjectClassList } from './util';
import './Animations.css'

export const FadeIn = (props) =>
    <InjectClassList classList={["fade-in"]}>{props.children}</InjectClassList>;
