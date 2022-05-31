export const increment = (dispatch, max, step, count) => {
    if(count >= max) {
        alert("Sudah mencapai batas maksimal");
        return count;
    } else {
        dispatch({
            type: "increment",
            payload: { step }
        })
    }
}

export const decrement = (dispatch, min, step, count) => {
    if (count <= min) {
        alert("Sudah mencapai batas minimum");
        return count;
    } else {
        dispatch({
            type: "decrement",
            payload: { step }
        })
    }
}

export const reset = (dispatch, min) => {
    dispatch({
        type: "reset",
        payload: { min }
    })
}