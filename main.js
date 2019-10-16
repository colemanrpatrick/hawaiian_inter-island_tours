$(".menu-btn").on({
  click: function (e){
    $(this.hash)
    .toggleClass("active")
    .find('a:first')
    .focus();
    e.preventDefault();
  },
  focusout: function(){
    $(this.hash).data('menuTime',setTimeout(function(){
        $(this.hash).removeClass("active");
      }.bind(this),0));
  },
  focusin: function(){
    clearTimeout($(this.hash).data('menuTime'));
  }
});

$("#main-nav").on({
  focusout: function(){
    $(this).data("menuTime",setTimeout( function(){
      $(this).removeClass("active");
    }.bind(this),0));
  },
  focusin: function(){
    clearTimeout($(this).data('menuTime'));
  }
});
