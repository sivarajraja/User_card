import { Fragment } from "react"

function User(props){
    return(
        <div className="Card_Container">
            <span className= {props.online ? 
                "isActive online" : "isActive offline"}>
                {props.online? "ONLINE": "OFFLINE"}</span>
            <img src={props.profile} className = "image" alt="user" width={180} ></img>
            <h2>{props.name}</h2>
            <h2>{props.place}</h2>
            <p>{props.role}</p>

            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skills,index) =>(
                        <li key = {index}>{skills}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const UserCard =() =>{
    return(
        <Fragment>
        <User name = "Atman" place = "Paris" role = "Backend Developer" 
        skills = {["mysql","nosql","python","database","backend","java"]}
        online = {true} profile = "./male_user.png"/>

        <User name = "Angelia" place = "New York" role = "UX/UI Designer" 
        skills = {["UX/UI","figma","Ai","Adobe","Photoshop","backend","design"]}
        online = {false} profile = "./female_user.png"/>
        </Fragment>
    )
}

/*  to create a class and initiate all details in class
    then display all details inside the class using 
    map function
    <>
    {
        user.map((user,index) => (
            <User key = {index} name = {user.name}
            place = {user.place} role = {user.role}
            skills = {user.skills} online = {user.online}
            profile = {user.profile}
            /> 
            ))
    }
    </>
*/