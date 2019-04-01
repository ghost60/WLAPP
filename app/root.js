import React, { Component } from 'react';
import Global from './utils/Global'
import { create } from 'dva-core'
import { Provider } from 'react-redux'
import AuthLoading from './router/AuthLoading';
import models from './models'

const app = create()
models.forEach(m => app.model(m))
app.start()

const store = app._store

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AuthLoading />
            </Provider>
        )
    }
}

export default Root