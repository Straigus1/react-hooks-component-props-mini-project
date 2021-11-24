function About ({logo, about}) {
    const defaultPic = "https://via.placeholder.com/215"
        return (
            <aside>
                <img src={logo ? logo : defaultPic} alt="blog logo" />
                <p>{about}</p>
            </aside>

        )
    
}

export default About