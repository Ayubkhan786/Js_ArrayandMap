let map = new Map();
let num =100;
for(let i=1;i<=6;i++)
{
    map.set(i,parseInt(0))

}
let i = 1;
while(i<=num)
{
    let dieroll = Math.floor(Math.random()*6)+1;
    let roll = map.get(dieroll);
    let Res = roll+1;
    map.set(dieroll,Res);
    if (Res ===10)
    {
        console.log("Number has reached 10 times = " + dieroll)
        break;
    }
    i++;
}
console.log(map);
