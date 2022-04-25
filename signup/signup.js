function signup(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    const userDetails = {
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        password: form.get("password")  
    }
    console.log(userDetails)
    axios.post('http://localhost:8000/user/signup',userDetails).then(res => {
        if(res.status === 201){
            window.location.href = "../Login/login.html"
            alert('sign up succsefully');
        } else {
            throw new Error('Failed to login')
        }
    }).catch(err => {
        alert('User already exist!! Please Sign In')
        console.log(err,'this is not done');
        alert('User already exist!! Please Sign In')
    })
}