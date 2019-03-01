const initialState = []

export default function consultasReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'CONSULT_DONE' :
        const out = Array.from(state)
        out.push(action.payload)
        return out
      default:
        return state
    }
}