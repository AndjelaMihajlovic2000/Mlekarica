
import './App.css';
import NavBar from "./components/NavBar";
import{BrowserRouter,Route,Routes} from "react-router-dom";
import {useState} from "react";
import Pocetna  from "./components/Pocetna";
import SirStranica from "./components/SirStranica";
import Narudzbine from "./components/Narudzbine";

function App() {

  const [sirevi, setSirevi]= useState([
    {id: 1,
            naziv: "Somborski koziji sir",
            proizvodjac: "Mlekara Sombor",
            dodatak: "lavanda",
            opis:"„Sveukupno kravlje i kozje mleko imaju slične količine masti, ali molekuli masti koje se\n" +
                "\n" +
                "nalaze u kozjem mleku su manji i lakši za varenje. U poređenju sa kravljim mlekom,\n" +
                "\n" +
                "kozje mleko ima veći udeo masnih kiselina srednjeg lanca, kao što su kaproična, kaprilna i kaprinska kiselina. Istraživanja su pokazala da ove masne kiseline podržavaju energetski metabolizam i da su lako probavljive, čak i kod ljudi koji teško metaboliziraju masti. Takođe, ove masne kiseline su jedan od razloga specifičnog ukusa kozjeg sira.\n" +
                "\n" +
                "Kaprilna kiselina u kozjem mleku i siru ima antibakterijska, antivirusna i antiinflamatorna dejstva. Ova kiselina je dobra u borbi protiv gljivičnih i kvasnih infekcija, poput kandide, infekcije mokraćnih puteva, akni i probavnih problema.\n" +
                "\n" +
                "\Kozji sir je bogat proteinima koji se lako i brzo sagorevaju, čime obezbeđuju brz oporavak mišića nakon napornog treninga i drugih fizičkih aktivnosti. Najzastupljeniji protein je kazein. Kazein je nerastvorljivi protein koji naše telo snabdeva svim potrebnim amino-kiselinama. Kazein ima dva oblika: A1 i A2 beta-kazein. n" +
                "\n" +
                "\A1 beta-kazein je čest alergen i mnogi ljudi ne mogu da ga svare. Kozje mleko i sir sadrže isključivo lakše probavljivi A2 beta-kazein. Zbog toga je, kada se posmatra sadržaj proteina, kozje mleko najbliže čovekovom mleku. Manje proteina u odnosu na kravlji sir, kozjem siru daje glatku i kremastu strukturu.n" ,
            narudzbina:0
   },
   {
    "id": 2,
    "naziv": "Zlatarski koziji sir",
    "proizvodjac": "Zlatno vrelo",
    "dodatak": "borovnica",
    "opis":"„Zlatarski sir, koji spada u grupu belih sireva, proizvodi se u seoskim domaćinstvima na sad već tradicionalan način. \n" +
        "\n" +
        "Planinke u pomuženo mleko dodaju maju a nakon jednog sata kroz masu se prođe kašikom kako bi se surutka što bolje odvojila od sira. Onda se sačeka još jedan sat i sir se stavlja u gazu u kojoj opet stoji još jedan sat. \n" +
        "\n" +
        " Onda se, još uvek u gazi, sir stavlja pod drveni krug koji se pritisne kamenom i tako stoji 4 do 5 sati. Posle toga se seče na kriške, debljine do jednog centimetra, slaže u kante i redom soli. Sir se drži na toplom oko 40 do 45 dana dok ne sazri.\n" +
        "\n" +
        "Sela u Novovaroškoj opštini su: Akmačići, Amidžići, Božetići, Brdo, Bukovik, Debelja, Draževići,Drmanovići, Gornje Trudovo, Komarani, Ljepojevići, Miševići, Radijevići, Tisovica, Trudovo, Vilovi i Štitkovo.\n" +
        "\n" +
        "\Za proizvodnju Zlatarskog sira koristi se sveže, punomasno  mleko, koje mora da odgova zahtevima Pravilnika o kvalitetu sirovog mleka (“Sl. glasnik RS”, br. 21/2009). Odnosno sirovo mleko za proizvodnju Zlatarskog sira mora da ima, svojstven izgled boju i miris./n" +
        "\n" +
        "Proizvodnja mleka za pripremu Zlatarskog sira se odvija na definisanom geografskom području, o čemu proizvođači vode evidenciju.\n",
    "narudzbina":0
},
{
  "id": 3,
  "naziv": "Dimljeni koziji sir",
  "proizvodjac": "Carpe diem",
  "dodatak": "zalfija",
  "opis":"„Dimljeni kozji tvrdi sir nije sir koji ćete lako pronaći. Retko koji poizvođač sireva se odluči za ovakav tip proizvoda. \n" +
      "\n" +
      "Jedan od glavnih razloga je što je potrebno mnogo mleka za proizvodnju. Uglavnom, za kilogram mekog kravljeg sira potrebno je oko 4 l mleka, a za kilogram mekog kozijeg sira oko 7 litara mleka. \n" +
      "\n" +
      "oličine mleka postaju veće, što je sir tvrđi, što je duže zrenje – a pogotovo ako se sir dimi prirodnim putem na bukovom drvetu.\n" +
      "\n" +
      "Jasno je već da je koza je mala životinja i da je potrebno imati puno koza, ako se odlučite da ozbiljnije proizvodite bilo kakav koziji sir, pogotovo tvrdi. Takođe, kravlje mleko masnije i lakše je dobiti sir s više masti – dok su koziji sirevi napravljeni od mleka s manje masnoće, pa se više treba potruditi oko ukusa i teksture.\n" +
      "\n" +
      "Upravo iz ovih razloga, kad kupujete kozije sireve, vodite računa da oni budu od 100% kozijeg mleka. Događa se, zbog različitih procenata masnoće i cene mleka, da se tokom proizvodnje sira mešaju kravlje i kozije mleko.\n" +
      "\n" +
      "Dalje, brojke kažu da je za kilogram kravljeg kačkavalja potrebno oko 12 litara mleka. Isto toliko kozijeg mleka je potrebno da se napravi i kilogram dimljenog tvrdog kozijeg sira. Naravno da je bitno razlikovati tvrdi sir i kačkavalj. \n",
  "narudzbina":0
},
{
  "id": 4,
  "naziv": "Koziji trapist",
  "proizvodjac": "Sir za svaki dan",
  "dodatak": "bez dodatka",
  "opis":"„Kozji trapist je polutvrdi sir, napravljen od pasterizovanog kozjeg mleka. Ima finu, gipku masu, nije rastresit i lako se seče, topi i ima blagu aromu.\n" +
      "\n" +
      "Poreklo ovog sira je Francuska, gde su ga prvi počeli praviti monasi iz reda trapisti, pa je po njima i dobio ime. Trapist u sebi sadrži male, retko neravnomerno raspoređene rupice.\n" +
      "\n" +
      "Celokupni proces započinje time što nakon muže mleko stiže u prostoriju gde se prerađuje i odmah dva puta procedi, a zatim pasterizuje i hladi. \n" +
      "\n" +
      "Kada se temperatura spusti na određeni nivo za sirenje, dodaje se bakterijska kultura. Čim se mleko podsiri, gruš se seče i ostavlja na dozrevanje, kako bi se prosušio i dobilo sirno zrno, a potom se cedi, odvaja surutka i stavlja u kalupe na presovanje.\n" +
      "\n" +
      "Prilikom vađenja iz kalupa sir se soli i prebacuje u salamuru na par sati, zatim se dosušuje i ide dalje na zrenje.\n" +
      "\n" +
      "Različita vrsta zahteva različitu tehnologiju proizvodnje i ona se pre svega bazira na drugačijoj temperaturi, kulturi bakterija, dužini zrenja gruša, ceđenja i presovanja. Od svih artikala najteže je napraviti trapist, jer ima najkomplikovaniju recepturu.\n",
  "narudzbina":0
},
{
  "id": 5,
  "naziv": "Mladi koziji sir",
  "proizvodjac": "Biomlek",
  "dodatak": "bez dodatka",
  "opis":"„Mladi kozji sir je poseban zbog fine doze kiselosti i teksture. Najpoznatije vrste kozjih sireva potiču iz doline reke Loare. \n" +
      "\n" +
      " Fino se slažu s osvežavajućim, aromatičnim belim vinima, ali idu i uz ona slatkasta. Dobro idu uz jabuke, kruške, cveklu i reducirano jabukovo sirće.\n" +
      "\n" +
      "Zanimljivo je da se kozji sirevi često služe sa različitim džemovima, čatnijem i voćnim kompotima s alkoholom.\n" +
      "\n" +
      "Mlade vrste kozjeg sira su pogodne za termičku obradu, kao i za fina, lagana predjela. Stariji, zreli kozji sirevi se poslužuju kao lagane zakuske s voćem. \n" +
      "\n" +
      "Kozji sir ima visoku nutritivnu vrednost, lakše je probavljiv, ima manje kalorija i masnoće u odnosu na druge sireve, a bogat je proteinima, kalcijumom, ima riboflavina i vitamina B2.\n" +
      "\n" +
      " Dok najveći deo mlečnih masti i proteina kazeina ostaje u siru, najveći deo laktoze, kao i albumina i globulina ostaje u surutki. Kozja surutka sadrži 16 vrsta proteina, osam minerala, sedam vitamina, 23 esencijalne amino-kiseline, do 11 enzima i mnoge druge materije neophodne za zdravlje.\n",
  "narudzbina":0
},]);

const [sireviPrikaz,setSireviPrikaz]= useState(sirevi);
const [sireviNarudzbine,setSireviNarudzbine]= useState([]);
const [brojSireva,setBrojSireva]= useState(0);

const [sirStranica,setSirStranica]=useState(sirevi[0]);

function dodajNaListu(id){

  const sirevi2=[...sirevi];
  for (let i =0; i< sirevi2.length;i++){
    if(sirevi2[i].id===id){
      sirevi2[i].narudzbina=1;
      setBrojSireva(brojSireva+1);
      break;
    }
  }
  refreshPage(sirevi2);
}
function ukloniSaListe(id){

  const sirevi2=[...sirevi];
  for(let i=0;i<sirevi2.length;i++){
      if(sirevi2[i].id===id){
          sirevi2[i].narudzbina=0;
          setBrojSireva(brojSireva-1);
          break;
        }
    }
    refreshPage(sirevi2);
  }

function refreshPage(sirevi){
    setSirevi(sirevi);
    setSireviPrikaz(sirevi);
    osveziKorpu();
}
function pronadjiSireve(e){
  let novi=[];
  sirevi.forEach((sir)=>{
      if(sir.naziv.toLowerCase().indexOf(e.target.value.toLowerCase())>-1){
          novi.push(sir)
      }
  })
  setSireviPrikaz(novi);
}

function osveziKorpu(){
  let sireviP=sirevi.filter((sir)=>sir.narudzbina===1);
  setSireviNarudzbine(sireviP);
}




  return (
   <BrowserRouter>
    <NavBar brojSireva={brojSireva} pronadjiSireve={pronadjiSireve}/>
    <Routes>
      <Route path='/' element={<Pocetna sirevi={sireviPrikaz}
                                dodajNaListu={dodajNaListu}
                                ukloniSaListe={ukloniSaListe}
                                setSirStranica={setSirStranica}/>}/>

      <Route path ='/sir' element={<SirStranica sir={sirStranica}/>}/>  

      <Route path='narudzbina' element={<Narudzbine sirevi={sireviNarudzbine}/>}/>  
    </Routes>
   </BrowserRouter>
  );
}

export default App;
