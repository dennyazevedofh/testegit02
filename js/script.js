function closeModal(){
    c('.modelsWindowArea').style.opacity = 0; //criando uma animação
    setTimeout(()=> {
        c('.modelsWindowArea').style.display = 'none'; //fechando a janela, sem Timeout, não vemos o efeito
    }, 500);
    //mostrar o funcionamento via console do navegador, antes de atribuir aos botões
}

cs('.modelsInfo--cancelButton, .modelsInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

c('.modelsInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1) {
        modalQt--;
        c('.modelsInfo--qt').innerHTML = modalQt;
    }
});

c('.modelsInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    c('.modelsInfo--qt').innerHTML = modalQt;
});
