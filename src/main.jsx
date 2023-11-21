// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { globalStore } from './redux/index.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={globalStore}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>,
    </BrowserRouter>
  </Provider>
)
