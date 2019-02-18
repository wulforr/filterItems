//array of items
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
var divItems = document.querySelectorAll(".items");
for(var i=0;i<divItems.length;i++)
{
   
    divItems[i].style.backgroundImage = "url(" + arr[i].src + ")";
}
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
}
//functionality of filter buttons
var vegFilter= document.getElementById("vegFilter");
var nonvegFilter = document.getElementById("nonvegFilter");
var starterFilter = document.getElementById("starterFilter");
var maincourseFilter = document.getElementById("maincourseFilter");
var riceFilter = document.getElementById("riceFilter");

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

