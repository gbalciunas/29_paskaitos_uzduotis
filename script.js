/* 29 paskaitos (TS10)
Terminas sueina šiandien, 17:00
Instrukcijos
Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

Papildomai

Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.
*/

'use strict'

/* var countrys = [{}, {}, {}, {}, {}] */
var countrys = [
{ country: 'Lietuva', area: 65300, population: 2795680},
{ country: 'Lenkija', area: 312696, population: 38179800},
{ country: 'Ukraina', area: 603550, population: 44405055},
{ country: 'Suomija', area: 338145, population: 5541274},
{ country: 'Moldavija', area: 33846, population: 2597100},

]

/* console.log(countrys)
console.log(countrys[0].country)
console.log(countrys[0].country.toString())
console.log(countrys[0].area)
console.log(countrys[0].population) */




 /* for(var x of countrys){
    console.log(x.country, x.area, x.population) 
} */

// 1 variantas

/* for(var x of countrys){

   
    console.log(`Šalis: ${x.country}, joje gyvena ${(x.population / 1000000).toFixed(2)} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${x.area} km², plotas tenkantis vienam gyventojui: ${((x.area / x.population) * 1000000).toFixed(2)} m².`)
    console.log('#############################################')
} */




// 2 variantas 

 /*for(var x of countrys){

    var populMln = (x.population / 1000000).toFixed(2)
    var areaPer = ((x.area / x.population) * 1000000).toFixed(2)

    console.log(`Šalis: ${x.country}, joje gyvena ${populMln} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${x.area} km², plotas tenkantis vienam gyventojui: ${areaPer} m².`)
    console.log('#############################################')
} 

*/


// 3 variantas

function countrysPopul(){


    var populMln = (x.population / 1000000).toFixed(2)
    var areaPer = ((x.area / x.population) * 1000000).toFixed(2)

    console.log(`Šalis: ${x.country}, joje gyvena ${populMln} mln. gyventojų.`)
    console.log(`Valstybės plotas: ${x.area} km², plotas tenkantis vienam gyventojui: ${areaPer} m².`)
    console.log('#############################################')
} 

for(var x of countrys){
    countrysPopul()
}








/* Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m² */