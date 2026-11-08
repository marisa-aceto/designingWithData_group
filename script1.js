globe = document.getElementById("globe");

globe.addEventListener("click", function() { 
    globe.style.animation = "globeSpin 5s ease-in-out alternate infinite";
});

globe.addEventListener("dblclick", function() { 
    window.location.href = "index1.html";
});