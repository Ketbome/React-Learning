import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
    <section className="App">  
        <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
          Miguel Ángel
        </TwitterFollowCard>
        <TwitterFollowCard userName="ketbome">
          Pablo Moraga
        </TwitterFollowCard>
    </section>
  );
}