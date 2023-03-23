
function display()
{
    var e=document.getElementById('district-option');
    var getoption=e.options[e.selectedIndex];
    var v="Kanniyakumari";
    var selectedvalue=getoption.value;
    console.log(selectedvalue);
    if(v==selectedvalue)
    {
        document.getElementById('displayspot').style.display="block";
    }

        
}
