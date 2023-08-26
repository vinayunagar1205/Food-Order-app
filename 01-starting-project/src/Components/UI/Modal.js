import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}
const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

export default function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/> , document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById('overlays') )}
    </Fragment>
    
  )
}
