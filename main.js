import { Termekek } from "./Termekek.js";
import { Asszinkron } from "./Asszinkron.js";

$(function () {
    const asszinkron = new Asszinkron();
    asszinkron.adatbe("adat.json", adat => new Termekek(adat.OBJEKTUMLISTA))
})

function beolvasas(adat) {
   // let termekek = new Termekek(adat.OBJEKTUMLISTA)
}