export function TwitterFollowCard({ userName, name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`;
    return (
    <article className='tw-follow-card'>
        <header className='tw-follow-card-header'>
            <img className='tw-follow-card-img' alt="Avatar de midudev" src={imageSrc} />
            <div className='tw-follow-card-div'>
                <strong>{name}</strong>
                <span className='tw-follow-card-span'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className='tw-follow-card-button'>
                Follow
            </button>
        </aside>
    </article>
  );
}