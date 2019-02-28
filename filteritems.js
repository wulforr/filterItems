//array of items
//here each item is an object
function item(name,category,type,src)
{
    this.name=name;
    this.category=category;
    this.type=type;
    this.src = src;
}
var item1 = new item('Chicken Masala','non-veg','maincourse','1.jpeg');
var item2 = new item('Tawa Chicken','non-veg','maincourse','2.jpeg');
var item3 = new item('Tandoori Chicken','non-veg','starter','3.jpeg');
var item4 = new item('Chicken 65','non-veg','starter','4.jpeg');
var item5 = new item('Soya Chaap','veg','starter','5.jpeg');
var item6 = new item('Paneer Tikka','veg','starter','6.jpeg');
var item7 = new item('Chicken Biryani','non-veg','Rice','7.jpeg');
var item8 = new item('Mutton Biryani','non-veg','Rice','8.jpeg');
var item9 = new item('Veg Biryani','veg','Rice','9.jpeg');
var item10 = new item('Pulao','veg','Rice','10.jpeg');
var item11 = new item('Paneer Butter Masala','veg','maincourse','11.jpeg');
var item12 = new item('Dal Makhani','veg','maincourse','12.jpeg');

var arr=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12];
var arr1=[];
var arr3=[];

//selecting all image divs from html
var divItems = document.querySelectorAll(".items");
//to display the images of each food
function displayAll(){
for(var i=0;i<divItems.length;i++)
{
    divItems[i].style.display="block";
    divItems[i].style.backgroundImage = "url(" + arr[i].src + ")";
    divItems[i].textContent=arr[i].name;
}
}
displayAll();
//functionality of search 

var search=document.getElementById("search");
search.addEventListener("click" ,function(){
    arr1=[];
    
    var txt = document.querySelector("input[type='text']").value;
    var re = new RegExp(txt, "gi");
    
    for(i=0;i<arr.length;i++)
    {
       
        if(re.test(arr[i].name))
        {
            arr1.push(arr[i]);
        }
    }
    var j=0;
    for(i=0;i<arr1.length;i++)
    {
        divItems[i].style.display="block";
        divItems[j].style.backgroundImage = "url(" + arr1[i].src + ")";
        j++;
    }
    for(i=j;i<divItems.length;i++)
    {
        divItems[i].style.display = "none";
    }

})
var categorySet = false;

//filtering according to category
function categoryFilter(cat)
{
    arr1=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].category == cat)
        {
            arr1.push(arr[i]);
        }
    }
    var j=0;
    for(i=0;i<arr1.length;i++)
    {
        divItems[i].style.display="block";
        divItems[j].style.backgroundImage = "url(" + arr1[i].src + ")";
        j++;
    }
    for(i=j;i<divItems.length;i++)
    {
        divItems[i].style.display = "none";
    }
     categorySet=true;
}

//filtering according to type
function typeFilter(typ){
     arr2=[];
    if(categorySet==false)
    { 
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].type == typ)
        {
            arr2.push(arr[i]);
        }
    }
    var j=0;
    for(i=0;i<arr2.length;i++)
    {
        divItems[i].style.display="block";
        divItems[j].style.backgroundImage = "url(" + arr2[i].src + ")";
        j++;
    }
    for(i=j;i<divItems.length;i++)
    {
        divItems[i].style.display = "none";
    }
}
    else{
        for(i=0;i<arr1.length;i++)
    {
        if(arr1[i].type == typ)
        {
            arr2.push(arr1[i]);
        }
    }
    var j=0;
    for(i=0;i<arr2.length;i++)
    {
        divItems[i].style.display="block";
        divItems[j].style.backgroundImage = "url(" + arr2[i].src + ")";
        j++;
    }
    for(i=j;i<divItems.length;i++)
    {
        divItems[i].style.display = "none";
    }
    }
}
//setting border of the filter buttons
function borderStyle(){
    starterFilter.style.border="2px solid black";
    maincourseFilter.style.border="2px solid black";
    riceFilter.style.border="2px solid black";
    allFilter.style.border="2px solid black";
    document.querySelector("input[type='text']").value = "";
}
//functionality of filter buttons
var allFilter= document.getElementById("allFilter");
var vegFilter= document.getElementById("vegFilter");
var nonvegFilter = document.getElementById("nonvegFilter");
var starterFilter = document.getElementById("starterFilter");
var maincourseFilter = document.getElementById("maincourseFilter");
var riceFilter = document.getElementById("riceFilter");

allFilter.addEventListener("click",function(){
    displayAll();
    borderStyle();
    vegFilter.style.border="2px solid black";
    nonvegFilter.style.border="2px solid black";
    allFilter.style.border="2px solid red";
})
vegFilter.addEventListener("click",function()
{
    borderStyle();
    vegFilter.style.border="2px solid red";
    nonvegFilter.style.border="2px solid black";
    categoryFilter("veg");
})
nonvegFilter.addEventListener("click",function()
{
    borderStyle();
    vegFilter.style.border="2px solid black";
    nonvegFilter.style.border="2px solid red";
    categoryFilter("non-veg");
})
starterFilter.addEventListener("click",function()
{
    borderStyle();
    starterFilter.style.border="2px solid red";
    typeFilter("starter");
})
maincourseFilter.addEventListener("click",function()
{
    borderStyle();
    maincourseFilter.style.border="2px solid red";
    typeFilter("maincourse");
})
riceFilter.addEventListener("click",function()
{
    borderStyle();
    riceFilter.style.border="2px solid red";
    typeFilter("Rice");
})
var modal = document.getElementById("modal");
var modalContent = document.getElementById("modalContent");
var close = document.getElementById("close");
var cartList = document.getElementById("cartList");


for(i=0;i<divItems.length;i++)
{ 

    divItems[i].addEventListener("click",function(i){
        modal.style.display = "block";
        modalContent.style.border ="2px solid blue";
        modalContent.style.backgroundImage =  this.style.backgroundImage;
        arr3.push(this.textContent);
        close.style.display="block";
        var newItem = document.createElement("div");
        var t  = document.createTextNode(arr3[i].category);
        newItem.appendChild(t);
        cartList.appendChild(newItem);
    })
}
close.addEventListener("click",function(){
    modal.style.display = "none";
    close.style.display = "none";
})


//functionality of cart
var cart= document.getElementById("cart");
cart.addEventListener("click",function()
{
    for(i=0;i<arr3.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j].name==arr3[i])
            {
                arr3[i] = arr[j];
            }
        }
        
    }
    cartList.style.display="block";

})