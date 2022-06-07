import React from 'react'
import memesData from './memesData.js'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')

    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        // console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    } 

    console.log(meme)

    function handleChange(event){
        const {name, value, type} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })
    )}

    return (
        <main className='container'>
            <div className='inputs'>
                <input 
                    type="text" 
                    className='input1'
                    placeholder='Top text'
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className='input2'
                    placeholder='Bottom text'
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
            </div>
            <button onClick={getMemeImage}>Get new meme image</button>
            <div className='meme-container'>
                <img className='meme' src={meme.randomImage} alt=""/>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}