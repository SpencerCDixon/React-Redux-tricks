// This is an example of dispatching an action that then dispatches many other
// actions:

export function fetchBar (id) {
  return dispatch => {
    dispatch({ type: 'BAR_LOADING' })

    fetch('/bar/' + id).then(res => dispatch({
      type: 'RECEIVE_BAR',
      payload: res.body
    }))
  }
}

export function fetchFooAndBar (fooId, barId) {
  return dispatch => {

    dispatch({ type: 'FOO_LOADING' })

    fetch('/foo/' + fooId).then(res => dispatch({
      type: 'RECEIVE_FOO',
      payload: res.body
    }))

    dispatch(fetchBar(barId))
  }
}

// Note it requires the redux-thunk library
