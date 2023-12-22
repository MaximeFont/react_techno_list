export default function TechnoItem(props) {
    const { techno, handleDeleteTechno } = props;
    return (
        <div className="item" key={techno.technoid}>
            <h2 className="title">{techno.technoname}</h2>
            <h3 className="category">category</h3>
            <p className="category-content">{techno.technocategory}</p>
            <h3 className="description">Description</h3>
            <p className="description-content">{techno.technodescription}</p>
            <button className="btn-delete" onClick={() => handleDeleteTechno(techno.technoid)}>Delete</button>
        </div>
    );
}