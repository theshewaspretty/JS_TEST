// auth func

// let isStarted = false;

// const qwe = () => {

//     if(isStarted === false) {
//         isStarted = true
//         const qweqwe = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
//         document.getElementById("test").innerText = qweqwe
//         document.getElementById("test").style.color= "#" + qweqwe 
//         let time = 100
        
//         setInterval(function(){
//             if(time >= 0) {
//                 let min = Math.floor( time /60)
//                 let sec = String(time % 60).padStart(2, "0")
//                 document.getElementById("test1").innerText = min + sec
//                 time = time -1
//             } else {
//                 document.getElementById("test1").disabled = true
//                 isStarted=false
//             }
            
//         }, 1000)
//     } else {
// }
// }



const check = function() {
    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if (email !=="" && pw1 !=="" && pw2 !=="") {
        document.getElementById("submit").disabled =false

    } else {
        document.getElementById("submit").disabled = true
    }
}

const change1 = () => {
    let p1 = document.getElementById("p1").value
    if(p1.length === 3) {
        document.getElementById("p2").focus()
    }
}