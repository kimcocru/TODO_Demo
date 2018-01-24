import React from 'react'
import ToDosContainer from './todos/ToDosContainer'

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Things ToDo:</h1>
                <ToDosContainer />    
            </div>
        );
    }
}

export default App;
