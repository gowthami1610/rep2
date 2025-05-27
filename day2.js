const getData=async()=>{
    try{
        const responses=await fetch('https://jsonplaceholder.typicode.com/users')
        const users=await responses.json()
        console.log(users);
            }
            catch(errors){
                console.log('Error: ${error}')
            }
}

getData()