// Creating HTML elements
const container = document.createElement('div')
const header = document.createElement('div')
const title = document.createElement('h1')
const subtitle = document.createElement('span')
const searchInfo = document.createElement('div')
const startText = document.createElement('span')
const countText = document.createElement('span')
const wordPatternText = document.createElement('span')
const wordPatternNum = document.createElement('span')
const buttonWrapper = document.createElement('div')
const startingWordButton = document.createElement('button')
const anyWordButton = document.createElement('button')
const sortButton = document.createElement('button')
const inputWrapper = document.createElement('div')
const input = document.createElement('input')
const searchIcon = document.createElement('div')
const getBody = document.querySelector('body')
const videoBg = document.createElement('video')
const videoBgSource = document.createElement('source')
const countriesAPI = 'https://restcountries.com/v2/all'
const countryWrapper = document.createElement('div')
let localStorageData = localStorage.getItem('storageData')
let isStartingWord = true
let isAnyWord = false
let isSortZA = false

// Appending HTML elements
document.body.appendChild(header)
header.appendChild(container)
header.appendChild(videoBg)
videoBg.appendChild(videoBgSource)
container.appendChild(title)
container.appendChild(subtitle)
container.appendChild(searchInfo)
searchInfo.appendChild(startText)
searchInfo.appendChild(wordPatternText)
searchInfo.appendChild(countText)
searchInfo.appendChild(wordPatternNum)
container.appendChild(buttonWrapper)
buttonWrapper.appendChild(startingWordButton)
buttonWrapper.appendChild(anyWordButton)
buttonWrapper.appendChild(sortButton)
container.appendChild(inputWrapper)
inputWrapper.appendChild(input)
inputWrapper.appendChild(searchIcon)
document.body.appendChild(countryWrapper)

// Filling HTML elements content
title.textContent = 'world countries list'
subtitle.textContent = 'total numbers of countries: 0'
startingWordButton.textContent = 'starting word'
anyWordButton.textContent = 'search with any word'
input.placeholder = 'search country ...'
videoBg.autoplay = 'true'
videoBg.loop = 'true'
videoBgSource.src = './img/Rotating-Digital-Earth.mp4'
videoBgSource.type = 'video/mp4'
sortButton.textContent = 'A\nZ'

// Styles for HTML elements
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh'
    },
    header: {
        height: '60vh'
    },
    body: {
        margin: '0',
        background: 'linear-gradient(0deg, rgba(48,16,78,1) 0%, rgba(94,29,154,1) 50%, rgba(138,43,226,1) 100%)',
        fontFamily: 'Comfortaa'
    },
    title: {
        fontSize: '60px',
        letterSpacing: '14px',
        textShadow: '1px 1px white',
        color: 'white',
        marginBottom: '0',
        textTransform: 'uppercase',
        textShadow: 'blueViolet 0px 0px 5px, blueViolet 0px 0px 10px, blueViolet 0px 0px 15px, blueViolet 0px 0px 20px, blueViolet 0px 0px 30px, blueViolet 0px 0px 40px, blueViolet 0px 0px 50px, blueViolet 0px 0px 75px, 2px 2px 2px blueViolet'
    },
    videoBg: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '60%',
        objectFit: 'cover',
        zIndex: '-1'
    },
    subtitle: {
        color: 'white',
        fontSize: '30px',
        marginBottom: '5px',
        textTransform: 'capitalize'
    },
    buttonWrapper: {
        width: '23%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px'
    },
    button: {
        backgroundColor: 'blueViolet',
        color: 'white',
        fontSize: '16px',
        padding: '10px 14px',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '3px'
    },
    sortButton: {
        width: '40px',
        fontSize: '9px',
        textAlign: 'right',
        backgroundImage: 'url("img/down-arrow.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '25%',
        backgroundSize: '45%',
        paddingLeft: '22px'
    },
    searchInfo: {
        height: '30px',
        width: '50%',
        marginBottom: '20px',
        color: 'white',
        textAlign: 'center',
        fontSize: '25px'
    },
    inputWrapper: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        height: '30px',
        width: '70%',
        outline: 'none',
        borderRadius: '20px',
        padding: '5px 20px',
        fontSize: '18px',
        letterSpacing: '2px',
        border: '2px solid blueViolet',
        textAlign: 'center'
    },
    searchIcon: {
        backgroundImage: 'url("img/magnifying-glass.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%',
        width: '7%'
    },
    countryWrapper: {
        width: '70%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 auto',
        gap: '30px',
        padding: '50px 0'
    },
    country: {
        width: '150px',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '25px',
        textAlign: 'center',
        textShadow: '1px 1px 0 white',
        color: 'white',
        backgroundColor: 'mediumPurple',
        border: '2px solid black',
        backgroundImage: 'url("img/planets/globuspng.png")',
        backgroundSize: 'cover',
        borderRadius: '10px',
        padding: '10px'
    },
    activeButton: {
        boxShadow: 'inset 0px 0px 10px 5px indigo',
        border: '1px solid thistle'
    },
    nonActiveButton: {
        boxShadow: 'none',
        border: 'none'
    }
}

// Applying styles for HTML elements
Object.assign(container.style, styles.container)
Object.assign(header.style, styles.header)
Object.assign(getBody.style, styles.body)
Object.assign(title.style, styles.title)
Object.assign(videoBg.style, styles.videoBg)
Object.assign(subtitle.style, styles.subtitle)
Object.assign(searchInfo.style, styles.searchInfo)
Object.assign(buttonWrapper.style, styles.buttonWrapper)
Object.assign(startingWordButton.style, styles.button)
Object.assign(anyWordButton.style, styles.button)
Object.assign(sortButton.style, styles.button)
Object.assign(sortButton.style, styles.sortButton)
Object.assign(inputWrapper.style, styles.inputWrapper)
Object.assign(input.style, styles.input)
Object.assign(searchIcon.style, styles.searchIcon)
Object.assign(countryWrapper.style, styles.countryWrapper)

// Generating colors for some elements
const randomColorInfoGenerator = () => {
    const letters = "0123456789ABCDEF"
    let newColor = "#"

    for (let i = 0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() * 16)]
    }

    return newColor
}

// Generation countries
const generateCountries = (array, wordPattern, anyWordOption, isSort) => {
    const wordPatternCountries = array.filter(country => country.name.toLowerCase().startsWith(wordPattern))
    const anyWord = array.filter(country => country.name.toLocaleLowerCase().includes(wordPattern))

    if (isSort) {
        wordPatternCountries.sort((a, b) => {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0
        })

        anyWord.sort((a, b) => {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0
        })

        array.sort((a, b) => {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0
        })
    } else {
        wordPatternCountries.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0
        })

        anyWord.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0
        })

        array.sort((a, b) => {
            if (a.name > b.name) { return -1; }
            if (a.name < b.name) { return 1; }
            return 0
        })
    }

    if (anyWordOption === true) {
        startText.textContent = 'Countries starting with '
        countText.textContent = ' are '
        wordPatternText.textContent = wordPattern.toUpperCase()
        wordPatternNum.textContent = anyWord.length
        wordPatternText.style.color = randomColorInfoGenerator()
        wordPatternNum.style.color = randomColorInfoGenerator()

        for (let i = 0; i < anyWord.length; i++) {
            const countrySquare = document.createElement('div')
            countryWrapper.appendChild(countrySquare)
            countrySquare.textContent = `${anyWord[i].name}`
            countrySquare.className = `country-item`
            Object.assign(countrySquare.style, styles.country)
        }

    } else if (wordPatternCountries.length > 0) {
        startText.textContent = 'Countries starting with '
        countText.textContent = ' are '
        wordPatternText.textContent = wordPattern.toUpperCase()
        wordPatternNum.textContent = wordPatternCountries.length
        wordPatternText.style.color = randomColorInfoGenerator()
        wordPatternNum.style.color = randomColorInfoGenerator()

        for (let i = 0; i < wordPatternCountries.length; i++) {
            const countrySquare = document.createElement('div')
            countryWrapper.appendChild(countrySquare)
            countrySquare.textContent = `${wordPatternCountries[i].name}`
            countrySquare.className = `country-item`
            Object.assign(countrySquare.style, styles.country)
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            const countrySquare = document.createElement('div')
            countryWrapper.appendChild(countrySquare)
            countrySquare.textContent = `${array[i].name}`
            countrySquare.className = `country-item`
            Object.assign(countrySquare.style, styles.country)
        }
    }
}

// Function for removing all generated square countries before created new
const cleanCountries = () => {
    const getCountryItems = document.querySelectorAll('.country-item')
    getCountryItems.forEach(item => item.remove())
}

// Fetching countries data
let dataFromLocalStorage = null
if (localStorageData) {
    dataFromLocalStorage = JSON.parse(localStorageData)
    console.log(dataFromLocalStorage)
    generateCountries(dataFromLocalStorage)
    subtitle.textContent = `total numbers of countries: ${dataFromLocalStorage.length}`
} else {
    fetch(countriesAPI)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const dataForStorage = JSON.stringify(data, undefined, 4)
            localStorage.setItem('storageData', dataForStorage)
            generateCountries(data)
            subtitle.textContent = `total numbers of countries: ${data.length}`
        })
        .catch(error => console.error(error))
}

// Adding eventListeners
input.addEventListener('input', key => {
    let words = input.value
    cleanCountries()
    generateCountries(dataFromLocalStorage, words.toLocaleLowerCase(), isAnyWord, isSortZA)
    console.log(words)
})

anyWordButton.addEventListener('click', () => {
    isAnyWord = true
    Object.assign(anyWordButton.style, styles.activeButton)
    Object.assign(startingWordButton.style, styles.nonActiveButton)
})

startingWordButton.addEventListener('click', () => {
    isAnyWord = false
    Object.assign(startingWordButton.style, styles.activeButton)
    Object.assign(anyWordButton.style, styles.nonActiveButton)
})

sortButton.addEventListener('click', () => {
    if (isSortZA === true) {
        isSortZA = false
    } else {
        isSortZA = true
    }

    if (isSortZA) {
        Object.assign(sortButton.style, styles.activeButton)
        sortButton.textContent = 'Z\nA'
    } else {
        isSortZA = false
        Object.assign(sortButton.style, styles.nonActiveButton)
        sortButton.textContent = 'A\nZ'
    }

    cleanCountries()
    generateCountries(dataFromLocalStorage, input.value, isAnyWord, isSortZA)
})