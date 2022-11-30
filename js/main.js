$(function(){

  //----------カテゴリーでの検索-----------
  $("#catSort").change(function() {
		var val = $("#catSort").val();
    var className = '.';
      className += val;
      if(val == 'all') {
        $('.garelly__item').removeClass('opacity');
      } else {
        $('.garelly__item:not(className)').addClass('opacity');
        $(className).removeClass('opacity');
      }
	});

  //------------ タグでの検索 ---------
  $("#tagSort").change(function() {
		var val = $("#tagSort").val();
    var className = '.';
      className += val;
      if(val == 'all') {
        $('.garelly__item').removeClass('opacity');
      } else {
        $('.garelly__item:not(className)').addClass('opacity');
        $(className).removeClass('opacity');
      }
	});

  //--------- 検索ワードでの検索 ---------
  // $("#keyword").on("input", searchEvent);
  // function searchEvent() {
  //   var inputText = $(this).val();
  //   var date =  $('.garelly__item').attr('date')
  //   console.log(inputText);
  //   console.log(date);
  //   var className = '.';
  //     date += inputText;
  //     className += inputText;
  //     if(inputText == '') {
  //       $('.garelly__item').removeClass('opacity');
  //     } else {
  //       $('.garelly__item:not(className)').addClass('opacity');
  //       $(className).removeClass('opacity');
  //     }

  // }

  $("#keyword").on("input", function(){

    var inputText = $("#keyword").val();
    $('.garelly__item').each(function() {
      var date = $(this).attr("date")
      if(inputText == date){
        $('.garelly__item').removeClass('opacity');
      }else{
        $('.garelly__item:not(inputText)').addClass('opacity');
        $(inputText).removeClass('opacity');
      }
    });

  });

  // var $grid = $('.garelly__body').imagesLoaded(function(){
  //   $grid.masonry({
  //     percentPosition: true,
  //     columnWidth: '.garelly__item',
  //     itemSelector: '.garelly__item',
  //   });
  // });


  



});
