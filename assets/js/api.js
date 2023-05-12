async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/dwlz/js-developer-portfolio/projeto/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

