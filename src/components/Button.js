import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // static contextType = LanguageContext;

    // render() {
    //     const text = this.context === 'english' ? 'Submit' : 'Samarpinchu'
    //     return (
    //        <button className="ui button primary">{text}</button>
    //     )
    // }

    // render() {
    //     return (
    //         <button className="ui button primary">
    //             <LanguageContext.Consumer>
    //                 {(valu) => valu === 'english' ? 'Submit' : 'Samarpinchu'}
    //             </LanguageContext.Consumer>
    //         </button>
    //     )
    // }

    render() {
        return (
            <ColorContext.Consumer>
            {(color) => 
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {(valu) => valu === 'english' ? 'Submit' : 'Samarpinchu'}
                    </LanguageContext.Consumer>
                </button>
            }                
            </ColorContext.Consumer>            
        )
    }
}

export default Button