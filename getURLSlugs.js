const getURLSlugs = words => {
    return words.replace(/\s+/g, '-')
                .toLowercase()
}

module.exports = getURLSlugs