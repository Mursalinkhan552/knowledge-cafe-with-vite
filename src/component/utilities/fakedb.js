// get the stored data from local storage

const getStoreBlog = ()=>{
    const storedBlogString = localStorage.getItem('blogs');
    if(storedBlogString){
        return JSON.parse(storedBlogString);
    }
    return [];
}


// save data to the localStorage 
//don't need to export it
const saveToLS = (blogs)=>{
    const stringifiedData = JSON.stringify(blogs);
    localStorage.setItem('blogs',stringifiedData);
}

// add new item to the local storage

const addToLS = (blog)=>{
    const blogs = getStoreBlog();
    blogs.push(blog);
    saveToLS(blogs)
}

export {getStoreBlog,addToLS}