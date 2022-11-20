import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from '../../../../../hoc/WithRouerHOC';
import classes from './DialogsItem.module.css'
const DialogsItem = (props) => {
    const [onDialogs, setOnDialogs] = useState(false);
    useEffect(() => {
        const pageId = props.router.params['*']
        if (pageId==props.id){
            setOnDialogs(true)
        }else{setOnDialogs(false)}
      }, [props.router.params]);

        
    
    return (
           <Link className={onDialogs?classes.dialogs__items+" "+classes.dialogs__items__selected:classes.dialogs__items} to={`/messages/${props.id}`}><img src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg" alt="avatar" /><div>{props.name}</div></Link>       
    );
}

export default withRouter(DialogsItem);
