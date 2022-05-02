function fibo(){
    const num=parseInt(document.getElementById("number").value);
    let n1=0,n2=1,nextterm;

    for(let i=0;i<=num;i++){
        console.log(n1);
    document.getElementById("message").innerText+=n1;
    nextterm=n1+n2;

        n1=n2;

        n2=nextterm;

    }
}
