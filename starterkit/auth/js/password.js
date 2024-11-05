$(function(){
  $('.hide-show').show();
  $('.hide-show span').addClass('show').html('<i class="fas fa-eye"></i>');
  
  $('.hide-show span').click(function(){
      if($(this).hasClass('show')) {
          $(this).html('<i class="fas fa-eye-slash"></i>');
          $('input[id="password"]').attr('type', 'text');
          $(this).removeClass('show');
      } else {
          $(this).html('<i class="fas fa-eye"></i>');
          $('input[id="password"]').attr('type', 'password');
          $(this).addClass('show');
      }
  });
  
  $('form button[type="submit"]').on('click', function(){
      $('.hide-show span').html('<i class="fas fa-eye"></i>').addClass('show');
      $('.hide-show').parent().find('input[id="password"]').attr('type', 'password');
  }); 
});