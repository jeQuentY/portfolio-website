
//import { motion } from "framer-motion"



export default function PortfolioCard (props){
    return (
        <div className='card-container' onClick={props.click}>
            <div className='title-box'>
                <p>{props.title}</p>
            </div>
            <img className='card-image' src={props.imagePath} alt={`portfolioc${props.id}`}/>
        </div>
    )
}