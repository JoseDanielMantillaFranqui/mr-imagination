import { createContext, useState, useEffect, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MonsterApiClient from "monsterapi";
import Swal from 'sweetalert2'
import { AiOutlineRollback } from "react-icons/ai";

const ImaginationContext = createContext()

export const useImaginationContext = () => useContext(ImaginationContext)



const ImaginationProvider = ({children}) => {

    const [randomWallPaper, setRandomWallPaper] = useState('')
    const [randomNumber] = useState(() => {
        return Math.floor((Math.random() * 20) + 1)
    })

    useEffect(() => {
        switch (randomNumber) {
            case 1: 
                return setRandomWallPaper('https://i.gifer.com/g3Ys.gif')
            case 2:
                return setRandomWallPaper('https://i.gifer.com/A80N.gif')
            case 3:
                return setRandomWallPaper('https://i.gifer.com/2A5.gif')
            case 4:
                return setRandomWallPaper('https://i.gifer.com/4Hwg.gif')
            case 5:
                return setRandomWallPaper('https://i.gifer.com/2Vqr.gif')
            case 6:
                return setRandomWallPaper('https://i.gifer.com/n8H.gif')
            case 7:
                return setRandomWallPaper('https://i.gifer.com/LxNx.gif')
            case 8:
                return setRandomWallPaper('https://i.gifer.com/xK.gif')
            case 9:
                return setRandomWallPaper('https://i.gifer.com/Z5aE.gif')
            case 10:
                return setRandomWallPaper('https://i.gifer.com/1ka4.gif')
            case 11:
                return setRandomWallPaper('https://i.gifer.com/FM9Y.gif')
            case 12:
                return setRandomWallPaper('https://i.gifer.com/fxk4.gif')
            case 13:
                return setRandomWallPaper('https://i.gifer.com/SlxH.gif')
            case 14:
                return setRandomWallPaper('https://i.gifer.com/2zFo.gif')
            case 15:
                return setRandomWallPaper('https://i.gifer.com/6vIk.gif')
            case 16:
                return setRandomWallPaper('https://i.gifer.com/WG6.gif')
            case 17:
                return setRandomWallPaper('https://i.gifer.com/KTe5.gif')
            case 18:
                return setRandomWallPaper('https://i.gifer.com/YSx6.gif')
            case 19:
                return setRandomWallPaper('https://i.gifer.com/7U5f.gif')
            case 20:
                return setRandomWallPaper('https://i.gifer.com/NfHy.gif')
            default:
                return setRandomWallPaper('https://i.gifer.com/fyrV.gif')
        }
    }, [randomNumber])

    const [userPrompt, setUserPrompt] = useState('')
    const [styleImg, setStyleImg] = useState('')
    const [aspectRatio, setAspectRatio] = useState('')
    const [isEmptyUserPrompt, setIsEmptyUserPrompt] = useState(false)
    const textareaChatRef = useRef(null)

    const validatePromptUser = (value) => {
        const isValid = ((value.length >  0) && (!(value.trim() === ''))) ? true : false 
  
        return isValid
      }
  
      const handleInputPromptUser = (e) => {
        setUserPrompt(e.target.value)
        setIsEmptyUserPrompt(validatePromptUser(e.target.value))

      }

    const interfaceRef = useRef(null)
    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
      const userAgent = navigator.userAgent;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
      setIsLaptop(!isMobile);
    }, []);

    useEffect(() => {
        if (textareaChatRef.current.scrollHeight > 60) {
            textareaChatRef.current.style.height = 'auto';
            textareaChatRef.current.style.height = `${textareaChatRef.current.scrollHeight}px`;
        }

          if (interfaceRef.current.scrollHeight > window.innerHeight) {
            interfaceRef.current.style.height= `${interfaceRef.current.scrollHeight + (isLaptop === true ? 20 : 20 )}px`
         }

         if (userPrompt === '') {
             if (isLaptop === false) {
                interfaceRef.current.classList.add('interface--laptop')
             } else {interfaceRef.current.style.height = '100vh'}
         }
    }, [userPrompt])




    const [response, setResponse] = useState({output: []})

    const client = new MonsterApiClient(import.meta.env.VITE_AUTORIZACION)

    const model = 'sdxl-base'; // Replace with the desired model name
    const input = {
      prompt: userPrompt,
      negprompt: 'unreal, fake, meme, joke, disfigured, poor quality, bad, ugly',
      samples: 1,
      steps: 50,
      aspect_ratio: aspectRatio,
      guidance_scale: 7.5,
      seed: 2414,
      "enhance": true,
      "optimize": true,
      "safe_filter": false,
      style: styleImg
    };

    const generateImg = () => {
        client.generate(model, input)
        .then((data) => {
            setResponse(data)
        })
        .catch((error) => {
            console.error('Error:', error);
            showErrorAlert(`<br><p>La imagen no pudo ser creada: ${error}</p><br><a href="/" class="error__button--back"> Volver </a>`)
        })
    }

    const handleSelectStyleImg = (e) => {
        setStyleImg(e.target.value)
    }

    const handleAspectRatio = (textAspectRatio) => {
        setAspectRatio(textAspectRatio)
    }

    const showAlert = (errorText) => {
        Swal.fire({
            title: `<div class='window__header--error'>
            <img src='https://cdn-icons-png.flaticon.com/512/6514/6514954.png' class='alert__icon' />
            <h1 class='alert__title'>Formulario Incompleto</h1>
        </div>`,
            html: errorText,
            confirmButtonText: 'Aceptar',
            customClass: {
                popup: 'swal2-popup',
                content: 'swal2-content',
                actions: 'swal2-actions',
                confirmButton: 'swal2-confirm',
            }
        });
    }

    const showErrorAlert = (errorText) => {
        Swal.fire({
            title: `<div class='window__header--error'>
            <img src='https://cdn-icons-png.flaticon.com/512/6514/6514954.png' class='alert__icon' />
            <h1 class='alert__title'>Error</h1>
        </div>`,
            html: errorText,
            showConfirmButton: false,
            customClass: {
                popup: 'swal2-popup',
                content: 'swal2-content',
                actions: 'swal2-actions',
                confirmButton: 'swal2-confirm',
            }
        });
    }

    const [isFormCompleted, setIsFormCompleted] = useState(false)

    const checkIsFormCompleted = () => {
        setIsFormCompleted(true)
    }

    const [showInterfaceWindow, setShowInterfaceWindow] = useState(true)
    
    const handleCloseInterfaceWindow = () => {
      setShowInterfaceWindow(false)
    }

    const handleOpenInterfaceWindow = (location) => {
        if (location.pathname === '/') {
            setShowInterfaceWindow(true)
        } else {
            window.location.replace('/')
        }
    }

    const showAboutAlert = () => {
        Swal.fire({
            title: `<div class='window__header'>
            <img src='/earth-help-program.svg' class='aboutTitle__icon' />
            <h1 class='window__title'>Acerca de</h1>
        </div>`,
            html: `<img src='https://i.gifer.com/yG.gif' class='about__icon'/> <br>
            Mr. Imagination es una app web para generar imágenes mediante el modelo de IA sdxl-base de MonsterAPI. Cuenta con una interfaz retro similar a Windows 95.`,
            customClass: {
                popup: 'swal2-popup',
                content: 'swal2-content',
                actions: 'swal2-actions',
                confirmButton: 'swal2-confirm',
                title: 'about__header'
            }
        });
    }

    return <ImaginationContext.Provider value={{ randomWallPaper, userPrompt, handleInputPromptUser, textareaChatRef, isEmptyUserPrompt, generateImg, response, styleImg, handleSelectStyleImg, handleAspectRatio, aspectRatio, showAlert, isFormCompleted, checkIsFormCompleted, showInterfaceWindow, handleCloseInterfaceWindow, handleOpenInterfaceWindow, showAboutAlert, interfaceRef, isLaptop }}>
        {children}
    </ImaginationContext.Provider>
}


export default ImaginationProvider