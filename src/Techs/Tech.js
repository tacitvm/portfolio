import React from 'react';


export default class Tech extends React.Component{
    render(props){
        return (
            <div>
                <img className='tech-logos' src={this.props.img} alt={this.props.altText}/>
            </div>
        )
    }
}
