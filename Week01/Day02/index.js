// FONKSİYONLAR

// Fonksiyonu tanımlandığı yerden önce çağırmamız Vanilla JS'de bir soruna yol açmaz ancak React, Angular vs hata verecektir
//topla()

function topla() {
  let a = 10;
  let b = 20;
  let toplama = a + b;
  console.log(toplama)
}

// Fonksiyonları değişken tanımlıyormuş gibi de tanımlayabiliriz
const topla2 = () => {
  let a = 10;
  let b = 20;
  let toplama = a + b;
  console.log(toplama)
}

topla2()

// Fonksiyona parametrede verebiliriz
let c = 30;

const topla3 = (c) => {
  let a = 10;
  let b = 20;
  let toplama = a + b + c;
  console.log(toplama)
}

topla3(c);

// Arrow Function tek parametre alıyor ise aşağıdaki gibi tanımlanabilir
const topla4 = c => {
  let a = 10;
  let b = 20;
  let toplama = a + b + c;
  console.log(toplama)
}

// Arrow Function'daki return ifadesi tek satırda yazılabiliyorsa aşağıdaki gibi tanımlanabilir
const kare = a => a * a


// NESNELER
const araba = {
  marka: 'Audi',
  model: "Q7",
  yil: "2010",
  fiyat: "1000000"
}

// String ifadeyi number veri tipine döndürmenin 3 farklı yolu
console.log(Math.floor(araba.fiyat) + 500);
console.log(Number(araba.fiyat) + 500);
console.log(parseInt(araba.fiyat) + 500);


// ARRAY
const liste = ["Audi", "Seat", "Suzuki", "Fiat"]

for (let i = 0; i < liste.length; i++) {
  console.log(i, liste[i])
}

// Objelerin Arrayi
const arabalar = [
  {
    marka: "Audi",
    model: "A3"
  },
  {
    marka: "Seat",
    model: "Ibiza"
  }
]

console.log(arabalar[1].marka)


// KOŞUL İFADELERİ
let a = 25

if (a < 30) {
  console.log(a, "30 dan küçüktür")
}
else {
  console.log(a, "30 dan büyük veya eşittir")
}


// DÖNGÜLER
let b = 0

for (let i = 0; i < 100; i++) {
  b += i
}

console.log("for", b)

let d = 0
let i = 0
while (i < 20) {
  d += i
  i++
}


// DATE İŞLEMLERİ
const date = new Date()

console.log(date.getDate()) // Ayın kaçıncı günü olduğunu belirtir
console.log(date.getDay()) // Haftanın kaçıncı gününde olduğumuzu belirtir

const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
const gun = date.getDay()

console.log(date.getDate() + " " + aylar[date.getMonth()] + " " + date.getFullYear() + " " + gunler[date.getDay()] + " " + date.getHours() + ":" + date.getMinutes());

console.log(date.getTime()) // 1 Ocak 1970 den şu anki tarihe kadar geçen tarihi milisaniye olarak tutar


// ARRAY METHODLARI
const markalar = ["Audi", "Fiat", "Seat", "Suzuki", "Mercedes"]

markalar.push("Opel") // Array'in sonuna eleman ekler
markalar.indexOf("Seat") // Aradığımız elemanın indisini verir
Array.isArray(markalar) // Değişkenin array olup olmadığını kontrol eder
console.log(markalar.length) // Array'in uzunluğunu verir

markalar.map((arac) => {
  console.log(arac)
})

console.log(markalar.sort()) // Array'i alfabetik olarak sıralar
console.log(markalar.reverse()) // Array'i ters çevirir

const sayilar = [1, 2, 4, 9, 12, 0, 3]
console.log(sayilar.some(x => x > 5)) // Array içerisinde 5 ten büyük eleman olup olmadığına bakar 
console.log(sayilar.every(x => x > 5)) // Array içerisindeki elemanların hepsinin 5 ten büyük olup olmadığına bakar 

const text = "Deneme"
console.log(text.length) // Stringin uzunluğunu verir

console.log(markalar.splice(2, 2)) // 2.indisten başlayarak 2 eleman döner

console.log(Math.random()) // 0 ile 1 arasında sayı üretir



