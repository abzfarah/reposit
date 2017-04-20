// We only need to import the modules necessary for initial render
import App from '../layouts/CoreLayout'
import Home from './Home'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : App,
  indexRoute  : Home
})


export default createRoutes