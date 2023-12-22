import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
    const { technos, handleDeleteTechno } = props;

    return (
        <div>
            {/* <h1>All Technos</h1> */}
            <div className="techno-list">
                <div className="list">
                    {
                        technos.map(techno => (
                            <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}