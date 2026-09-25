function calcularMedia() {
    const textonota1 = document.getElementById("nota1").value
    const textonota2 = document.getElementById("nota2").value
    const textonota3 = document.getElementById("nota3").value

    const nota1 = Number(textonota1)
    const nota2 = Number(textonota2)
    const nota3 = Number(textonota3)

    const media = (NOta 1+ nota2 + nota3) / 3
    let situação
    if media>= 7){
        situação = "APROVADO"
    }
    if(media>= 5){
        situação = "RECUPERAÇÃO"
    } else {
        situação = "REPROVADO"
    } 

    const mediaFormatada = media.toFixed(1)
    document.getElementById("resultado").textContent = 
    "Media: + mediaFormatada +" -situação: "situacao