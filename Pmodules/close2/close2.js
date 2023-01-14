function parent(){

    const message = 'hello boy';

    function child(){
        alert('i am here')
    }
    return child;
}
 const childFN = parent();
 childFN();