function playerMove(){
	let p = player;

	p.loadMove.current+=Time.deltaTime;

	if (Input.GetKey["a"] && p.pos > 0 && p.loadMove.current >= p.loadMove.max) {
		p.pos--;
		p.loadMove.current = 0;
	}
	if (Input.GetKey["d"] && p.pos < 2 && p.loadMove.current >= p.loadMove.max) {
		p.pos++;
		p.loadMove.current = 0;
	}

	player.x = lerp(player.x, p.newPos[p.pos], 0.1);

	player.transform.translate(0,-player.speed*Time.deltaTime);
	
	camera.moveTo(0,player.y-(300));

	touchPlayerMove();
	

	player.Draw("color", "white");
}

let tdirection = "";
let toldx = 0;
let toldy = 0;
let tnewx = 0;
let tnewy = 0;

function touchPlayerMove()
{
	let p = player;
	for(let i=0; i<Input.touchCount; i++)
	{
		let j = Input.touchPosition[i];

		if (j.x > toldx && j.y == toldy) {
                tdirection="E";
                 tnewx=1;
            }
            else if (j.x == toldx && j.y > toldy) {
                tdirection="S";
                tnewy=-1;
            }
            else if (j.x == toldx && j.y < toldy) {
                tdirection="N";
                tnewy=1;
            }
            else if (j.x < toldx && j.y == toldy) {
                tdirection="O";
                 tnewx=-1;
            }

            if (tdirection=="O" && p.pos > 0 && p.loadMove.current >= p.loadMove.max) {
				p.pos--;
				p.loadMove.current = 0;
			}
			if (tdirection=="E" && p.pos < 2 && p.loadMove.current >= p.loadMove.max) {
				p.pos++;
				p.loadMove.current = 0;
			}
        	
        console.log(tdirection+" touch");
        tdirection="none";
        toldx = j.x;
        toldy = j.y;
        tnewx = j.x;
		tnewy = j.y;

		
	}
}