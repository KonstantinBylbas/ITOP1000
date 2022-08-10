const adress = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export default async function ReceiveData(){
    return fetch(adress)
    .then((data) => {
      if (data.ok) return data.json()
    })
}