import { useEffect, useState } from "react";
import PopUp from '../components/PopUp';

export default function TechnoAdd(props) {
    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    });
    const { handleAddTechno, handleShowPopUp, showPopUp } = props;

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (showPopUp) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 200);
        }
    }, [showPopUp]);

    const [hide, setHide] = useState(false);
    useEffect(() => {
        if (showPopUp) {
            setTimeout(() => setHide(true), 4500);
        } else {
            setHide(false);
        }
    }, [showPopUp]);

    const [popupColor, setPopupColor] = useState(null);
    const [content, setContent] = useState(null);

    function handleSubmit(evt) {
        if (techno.technocategory === '' || techno.technoname === '' || techno.technodescription === '') {
            setContent("Oh no ! Something is missing !");
            setPopupColor('red')
            handleShowPopUp();
            evt.preventDefault();
            return;
        }
        evt.preventDefault();
        setContent("The list has been updated correctly !");
        setPopupColor('green');
        handleShowPopUp();
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
            {showPopUp && (
                <div
                    className={`popup ${visible ? "popup-visible" : ""} ${hide ? "popup-hidden" : ""} ${popupColor === 'green' ? "green-color" : ""} ${popupColor === 'red' ? "red-color" : ""}`}>
                    <PopUp content={content} />
                </div>
            )}
            <div className="techno-form">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="input-container ic1">
                        <input className="input" type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(event) => handleChange(event)} placeholder=" " />
                        <div className="cut cut-name"></div>
                        <label htmlFor="technoname" className="placeholder">Name</label>
                    </div>
                    <div className="select-container input-container">
                        <select className={`input input-select ${techno.technocategory.trim() !== "" ? "has-value" : ""}`} name="technocategory" id="technocategory" value={techno.technocategory} onChange={(event) => handleChange(event)}>
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