import React, {createContext, Component} from 'react';

export const LoginContext = createContext({
    username: '',
    password: ''
});

export class LoginContextProvider extends Component{

    render() {
        /*<LoginContext.Provider value={{
                username: '',
                password: ''
            }}>*/ 
        return (
            <LoginContext.Provider>
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}

export const LogiContextConsumer = LoginContext.Consumer;
