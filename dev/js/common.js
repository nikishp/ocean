//$(document).ready(function() {

  $(function() {

    svg4everybody();
    objectFitImages();

    var windowWidht = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


    $(".increment-field__inp").keypress(function(event) {
      if (/[^0-9]/.exec(event.target.value)) {}
    }).bind("input", function(event) {
      if (/[^0-9]/.exec(event.target.value)) $(this).val($(this).val().replace(/[^0-9]/gim, ''));
    });



  function popupCall() {

    $('.popup-iframe').each(function() {

      var fancyPathHref = $(this).attr('href');
            // console.log(fancyPathHref);

            $(this).fancybox({
              touch: false,
              src: fancyPathHref,
              iframe: {
                css: {
                        // width : '600px'
                      }
                    }
                  });
          });
  }
  popupCall();

  $('.popup-iframe').on('click', function() {
    setTimeout(popupCall, 1000)
  });



    // $('.popup-iframe').magnificPopup({
    //   disableOn: 700,
    //   type: 'iframe',
    //   mainClass: 'mfp-fade',
    //   removalDelay: 160,
    //   preloader: false,

    //   fixedContentPos: false
    // });






    $('.relative-slider__slider').slick({
      slidesToShow: 4,
      arrows: true,
      prevArrow: '<div class="goods-slider-controll goods-slider-controll--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M701.486,1458l1.514,1.4-4.973,4.6,4.973,4.6-1.514,1.4L695,1464Z" transform="translate(-695 -1458)" fill-rule="evenodd"/></svg></div>',
      nextArrow: '<div class="goods-slider-controll goods-slider-controll--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M1512.51,1458l-1.51,1.4,4.97,4.6-4.97,4.6,1.51,1.4,6.49-6Z" transform="translate(-1511 -1458)"  fill-rule="evenodd"/></svg></div>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        }
      }]
    });

    $('.relative-slider__slider-triple').slick({
      slidesToShow: 3,
      arrows: true,
      prevArrow: '<div class="goods-slider-controll goods-slider-controll--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M701.486,1458l1.514,1.4-4.973,4.6,4.973,4.6-1.514,1.4L695,1464Z" transform="translate(-695 -1458)" fill-rule="evenodd"/></svg></div>',
      nextArrow: '<div class="goods-slider-controll goods-slider-controll--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M1512.51,1458l-1.51,1.4,4.97,4.6-4.97,4.6,1.51,1.4,6.49-6Z" transform="translate(-1511 -1458)"  fill-rule="evenodd"/></svg></div>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 560,
        settings: {
          slidesToShow: 1
        }
      }]
    });




    // tabs 
    $('.tabs__list').on('click', '.tabs__list-item:not(.active-tab)', function() {
      $(this)
      .addClass('active-tab').siblings().removeClass('active-tab')
      .closest('.tabs').find('.tabs__content').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
    });



    $('.goods-slider__container').slick({
        // infinite: false,
        arrows: false,
        asNavFor: '.goods-slider-nav'
      });

    $('.goods-slider-nav').slick({
        // infinite: false,
        arrows: false,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '40px',
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<div class="goods-slider-controll goods-slider-controll--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M701.486,1458l1.514,1.4-4.973,4.6,4.973,4.6-1.514,1.4L695,1464Z" transform="translate(-695 -1458)" fill-rule="evenodd"/></svg></div>',
        nextArrow: '<div class="goods-slider-controll goods-slider-controll--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M1512.51,1458l-1.51,1.4,4.97,4.6-4.97,4.6,1.51,1.4,6.49-6Z" transform="translate(-1511 -1458)"  fill-rule="evenodd"/></svg></div>',
        asNavFor: '.goods-slider__container',
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 2
          }
        }]
      });



    // $('.info-block__item--mask .info-block__desc').on('click', function(event) {
    //     // $('.info-block__city-link').trigger("click");
    //     console.log(".info-block__item--mask");
    // });





    //footer on bottom
    $('.wrapper').css("min-height", function() {
      var vieportHeight = $(window).height(),
      footHeight = $('.foot').outerHeight(true, true),
      calcHeight = vieportHeight - footHeight;
        // console.log("vieportHeight", vieportHeight);
        // console.log("footHeight", vieportHeight);
        // console.log("calcHeight", calcHeight);
        return calcHeight;
      });


    //popup form
    // $('.popup-js').magnificPopup({
    //   type: 'inline',
    //   preloader: false,
    //   focus: '#name',
    //   callbacks: {
    //     beforeOpen: function () {
    //       if ($(window).width() < 700) {
    //         this.st.focus = false;
    //       } else {
    //         this.st.focus = '#name';
    //       }
    //     }
    //   }
    // });

    //phone mask
    // $(".phone").mask("+9(999)999-99-99");

    if (windowWidht < 992) {
      $('.h3--foot-list').on('click', function(event) {
        $(this).stop(true).toggleClass('h3--foot-open');
        $(this).parent().find('.foot__list').stop(true).slideToggle();
      });
    }

    $('.main-slider').slick({
      arrows: true,
      draggable: false,
      prevArrow: '<div class="slide-controll slide-controll--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M701.486,1458l1.514,1.4-4.973,4.6,4.973,4.6-1.514,1.4L695,1464Z" transform="translate(-695 -1458)" fill-rule="evenodd"/></svg></div>',
      nextArrow: '<div class="slide-controll slide-controll--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M1512.51,1458l-1.51,1.4,4.97,4.6-4.97,4.6,1.51,1.4,6.49-6Z" transform="translate(-1511 -1458)"  fill-rule="evenodd"/></svg></div>',
      responsive: [{
        breakpoint: 993,
        settings: {
          draggable: true,
        }
      }]


    });

    $('.popup-close').on('click', function(event) {
        // $.magnificPopup.close();
        $.fancybox.close();
      });

    $('.product-item__option--favorite').on('click', function(event) {
      $(this).stop(true).toggleClass('product-item__option--favorite-active');
    });

    /*================================
    ==========catalog viewer==========
    ================================*/
    // Product List
    $('#list-view').click(function() {

      $('.row--layout .layout-item').prop('class', '').addClass('layout-item col-xl-12');

        // console.log(".layout-item");

        localStorage.setItem('display', 'list');
      });

    // Product Grid
    $('#grid-view').click(function() {
        // What a shame bootstrap does not take into account dynamically loaded columns
        var cols = $('.catalog-sidebar').length;
        // console.log("cols", cols);

        if (cols == 2) {
          $('.row--layout .layout-item').prop('class', '').addClass('layout-item col-xl-6 col-md-6 layout-col')
        } else if (cols == 1) {
          $('.row--layout .layout-item').prop('class', '').addClass('layout-item col-xl-4 col-md-6 layout-col')
        } else {
          $('.row--layout .layout-item').prop('class', '').addClass('layout-item col-xl-3 col-md-6 layout-col')
        }

        localStorage.setItem('display', 'grid');
      });

    if (localStorage.getItem('display') == 'list') {
      $('#list-view').trigger('click');
      $('#list-view').addClass('active');
    } else {
      $('#grid-view').trigger('click');
      $('#grid-view').addClass('active');
    }
    /*================================
    ======= catalog viewer end =======
    ================================*/



    $('.pagination__list li').on('click', function(event) {
      event.preventDefault()
      $(this).addClass('active').siblings().removeClass('active');

    });


    $('.increment-field__btn--sub').click(function() {
      if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
    });
    $('.increment-field__btn--add').click(function() {
      $(this).prev().val(+$(this).prev().val() + 1);
    });


    $('input[type="radio"],input[type="checkbox"],select').styler();




    //open first element on page load
    $('.accordion__content').eq(0).stop(true, true).slideToggle('200');
    $('.accordion__item').eq(0).addClass('accordion__item--active');
    //open first element on page load end
    $('.accordion__title').click(function() {
      var $this = $(this);
      $('.accordion__title').find('input').prop("checked", false);
      $(this).find('input').prop("checked", true);

      setTimeout(function() {
        $('input[type="radio"]').trigger('refresh');
      }, 100);

      $this.next('.accordion__content').stop(true, true).slideToggle('200');
      $this.parent().toggleClass('accordion__item--active');

      $this.parent().siblings('.accordion__item').children('.accordion__content').stop(true, true).slideUp('200');
      $this.parent().siblings('.accordion__item').removeClass('accordion__item--active');

    });






    $(".ordering__foot-check input").on(' change ', function(event) {

      if ($(this).is(':checked')) {
        $(".ordering__foot-btns button").prop("disabled", false);
            // console.log('check');
          } else {
            $(".ordering__foot-btns button").prop("disabled", true);
            // console.log('uncheck');
          }


        });


    function filterList(value) {
      var list = $(".table--lk-ur .table__row-content");
      $(list).fadeOut(10);
      if (value == "All") {
        $(".table--lk-ur").find(".table__row-content").each(function(i) {
          $(this).slideDown();
        });
      } else {
        $(".table--lk-ur").find("tr[data-filter*=" + value + "]").each(function(i) {
          $(this).slideDown();
        });
      }
    };

    $('.lk-block__select--lk-ur select').on('change', function(event) {
      var curVal = $(this).val();
      filterList(curVal);
    });


    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'click',
      html: true,
        // placement: 'left',
        placement: function(tip, element) { //$this is implicit

            // if (position.left > 515) {
            //     return "left";
            // }
            // if (position.top < 110){
            //   return "bottom";
            // }
            if (windowWidht < 500) {
              return "bottom";
            } else {
              return "left";
            }
          }
        })



    // $('.filter__head ').on('click', function(event) {
    //   // $('.hamburger').toggleClass('is-active');

    //   // console.log(".filter__head");
    // });



    $('.filter__block-title').on('click', function(event) {

      $(this).toggleClass('filter__block-title--collapse').next('.filter__block-content').stop(true, true).slideToggle();

    });



    //  $(".filter__price-range").ionRangeSlider({
    //    type: "double",
    //    min: 0,
    //    max: 999999,
    //    from: 30,
    //    to: 600000,
    //    min_interval: 20,
    //    onChange: function (data) {

    //     data("from"),
    //     data("to");
    //      console.log(from + " - " + to);
    //   },
    // });


    var $range = $(".filter__price-range"),
    $inputFrom = $('.price-controll__input .filter__price-controll-min'),
    $inputTo = $('.price-controll__input .filter__price-controll-max'),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 1000;


    $('.price-controll__input-clear').on('click', function(event) {
      instance.reset();
      $('.price-controll__input .filter__price-controll-min').prop('value', min);
      $('.price-controll__input .filter__price-controll-max').prop('value', max);
        // console.log("instance.reset()", from);
        // $range.destroy();
      });


    $range.ionRangeSlider({
      type: "double",
      min: min,
      max: max,
      from: from,
      to: to,
      onStart: updateInputs,
      onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function() {
      var val = $(this).prop("value");

        // validate
        if (val < min) {
          val = min;
        } else if (val > to) {
          val = to;
        }

        instance.update({
          from: val
        });
      });

    $inputTo.on("input", function() {
      var val = $(this).prop("value");

        // validate
        if (val < from) {
          val = from;
        } else if (val > max) {
          val = max;
        }

        instance.update({
          to: val
        });
      });





    $('.filter__head').on('click', function(event) {
        // $(this).children('.hamburger').toggleClass('is-active');
        $('.filter__content').stop(true, true).slideToggle();
      });


    if (windowWidht < 992) {
      $('.filter__content').stop(true, true).slideToggle();
    }









    /*s-menu*/

    var toggleButton = $('.catalog-btn'),
    sMenu = $('.s-menu'),
    menuList = $('.s-menu__list'),
    subMenuList = $('.s-menu__sublist'),
    menuItem = $('.s-menu__item'),
    subMenuItem = $('.s-menu__subitem'),
    menuLink = $('.s-menu__link'),
    subMenuLink = $('.s-menu__sublink'),
    menuArrow = $('.s-menu__arrow');

    function elementHeight(selector, num) {
        // высота блока по макс.высоте чаилда
        // console.log("num", num);
        var childUlHeight = 0,
        mainUlHeight = menuList.outerHeight(true);

        // $('.s-menu__list li.active-element ul').each(function(){ 
        // $('li.active-element>ul').each(function() {
          $(selector).each(function() {
            if ($(this).outerHeight(true) > childUlHeight) {
              childUlHeight = $(this).outerHeight(true) + num;
            }
          });
        // console.log("childUlHeight", childUlHeight);

        if (childUlHeight > mainUlHeight) {
          sMenu.height(childUlHeight);
        } else {
          sMenu.height(mainUlHeight);
        }
      };


    // если есть вложеный список добавляю стрелку
    $('.s-menu__item, .s-menu__subitem ').each(function() {
      if ($(this).find("ul").length > 0) {
        $(this).append('<div class="s-menu__arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M1512.51,1458l-1.51,1.4,4.97,4.6-4.97,4.6,1.51,1.4,6.49-6Z" transform="translate(-1511 -1458)" fill-rule="evenodd"/></svg></div>')
      }
    });


    if (windowWidht > 992) {

      toggleButton.on('click', function(event) {
        $(this).toggleClass("catalog-btn--open");
        $(this).find('.hamburger').toggleClass('is-active');
        sMenu.stop(true, true).slideToggle();
      });

      sMenu.mouseleave(function() {
        sMenu.attr('style', '');
        toggleButton.removeClass("catalog-btn--open");
        toggleButton.find('.hamburger').removeClass('is-active');
        sMenu.stop(true, true).slideUp();
        $('.s-menu li').removeClass('active-element');


      });
      var cout = 0;
      var defHeight = $(".s-menu").height();

      $('.s-menu__list li').hover(function() {

        $(this).children('li').removeClass('active-element');
        $(this).addClass('active-element').siblings().removeClass('active-element');
            // elementHeight('li.active-element>ul', 0);

            // console.log("cout", cout);

            var offset = $(".s-menu").offset();
            // console.log("offset", offset);
            var ofParrent = offset.top;
            // console.log("ofParrent", ofParrent);
            // console.log("defHeight", defHeight);
            var elementOffset = $(this).parent().offset().top - ofParrent;
            // var elementOffset = $(this).offset().top - ofParrent;
            // var elementOffset = $(this).parent().position().top;
            console.log("elementOffset", elementOffset);
            // console.log("elementOffset", elementOffset);
            var elementListHeight = $(this).children('ul').height();
            console.log("elementListHeight", elementListHeight);
            // console.log("elementListHeight", elementListHeight);
            // var elementListHeight = $(this).children('ul').length > 0 ? $(this).children('ul').height() : 0;
            // var elementListHeight = $(this).children('ul').length > 0 ? $(this).children('ul').height() : 0;
            // console.log("elementListHeight", elementListHeight);
            var elementDefHeight = elementOffset + elementListHeight;
            // console.log("elementDefHeight", elementDefHeight);
            // console.log("elementDefHeight", elementDefHeight);

            // if ((elementOffset + $(this).children('ul').height()) > cout) {
            //   cout = elementOffset + $(this).children('ul').height();
            // }
            // console.log("cout after", cout);


            $('.s-menu').css("height", "");
            if (defHeight < elementDefHeight) {
              $(".s-menu").height(elementDefHeight);
                // console.log("defHeight < elementDefHeight");

              }

              // if (defHeight > elementDefHeight) {
              //   // console.log("elementOffset", elementOffset);
              //   // console.log("defHeight", defHeight);
              //   // console.log("elementDefHeight", elementDefHeight);

              //   // // console.log($(this).parent().height());
              //   // // console.log("asdf", asdf);
              //   // // $(".s-menu").height
              //   // // $(".s-menu").height(elementDefHeight);
              //   // console.log("defHeight > elementDefHeight");
              //   // console.log('cout - elHei', cout - elementListHeight);

              //   // $(".s-menu").height(elementDefHeight);


              // }



            }, function() {


              // var offset = $(".s-menu").offset();
              // var ofParrent = offset.top;
              // console.log("defHeight", defHeight);
              // var elementOffset = $(this).offset().top;
              // console.log("elementOffset", elementOffset);
              // var elementListHeight = $(this).parent().height();
              // console.log("elementListHeight", elementListHeight);
              // var elementDefHeight = elementOffset + elementListHeight;

              // $('.s-menu').css("height", "");

              // $(".s-menu").height(elementListHeight);


              // if($(".s-menu").height() < defHeight){
              //   $(".s-menu").height(defHeight)


              // }




            });





    } //if width > 992
    else {
      var mobLineHeight = $('.mob-info').outerHeight(true);
      $('.s-menu').prepend('<div class="s-menu__back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M701.486,1458l1.514,1.4-4.973,4.6,4.973,4.6-1.514,1.4L695,1464Z" transform="translate(-695 -1458)" fill-rule="evenodd"/></svg>Назад</div>');
      var backBtn = $(".s-menu__back"),
      backBtnHeigh = backBtn.outerHeight(true);
      toggleButton.on('click', function(event) {
        $(this).toggleClass("catalog-btn--open");
        $(this).find('.hamburger').toggleClass('is-active');
        $('.s-menu__list').css('height', 'auto');
        $('.s-menu__list').stop(true, true).slideToggle();
        backBtn.hide();
        $('.s-menu__list li').removeClass('active-list');
      });

      $('.s-menu__arrow').on('click', function(event) {
        $(this).parents('li').addClass('active-list');
        currentHeight = $(this).parents('li').children('ul').outerHeight(true);
        backBtn.slideDown();
        $(".s-menu__list").css({
          'height': currentHeight
        });
      });

      $('.s-menu__back').on('click', function(event) {
        var activeCount = $('.s-menu').find('.active-list').length,
        prevHeight = $('.s-menu > ul').outerHeight(true);
        if (activeCount > 1) {
          prevHeight = $('.s-menu').find('.active-list').eq(activeCount - 2).children('ul').outerHeight(true);
        } else {
          prevHeight = 'auto';
          $(this).slideUp();
        }

        $(".s-menu__list").css('height', prevHeight);
        $('.s-menu').find('.active-list').eq(activeCount - 1).removeClass('active-list');

      });


    } //if width < 992




    /*s-menu end*/


    $('.all-char').on('click', function(e) {
      e.preventDefault();
      var asdf = $('.tabs__list-item--spec').trigger('click')
    });




    //removeIf(production)
    function pageWidget(pages) {
      var widgetWrap = $('<div class="widget_wrap"><ul  class="widget_list"></ul></div>');
      widgetWrap.prependTo("body");
      for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list')
      }
      var widgetStilization = $('<style>body{position:relative}.widget_wrap{position:fixed;top:0;left:-23px;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;transition:all .3s ease;transform:translate(-100%,0)}.widget_wrap ul{max-width:220px;width:100%;display:flex;flex-wrap:wrap}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) 50% 50% no-repeat #222;cursor:pointer}.widget_wrap:hover{left:0;transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{display:block;color:#fff;text-decoration:none;font-size:15px;width:100px}.widget_link:hover{color:#fff;text-decoration:underline}</style>');
      widgetStilization.prependTo(".widget_wrap")
    };
    pageWidget(['index', 'under_goods', 'card', 'news', 'basket', 'ordering', 'lkf', 'lkf_ur', 'catalog', 'default'])
        //endRemoveIf(production)









}); //jQuery

//removeIf(production)

//pixel-glass-js-master
//function pixelGlass(){'use strict';var doc=document;var controlsPanel;var bodyContentWrapper;var panelClass='controls-panel';var canBeDisabled=[];var prefix='pg';var filtersList=['none','invert'];var statesList=['off','on'];var currents={state:getCurrent('state',statesList[1]),filter:getCurrent('filter',filtersList[0]),opacity:getCurrent('opacity',0.5)};var targets={state:{elem:doc.documentElement,attr:'data'},filter:{elem:doc.body,attr:'data'},opacity:{elem:doc.body,attr:'style'}};var paramsStates={elemTag:'button',elemText:'on',listName:'states',itemName:'state',target:targets.state,type:'button',list:statesList,canDisableAll:!0,attrs:{tabindex:1,}};var paramsFilters={elemTag:'button',elemText:'invert',listName:'filters',itemName:'filter',target:targets.filter,type:'button',list:filtersList,attrs:{tabindex:2,}};var paramsOpacity={itemName:'opacity',type:'number',target:targets.opacity,setAttr:'style',attrs:{min:0,max:1,step:0.1,tabindex:3,}};init();function init(){createContolsPanel();applyCurrentData();if(currents.state==='on'){applyCurrentStyles()}}
//function createContolsPanel(){var targetElem=doc.documentElement;if(hasData(doc.body,'has-sticky-point')){var stickyPoint=doc.querySelector('.sticky-point');if(stickyPoint&&!localStorage['pg-released']){targetElem=stickyPoint}
//currents.state='off'}
//controlsPanel=doc.createElement('div');controlsPanel.classList.add(panelClass);targetElem.appendChild(controlsPanel);var sides=['top','right','bottom','left'];sides.forEach(function(item){var itemVal=getCurrent(item,'');if(itemVal){controlsPanel.style[item]=itemVal}});initControls()}
//function initControls(){createButton(paramsStates);createButton(paramsFilters);createInputNumber(paramsOpacity);createDragButton()}
//function createButton(params){var listName=params.listName;var itemName=params.itemName;var elemTag=params.elemTag;var elemText=params.elemText;var type=params.type;var list=params.list;var action=params.action;var currentVal=currents[itemName];var attrs=params.attrs;var currentNum=list.indexOf(currentVal);var canDisableAll=params.canDisableAll;var id=itemName;var input=doc.createElement(elemTag);setClasses(input,[panelClass+'__control',panelClass+'__control--'+type]);input.setAttribute('type',type);input.setAttribute('id',id);setData(input,'state-num',currentNum);if(attrs){for(var attr in attrs){input.setAttribute(attr,attrs[attr])}}
//if(elemTag==='button'){input.innerHTML=elemText}
//if(!canDisableAll){canBeDisabled.push(input)}
//controlsPanel.appendChild(input);input.onclick=function(){if(!params.target){return}
//currentNum=+!currentNum;currentVal=list[currentNum];setData(input,'state-num',currentNum);setData(params.target.elem,itemName,currentVal);saveLocalStorage(itemName,currentVal);if(canDisableAll&&canDisableAll===!0){if(currentVal==='off'){removeCurrentStyles();disableInputs()}
//else{applyCurrentStyles();enableInputs()}}}}
//function createInputNumber(params){var itemName=params.itemName;var attrs=params.attrs;var type=params.type;var setAttr=params.setAttr;var canDisableAll=params.canDisableAll;var id=itemName;var input=doc.createElement('input');setClasses(input,[panelClass+'__control',panelClass+'__control--'+type]);input.setAttribute('type',type);input.setAttribute('id',id);for(var attr in attrs){input.setAttribute(attr,attrs[attr])}
//input.setAttribute('value',currents[itemName]);if(!canDisableAll){canBeDisabled.push(input)}
//controlsPanel.appendChild(input);input.oninput=function(){if(setAttr==='style'){params.target.elem.style[itemName]=this.value;saveLocalStorage(itemName,this.value)}}}
//function createDragButton(){var input=doc.createElement('button');setClasses(input,[panelClass+'__control',panelClass+'__control--drag-n-drop']);input.setAttribute('type','button');input.innerHTML=' ';controlsPanel.appendChild(input);input.onmousedown=function(){var offsetTop=this.offsetTop;var offsetLeft=controlsPanel.clientWidth-this.clientWidth;var styles=getComputedStyle(controlsPanel);controlsPanel.style.top=styles.top;controlsPanel.style.left=styles.left;controlsPanel.style.right='auto';controlsPanel.style.bottom='auto';doc.onmousemove=function(ev){var x=(ev.clientX-offsetLeft)+'px';var y=(ev.clientY)+'px';controlsPanel.style.left=x;controlsPanel.style.top=y}};input.onmouseup=function(){var styles=getComputedStyle(controlsPanel);var left=+styles.left.replace(/px/,'');var right=+styles.right.replace(/px/,'');var top=+styles.top.replace(/px/,'');var bottom=+styles.bottom.replace(/px/,'');if(left>right){saveLocalStorage('left','auto');saveLocalStorage('right',styles.right);controlsPanel.style.right=styles.right;controlsPanel.style.left='auto'}
//else{saveLocalStorage('left',styles.left);saveLocalStorage('right','auto')}
//if(top>bottom){saveLocalStorage('top','auto');saveLocalStorage('bottom',styles.bottom);controlsPanel.style.bottom=styles.bottom;controlsPanel.style.top='auto'}
//else{saveLocalStorage('top',styles.top);saveLocalStorage('bottom','auto')}
//doc.onmousemove=null}}
//function disableInputs(){canBeDisabled.forEach(function(item){item.setAttribute('disabled','')})}
//function enableInputs(){canBeDisabled.forEach(function(item){item.removeAttribute('disabled')})}
//function getCurrent(name,defaultValue){var itemName=[prefix,name].join('-');var localStorageVal=localStorage[itemName];return localStorageVal?localStorageVal:defaultValue}
//function saveLocalStorage(name,value){var itemName=[prefix,name].join('-');localStorage[itemName]=value}
//function getBodyOpacity(){var opacityStr=getComputedStyle(doc.body).opacity;return+opacityStr}
//function addExternalCSS(){var styleElem=doc.createElement('style');var cssLink=doc.createElement('link');cssLink.setAttribute('rel','stylesheet');cssLink.setAttribute('href','../pixel-glass-js/styles.css');doc.head.appendChild(cssLink)}
//function applyCurrentData(){for(var key in targets){var target=targets[key];var current=currents[key];if(target.attr==='data'){setData(target.elem,key,current)}}
//if(currents.state==='off'){disableInputs()}}
//function applyCurrentStyles(){for(var key in targets){var target=targets[key];var current=currents[key];if(target.attr==='style'){target.elem.style[key]=current}}}
//function removeCurrentStyles(){for(var key in targets){var target=targets[key];if(target.attr==='style'){target.elem.style[key]=''}}}
//function hasData(elem,dataName){if(!elem){return!1}
//dataName='data-'+dataName;if(elem.getAttribute(dataName)!==undefined&&elem.getAttribute(dataName)!==null){return!0}
//return!1}
//function setData(elem,dataName,dataVal){if(!elem){return}
//dataName='data-'+dataName;elem.setAttribute(dataName,dataVal)}
//function setClasses(elem,classes){if(!elem){return}
//if(classes.length>0){classes.forEach(function(className){elem.classList.add(className)})}}}
//window.onload=function(){pixelGlass()}


//endRemoveIf(production)

// disable context menu and f12
//eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(8).7(9(0){3(0.2==d){4 1}6 3(0.5&&0.c&&0.2==a){4 1}6 3(0.5&&0.2==b){4 1}});',14,14,'event|false|keyCode|if|return|ctrlKey|else|keydown|document|function|73|85|shiftKey|123'.split('|'),0,{}))
//
// document.addEventListener("contextmenu", function (e) {
//        e.preventDefault();
//    }, false);