import renan_bg from './resources/renan_bg.png';

export default function(){
    return(
        <div className="stories">
           <div className="storiesCard" style={{backgroundImage:`url(${renan_bg})`}}>
                <p>Renan Correa</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${renan_bg})`}}>
                <p>Renan Correa</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${renan_bg})`}}>
                <p>Renan Correa</p>
           </div>
           <div className="storiesCard" style={{backgroundImage:`url(${renan_bg})`}}>
                <p>Renan Correa</p>
           </div>
           
        </div>
    )
}