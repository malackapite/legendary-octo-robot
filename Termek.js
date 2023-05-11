export class Termek {
    #adat
    #divElem
    #buttonElem

    constructor(adat, szuloElem) {
        this.#adat = adat
        szuloElem.append(`
        <div class="card" style="width: 18rem;">
            <img src="https:http.cat/200" class="card-img-top" alt="macska">
            <div class="card-body">
                <h5 class="card-title">${adat.nev}</h5>
                <p>Kor: ${adat.kor} 💩</p>
                <a class="btn btn-primary">Kednecekhez adás</a>
            </div>
        </div>
        `)
        this.#divElem = szuloElem.children(".card:last-child")
        this.#buttonElem = this.#divElem.children("div").children("a:last-child")
        this.#buttonElem.on("click", () => {
            this.clickTrigger()
        })
    }

    get adat() {
        return this.#adat
    }

    clickTrigger() {
        let esemeny = new CustomEvent("selectElem", { detail: this })
        window.dispatchEvent(esemeny)
    }
}