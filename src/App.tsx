import './styles/App.css'

import {
  Achievements,
  Challenges,
  FreshIdeas,
  ListIdeas,
} from './components';

function App() {

  return (
    <>
      <h1>App</h1>
      <FreshIdeas />
      <ListIdeas />
      <Achievements />
      <Challenges />
    </>
  )
}

export default App
