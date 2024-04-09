import {useState} from 'react'
import './index.css'

const Greetings = ({languageGreetingsList}) => {
  const [language, setLanguage] = useState('English')
  const [imageInfo, setImageInfo] = useState({
    imageUrl: languageGreetingsList.find(item => item.buttonText === 'English')
      .imageUrl,
    imageAltText: languageGreetingsList.find(
      item => item.buttonText === 'English',
    ).imageAltText,
  })

  const handleLanguageChange = buttonText => {
    const selectedLanguage = languageGreetingsList.find(
      item => item.buttonText === buttonText,
    )
    setLanguage(buttonText)
    setImageInfo({
      imageUrl: selectedLanguage.imageUrl,
      imageAltText: selectedLanguage.imageAltText,
    })
  }

  return (
    <div className="greetings-page">
      <h1>Multilingual Greetings</h1>
      <ul className="select-lang-container">
        {languageGreetingsList.map(item => (
          <li key={item.id}>
            <button
              className="select-lang-btn"
              type="button"
              onClick={() => handleLanguageChange(item.buttonText)}
            >
              {item.buttonText}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <img
          height="350px"
          src={imageInfo.imageUrl}
          alt={imageInfo.imageAltText}
        />
      </div>
    </div>
  )
}

export default Greetings
