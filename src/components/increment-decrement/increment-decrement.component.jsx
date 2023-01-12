import React from "react";

import { connect } from "react-redux";
import { incNumber, decNumber } from "../../redux/increment-decrement/inc-dec.actions";

const IncrementDecrement = ({ myState, Increment, Decrement } ) => {
    return (
        <div className="inc-dec">
            <button type="button" className="dec-button" onClick={ () => Decrement() }>-</button>
            <input type="text" className="inputval" readOnly value={myState}/>
            <button type="button" className="inc-button" onClick={() => Increment(5) }>+</button>
        </div>
    )
}

const mapStateToProps = ({ incdec }) => ({
    myState: incdec
})

const mapDispatchToProps = dispatch => ({
    Increment: num => dispatch(incNumber(num)),
    Decrement: () => dispatch(decNumber())
})

export default connect(mapStateToProps,mapDispatchToProps) (IncrementDecrement);