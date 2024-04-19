var first_player_turn=1;
var a='X';
var b='O';
var f='first';
var s='second';
  document.getElementById("a1").disabled = true;
  document.getElementById("a2").disabled = true;
  document.getElementById("a3").disabled = true;
  document.getElementById("a4").disabled = true;
  document.getElementById("a5").disabled = true;
  document.getElementById("a6").disabled = true;
  document.getElementById("a7").disabled = true;
  document.getElementById("a8").disabled = true;
  document.getElementById("a9").disabled = true;
  document.getElementById("restart").disabled = true;

window.onload = function() {
      var reloading = sessionStorage.getItem("reloading");
      if (reloading) {
          sessionStorage.removeItem("reloading");
        starting();
      }
  }

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function starting()
{
  f=prompt("Enter first player name");
  if(f==null ||f=='')
  {
    window.alert("Please enter name to start the game!");
    console.log(f);
    return;
  }
  s=prompt("Enter second player name");
  if(s==null||s=='')
  {
    window.alert("Please enter name to start the game!");
    console.log(s );
    return;
  }
  document.getElementById("a1").disabled = false;
  document.getElementById("a2").disabled = false;
  document.getElementById("a3").disabled = false;
  document.getElementById("a4").disabled = false;
  document.getElementById("a5").disabled = false;
  document.getElementById("a6").disabled = false;
  document.getElementById("a7").disabled = false;
  document.getElementById("a8").disabled = false;
  document.getElementById("a9").disabled = false;
  document.getElementById("restart").disabled = false;
}
function fun1()
{
  if(first_player_turn)
  document.getElementById("a1").innerHTML=a;
  else
  document.getElementById("a1").innerHTML=b;

  document.getElementById("a1").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun2()
{
  if(first_player_turn)
  document.getElementById("a2").innerHTML=a;
  else
  document.getElementById("a2").innerHTML=b;

  document.getElementById("a2").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun3()
{
  if(first_player_turn)
  document.getElementById("a3").innerHTML=a;
  else
  document.getElementById("a3").innerHTML=b;

  document.getElementById("a3").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun4()
{
  if(first_player_turn)
  document.getElementById("a4").innerHTML=a;
  else
  document.getElementById("a4").innerHTML=b;

  document.getElementById("a4").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun5()
{
  if(first_player_turn)
  document.getElementById("a5").innerHTML=a;
  else
  document.getElementById("a5").innerHTML=b;

  document.getElementById("a5").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun6()
{
  if(first_player_turn)
  document.getElementById("a6").innerHTML=a;
  else
  document.getElementById("a6").innerHTML=b;

  document.getElementById("a6").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun7()
{
  if(first_player_turn)
  document.getElementById("a7").innerHTML=a;
  else
  document.getElementById("a7").innerHTML=b;

  document.getElementById("a7").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun8()
{
  if(first_player_turn)
  document.getElementById("a8").innerHTML=a;
  else
  document.getElementById("a8").innerHTML=b;

  document.getElementById("a8").disabled = true;
  first_player_turn=first_player_turn?0:1;
}
function fun9()
{
  if(first_player_turn)
  document.getElementById("a9").innerHTML=a;
  else
  document.getElementById("a9").innerHTML=b;

  document.getElementById("a9").disabled = true;
  first_player_turn=first_player_turn?0:1;
}

function checkwin()
{
  document.getElementById("start").disabled = true;
  const possible=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  var values=new Array(8);
  values[0]=document.getElementById("a1").innerHTML;
  values[1]=document.getElementById("a2").innerHTML;
  values[2]=document.getElementById("a3").innerHTML;
  values[3]=document.getElementById("a4").innerHTML;
  values[4]=document.getElementById("a5").innerHTML;
  values[5]=document.getElementById("a6").innerHTML;
  values[6]=document.getElementById("a7").innerHTML;
  values[7]=document.getElementById("a8").innerHTML;
  values[8]=document.getElementById("a9").innerHTML;

  for(var i=0;i<8;i++)
  {
    var a=values[possible[i][0]-1];
    var b=values[possible[i][1]-1];
    var c=values[possible[i][2]-1];
    if((a=='X' && b=='X' && c=='X')||(a=='O' && b=='O' && c=='O'))
    {
      if(first_player_turn)
      {
        document.getElementById('ans').innerHTML = s+" won !!";
        s='';
        changeColor(possible[i][0],possible[i][1],possible[i][2]);
        // window.alert('Second player won');
      }
      else{
        document.getElementById('ans').innerHTML = f+" won !!";
        f='';
        changeColor(possible[i][0],possible[i][1],possible[i][2]);
        // window.alert('First player won');
      }

      document.getElementById("a1").disabled = true;
      document.getElementById("a2").disabled = true;
      document.getElementById("a3").disabled = true;
      document.getElementById("a4").disabled = true;
      document.getElementById("a5").disabled = true;
      document.getElementById("a6").disabled = true;
      document.getElementById("a7").disabled = true;
      document.getElementById("a8").disabled = true;
      document.getElementById("a9").disabled = true;

      return;
    }
  }
  var cnt=0;
  for(var i=0;i<9;i++)
  {
    if(values[i]!='X' && values[i]!='O')
    cnt++;
  }
  if(cnt==0)
  {
    document.getElementById('ans').innerHTML = "Match Is TIE !!";
    // window.alert('Match Is TIE!!');
    return;
  }
}

function changeColor(a,b,c)
{
  if(a==1||b==1||c==1)
  document.getElementById("a1").style.background='green';
  if(a==2||b==2||c==2)
  document.getElementById("a2").style.background='green';
  if(a==3||b==3||c==3)
  document.getElementById("a3").style.background='green';
  if(a==4||b==4||c==4)
  document.getElementById("a4").style.background='green';
  if(a==5||b==5||c==5)
  document.getElementById("a5").style.background='green';
  if(a==6||b==6||c==6)
  document.getElementById("a6").style.background='green';
  if(a==7||b==7||c==7)
  document.getElementById("a7").style.background='green';
  if(a==8||b==8||c==8)
  document.getElementById("a8").style.background='green';
  if(a==9||b==9||c==9)
  document.getElementById("a9").style.background='green';

}
