import { useEffect, useState } from "react";
import '../App.css'
import { useImaginationContext } from "../hooks/useImaginationContext";
import { GiSandsOfTime } from "react-icons/gi";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import InitBar from "../components/InitBar";

const Response = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const handlePopState = (event) => {
            event.preventDefault()
            window.location.replace('/')
        }
  
      window.addEventListener('popstate', handlePopState);

    }, [navigate]);

    const { randomWallPaper, response, isFormCompleted } = useImaginationContext()

    useEffect(() => {
        if (isFormCompleted === false) {
            return navigate('/')
        } 
    }, [isFormCompleted])

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return <main className='main__container' style={{ backgroundImage: `url(${randomWallPaper})` }}>
    <div className='interface' style={{ height: response.output.length > 0 ? 'max-content' : '100vh', paddingBottom: '5rem', overflow: response.output.length > 0 ? 'clip' : 'hidden', justifyContent: 'center', minHeight: '100vh'}}>
        <div className='interface__window' style={{top: `${position.y}px`, left: `${position.x}px`}}>
            <div className='window__header' onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} >
                <img src='https://i.gifer.com/yG.gif' className='window__icon' />
                <h1 className='window__title'>Mr. Imagination</h1>
            </div>
            <div className="window__response">
                { response.output.length > 0 ?
                    <img className="window__response--image" src={response.output[0]} />
                    :
                    <div className="window__response--loading">
                        <GiSandsOfTime className="loading__icon"/>
                    </div>
                }
                { response.output.length > 0 && <>
                        <a href={response.output[0]} className="response__button--download">Descargar imagen</a>
                        <a href={'/'} className="response__button--back">Volver  <AiOutlineRollback /></a>
                </>
                }
                {/*<a className="response__button--share">Compartir imagen <FaShareAlt className="share__icon"/> </a>¨*/}
            </div>       
        </div>         
    </div>
    <InitBar />  
</main>
}

export default Response