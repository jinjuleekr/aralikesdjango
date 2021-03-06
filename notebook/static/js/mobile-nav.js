$(function ($) {
  "use strict";

  // Mobile Navigation
  if ($('.main-nav').length) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-sm-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-sm-none"><i class="fas fa-bars"></i></button>');
    // $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-arrow-left fa-bars');
      // $('.mobile-nav-overly').toggle();
    });
    
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    
    $('.main-nav .drop-down > a').click(function(e) {
        if($(window).width() >= 1120){
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        }
    });
    
    if($(window).width() < 1120) {
      $('.modal-parent').css('width', '100%');
    }

    $(window).resize(function() {
      // do somthing
      if($(window).width() < 1120){
        $("#main-nav").draggable({ disabled: true });
        // $('#main-nav').ui-state-disabled.ui-draggable-disabled
        $('#header, #content, #footer, #logo, #main-nav').removeAttr('style');
        if($('.main-nav .drop-down.active').length){
          $('.main-nav .drop-down.active').removeClass('active');
          $('.main-nav .drop-down ul').hide();
          $('.modal-parent').removeAttr('style');
        }
      } else {
        $('#main-nav').draggable({ disabled: false });
        $('#main-nav').draggable({
          cursor: "move",      // 드래그 시 커서모양 
          // stack: ".container",      // container 클래스끼리의 스택 기능 
          opacity: 0.8,
          drag : function (event, ui) { 
            // ui.position.top += (ui.offset.top - ui.originalPosition.top) * 0.3; 
            ui.position.left += (ui.offset.left - ui.originalPosition.left) * 0.3; 
           } 
        });
        $('.modal-parent').css('width', 'calc(100% - 260px)');
        $('#header, #content, #footer, #logo, #main-nav').removeAttr('style');
        $('.modal-parent').removeAttr('style');
      }
    });

    $("#main-nav").bind("dragstart",function(event, ui){
    });
    
    $("#main-nav").bind("dragstop", function(event, ui){
      // console.log('left:', $(this).css('left').split('px')[0], "   ",  $(window).width()/2);
      if($(this).css('left').split('px')[0] < $(window).width() / 2){
        $(this).removeAttr('style');
        $('#header, #content, #footer').css('margin-left', '260px');
        $('#header, #content, #footer').css('margin-right', 'unset');
        $('#logo').css('left', '20px');
        $('#logo').css('right', 'unset');
        $('.modal-parent').css('left', '260px')
      } else {
        $(this).removeAttr('style');
        $(this).css('left','unset');
        $(this).css('right','0px');
        $('#header, #content, #footer').css('margin-left', 'unset');
        $('#header, #content, #footer').css('margin-right', '260px');
        $('#logo').css('left', 'unset');
        $('#logo').css('right', '100px');
        $('.modal-parent').css('left', '0')
        $('.modal-parent').css('right', 'unset')
      }
    });
  

    $('.main-nav .drop-down > a').hover(function(e) {
        if($(window).width() < 1120){
          if($('.main-nav .drop-down ul').css('display') == 'none')
            $('.main-nav .drop-down ul').show();
        }
      }
    );

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-arrow-left fa-bars');
          // $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

});