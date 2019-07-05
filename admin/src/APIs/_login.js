const url= "http://localhost:3000"
export function login(email,password,history){
    console.log(email,password)
    fetch(`${url}/admin/login`,{
        method:"post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password })
    })
    .then(res=>res.json(),)
    .then(res=>{
        console.log(res)
        if(res.token){
            localStorage.setItem('token',res.token)
        history.push('/')
        }
    })

}
export function logout(){
    localStorage.removeItem('token')
}