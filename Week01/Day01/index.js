var a;
var b;

a = "Ahmet";
b = 12;

// var ile değişken tanımladığımızda, değişkeni tanımlamadan önce kullanabiliyoruz. Aşağıdaki kullanım hata vermez.
c = [];
var c;

// var ile değişken tanımladığımızda, daha önceden tanımladığımız değişkeni tekrar tanımlayabiliyoruz. Aşağıdaki kullanım hata vermez.
var a = 22;
var a = 25;

// let ile değişken tanımladığımızda ise, değişkeni tanımlamadan önce kullanamayız. Aşağıdaki kullanım hata verir.
//d = 12;
//let d;

// let ile değişken tanımladığımızda, daha önceden tanımladığımız değişkeni tekrar tanımlayamıyoruz. Aşağıdaki kullanım hata verir.
// let a = 22;
// let a = 25;

// var ile tanımlanan değişkene function parantezleri içinde her yerden ulaşılabilir.
// let ve const ile tanımlanan değişkene block parantezi içinde tanımlandığı yerden ulaşılabilir.

// const ile tanımlanan değişkene yeniden değer ataması yapılamaz. Aşağıdaki kullanım hata verir.
// const e = "Ayşe";
// e = "Fatma"

function deneme() {
  let x = 10;
  let y = 2;
  let z = 5;
  let k = 3;

  let a = "Ahmet";
  let b = "Mehmet"

  console.log(x + y)
  console.log(x - y)
  console.log(x * y)
  console.log(x / y)
  console.log(x % y)
  console.log(x++)
  console.log(x--)
  console.log(++x)
  console.log(--x)

  console.log(x * (y / z))

  // a ve b değişkenlerinin alfabetik sıralamasına göre kıyaslamalarını yapar.
  console.log(a > b)

  console.log([] === [])
  console.log({} === {})
  console.log(1 == '1')
  console.log(1 === '1')

  console.log(1 + 2 + 3 + '4' + (5 + 6))

  console.log((x < y) && (z > k))
  console.log((x < y) || (z > k))

  console.log(a)
  console.log(!a)
  console.log(!aa)

}

deneme()


