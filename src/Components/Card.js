
import { Link } from "react-router-dom";

import H2 from "./H2"
import Button from "./Button";

const Card = (props) =>{
    const {slug,name,profile_picture} = props.user

    return(
        <article>
            <H2>{name}</H2>
            <img src={profile_picture} alt={name} />
            <Link to={`/${slug}`}><Button text={"See user"}/></Link>
        </article>
    )
}

export default Card