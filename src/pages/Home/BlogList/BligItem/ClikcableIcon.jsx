import React from 'react';

const ClickableIcon = ({iconClass, onClick}) => {
    return (
        <i className={'iconClass'} onClick={onClick}></i>
    )
}

export default ClickableIcon;