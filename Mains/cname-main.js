var cartoon1 = {cname:"The Simpsons", creator:"Matt Groening", country:"United States of America", genre:"Animated Sitcom", VA:"Dan Castellaneta as Homer Simpson", html:"<td> <img src = '/Cartoons/TheSimpsons.png' width = '400' height = '300' /> </td><td> <a href = '/Cartoons/TheSimpsons.html'> The Simpsons </a></td><td> Matt Groening </td> <td> United States of America </td><td> Animated Sitcom </td><td> Dan Castellaneta as Homer Simpson </td>"};

var cartoon2 = {cname:"Miraculous: Tales of Ladybug & Cat Noir", creator:"Thomas Astruc", country:"France", genre:"Action, Magical Girl", VA:"Marinette Dupain-Cheng as Ladybug", html:"<td> <img src = '/Cartoons/miraculous.jpg' width = '400' height = '225' /> </td><td> <a href = '/Cartoons/Miraculous.html'> Miraculous: Tales of Ladybug & Cat Noir </a></td><td> Thomas Astruc </td><td> France </td><td> Action, Magical Girl </td><td> Marinette Dupain-Cheng as Ladybug<br>Adrien Agreste as Cat Noir </td>"};

var cartoon3 = {cname:"The Simpsons", creator:"Matt Groening", country:"United States of America", genre:"Animated Sitcom", VA:"Dan Castellaneta as Homer Simpson", html:"<td> <img src = '/Cartoons/FullmetalAlchemist3.jpg' width = '400' height = '275' /> </td><td> <a href = '/Cartoons/FullMetalAlchemist.html'> Fullmetal Alchemist </a></td><td> Shō Aikawa </td><td> Japan </td><td> Adventure, Science Fantasy </td><td> Romi Park as Edward Elric<br>Rie Kugimiya as Alphones Elric </td>"};

var list = [cartoon1, cartoon2, cartoon3];

function sortByName()
{
	var sorting = "default";
	var nameList = new Array();
	for (i = 0; i < list.length; i++)
	{
		nameList.push(list[i].cname);
	}

	if (sorting == "descending")
	{
		nameList.reverse();
		sorting = "ascending";
	}
	else if (sorting == "ascending")
	{
		nameList.sort();
		sorting = "descending";
	}
	else
	{
		nameList.sort();
		sorting = "descending";
	}

	for (j = 0; j < nameList.length; j++)
	{
		var row = "row"+((j+1).toString());
		for (x = 0; x < list.length; x++)
		{
			if (nameList[j] == list[x].cname)
			{
				document.getElementById(row).innerHTML = list[x].html;
			}
		}
	}
}

document.getElementById("name").addEventListener("click", sortByName);