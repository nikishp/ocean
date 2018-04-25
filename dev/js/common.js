//$(document).ready(function() {

$(function() {

    svg4everybody();
    objectFitImages();

    var windowWidht = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


    function popupCall() {

        $('.popup-iframe').each(function() {

            var fancyPathHref = $(this).attr('href');
            console.log(fancyPathHref);

            $(this).fancybox({
                src: fancyPathHref,
                // type: 'inline',
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




    // tabs 
    $('.tabs__list').on('click', '.tabs__list-item:not(.active-tab)', function() {
        $(this)
            .addClass('active-tab').siblings().removeClass('active-tab')
            .closest('.tabs').find('.tabs__content').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
    });



    $('.goods-slider__container').slick({
        arrows: false,
        asNavFor: '.goods-slider-nav'
    });

    $('.goods-slider-nav').slick({
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



    $('.info-block__item--mask .info-block__desc').on('click', function(event) {
        $('.info-block__city-link').trigger("click");
    });


    $('.catalog-btn').on('click', function(event) {
        $(this).find('.hamburger').toggleClass('is-active');
    });


    //footer on bottom
    $('.wrapper').css("min-height", function() {
        var vieportHeight = $(window).height(),
            footHeight = $('.foot').outerHeight(true, true),
            calcHeight = vieportHeight - footHeight;
        console.log("vieportHeight", vieportHeight);
        console.log("footHeight", vieportHeight);
        console.log("calcHeight", calcHeight);
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
        prevArrow: '<div class="slide-controll slide-controll--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M701.486,1458l1.514,1.4-4.973,4.6,4.973,4.6-1.514,1.4L695,1464Z" transform="translate(-695 -1458)" fill-rule="evenodd"/></svg></div>',
        nextArrow: '<div class="slide-controll slide-controll--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M1512.51,1458l-1.51,1.4,4.97,4.6-4.97,4.6,1.51,1.4,6.49-6Z" transform="translate(-1511 -1458)"  fill-rule="evenodd"/></svg></div>',
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
    // $('#list-view').click(function() {
    //   $('#content .product-grid > .clearfix').remove();

    //   $('#content .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
    //   $('#grid-view').removeClass('active');
    //   $('#list-view').addClass('active');

    //   localStorage.setItem('display', 'list');
    // });

    //   // Product Grid
    //   $('#grid-view').click(function() {
    //     // What a shame bootstrap does not take into account dynamically loaded columns
    //     var cols = $('#column-right, #column-left').length;

    //     if (cols == 2) {
    //       $('#content .product-list').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
    //     } else if (cols == 1) {
    //       $('#content .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
    //     } else {
    //       $('#content .product-list').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
    //     }

    //     $('#list-view').removeClass('active');
    //     $('#grid-view').addClass('active');

    //     localStorage.setItem('display', 'grid');
    //   });

    //   if (localStorage.getItem('display') == 'list') {
    //     $('#list-view').trigger('click');
    //     $('#list-view').addClass('active');
    //   } else {
    //     $('#grid-view').trigger('click');
    //     $('#grid-view').addClass('active');
    //   }
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









}); //jQuery


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
pageWidget(['index', 'under_goods', 'card', 'news', 'basket', 'ordering', 'thanks'])


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