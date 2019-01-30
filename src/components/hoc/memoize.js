import Vif, { useMount, smart } from 'vif'

const nodes = {}

const memoize = (Component) => smart(({ memoKey }) => {
  
  let node = undefined;
  if (!nodes[memoKey]) {
    nodes[memoKey] = {
      mounted: false,
      state: undefined
    }
  }

  const handleSave = () => {
    nodes[memoKey].state = { ...node.nextState }
  }
  
  useMount(() => {
    node.lifecycle.updates.push(handleSave)
    nodes[memoKey].mounted = true
    return () => {
      node.lifecycle.updates = node.lifecycle.updates.filter(callback => callback !== handleSave)
      nodes[memoKey].mounted = false
    }
  })

  return props => {
    node = <Component onSave={handleSave} {...props} />;
    if (!nodes[memoKey].mounted && nodes[memoKey].state) {
      node.state = { ...nodes[memoKey].state }
    } else {
      nodes[memoKey].state = { ...node.state }
    }
    return node
  };

});

export default memoize