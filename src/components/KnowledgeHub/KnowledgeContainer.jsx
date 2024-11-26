function KeyAreaCard({ keyArea }){
    return (
        <div className="key-area">
            <img src={keyArea.image} alt={keyArea.title} />
            <h2>{keyArea.title}</h2>
            <p>{keyArea.side}</p>
            {keyArea.content && (
                <div className="content-list">
                    {keyArea.content.map((item, index) => (
                        <div key={index} className="content-item">
                            {item.image && <img src={item.image} alt={item.title} />}
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
