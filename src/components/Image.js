import react from "react"



const CocoImage = props => {
    <div className="img-container">
        <img alt={props.name} src={require("../images/" + props.image)} />
    </div>
};

export default RobotImage; 