function onClickFunc(){
    var proceed =confirm('Are u sure You Want to delete this Article?');
    if(proceed === false ){
        alert("You pressed Cancel!");
        return false;
    }
}
