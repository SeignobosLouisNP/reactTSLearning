import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <h1>Colorful Custom Button Components</h1>
      <Button
            handleClick={()=>{}}
            styles={'w-full bg-violet-500'}
            type={'button'}
            title={'Open modal'}
            disabled={false}
            >
                {/* children */}
                   Open modal
            </Button>
    </>
    )
}

export default App
