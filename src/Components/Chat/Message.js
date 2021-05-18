import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    message: {
        fontFamily: 'Verdana',
        fontSize: '1.1rem',
        color: '#9c8e8e',
    },
    wrapper: {
        position: 'relative',
        top: '10px',
    }

}))

const Message = (props) => {
    const classes = useStyles();
        
    return (
        <div className={classes.wrapper}>
            <span className={classes.message}>{props.msg}</span>
        </div>
    )
}
export default Message;