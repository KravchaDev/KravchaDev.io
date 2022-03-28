function is_mobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function lazyLoad(e){e.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each((function(){$(this).attr("src",$(this).data("src")),$(this).removeAttr("data-src"),$(this).is("source")&&$(this).closest("video").get(0).load()}))}$(window).on("load",(function(){is_mobile()||(setTimeout((function(){$(".wrapper-loader").fadeOut(200)}),500),(new WOW).init());var e=$(".ui-header").outerHeight();jQuery(window).on("resize",(function(){e=+parseInt($(".ui-header").outerHeight())})),jQuery(window).on("scroll load",(function(){$(window).scrollTop()>e?($(".ui-header").addClass("fixed-menu"),$(".global-wrapper").css("paddingTop",e),setTimeout((function(){$(".ui-header").addClass("scroll-transform")}),100)):($(".ui-header").removeClass("fixed-menu"),$(".ui-header").removeClass("scroll-transform"),$(".global-wrapper").css("paddingTop",0)),$(window).scrollTop()>$(window).height()?$(".scroll-to-top").addClass("scroll-to-top-visible"):$(".scroll-to-top").removeClass("scroll-to-top-visible")}))})),jQuery(document).ready((function(e){if(is_mobile()&&setTimeout((function(){e(".wrapper-loader").fadeOut(150)}),600),lazyLoad(e("body")),e(".hamburger").on("click",(function(){e(this).toggleClass("is-active"),e(".head-nav").toggleClass("is-open"),is_mobile()&&e("html").toggleClass("is-hidden")})),e(".head-nav_close-btn").on("click",(function(){e(".hamburger").toggleClass("is-active"),e(".head-nav").removeClass("is-open"),is_mobile()&&e("html").removeClass("is-hidden")})),e(".answer-item_title").on("click",(function(){e(this).closest(".answer-item").toggleClass("is-active")})),is_mobile()||(e(".js-modal").on("show.bs.modal",(function(o){e(".fixed-menu").addClass("is-overflow"),e(".scroll-to-top").addClass("is-hidden")})),e(".js-modal").on("hidden.bs.modal",(function(o){e(".fixed-menu").removeClass("is-overflow"),e(".scroll-to-top").removeClass("is-hidden")}))),jQuery(window).on("scroll load resize",(function(){e(".section").each((function(o,t){var s=e(t).offset().top,i=s+e(t).height(),a=e(window).scrollTop(),r=e(".ui-header").outerHeight(),n=e(t).attr("id");a+r>s&&a<i&&(e(".head-menu a.anchor").removeClass("active"),e('.head-menu a.anchor[href="#'+n+'"]').addClass("active"))}))})),e(".head-menu").on("click","a",(function(o){var t=e(".ui-header").outerHeight();if(e(this).hasClass("anchor")){o.preventDefault();var s=e(this).attr("href"),i=e(s).offset().top;e("body,html").animate({scrollTop:i-t+10},1500)}})),e(window).width()<767&&e(".head-menu").on("click","a",(function(){e(this).hasClass("anchor")&&(e(".head-nav").removeClass("is-open"),e(".hamburger").removeClass("is-active"),e("html").removeClass("is-hidden"))})),e(".scroll-to-top").on("click",(function(){return e("html, body").animate({scrollTop:0},800),!1})),function(){for(var e=document.querySelectorAll(".youtube"),o=0;o<e.length;o++){var t="https://img.youtube.com/vi/"+e[o].dataset.embed+"/sddefault.jpg",s=new Image;s.src=t,s.addEventListener("load",void e[o].appendChild(s)),e[o].addEventListener("click",(function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)}))}}(),e(".review-item").on("click",(function(){var o=e(this).data("iframe"),t=e(".modal-dialog_video").find(".youtube");t.attr("data-embed",o),t.find("img").attr("src","https://img.youtube.com/vi/"+o+"/sddefault.jpg")})),e("#video").on("hidden.bs.modal",(function(o){e(this).find("iframe").length&&(e(this).find("iframe").remove(),e(this).find(".youtube").append('<div class="play-button ico-play"></div>'),e(this).find(".youtube").append('<img src=""/> '))})),e(".form-control").focus((function(){e(this).closest(".form-group").addClass("focus")})),e(".form-control").blur((function(){0==e(this).val().length&&e(this).closest(".form-group").removeClass("focus")})),e(".js_form-submit").on("click",(function(){var o=e(this).closest("form");e(o).find(".requiredField").removeClass("input-error"),e(o).find(".error").remove();var t=0;if(e(o).find(".requiredField").each((function(){if(e(this).hasClass("callback-phone"))e(this).val().length<10&&(e(this).after('<span class="error">Введите номер телефона</span>'),e(this).addClass("input-error"),t=1);else if(e(this).hasClass("callback-email")){0==/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test(e(this).val())&&(e(this).after('<span class="error">Введите корректный E-mail</span>'),e(this).addClass("input-error"),t=2)}else e(this).hasClass("callback-name")&&e(this).val().length<3&&(e(this).addClass("input-error"),e(this).after('<span class="error">Заполните поле имя</span>'),t=3)})),0!=t)return!1;e(".unified-form").ajaxForm((function(){e("#callback").modal("hide"),e("#letter").modal("show"),e(".form-group").removeClass("focus"),setTimeout((function(){e("#letter").modal("hide")}),5e3),e(".form-control").each((function(o){e(this).val("")}))}))})),!is_mobile()&&e(".js_form-content").length){var o=document.querySelector(".js_form-content");new Parallax(o,{hoverOnly:!0})}if(!is_mobile()&&e(".js_form-content_2").length)o=document.querySelector(".js_form-content_2"),new Parallax(o,{hoverOnly:!0});e('input[type="tel"]').inputmask("+7 (999) 999 99 99",{clearIncomplete:!0,showMaskOnHover:!1})}));