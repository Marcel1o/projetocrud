 const itens = [ 
    {codigo:"001",nome:"Arroz 1kg",preço:4.50},
    {codigo:"002",nome:"Café 1kg",preço:6.50},
    {codigo:"003",nome:"Leite 1kg",preço:4.80},
    {codigo:"004",nome:"Feijão 1kg",preço:7.50},
    {codigo:"005",nome:"Açúcar 1kg",preço:3.50},
    {codigo:"006",nome:"Macarrão 1kg",preço:4.30}]
    var table = document.getElementById("tb")

    itens.forEach((item,index)=>{ 
        var row = table.insertRow(-1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)

        cell1.innerHTML = item.codigo
        cell2.innerHTML = item.nome
        cell3.innerHTML = item.preço})
    
    var listaCompras = [{codigo: "", nome:"" ,quantidade:0 , preço:0.0}]
    var tabela = document.getElementById("tb2")
    if(localStorage.getItem("minhaLista")){
        listaCompras = [localStorage.getItem("minhaLista")]    
    console.log(listaCompras)
}

    listaCompras.forEach((item,index)=>{ 
        var row = tabela.insertRow(-1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)

        cell1.innerHTML = item.codigo
        cell2.innerHTML = item.nome
        cell3.innerHTML = item.quantidade
        cell4.innerHTML = item.preço})

    function adicionar(){
        console.log("hehe")
        var descrição = document.getElementById("desc").value
        var quantidade = document.getElementById("quant").value
        console.log("achei não mermão"+descrição)
        itens.forEach((item,index)=>{
            if(descrição == item.codigo || descrição == item.nome){
                listaCompras.push({
                    codigo: item.codigo, nome: item.nome, quantidade: item.quantidade, preço: item.preço 
                })
            localStorage.setItem("minhaLista",{listaCompras})
            console.log(localStorage.getItem("minhaLista"))
        }
        }
        )
    }
