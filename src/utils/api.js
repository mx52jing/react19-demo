export const randomStr = [
    'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
    'Whether you work on your own or with thousands of other developers, using React feels the same.',
    'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
    'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
    'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

export const getMessage = () => new Promise((resolve) => {
    setTimeout(() => {
        const index = Math.floor(Math.random() * randomStr.length)
        resolve({ value: randomStr[index]} )
    }, 2000)
})


export const fetchUserList = async (count) => {
    const url = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
    const res = await fetch(url)
    return res.json()
}