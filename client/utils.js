// Convert an object of keys into an array
export const dataToArray = (data) => { return Object.keys(data) }

// Format addresses to names (ability-scores => Ability Scores)
export const formatLink = (text) => {
    const spaced = text.replace("-", " ")
    const words = spaced.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    return words
}

// Get the last paramater of a URL
export const getLastParam = (url, count) => {
    return url.split('/').slice(-count).join('/')
}
