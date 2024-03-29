function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a tag imagem

    const img = document.querySelector('#profile img ')

    // Substituir a imagem

    if(html.classList.contains('light')){

    // Se tiver light mode, adcionar a imagem light

        img.setAttribute('src', 'assets/avatar2.png')
    }else{

    // se tiver sem light mode, manter a imagem normal

        img.setAttribute('src', 'assets/avatar.png')
    }
}