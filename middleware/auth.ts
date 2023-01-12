export default defineNuxtRouteMiddleware((to,from)=>{
    const token = localStorage.getItem('mystore-token')
    if(to.path==='/cart' || to.path==='/order'){
        if(token){
            return;
        }
        return "/auth/signin";
    }
})