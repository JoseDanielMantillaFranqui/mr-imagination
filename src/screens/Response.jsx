import { useEffect, useState } from "react";
import '../App.css'
import { useImaginationContext } from "../hooks/useImaginationContext";
import { GiSandsOfTime } from "react-icons/gi";
import { FaShareAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

const Response = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const handlePopState = (event) => {
            event.preventDefault()
            window.location.replace('/')
        }
  
      window.addEventListener('popstate', handlePopState);

    }, [navigate]);

    const { randomWallPaper, response } = useImaginationContext()

    return <main className='main__container' style={{ backgroundImage: `url(${randomWallPaper})` }}>
    <div className='interface'>
        <div className='interface__window'>
            <div className='window__header'>
                <img src='/window-icon.svg' className='window__icon' />
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
</main>
}

export default Response