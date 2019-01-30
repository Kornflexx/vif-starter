import { useAction } from 'vif'

export default (key) => useAction(() => (props, state) => ({ [key]: !state[key] }))
