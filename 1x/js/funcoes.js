// // utilizaremos algumas funções do JavaScript que merecem atenção especial, são elas:

// // localStorage.setItem(nome, valor): esta função é utilizada para armazenar um valor no local storage. Cada objeto gravado é referenciado por uma chave (nome).
// // localStorage.getItem(nome): por sua vez, o getItem é usado para recuperar um valor armazenado a partir da sua chave identificadora.
// // JSON.stringfy(objeto): para armazenar os dados, utilizaremos o formato JSON e esta função transforma um objeto em string com sintaxe adequado ao JSON.
// // JSON.parse(objeto): já a função parse transforma um item no formato JSON no seu formato original.
// // Criemos, então, nosso arquivo funções.js e nele utilizaremos também a sintaxe jQuery, logo, todo conteúdo deverá ficar no corpo da função que é executada ao carregar a página.
// // Primeiramente, definiremos algumas variáveis globais que serão necessárias para manipular os dados.


// // Listagem 2: definição de variáveis globais

// $(function(){
//     var operacao = "A"; //"A"=Adição; "E"=Edição
//     var indice_selecionado = -1; //Índice do item selecionado na lista
//     var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
//     tbClientes = JSON.parse(tbClientes); // Converte string para objeto
//     if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
//     tbClientes = [];
// });


// // A variável “operacao” será utilizada para definir se o usuário está adicionando ou 
// // editando um registro. “índice_selecionado” servirá para referenciarmos o registro selecionado na tabela. 
// // “tbClientes” é nossa “tabela de clientes” e a iniciamos com o valor recuperado do local storage
// // (salvo com a chave “tbClientes”). 
// // Caso não haja conteúdo, inicializamos a variável como um vetor vazio.
// // Por padrão, a variável “operacao” terá valor “A”, ou seja, caso o usuário digite as informações e clique no botão 
// // para salvar os dados, um novo registro será adicionado, exceto quando tiver clicado em um item na tabela para editá-lo.
// // Agora vamos às funções do CRUD. Utilizaremos 4 funções: Adicionar, Editar, Excluir e Listar. Vejamos o código:   



// // Listagem 3: função Adicionar
// function Adicionar(){
//     var cliente = JSON.stringify({
//         Codigo   : $("#txtCodigo").val(),
//         Nome     : $("#txtNome").val(),
//         Telefone : $("#txtTelefone").val(),
//         Email    : $("#txtEmail").val()
//     });
//     tbClientes.push(cliente);
//     localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
//     alert("Registro adicionado.");
//     return true;
// }


// // Listagem 4: função Editar

// function Editar(){
//     tbClientes[indice_selecionado] = JSON.stringify({
//             Codigo   : $("#txtCodigo").val(),
//             Nome     : $("#txtNome").val(),
//             Telefone : $("#txtTelefone").val(),
//             Email    : $("#txtEmail").val()
//         });//Altera o item selecionado na tabela
//     localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
//     alert("Informações editadas.")
//     operacao = "A"; //Volta ao padrão
//     return true;
// }



// // Listagem 5: função Excluir

// function Excluir(){
//     tbClientes.splice(indice_selecionado, 1);
//     localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
//     alert("Registro excluído.");
// }

// function Listar(){
//     $("#tblistar").html("form.html");
//     $("#tblistar").(
//         "<thead>"+
//         "   <tr>"+
//         "   <th></th>"+
//         "   <th>Código</th>"+
//         "   <th>Nome</th>"+
//         "   <th>Telefone</th>"+
//         "   <th>Email</th>"+
//         "   </tr>"+
//         "</thead>"+
//         "<tbody>"+
//         "</tbody>"
//         );
//     for(var i in tbClientes){
//         var cli = JSON.parse(tbClientes[i]);
//         $("#tblistar tbody").append("<tr>");
//         $("#tblistar tbody").append("<td> "class='btnEditar'" "class='btnExcluir'" </td>");
//         $("#tblistar tbody").append("<td>"+cli.Codigo+"</td>");

//         $("#tblistar tbody").append("<td>"+cli.Nome+"</td>");

//         $("#tblistar tbody").append("<td>"+cli.Telefone+"</td>");

//         $("#tblistar tbody").append("<td>"+cli.Email+"</td>");

//         $("#tblistar tbody").append("</tr>");
//     }
// }


// // Listagem 7: evento onSubmit do form

// $("#frmCadastro").on("submit",function(){
//     if(operacao == "A")
//         return Adicionar();
//     else
//         return Editar();        
// });


// // Listagem 8: evento onClick dos botões Editar

// $("#tbListar").on("click", ".btnEditar", function(){
//     operacao = "E";
//     indice_selecionado = parseInt($(this).attr("alt"));
//     var cli = JSON.parse(tbClientes[indice_selecionado]);
//     $("#txtCodigo").val(cli.Codigo);
//     $("#txtNome").val(cli.Nome);
//     $("#txtTelefone").val(cli.Telefone);
//     $("#txtEmail").val(cli.Email);
// $("#txtCodigo").attr("readonly","readonly");
//     $("#txtNome").focus();
// });


// // Listagem 9: evento onClick dos botões Excluir

// $("#tblistar").on("click", ".btnExcluir", function(){
//     indice_selecionado = parseInt($(this).attr("alt"));
//     Excluir();
//     Listar();
// });













$(function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
    tbClientes = JSON.parse(tbClientes); // Converte string para objeto
    if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbClientes = [];
});
 
function Adicionar(){
    var cliente = JSON.stringify({
        Codigo   : $("#txtCodigo").val(),
        Nome     : $("#txtNome").val(),
        Telefone : $("#txtTelefone").val(),
        Email    : $("#txtEmail").val()
    });
    tbClientes.push(cliente);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
}
 
function Editar(){
    tbClientes[indice_selecionado] = JSON.stringify({
            Codigo   : $("#txtCodigo").val(),
            Nome     : $("#txtNome").val(),
            Telefone : $("#txtTelefone").val(),
            Email    : $("#txtEmail").val()
        });//Altera o item selecionado na tabela
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}
 
function Excluir(){
    tbClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro excluído.");
}
 
function Listar(){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th></th>"+
        "   <th>Código</th>"+
        "   <th>Nome</th>"+
        "   <th>Telefone</th>"+
        "   <th>Email</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbClientes){
        var cli = JSON.parse(tbClientes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td><img src='edit.png' alt='"+i+"'
              class='btnEditar'/><img src='delete.png' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("<td>"+cli.Codigo+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Telefone+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}
 
$("#frmCadastro").on("submit",function(){
    if(operacao == "A")
        return Adicionar();
    else
        return Editar();       
});
 
 
$("#tblListar").on("click", ".btnEditar", function(){
    operacao = "E";
    indice_selecionado = parseInt($(this).attr("alt"));
    var cli = JSON.parse(tbClientes[indice_selecionado]);
    $("#txtCodigo").val(cli.Codigo);
    $("#txtNome").val(cli.Nome);
    $("#txtTelefone").val(cli.Telefone);
    $("#txtEmail").val(cli.Email);
$("#txtCodigo").attr("readonly","readonly");
    $("#txtNome").focus();
});
 
$("#tblListar").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});