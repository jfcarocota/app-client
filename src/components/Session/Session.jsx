import React, {Component, Fragment} from 'react';
import { SessioConsumer } from './SessionContext';

export default class Session extends Component{

    render() {
        return (
             <SessioConsumer>
                 {context =>(
                     <Fragment>
                         {context.state.link}
                     </Fragment>
                 )}
             </SessioConsumer>
        );
    }
}