import React from 'react';
import Tech from './Tech.js';
// skills logos
import Html from './html.svg';
import Css from './css.svg';
import Js from './js.svg';
import Nodejs from './node.svg';
import Npm from './npm.svg';
import Reactjs from './react.svg';
import Php from './php.svg';
import Bash from './gnubash.svg';
import Git from './git.svg';
import Inkscape from './inkscape.svg';

export default function Techs(props) {
    return (
        <div className='techs'>
            <Tech img={Html} altText='HTML'/>
            <Tech img={Css} altText='CSS'/>
            <Tech img={Js} altText='JAVASCRIPT'/>
            <Tech img={Nodejs} altText='NODE JS'/>
            <Tech img={Npm} altText='NPM'/>
            <Tech img={Reactjs} altText='REACT JS'/>
            <Tech img={Php} altText='PHP'/>
            <Tech img={Bash} altText='GNU/BASH'/>
            <Tech img={Git} altText='GIT'/>
            <Tech img={Inkscape} altText='INKSCAPE'/>


        </div>




    )
}
