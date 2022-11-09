const adress = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export default async function ReceiveData(){
    return fetch(adress)
    .then((data) => {
      if (data.ok) return data.json()
    })
}