let navItems=document.querySelector(".nav-items")
let nav=document.querySelector('nav')
let align=document.querySelector('.fa-align-justify')
let itemsWidth=$(navItems).outerWidth(true)
let byName=document.getElementById('byName')
let byLet=document.getElementById('byLetter')
let cards=document.querySelectorAll('.cards')
let currentMeal,letter,name,city,item,dish,info,searchItem,randomItem
let mealNames=[];
let category=[];
let areas=[];
let areaMeal=[];
let ingredients=[];
let ing=[];
let catMeals=[];
let mealDetails=[];
let random=[];
let measures=[]
let namerejex = /^[a-zA-Z]{3,}$/;
let passrejeX=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let mailrejex = /^[A-Za-z\d]{2,}[@][a-z]{2,9}\.(com)$/
let agerejex=/^[1-7][0-9]$/
let phonerejex=/^01[0125][0-9]{8}$/
let userName=document.querySelector('.contactName')
let userEmail=document.querySelector('.contactMail')
let userPhone=document.querySelector('.contactPhone')
let userAge=document.querySelector('.contactAge')
let userPass=document.querySelector('.contactPass')
let userREPass=document.querySelector('.contactrePass')



$('nav').css('left',-itemsWidth)
$(document).ready(function()
{
    $('#loading').fadeOut(1000)
})



//navabarfunctions
$(align).click(function()

{

   
    if($('nav').css('left') !=='0px')
    {
        $('nav').animate({'left': '0'},1000)
        $('.open').addClass('fa-times') 
    

    }
    else
    {
      
        $('nav').animate({'left': -itemsWidth},1000)
     
        $('.open').removeClass('fa-times') 
    }
 
})
$('.close').click(function()
{
  $('.inner-layers').addClass('d-none')
  $('.details').addClass('d-none')
})
byName.addEventListener('keyup',function()
{
    names=byName.value;
    getName(names)
})
byLet.addEventListener('keyup',function()
{
    letter= byLet.value;
    getLetter(letter)
})
document.getElementById('cat').addEventListener('click',function()
{

  getCategory()
 $('nav').animate({'left': -itemsWidth},1000)
 $('.fa-align-justify').removeClass('fa-times')

})
document.getElementById('aR').addEventListener('click',function()
{

  getArea()
 $('nav').animate({'left': -itemsWidth},1000)
 $('.fa-align-justify').removeClass('fa-times')

})
document.getElementById('Inger').addEventListener('click',function(){
  getIngredients()
  $('nav').animate({'left': -itemsWidth},1000)
 $('.fa-align-justify').removeClass('fa-times')
})
document.getElementById('search').addEventListener('click',function()
{
  $('.form').removeClass('d-none')
 $('.cards').not('.form').addClass('d-none')

  $('nav').animate({'left': -itemsWidth},1000)
  $('.fa-align-justify').removeClass('fa-times')
})
document.getElementById('ContactUs').addEventListener('click',function()
{
  $(cards).not($('.forms')).addClass('d-none')
  $('.forms').removeClass('d-none')
 
  $('nav').animate({'left': -itemsWidth},1000)
  $('.fa-align-justify').removeClass('fa-times')
 
})

//fucntions+api
randomMeals()
async function randomMeals()
{
  let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
  random = await response.json()
   displayRandomMeals()
let items=document.querySelectorAll('.layer')
for(let i=0; items.length;i++)
{
  items[i].addEventListener('click',function(e)
  {
    randomItem=e.target.innerText
    getMealDetails(randomItem)
    displayDetails()
  })
  
}
  
}
function displayRandomMeals(){
  let cols='';
  for(let i=0; i<random.meals.length;i++)
  {
    $('.cards').not($('.randomMeals')).addClass('d-none')
    
    cols+=`
    <div class="col-lg-3 col-md-6  p-3">
    <div class="item position-relative  "style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)">
   
        <img class="w-100 rounded" src="${random.meals[i].strMealThumb}" alt="">

        <div class="layer d-flex justify-content-center align-items-center">
          <div class="caption p-2">
             <p  id="itemName">${random.meals[i].strMeal}</p>
          </div>
        </div>
    </div>
</div>`

  }
  document.getElementById('rMeal').innerHTML=cols;
}
async function getName()
{
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`)
     mealNames=await response.json()
   displayNames()
   let items=document.querySelectorAll('.layer')
   for(let i=0; i<items.length;i++)
   {
    items[i].addEventListener('click',function(e)
   {
    searchItem =e.target.innerText
    getMealDetails(searchItem)
    displayDetails()
   })
   }
  

}
function displayNames()
{
  $('.mealsletters').removeClass('d-none')
    let cols='';
  for(let i=0; i<mealNames.meals.length;i++)
  {
    cols+=`
    <div class="col-lg-3 col-md-6 my-3">
    <div class="item position-relative "style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)">
   
        <img class="w-100 rounded" src="${mealNames.meals[i].strMealThumb}" alt="">

        <div class="layer d-flex justify-content-center align-items-center">
          <div class="caption p-2">
             <p  id="itemName">${mealNames.meals[i].strMeal}</p>
          </div>
        </div>
    </div>
</div>`

  }
  document.getElementById('meal').innerHTML=cols;
}
async function getLetter()
{
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}`)
     mealNames=await response.json()
   displayLetter()

}
function displayLetter()
{
  let cols='';
  for(let i=0; i<mealNames.meals.length;i++)
  {
    cols+=`
    <div class="col-lg-3 col-md-6 my-3">
    <div class="item position-relative "style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)">
   
        <img class="w-100 rounded" src="${mealNames.meals[i].strMealThumb}" alt="">

        <div class="layer d-flex justify-content-center align-items-center">
          <div class="caption p-2">
             <p  id="itemName">${mealNames.meals[i].strMeal}</p>
          </div>
        </div>
    </div>
</div>`

  }
  document.getElementById('meal').innerHTML=cols;
 
}
 async function getCategory()
 {
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
     category=await response.json();
   displaycategory()
   let items = document.querySelectorAll('.cat')

   for(let i=0;i<items.length;i++)
   {
     items[i].addEventListener('click',function(e)
   {
     dish=e.target.parentElement.firstElementChild.textContent
    
     getCategoryMeals(dish)
     $('.inner-layers').removeClass('d-none')
    displaCategoryMeal()
    
   })
   }
 }
 function displaycategory()
 {
  $('.category').removeClass('d-none')
  $(cards).not($('.category')).addClass('d-none')

    let cols='';
 for(let i=0;i<category.categories.length;i++)
 {
    cols+=`
    <div class="col-lg-3 col-md-6 my-3">
    <div class="item cat position-relative text-center shadow rounded " style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)">
    <img class="w-100 rounded" src="${category.categories[i].strCategoryThumb}" alt="">
    <div class="layer">
        <p>${category.categories[i].strCategory}</p>
        <span>${category.categories[i].strCategoryDescription}</span>
    </div>
    </div>
</div>`
 }
 document.getElementById('categories').innerHTML=cols
 }


async function getArea()
{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
     areas=await response.json()
  displayArea()
  let cities= document.querySelectorAll('#area .col-lg-3')
for(let i=0; i<cities.length;i++)
{
    cities[i].addEventListener('click', function(e)
    {
     
     city=e.target.innerText
      areaMeals(city)
      $('.inner-layers').removeClass('d-none')
    displayAreaMeal()
    })
}


}


function displayArea() 
{
  $('.areas').removeClass('d-none')
  $(cards).not($('.areas')).hide(1000)
    let cols=''
    for(let i=0; i<areas.meals.length;i++)
    {
        cols+=`
        <div class="col-lg-3 col-md-6 my-3">
            <div class="area text-center shadow rounded p-3 text-white" style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)">
                <i class="fa-solid fa-city fa-3x" style="color: #e65a50ab;"></i>
                <h2>${areas.meals[i].strArea}</h2>
            </div>
         </div>
        `
    }
    document.getElementById('area').innerHTML=cols


}
async function areaMeals()
{
let responses=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
 areaMeal= await responses.json()
displayAreaMeal()
}


function displayAreaMeal()
{
   
    let cols=''
    for(let i=0 ; i< areaMeal.meals.length;i++)
    {
        cols+=`
        <div class="col-lg-3 col-md-6 mt-3  ">
        <div class="meal position-relative">
           <img  class="w-100" src="${areaMeal.meals[i].strMealThumb}" alt=""> 
           <div class= " layer d-flex justify-content-center align-items -center">
              <h2>${areaMeal.meals[i].strMeal}</h2>

           </div>
        </div>
    </div>
        `
      
    }
    document.getElementById('layerMeals').innerHTML=cols
}

async function getIngredients()
{
  let response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  ingredients=await response.json()
  displayIngredients()
  let items = document.querySelectorAll('.ingredient')

  for(let i=0;i<items.length;i++)
  {
    items[i].addEventListener('click',function(e)
  {
    item=e.target.parentElement.firstElementChild.nextElementSibling.textContent;
    filter(item)
    $('.inner-layers').removeClass('d-none')
    displayIgredientsMeal()
   
  })
  }
  
} 

function displayIngredients()
{
  $('.ingredients').removeClass('d-none')
  $(cards).not($('.ingredients')).addClass('d-none')
  let cols=''
  for(let i=0; i<=20;i++)
  {
    cols+=`
    <div class="col-lg-3 col-md-6 my-3"">
                <div  class="ingredient text-center shadow rounded p-3 text-white" style="box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)">
                    <i class="fa-solid fa-bowl-food fa-3x" style="color:#6e9e3a"></i>
                    <h2>${ingredients.meals[i].strIngredient}</h2>
                    <p>${ingredients.meals[i].strDescription.slice(0,100)}</p>
                </div>
            </div>`
  }
  document.getElementById('ingredient').innerHTML=cols
}
function displayIgredientsMeal()
{
   
    let cols=''
    for(let i=0 ; i<ing.meals.length;i++)
    {
        cols+=`
        <div class="col-lg-3 col-md-6 mt-3  ">
        <div class="meal position-relative">
           <img  class="w-100" src="${ing.meals[i].strMealThumb}" alt=""> 
           <div class= " layer d-flex justify-content-center align-items -center">
              <h2>${ing.meals[i].strMeal}</h2>

           </div>
        </div>
    </div>
        `
      
    }
    document.getElementById('layerMeals').innerHTML=cols

}
async function filter()
{
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`)
  ing= await response.json()
  displayIgredientsMeal()



}


async function getCategoryMeals()
{
let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dish}`)
catMeals=await response.json();
displaCategoryMeal()
}
function displaCategoryMeal()
{
   
    let cols=''
    for(let i=0 ; i<catMeals.meals.length;i++)
    {
        cols+=`
        <div class="col-lg-3 col-md-6 mt-3  ">
        <div class="meal position-relative">
           <img  class="w-100" src="${catMeals.meals[i].strMealThumb}" alt=""> 
           <div class= " layer d-flex justify-content-center align-items -center">
              <h2>${catMeals.meals[i].strMeal}</h2>

           </div>
        </div>
    </div>
        `
      
    }
    document.getElementById('layerMeals').innerHTML=cols

}
async function getMealDetails(info)
{
  let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info}`)
     mealDetails=await response.json()
displayDetails()
}

$('.inner-layers ').click(function (e)
{
 info=e.target.innerText
getMealDetails(info)
displayDetails()
})

function displayDetails()
{
   let measures = [];
   let col=''
	
	for (let j= 1; j <= 10; j++) {
		if (mealDetails.meals[0][`strIngredient${j}`]) {
			measures.push(
				`${mealDetails.meals[0][`strMeasure${j}`]} - ${mealDetails.meals[0][`strIngredient${j}`]}`
			);
		} else {
	
			break;
		}

  }
  $('.details').removeClass('d-none')
  let cols=''
  for(let i=0; i<mealDetails.meals.length;i++)
  {
  
    cols+=` <div class="col-lg-4">
    <div class="content-img text-center text-white">
      <img class="w-100" src="${mealDetails.meals[i].strMealThumb}" alt="">  
      <h1>${mealDetails.meals[i].strMeal}</h1>
    </div>
</div>
<div class="col-lg-8">
 <div class="content-caption">
     <h2>Instructions</h2>
     <p>${mealDetails.meals[i].strInstructions.slice(0,300)}</p>
     <p class="fw-bold">area:<span>${mealDetails.meals[i].strArea}</span></p>
     <p class="fw-bold">category:<span>${mealDetails.meals[i].strCategory}</span></p>
<div class="recipes">
       <h3>Recipes:</h3>
       <div class="recipesItem" >
       <ul class="d-flex list-unstyled" id="recipes">
       <li class="  btn btn-warning my-3 mx-1 p-1 alert-success rounded">${measures[i]}</li>
       <li class="  btn btn-warning my-3 mx-1 p-1 alert-success rounded">${measures[i+1]}</li>
       <li class="  btn btn-warning my-3 mx-1 p-1 alert-success rounded">${measures[i+2]}</li>
       <li class="  btn btn-warning my-3 mx-1 p-1 alert-success rounded">${measures[i+3]}</li>
       <li class="  btn btn-warning my-3 mx-1 p-1 alert-success rounded">${measures[i+4]}</li>
       <li class="  btn btn-warning my-3 mx-1 p-1 alert-success rounded">${measures[i+5]}</li>
  
     </ul>
     </div>
</div>
<h3 class="my-2 p-1 mx-1">Tags:</h3>
<ul class="d-flex list-unstyled" id="tags">
 <li class="my-3 mx-1 p-1 btn btn-success alert-success rounded">${mealDetails.meals[i].strTags}</li>
</ul>
 <div class="info">
     <a  class="btn btn-success"  target="_blank" href="${mealDetails.meals[i].strSource}">Source</a>
     <a  class="btn btn-danger"  target="_blank" href="${mealDetails.meals[i].strYoutube}">Youtube</a>
 </div>
 </div>
</div>`
  }
  document.getElementById('det').innerHTML=cols

}
// form validation

$('.contactName').keyup(function()
{
  if(namerejex.test(this.value))
  {
    $(`.contactName`).addClass('is-valid')
    $(`.contactName`).removeClass('is-invalid')
    $('.nameIncorrect').addClass('d-none')
  }
  else
  {
    $('.nameIncorrect').removeClass('d-none')
    $(`.contactName`).addClass('is-invalid')
    $(`.contactName`).removeClass('is-valid')
  }
})
$('.contactMail').keyup(function()
{
if(mailrejex.test(this.value))
{
  $('.contactMail').addClass('is-valid')
  $('.contactMail').removeClass('is-invalid')
  $('.emailIncorrect').addClass('d-none')
}
else{
  $(`.contactMail`).addClass('is-invalid')
  $(`.contactMail`).removeClass('is-valid') 
  $('.emailIncorrect').removeClass('d-none')

}
})
$('.contactPhone').keyup(function()
{
  if(phonerejex.test(this.value))
  {
    $('.contactPhone').addClass('is-valid')
    $('.contactPhone').removeClass('is-invalid')
    $('.phoneIncorrect').addClass('d-none')
  }
  else{
    $('.contactPhone').addClass('is-invalid')
    $('.contactPhone').removeClass('is-valid')
    $('.phoneIncorrect').removeClass('d-none')
  }
})
$('.contactAge').keyup(function()
{
  if(agerejex.test(this.value))
  {
    $('.contactAge').addClass('is-valid')
    $('.contactAge').removeClass('is-invalid')
    $('.ageIncorrect').addClass('d-none')
  }
  else{
    $('.contactAge').addClass('is-invalid')
    $('.contactAge').removeClass('is-valid')
    $('.ageIncorrect').removeClass('d-none')
  }
})
$('.contactPass').keyup(function()
{

  if(passrejeX.test(this.value))
  {
    $('.contactPass').addClass('is-valid')
    $('.contactPass').removeClass('is-invalid')
    $('.passIncorrect').addClass('d-none')
  }
  else{
    $('.contactPass').addClass('is-invalid')
    $('.contactPass').removeClass('is-valid')
    $('.passIncorrect').removeClass('d-none')
  }
})

$('.contactrePass').keyup(function(){
  if(this.value === userPass.value)
  {
    $('.contactrePass').addClass('is-valid')
    $('.contactrePass').removeClass('is-invalid')
    $('.repassIncorrect').addClass('d-none')
    document.querySelector('.submit').removeAttribute('disabled')
  }
  else{
    $('.contactrePass').addClass('is-invalid')
    $('.contactrePass').removeClass('is-valid')
    $('.repassIncorrect').removeClass('d-none')
    document.querySelector('.submit').disabled="true"
  }

})



new WOW().init();