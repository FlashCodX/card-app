export const App = () => {
    return <section>
        <div className={'overlays'}>
            <div className={'top'}/>
            <div className={'bottom'}/>
        </div>
        <article className={'card'}>
            <div className={'banner'}/>
            <section>
                <img src={require('./images/image-victor.jpg')} alt="pic"/>
                <section className={'card_info'}>
                    <h1>Victor Crest</h1>
                    <p>26</p>
                </section>
                <h6>London</h6>

                <div className={'divider'}/>
                <section className={'social'}>
                    <section>
                        <h1>80K</h1>
                        <p>Followers</p>
                    </section>
                    <section>
                        <h1>803K</h1>
                        <p>Likes</p>
                    </section>
                    <section>
                        <h1>1.4K</h1>
                        <p>Photos</p>
                    </section>
                </section>
            </section>


        </article>

    </section>

}
