import { reactive } from "vue";
/*   014937b6-3067-435d-8838-7a3ebcdf5c7a
Id getPantry json    */

//Este es el servicio para leer los datos
class JsonbinService {
  jsonbin;
  finnhub;
  exchange;
  constructor() {
    this.jsonbin = reactive([]);
    this.finnhub = reactive([]);
    this.exchange = reactive({ value: 0 });
  }

  getJsonbin() {
    return this.jsonbin;
  }
  getFinn() {
    return this.finnhub;
  }
  getExchange() {
    return this.exchange;
  }
  async fetchJsonbin() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try {
      const url =
        "https://getpantry.cloud/apiv1/pantry/014937b6-3067-435d-8838-7a3ebcdf5c7a/basket/data";
      const fetchAll = await fetch(url);
      const response = await fetchAll.json();
      this.jsonbin.value = response;
      //console.log(this.jsonbin.value);
    } catch (err) {
      console.log(err);
    }
  }
  async fetchFinnhub(e) {
    const results = [];
    for (let i = 0; i < e.length; i++) {
      try {
        const urlFinnhub = `https://finnhub.io/api/v1/quote?symbol=${e[i].simbolo}&token=cf7brsqad3iad4t5uef0cf7brsqad3iad4t5uefg`;
        const response = await fetch(urlFinnhub);
        const jsonFinn = await response.json();
        //console.log(jsonFinn);
        results.push(jsonFinn.c);
      } catch (err) {
        console.log(err);
      }
    }
    this.finnhub.value = results;
    //console.log(this.finnhub.value);
  }
  async fetchExchange() {
    const results = [];
    try {
      const url =
        "https://v6.exchangerate-api.com/v6/b47a987240b7aa7792c91401/latest/USD";
      const responseExchange = await fetch(url);
      const jsonExchange = await responseExchange.json();
      results.push(jsonExchange);
    } catch (err) {
      console.log(err);
    }
    this.exchange.value = results[0].conversion_rates.COP;
    //console.log(this.exchange.value);
  }
}

export default JsonbinService;
