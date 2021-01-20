function send(){
      var x = document.getElementById("name").value;
      var x1 = document.getElementById("email").value;
      var x2 = document.getElementById("body").value;
      if(x == "")
      {
            alert("Please enter your name.");
            username.focus();
            return false;
      }
      else if(x1 == "")
      {
            alert("Please enter a valid email address.");
            email_address.focus();
            return false;
      }
      else if(x2 == "")
      {
            alert("This field is mandatory.");
            message.focus();
            return false;
      }
      else
      {
            alert("Message sent");
      }
      return true;
}
function refer()
{
      location.href="2.html";
}
function refer1()
{
      location.href="3.html";
}
function refer2()
{
      location.href="#bottom1";
}
function refer3()
{
      location.href="#bottom2";
}
var show = document.getElementById("nav-link");
function showSlide()
{
      show.style.left = "0px";
}
function closeSlide()
{
      show.style.left = "-1000px";
}
