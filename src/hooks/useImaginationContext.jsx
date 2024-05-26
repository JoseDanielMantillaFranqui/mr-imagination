import { createContext, useState, useEffect, useContext, useRef } from "react";
import MonsterApiClient from "monsterapi";

const ImaginationContext = createContext()

export const useImaginationContext = () => useContext(ImaginationContext)



const ImaginationProvider = ({children}) => {

    const [randomWallPaper, setRandomWallPaper] = useState('')
    const [randomNumber] = useState(() => {
        return Math.floor((Math.random() * 20) + 1)
    })

    useEffect(() => {
        console.log(randomNumber)
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
        if (textareaChatRef.current.scrollHeight > 60) {
          textareaChatRef.current.style.height = 'auto';
          textareaChatRef.current.style.height = `${textareaChatRef.current.scrollHeight}px`;
        }
      }



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
      "safe_filter": true,
      style: styleImg
    };

    const generateImg = () => {
        client.generate(model, input)
        .then((data) => {
            setResponse(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    const handleSelectStyleImg = (e) => {
        setStyleImg(e.target.value)
    }

    const handleAspectRatio = (textAspectRatio) => {
        setAspectRatio(textAspectRatio)
    }


    return <ImaginationContext.Provider value={{ randomWallPaper, userPrompt, handleInputPromptUser, textareaChatRef, isEmptyUserPrompt, generateImg, response, styleImg, handleSelectStyleImg, handleAspectRatio, aspectRatio }}>
        {children}
    </ImaginationContext.Provider>
}


export default ImaginationProvider