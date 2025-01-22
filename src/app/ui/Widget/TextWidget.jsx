import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
    return (
        <Div className="cs-text_widget">
            {/*<img src={logoSrc} alt={logoAlt} />*/}
            <h2>Ariverse Studio</h2>
            <p>{text}</p>
        </Div>
    )
}
