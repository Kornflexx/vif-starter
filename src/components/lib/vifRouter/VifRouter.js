import Vif, { useAction, useState, smart } from "vif";

const navigateAction = pathname => ({
  pathname
})

const VifRouter = (initialProps) => {

  useState('pathname', initialProps.pathname)
  const navigate = useAction(navigateAction)

  return (props, state) => {
    console.log('props.children', props.children)
    return <div>{props.children({ navigate, pathname: state.pathname })}</div>
  }
}

export default smart(VifRouter);
