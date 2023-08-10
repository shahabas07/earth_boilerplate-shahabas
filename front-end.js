
const consumption = document.getElementById("consumption")

consumption.onclick = ()=>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Shop only what you need,eat only what you need and always save the left overs. ";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    consumption.style.backgroundColor ="#27ae60"
    climate.style.background="transparent"
    resources.style.background="transparent"
    people.style.background="transparent"
}

climate.onclick = ()=>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')";
    document.getElementById("save").innerText = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    climate.style.backgroundColor ="#27ae60"
    consumption.style.background="transparent"
    resources.style.background="transparent"
    people.style.background="transparent"
}

resources.onclick = ()=>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    document.getElementById("save").innerText = " Do your bit! Never waste food.Rather offer it to people or animals who are in need";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    resources.style.backgroundColor ="#27ae60"
    climate.style.background="transparent"
    consumption.style.background="transparent"
    people.style.background="transparent"
}

people.onclick = ()=>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')";
    document.getElementById("save").innerText = " people";
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Aria";
    people.style.backgroundColor ="#27ae60"
    climate.style.background="transparent"
    resources.style.background="transparent"
    consumption.style.background="transparent"
}