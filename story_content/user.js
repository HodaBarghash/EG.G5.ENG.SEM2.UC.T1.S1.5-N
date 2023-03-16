function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gugDvF7L6W":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwRc0E-lE77P0tJfIb_duGp0nVqTm8LkNRI_r6gu0gashig5uiiJtViFs12oWkixvxGTA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

