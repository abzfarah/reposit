import React from 'react'
import PropTypes from 'prop-types'
//import Header from '../../compodnents/Header'
import GrommetApp from 'grommet/components/App';


import WebHeader from '../../components/Header'
import '../../styles/core.scss'

export const App = ({ children }) => (
  <GrommetApp centered={false}>
    <WebHeader/>
    {children}
  </GrommetApp>
)

App.propTypes = {
  children : PropTypes.element.isRequired
}

export default App
