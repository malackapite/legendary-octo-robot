import { Termek } from "./Termek.js"

export class Termekek{
    #lista=[]
    #kedvencek=[]
    constructor(OBJEKTUMLISTA){
        for (let ix = 0; ix < OBJEKTUMLISTA.length; ix++) {
            this.#lista.push(new Termek(OBJEKTUMLISTA[ix],$("main").eq(0)))
        }

        $(window).on("selectElem", event => {

            let selectedElem = event.detail
            if(-1==this.#kedvencek.findIndex(elem => {return elem == selectedElem}))
                this.#kedvencek.push(selectedElem)
            console.log(this.#kedvencek);
        })
    }
}