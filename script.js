const clock = document.querySelector('#clock')
setInterval(function(){
    const date = new Date()
    const localtime = date.toLocaleTimeString()
    const banner = document.querySelector("#banner")
    banner.innerHTML = localtime;
},1000)
