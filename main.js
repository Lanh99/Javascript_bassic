let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
let sum=0;
console.log(`1.Danh sách các sản phẩm:`);
for (let i = 0; i < products.length; i++) {
 
    console.log(`${products[i].name} - ${products[i].price} -${products[i].brand} - ${products[i].count}`);
    sum+=products[i].price *products[i].count;
}
console.log(`2.Tổng tiền các sản phẩm:`, sum);
for (let i = 0; i < products.length; i++) {
    if(products[i].brand=="Apple")
    {
        console.log(`Sản phẩn Apple brand: ${products[i].name}`);
    }
}
for (let i = 0; i < products.length; i++) {
    if(products[i].price>20000000)
    {
        console.log(`Sản phẩm giá trên 20000000 : ${products[i].name}`);
    }
}
let names=[];
for (let i = 0; i < products.length; i++) {
    let ten= products[i].name;
    names=ten.split(' ');  
    for(let j=0; j <names.length; j++)
    {   
        if(names[j]=="Pro")
        console.log(`Sản phẩm có pro:`,products[i].name)
    }
}
a={
    name: "Iphone 5 ",
    price: 3500000,
    brand: "Apple",
    count: 1,
  }
products.push(a);
console.log(`6.Danh sách các sản phẩm mới:`);
console.log(products)

for (let i = 0; i < products.length; i++) {
    if(products[i].brand=="Samsung")
    {
        products.splice(i,1);
    }
}
console.log(`7.Danh sách các sản phẩm đã xóa:`);
console.log(products)
let tien =[];
for (let i = 0; i < products.length; i++) {
    tien.push(products[i].price);
}

td=tien.sort((a, b) => a - b);
let x;
for (let j = 0; j < tien.length; j++) {
    for(let i=0; i< td.length;i++)
    {   
        if(products[i].price == td[j])
        {
            x=products[j];
            products[j]=products[i];
            products[i]=x;
        }
        
    }
}
console.log(`8.Danh sách tăng dần`);
console.log(products)

gd=tien.sort((a, b) => b - a);
for (let j = 0; j < gd.length; j++) {
    for(let i=0; i< products.length;i++)
    {   
        if(products[i].price == gd[j])
        {
            x=products[j];
            products[j]=products[i];
            products[i]=x;
        }
        
    }
}

console.log(`9.Danh sách giảm dần`);
console.log(products)
