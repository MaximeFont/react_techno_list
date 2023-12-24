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
            <div className="techno-form">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="input-container ic1">
                        <input className="input" type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(event) => handleChange(event)} placeholder=" " />
                        <div className="cut cut-name"></div>
                        <label htmlFor="technoname" className="placeholder">Name</label>
                    </div>
                    <div className="select-container input-container">
                        <select className="input input-select" name="technocategory" id="technocategory" value={techno.technocategory} onChange={(event) => handleChange(event)}>
                            <option value="">Select a category</option>
                            <option value="front">Front</option>
                            <option value="back">Back</option>
                            <option value="fullstack">Full stack</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="cut-select"></div>
                        <label className="select-placeholder" htmlFor="technocategory">Category</label>
                    </div>
                    <div className="input-container ic2">
                        <textarea
                            className="large-input input"
                            placeholder=" "
                            name="technodescription"
                            id="technodescription"
                            cols="30"
                            rows="10"
                            value={techno.technodescription}
                            onChange={(event) => handleChange(event)}
                        ></textarea>
                        <div className="cut cut-description"></div>
                        <label htmlFor="technodescription" className="placeholder">Description</label>
                    </div>
                    <br />
                    <input className="submit" type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    );
}