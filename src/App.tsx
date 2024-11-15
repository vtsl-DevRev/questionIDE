import './App.css'
import QuestionPageComponent from './assets/components/QuestionPageComponent/QuestionPageComponent'
// import QuestionIDEComponent from './assets/components/QuestionIDEComponent/QuestionIDEComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {

    return (
        < BrowserRouter >
            <QuestionPageComponent />
            {/* <QuestionIDEComponent /> */}
        </BrowserRouter >
    )
}

export default App
