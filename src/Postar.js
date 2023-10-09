import renan_bg from './resources/renan_bg.png';
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"
import {useState, useEffect} from 'react'
import firebase from 'firebase/compat/app';
import {auth,storage,db} from './firebase'

export default function(props){


    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)

    function abrirModalPostar(e){
        let modal = document.querySelector('.ModalPostar')

        modal.style.display = 'block'
    }

    function FecharModalPostar(e){

        let modal = document.querySelector('.ModalPostar')

        modal.style.display = 'none'
    }


    
    

    return(
        <div className="PostarFeed">


            <div className='ModalPostar'>
                <div className='formPostar'>
                   <h2>Criar Publicação</h2><span onClick={(e)=>FecharModalPostar(e)}>X</span>
                   <div className="Postar__Profile">
                        <img src={renan_bg} />
                        <h3>{props.nome} <br /></h3>
                    </div>
                    <form id="form-upload" >
                        <textarea id='titulo-post' placeholder='No que você está pensando?'></textarea>
                        <input  type='file' name='file'/>
                        <input type='submit' value="Publicar" />
                    </form>
                </div>
            </div>

            <div className="PostarForm">
                <img src={renan_bg} />
                <input onClick={(e)=>abrirModalPostar(e)}  type='text' placeholder='No que você está pensando?'/>
            </div>

            <div className='PostarIcons '>
                <div className='IconSingle'>
                    <AiFillVideoCamera  />
                    <span>Video ao vivo</span>
                </div>
                <div className='IconSingle img'>
                    <AiOutlineFileImage />
                    <span>Foto / Vídeo</span>
                </div>
                <div className='IconSingle emoji'>
                    <AiOutlineMeh />
                    <span>Sentimento/Atividade</span>
                </div>
            </div>
        </div>
    )
}