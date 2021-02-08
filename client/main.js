const baseUrl = 'http://localhost:3000'

$(document).ready(function(){
    checkAuth()

    $('#login-form').on('submit',function(e){
        e.preventDefault()
        const email = $('#email').val()
        const password = $('#password').val()

       $.ajax({
           url : baseUrl+'/login',
           method : 'POST',
           data : {
               email,password
           }
       }).done(response =>{
             localStorage.setItem('access_token', response.access_token)
             checkAuth()
       }).fail(xhr=>{
          $('#login-error').html(xhr.responseJSON.message)
       }).always()
    })
    $('#logout-btn').on('click', function(e){
         e.preventDefault();
         localStorage.clear()
         checkAuth()
    })

})

function changePage(id){
    $('.gallery-page').hide()
    $(id).show()
}


function checkAuth(){
   if(localStorage.getItem('access_token')){
    changePage('#main-page')
    fetchPhoto()
   }else{
    changePage('#login-page')
   }


}

function fetchPhoto(){
  $.ajax({
    url : baseUrl+'/photos',
    method : 'GET',
    headers : {
        access_token:localStorage.getItem('access_token')
    }
    

  }).done(response=>{
      $('#home-page').empty()
      console.log(response , "di response")
      response.photos.forEach(photo=>{
        $('#home-page').append(` <div class="card-custom uk-card uk-card-default uk-card-hover uk-card-body">
        <i class="bookmark far fa-plus-square"></i>
        <img src="${photo.imageurl}" alt="image">
        </div>`)
      })
      
  }).fail(xhr=>{
    $('#photos-error').html(xhr.responseJSON)
  })
}