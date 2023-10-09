import renan_bg from './resources/renan_bg.png';
import { AiOutlineLike} from "react-icons/ai"
import {BsChatLeft} from "react-icons/bs"
import {PiShareFatDuotone} from "react-icons/pi"




export default function(props){

 

    return(
        <div className="Posts">

           <div className="feedPostSingle">
                <div className="feedPost__profile">
                    <img src={renan_bg} />
                    <h3>{props.nome} <br /><span>{props.horario}</span></h3>
                    
                </div>

                <div className='feedPost__Content'>
                    <p>ooi</p>
                    <img src={renan_bg} />

                    <div className='comentarios'>

                        <div className='IconSingle'>
                            <AiOutlineLike />
                            <span>Curtir</span>
                        </div>

                        <div className='IconSingle'>
                            <BsChatLeft />
                            <span>Comentar</span>
                        </div>

                        <div className='IconSingle'>
                            <PiShareFatDuotone />
                            <span>Compartilhar</span>
                        </div>

                    </div>
                </div>
           </div>
        </div>
    )
}