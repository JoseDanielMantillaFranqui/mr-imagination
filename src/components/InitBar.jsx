import '../App.css'
import { useState, useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { SiWindows95 } from "react-icons/si";
import { useImaginationContext } from '../hooks/useImaginationContext';
import { useLocation } from 'react-router-dom';

const InitBar = () => {

    const [time, setTime] = useState()
    const [date, setDate] = useState()

    const actualizarFechaHora = () => {
        const ahora = new Date();
        
        // Formatear la fecha en dd/mm/aaaa
        const dia = String(ahora.getDate()).padStart(2, '0');
        const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Enero es 0
        const anio = ahora.getFullYear();
        const fechaFormateada = `${dia}/${mes}/${anio}`;
        
        // Formatear la hora en formato 12 horas con AM/PM
        let horas = ahora.getHours();
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        const ampm = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12;
        horas = horas ? horas : 12; // La hora 0 debe ser 12
        const horasFormateadas = String(horas).padStart(2, '0');
        const horaFormateada = `${horasFormateadas}:${minutos}:${segundos} ${ampm}`;

        setDate(fechaFormateada);
        setTime(horaFormateada);
    };

    useEffect(() => {
        actualizarFechaHora();
        const intervalo = setInterval(actualizarFechaHora, 1000);
        return () => clearInterval(intervalo);
    }, []);

    const [showOptions, setShowOptions] = useState(false)

    const handleInitButton = () => {
        setShowOptions(!showOptions)
    }

    const { handleOpenInterfaceWindow, showAboutAlert } = useImaginationContext()
    const location = useLocation()

    const handleGetCodigoFuente = () => {
        window.location.href = 'https://github.com/JoseDanielMantillaFranqui/mr-imagination'
    }

    const handleGetAbout = () => {
        showAboutAlert()
        setShowOptions(false)
    }

    return <div className="interface__bar">
    <button className="bar__initButton" onClick={handleInitButton}>
        <SiWindows95 className='bar__initButton__icon'/>
      Inicio
    </button>
    <div className="bar__timeAndDate">
      <p>{time}</p>
      <p>{date}</p>
    </div>
    <div className="bar__init__menu" style={{ display: showOptions === true ? 'flex' : 'none'}}>
        <span className="bar__init__menu__leftTitle"> Mr. Imagination</span>
        <ul className="bar__options" >
            <li className='option__item' style={{ borderTop: 0 }} onClick={() => {handleOpenInterfaceWindow(location); setShowOptions(false)}}>
            <img src='https://i.gifer.com/yG.gif' className='option__icon option__icon--folder' onContextMenu={(e) => e.preventDefault()} />
                Mr. Imagination
            </li>
            <li className='option__item' onClick={handleGetCodigoFuente}>
                <img src='/Folder.svg' className='option__icon'/>
                Código fuente
            </li>
            <li className='option__item' onClick={handleGetAbout}>
                <img src='/earth-help-program.svg' className='option__icon'/>
                Acerca de
            </li>
        </ul>
    </div>
  </div>  
}

export default InitBar