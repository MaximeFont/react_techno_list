import { useState } from "react";

export default function TechnoAdd(props) {
    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    });
    const { handleAddTechno } = props;

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname: '',
            technocategory: '',
            technodescription: '',
        });
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setTechno({ ...techno, [name]: value });
    }

    return (
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="technoname">Name:</label>
                    <br />
                    <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(event) => handleChange(event)} />
                    <br />
                    <label htmlFor="technocategory">Category:</label>
                    <br />
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(event) => handleChange(event)}>
                        <option value="">Select a category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full stack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription">Description:</label>
                    <br />
                    <textarea
                        name="technodescription"
                        id="technodescription"
                        cols="30"
                        rows="10"
                        value={techno.technodescription}
                        onChange={(event) => handleChange(event)}
                    ></textarea>
                    <br />
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    );
}