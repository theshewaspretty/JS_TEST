let isStarted = false;

const qwe = () => {

    if(isStarted === false) {
        isStarted = true
        const qweqwe = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
        document.getElementById("test").innerText = qweqwe
        document.getElementById("test").style.color= "#" + qweqwe 
        let time = 100
        
        setInterval(function(){
            if(time >= 0) {
                let min = Math.floor( time /60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("test1").innerText = min + sec
                time = time -1
            } else {
                document.getElementById("test1").disabled = true
                isStarted=false
            }
            
        }, 1000)
    } else {
}
}

const check = function() {
    let email
}