function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="hurricane" && password=="hurricane12")
    {

        window.open("https://1hurricanee.github.io/LoginHurricane/");
        return false;
    }
    else
    {
        alert("Your username or password may be incorrect");
    }

}
