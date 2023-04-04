import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const App = () => {
    return (
        <div className="container border rounded mt-2">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">Seus pedidos</h1>                
                </div>
            </div>
        </div>
        
    )
} 

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)