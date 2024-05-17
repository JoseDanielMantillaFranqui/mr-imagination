import { createContext, useState, useEffect, useContext, useRef } from "react";
import MonsterApiClient from "monsterapi";

const ImaginationContext = createContext()

export const useImaginationContext = () => useContext(ImaginationContext)



const ImaginationProvider = ({children}) => {

    const [randomWallPaper, setRandomWallPaper] = useState('')
    const [randomNumber] = useState(() => {
        return Math.floor((Math.random() * 10) + 1)
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
            default:
                return setRandomWallPaper('https://i.gifer.com/fyrV.gif')
        }
    }, [randomNumber])

    const [userPrompt, setUserPrompt] = useState('')
    const [styleImg, setStyleImg] = useState('')
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
      aspect_ratio: 'square',
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

    return <ImaginationContext.Provider value={{ randomWallPaper, userPrompt, handleInputPromptUser, textareaChatRef, isEmptyUserPrompt, generateImg, response, styleImg, handleSelectStyleImg }}>
        {children}
    </ImaginationContext.Provider>
}


export default ImaginationProvider