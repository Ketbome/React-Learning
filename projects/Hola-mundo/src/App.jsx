import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
    <section className="App">  
        <TwitterFollowCard userName="midudev" name="Miguel Ángel" />
        <TwitterFollowCard userName="ketbome" name="Pablo Moraga" />
    </section>
  );
}