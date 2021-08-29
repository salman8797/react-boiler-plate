import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import { getuser } from '../../redux/actions/exampleAction';

function ExampleComponent(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getuser());
    },[])  
  
    return (
        <div>
            Example
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps)(ExampleComponent)