
import { Link } from "react-router-dom";

import H2 from "./H2"
import Button from "./Button";

const Card = (props) =>{
    const {slug,name,profile_picture} = props.user

    return(
        <article className="flex aic g-30 w-280 shadow">
            <img src={profile_picture} alt={name} className='imgusers' />
            <div>
                <H2>{name}</H2>
                <Link to={`/${slug}`}><Button text="See user"/></Link>
            </div>
        </article>
    )
}

export default Card