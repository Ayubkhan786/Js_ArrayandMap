let map=new Map();
let i =1;
while(i<=12)
{
    map.set(i,parseInt(0));
    i++
}
for(let ind=1;ind<=50;ind++)
{
    let month=Math.floor(Math.random()*12)+1;
    let persons=map.get(month);
    map.set(month,(persons+1));
}
for(let [key,value] of map)
{
    console.log("Month"+" " + key +" : " + value +" Individuals have birthdays");
}