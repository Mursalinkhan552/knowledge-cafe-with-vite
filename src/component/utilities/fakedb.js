

const addToDb = (title) => {
    let blogsValue;
    // get the blogs value from local storage
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogsValue = JSON.parse(storedBlogs);

        const quantity = blogsValue[title]
        if (quantity) {
            const newQuantity = quantity + 1;
            blogsValue[title] = newQuantity;
        }
        else {
            blogsValue[title] = 1;
        }
    }
    else {
        blogsValue = {};
    }


    localStorage.setItem('blogs', JSON.stringify(blogsValue))
    return blogsValue;
}



export { addToDb }