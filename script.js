function toggleMode () {
    //alert ("elisa e feia")
   const html = document.documentElement
   html.classList.toggle('light')
     
    const img = document.querySelector ("#profile img")

   if (html.classList.contains("light")){
        img.setAttribute ('src', "./assets/Avatar3.png")
        img.setAttribute ('alt', 'Avatar 3')
    } 
    else {
        img.setAttribute ('src', "./assets/avatar.png")
        img.setAttribute ('alt', 'Avatar')

        
    }
}
