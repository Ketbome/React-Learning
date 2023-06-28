import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const hancleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-follow-card-button is-following' 
    : 'tw-follow-card-button'; // Dinamico
    const imageSrc = `https://unavatar.io/${userName}`;
    return (
    <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            <img className='tw-follow-card-img' alt="Avatar" src={imageSrc} />
            <div className='tw-follow-card-div'>
                <strong>{children}</strong>
                <span className='tw-follow-card-span'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={hancleClick}>
                {text}
            </button>
        </aside>
    </article>
  );
}