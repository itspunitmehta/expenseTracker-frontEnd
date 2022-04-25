function signin(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    const userDetails = {
        email: form.get("email"),
        password: form.get("password")  
    }
    console.log(userDetails)
    axios.get('http://localhost:8000/user/signin',userDetails).then(res => {
        if(res.status === 200){
            console.log(res.data);
            // window.location.href = "../Login/login.html"
            // alert('sign up succsefully');
        } else {
            throw new Error('Failed to login')
        }
        
    }).catch(err => {
        alert('User already exist!! Please Sign In')
        console.log(err,'this is not done');
        alert('User already exist!! Please Sign In')
    })
}