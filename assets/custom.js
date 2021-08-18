$(document).ready(function () {
	// tuan added 10/12/20
	$('.single-option-selector-product-template').change(function(){
		var selected_value=$( ".single-option-selector-product-template option:selected" ).val();
		var selected_index=$( ".single-option-selector-product-template option:selected" ).index();
		if (arrayVariant[selected_index] > 0 && arrayVariant[selected_index] <= 5) {
			//$('#variant-inventory').html('stock is low'); 
			$('.controlled-price').addClass('price--low-stock');
		}
		else {
			//$('#variant-inventory').html('');		
			$('.controlled-price').removeClass('price--low-stock');
		}
		
	});
	//target scroll link
	$('#target_book_btn, #target-customized-facial-btn').click(function () {
		//$('#serv_pop').fadeIn(500);
		if( $('.menu-desktop').css('display')=='none') {
			$('html,body').animate({scrollTop: $('#target_location').offset().top - 90 },'slow');
		}
		else 
			$('html,body').animate({scrollTop: $('#target_location').offset().top - 30 },'slow');
	});
	//Edit page 18/08/2020	
	$('.flexslider_blogs1').flexslider({
		animation: "slide",
		customDirectionNav: $(".custom-navigation_blogs div"),
		itemMargin: 5,
		itemWidth: 202,
		minItems: 2,
		maxItems: 6
	  });
	if ($('.flexslider_blogs1 .esthy_slides').length<=6){
		if ($('.menu-desktop').css('display')=='none'){
			if ($('.flexslider_blogs1 .esthy_slides').length<=2){
				$('.target-arrow').hide();
			}
		}
		else {
			$('.target-arrow').hide();
			var padding_left=16.6*(6-$('.flexslider_blogs1 .esthy_slides').length)/2.0;			
			$('.flexslider_blogs1').css('padding-left',padding_left+'%');
		}
		
	}
	$('.flexslider_blogs').flexslider({
		animation: "slide",
		customDirectionNav: $(".custom-navigation_blogs div")
	  });
	//17/08/2020
	$('.flexslider').flexslider({
		animation: "slide",
		customDirectionNav: $(".custom-navigation div")
	});

	$('.flexslider_mb').flexslider({
		animation: "slide",
		customDirectionNav: $(".custom-navigation_mb div")
	});
	var is_mobile = false;

    if( $('.menu-desktop').css('display')=='none') {
        is_mobile = true;   
		//esthy_pop-up-content
		var win_height = $(window).height() - 135;
		$('.esthy_pop-up-content').height(win_height);
		
    }
	/* mobile menu & book button*/
	$('.book_this').mouseover(function () {
		$('.drop_down').show();
		$('#book_btn').addClass('book_btn_on');
		$('#book_btn .yellow_bg').addClass('book_btn_on');
	});

	$('.book_this').mouseout(function () {
		$('.drop_down').hide();
		$('#book_btn').removeClass('book_btn_on');
		$('#book_btn .yellow_bg').removeClass('book_btn_on');
	});
	//21/08/2020 edit menu Hauses start
	//$('#hauses_btn').hover(
		//function () {
			//$('#loc_menu').removeClass('closed');
		//},
		//function () {
			//$('#loc_menu').addClass('closed');
		//});
		$('#shopm_btn').mouseover(function () {
			$('.drop_down_shop').show();	
		});
		
		$('#shopm_btn').mouseout(function () {
			$('.drop_down_shop').hide();
		});
		//21/08/2020 edit menu Hauses end

		$('#hauses_btn').mouseover(function () {
			$('.drop_down_hauses').show();
			$('#hause_btn').addClass('hauses_btn_on');		
		});
		
		$('#hauses_btn').mouseout(function () {
			$('.drop_down_hauses').hide();
			$('#hause_btn').removeClass('hauses_btn_on');
		});
		$('#service_btn').mouseover(function () {
			$('.drop_down_service').show();
			$('#service_btn').addClass('service_btn_on');		
		});
		
		$('#service_btn').mouseout(function () {
			$('.drop_down_service').hide();
			$('#service_btn').removeClass('service_btn_on');
		});

	window.addEventListener('scroll', function () {
		if (template!="index"){
			return;
		}
		var curHeight = pageYOffset;

		if (curHeight > 600) {
			$('#logo_scroll').slideUp();//.addClass('logo_up');		
			$('.logo_small').slideDown();
		}
		if (curHeight < 600) {
			$('#logo_scroll').slideDown();//.removeClass('logo_up');
			$('.logo_small').slideUp();
		}		
				
	});
	$('#searchers').click(function () {
		var x = document.getElementById('s');
		if (window.getComputedStyle(x).display === 'none') {
			$('#s').show();
		} else {
			$('#s').hide();
		}

	});

	$('#searchEstheis').click(function () {
		var x = document.getElementById('s');
		if (window.getComputedStyle(x).display === 'none') {
			$('#s').fadeIn(500);
		} else {
			$('#s').fadeOut(500);
		}

	});
	$('#searchshow').click(function () {		
	//	var x = document.getElementById('boxsearch');
	//	if (window.getComputedStyle(x).display === 'none') {
	//		document.getElementById("iconsearchbox").src = "https://cdn.shopify.com/s/files/1/0386/7390/7756/files/close_4-512.webp?v=1592462054";
	//		$('#boxsearch').fadeIn();
	//	} else {
	//	document.getElementById("iconsearchbox").src = "https://cdn.shopify.com/s/files/1/0386/7390/7756/files/search-icon.png?v=1591026354";
	//		var x2 = document.getElementById('s');
	//		if (window.getComputedStyle(x2).display === 'none') {				
	//		} else {
	//			$('#s').fadeOut(500);
	//		}
	//		$('#boxsearch').fadeOut();
	//	}
		
	});
	$('#iconlogin').hover(
		function () {
			$('#drop_down_login_box').removeClass('closed');
		},
		function () {
			$('#drop_down_login_box').addClass('closed');
		});

	$('#drop_down_login_box').hover(
		function () {
			$('#drop_down_login_box').removeClass('closed');
		},
		function () {
			$('#drop_down_login_box').addClass('closed');
		});


	var m_mobile_active = false;
	var book_m_open = false;
	var shop_m_open = false;
	var service_m_open = false;
	

	$('#hamburger').click(function () {
		//close book
		if(book_m_open){
			clickbooknow();
		}
		//close shop
		if(shop_m_open){
			clickshop();
		}
		//close service
		if(service_m_open){
			clickservice();
		}
		show_hide_menu();
		if(book_m_open){
			$('#book_btn').addClass('book_btn_on');
		}else{
			$('#book_btn').removeClass('book_btn_on');
		}
		
	});

	//click botton book
	$('#book_btn').click(function () {
		if(m_mobile_active && shop_m_open){
			clickbooknow();
		}else{
			show_hide_menu();
			if(m_mobile_active){
				clickbooknow();
			}else{
				if(book_m_open){
					
					clickbooknow();
				}
			}
		}	
		if(book_m_open){
			$('#book_btn').addClass('book_btn_on');
		}else{
			$('#book_btn').removeClass('book_btn_on');
		}	
	});

	//click botton shop
	$('#shop_m_btn1').click(function () {
		if(m_mobile_active && book_m_open){
			clickshop();
		}else{
			show_hide_menu();
			if(m_mobile_active){
				clickshop();
			}else{
				if(shop_m_open){
					clickshop();
				}
			}
		}
	});

	function show_hide_menu(){
		if (!is_mobile) return;
		if (m_mobile_active === false) {			
			m_mobile_active = true;			
			$('.logo_big_mobile').addClass('logo_up');
			$('.main_slideshow').addClass('main_slideshow_down');
			//$('.mobile_menus').removeClass('hider');
			if ($(document).scrollTop() >= 1100) {
				$('.mobile_btns').removeClass('nav_logo_up');
			}
			else {
				$('.mobile_btns').addClass('nav_logo_up');
			}

			$('#nav-icon').toggleClass('open_men');
			$('.mobile_menus').slideDown();
			
			return false;
		}
		if (m_mobile_active === true) {
			m_mobile_active = false;			
			$('.mobile_menus').slideUp();
			$('.logo_big_mobile').removeClass('logo_up');
			$('.main_slideshow').removeClass('main_slideshow_down');
			//$('.mobile_menus').addClass('hider');
			$('.mobile_btns').addClass('nav_logo_up');
			$('#nav-icon').toggleClass('open_men');
			
			return false;
		}
	}
	
	$('#book_m_btn').click(function () {
		
		clickbooknow();
		if(book_m_open){
			$('#book_btn').addClass('book_btn_on');
		}else{
			$('#book_btn').removeClass('book_btn_on');
		}
	});

	/*23/02/2021 */
	$('#service_m_btn1').click(function () {
		
		clickservice();
	});

	function clickservice() {
		if (book_m_open === true) {
			//close menu book
			$('#open_menu_book').addClass('open_closed');
			book_m_open = false;
		}
		if (shop_m_open === true) {
			//close menu book
			$('#open_menu_shop').addClass('open_closed');
			shop_m_open = false;
		}
		if (service_m_open === false) {
			$('#open_menu_service').removeClass('open_closed');
			service_m_open = true;			
		}
		else {
			$('#open_menu_service').addClass('open_closed');
			service_m_open = false;			
		}
	  }
	$('#shop_m_btn').click(function () {
		
		clickshop();
	});

	function clickshop() {
		if (book_m_open === true) {
			//close menu book
			$('#open_menu_book').addClass('open_closed');
			book_m_open = false;
		}
		if (service_m_open === true) {
			//close menu service
			$('#open_menu_service').addClass('open_closed');
			service_m_open = false;
		}
		if (shop_m_open === false) {
			$('#open_menu_shop').removeClass('open_closed');
			shop_m_open = true;			
		}
		else {
			$('#open_menu_shop').addClass('open_closed');
			shop_m_open = false;			
		}
	  }

	  function clickbooknow() {
		if (shop_m_open === true) {
			//close menu book
			$('#open_menu_shop').addClass('open_closed');
			shop_m_open = false;
		}
		if (service_m_open === true) {
			//close menu book
			$('#open_menu_service').addClass('open_closed');
			service_m_open = false;
		}
		if (book_m_open === false) {
			$('#open_menu_book').removeClass('open_closed');
			book_m_open = true;
			return false;
		}
		else {
			$('#open_menu_book').addClass('open_closed');
			book_m_open = false;
			return false;			
		}
	  }
	/* end mobile menu & book button*/

	/*footer*/
	//footer slider
	 $("#myUl").endlessRiver();
	var esthy_closed = false;

	
	$('#esthy_close').click(function() {
		
		$('#esthy_slider').addClass('esthy_slide_closed');
		setTimeout(function(){
		$('#esthys_right_btn').removeClass('esthys_btnss_closed');
		$('#esthys_right_btn').addClass('esthys_btnss_open');
			}, 100); 
				esthy_closed = true;

	});
	$('#esthys_right_btn').click(function() {
		
		$('#esthy_slider').removeClass('esthy_slide_closed');
		$('#esthys_right_btn').addClass('esthys_btnss_closed');
		$('#esthys_right_btn').removeClass('esthys_btnss_open');
				esthy_closed = false;
	});
	$('.esthy_block, .thumb_block').click(function() {
		if ($(this).hasClass('blog-new')) return;
		$('.lead_text').html('');
		$('#esthie_name').html('');
		$('#esthie_location').html('');
		$('.esthie-pop-book-btn-next').remove();
      	var content='';
		var img = '';
		var name = '';
		var stuff ='';
		if ($(this).hasClass('thumb_block')){
			content = $(this).children('.thumb_img').children('.esthie-hidden-content').html();
			img = $(this).children('.thumb_img').children('.esthie-hidden-img').val();
			name = $(this).children('.thumb_img').children('.esthie-hidden-name').val();
			stuff = $(this).children('.thumb_img').children('.esthie-hidden-stuff').html().split('*')[1];
		}
		else {
			content = $(this).children('.esthie-hidden-content').html();
			img = $(this).children('.esthie-hidden-img').val();
			name = $(this).children('.esthie-hidden-name').val();
			stuff = $(this).children('.esthie-hidden-stuff').html().split('*')[1];
		}
		var id='';
		var cat='';
		if (stuff != null && stuff!='undefined' && stuff.length>0){
			id = stuff.split('#')[0];
			cat = stuff.split('#')[1];
		}		
		$('.lead_text').html(content);
		$('#esthie_name').html(name);
		$('#esthie_location').html(cat);
		$('.left_esthy2-img').attr('src',img);
		$('#form_center_id').attr('href','https://facehaus.zenoti.com/webstoreNew/'+id);
		$('.esthy_pop-up').fadeIn(300);
		
		//04/06/2021 one esthie multi hauses
		$('.esthie-pop-book-at').html('at '+cat);
		var haus_names=[];
		if ($(this).children('.esthie-hidden-haus-names').length>0 && $(this).children('.esthie-hidden-haus-names').html().trim()!=''){
			haus_names= $(this).children('.esthie-hidden-haus-names').html().split(',');
		}
		var haus_ids=[];
		if ($(this).children('.esthie-hidden-haus-ids').length>0 && $(this).children('.esthie-hidden-haus-ids').html().trim()!=''){
			haus_ids= $(this).children('.esthie-hidden-haus-ids').html().split(',');
		}	
		$('.esthie-pop-book-at').show();
		if (haus_ids.length==0){
			$('.esthie-pop-book-at').hide();
			
		}
		else {		
			for (i=0;i<haus_ids.length;i++){			
				var new_btn = '<div class="esthie-pop-book-btn esthie-pop-book-btn-next"><a id="form_center_id_'
								+i+'" href="https://facehaus.zenoti.com/webstoreNew/'
								+haus_ids[i]+'" class="book_now_btn2" target="_blank">Book Now</a>'
								+'<div class="esthie-pop-book-at">at '+haus_names[i]+' </div></div>';
				$('.esthie-pop-book-next-content').after(new_btn);			
			}
		}
    });

	$('.closer').click(function() {
		$('.esthy_pop-up').fadeOut(300);
    });
	//***********desktop: mousemove to bottom of page************
	var isShowedFooter = false;
	$(document).mousemove(function (event) {
		var win_height = $(window).height() - 35;
		var docheight = $(document).height() - 35;
		if (docheight > win_height) docheight = win_height;

		if ((event.pageY - window.pageYOffset) > docheight) {
			//show the yellow footer	

			if (!isShowedFooter) {
				//console.log(isShowedFooter);
				$('.footer').slideDown(150);
				//$('.footer').show();
				isShowedFooter = true;
			}
		}
		else {

			//hide the yellow footer

			if (isShowedFooter && (event.pageY - window.pageYOffset) < docheight - 60) {
				$('.footer').slideUp(150);
				//console.log(isShowedFooter);
				//$('.footer').hide();
				isShowedFooter = false;
				
			}
		}

	});
	//***********End desktop: mousemove to bottom of page************
	var isShowedFooter_m = false;
	$('.footer-mobile-nav').click(function () {
		if (isShowedFooter_m === false) {
			$('.foot_holder').slideDown(200);
			isShowedFooter_m = true;
			$('.mob_down_arrow').removeClass('rotated');
			return false;
		}
		else {
			$('.foot_holder').slideUp(200);
			$('.mob_down_arrow').addClass('rotated');
			isShowedFooter_m = false;
			return false;
		}
	});

	/*end footer*/

	$('.about_photo2').mouseover(function () {
		$('#abt_1').fadeOut(100);
		$('#abt_3').fadeOut(100);
		$('#abt_2').delay(110).fadeIn(100);
		$(this).addClass('photo_top');
		$('.about_photo1, .about_photo3').removeClass('photo_top');
		//clearTimeout(AboutTimeOut);
	});

	$('.about_photo1').mouseover(function () {
		$('#abt_1').fadeOut(100);
		$('#abt_2').fadeOut(100);
		$('#abt_3').delay(110).fadeIn(100);
		$(this).addClass('photo_top');
		$('.about_photo2, .about_photo3').removeClass('photo_top');
		//clearTimeout(AboutTimeOut);
	});

	$('.about_photo3').mouseover(function () {
		$('#abt_2').fadeOut(100);
		$('#abt_3').fadeOut(100);
		$('#abt_1').delay(110).fadeIn(100);
		$(this).addClass('photo_top');
		$('.about_photo1, .about_photo2').removeClass('photo_top');
		//clearTimeout(AboutTimeOut);
	});
	$('#closer_3, .pop_backer').click(function () {

	});
	$('#pol_1_close').click(function () {
		$('.coming_soon_photo').fadeOut(500);

	});
	$('#pol_2_close').click(function () {
		$('.find_photo').fadeOut(500);

	});
	/*home page pop up COMMENT 10/09/2020 
	var holiday_popup = sessionStorage.getItem('holidayPopup');
	if(!holiday_popup){
		if (template!="index"){
			return;
		}
		function holiday_popup_show(){
			if ($('#holiday-popup').length)
				$('#holiday-popup').fadeIn(500);
		}

		setTimeout(function(){
			holiday_popup_show();
		},3000); // 1000 to load it after 1 second from page load

		sessionStorage.setItem('holidayPopup','true');
	}
	
	
	$('.holiday-popup-closer').click(function() {
		$('#holiday-popup').fadeOut(500);
		
	});	
	 end home pop up*/

	// subscribe 28/08/2020
	//tuanlv commented 10/09/2020
	/* subscribe */
	var subscribe_popup = sessionStorage.getItem('subscribepopup');
	if(!subscribe_popup){
		function subscribe_popup_show(){
			if ($('#subscribe-popup').length)
				$('#subscribe-popup').fadeIn(500);
				
		}
		setTimeout(function(){
			subscribe_popup_show();
		},3000);
		sessionStorage.setItem('subscribepopup','true');	
	}
	

	// get all list centers
	$.ajax({
		url: 'https://api.zenotistage.com/v1/centers/',
		type: 'GET',
		headers: {
			'Authorization': 'apikey ceb10c6fdf864bc2807f2af33a822010',
			'Content-Type': 'application/json',
		},		
		success: function (data) {
			if (data.centers.length > 0) {
				//console.log(data.centers);
				for (i = 0; i < data.centers.length; i++) {
					$('#subscribe_haus').append('<option class="haus_op" value="' + data.centers[i].id + '">' + data.centers[i].name + '</option>');
					$('#subscribe_haus_pop').append('<option class="haus_op" value="' + data.centers[i].id + '">' + data.centers[i].name + '</option>');
				}
			} 
		},
		error: function (error) {
			console.log(error);
		},
	});
	
	$('#subscribe-popup-closer').click(function() {
		if ($('#subscribe-popup').length)
		$('#subscribe-popup').fadeOut(500);
		
	});	
	function subscribe (email, id_center, first_name, last_name, type) {		
		var invalid_message='';
		if(typeof(first_name) === 'undefined' || first_name == ''){
			invalid_message ='* Please input your first name.';			
		}
		else if(typeof(last_name) === 'undefined' || last_name == ''){
			invalid_message ='* Please input your last name.';			
		}
		else if(typeof(email) === 'undefined' || email == ''){
			invalid_message ='* Please input your valid email address.';
		}		
		else if(!validateEmail(email)){
			invalid_message ='* Please input your valid email address.';
		}
		else if(typeof(id_center) === 'undefined' || id_center == ''|| id_center == '0'){
			invalid_message ='* Please select a Haus near you.';
		}
		
		if (type=='1'){			
			$('.subscribe-invalid-message').html(invalid_message);
		}
		else {
			$('.subscribe-invalid-message-bottom').html(invalid_message);	
		}
		if (invalid_message !==''){
			$('.subscribe-loading').hide();		
			return;
		}
		
		
		$.ajax({
			url: 'https://api.zenotistage.com/v1/guests/search?email=' + email + '&center_id=' + id_center,
			type: 'GET',
			headers: {
				'Authorization': 'apikey ceb10c6fdf864bc2807f2af33a822010',
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				
			}),
			success: function (data) {
				if(data.guests.length > 0){
					if (type=='1'){			
						$('.subscribe-invalid-message').html('* Your email address already exists.');
					}
					else {
						$('.subscribe-invalid-message-bottom').html('* Your email address already exists.');	
					}
					$('.subscribe-loading').hide();		
				}else{
					subscribe_submit (email, id_center, first_name, last_name,type);
				}
			},
			error: function (error) {
				console.log(error);
				$('.subscribe-loading').hide();		
			},
		});
	};

	function subscribe_submit (email, id_center, first_name, last_name,type) {
		
		$.ajax({
			url: 'https://api.zenotistage.com/v1/guests',
			type: 'POST',
			headers: {
				'Authorization': 'apikey ceb10c6fdf864bc2807f2af33a822010',
				'Content-Type': 'application/json',
			},
			data: JSON.stringify({
				"center_id": id_center,
				"personal_info": {
					"first_name": first_name,
					"last_name": last_name,
					"mobile_phone": {
						"country_code": 01,
						"number": "0000000"
					},
					"email": email
				}
			}),
			success: function (data) {				
				if (type=='1') {					
					$('.subscribe_lf_pop').hide();
					$('.subscribe_rg_pop').hide();
					$('.subscribe-success').show();
					sessionStorage.setItem('subscribepopup','true');
				}
				else {					
					$('#subscribe-popup').fadeIn(500);
					$('.subscribe_lf_pop').hide();
					$('.subscribe_rg_pop').hide();
					$('.subscribe-success').show();
				}
				$('.subscribe-loading').hide();				
			},
			error: function (error) {
				console.log(error);
				$('.subscribe-loading').hide();		
			},
		});
		
	};

	function validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	$('#subscribe_submit_pop').click(function () {
		$('.subscribe-loading').show();
		var emailsubscribe = $('#subscribe_email_pop').val();	
		var id_center  = $('#subscribe_haus_pop option:selected').val();
		var first_name  = $('#subscribe_firtname_pop').val();
		var last_name  = $('#subscribe_lastname_pop').val();
		subscribe(emailsubscribe, id_center, first_name, last_name,'1');
	});

	$('#subscribe_submit').click(function () {
		$('.subscribe-loading').show();
		var emailsubscribe = $('#subscribe_email').val();	
		var id_center  = $('#subscribe_haus option:selected').val();
		var first_name  = $('#subscribe_firtname').val();
		var last_name  = $('#subscribe_lastname').val();
		subscribe(emailsubscribe, id_center, first_name, last_name,'2');
	});
	
	$('.subscribe-success-code-copy').click(function () {
		/* Get the text field */
		  var copyText = document.getElementById("subscribe-success-code-hidden");

		  /* Select the text field */
		  copyText.select();
		  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

		  /* Copy the text inside the text field */
		  document.execCommand("copy");

		  /* Alert the copied text */
		  $('.subscribe-text-copied-inner').show();
		  setTimeout(function(){ $('.subscribe-text-copied-inner').fadeOut(); }, 5000);
		  //alert("Copied the text: " + copyText.value);
	});
	
	/* end subscribe */
	
	$('.more_btn, .tooltip').click(function () {
		$('#serv_pop').fadeIn(500);
		$('html,body').animate({
			scrollTop: $('#services').offset().top - 10 //tuan updated 27/11

		},
			'slow');
	});

	//$('#serv_slideshow').cycle('goto', 1);			   
	$('.serv_text2_block').click(function () {
		serv_click(1);
	});

	function serv_click(i_serv) {
		var idserv = "";
		var i;
		for (i = 1; i < 23; i++) {
			idserv = "#show_serv" + i;
			$(idserv).removeClass('show_serv');
		}
		idserv = "#show_serv" + i_serv;
		$(idserv).addClass('show_serv');
	}

	$('#serv1').click(function () {
		serv_click(1);
		
	});
	$('#serv2').click(function () {
		serv_click(2);
	});
	$('#serv3').click(function () {
		serv_click(3);
	});
	$('#serv4').click(function () {
		serv_click(4);
	});
	$('#serv5').click(function () {
		serv_click(5);
	});
	$('#serv6').click(function () {
		serv_click(6);
	});
	$('#serv7').click(function () {
		serv_click(7);
	});
	$('#serv8').click(function () {
		serv_click(8);
	});
	$('#serv9').click(function () {
		serv_click(9);
	});
	$('#serv10').click(function () {
		serv_click(10);
	});
	$('#serv11').click(function () {
		serv_click(11);
	});
	$('#serv12').click(function () {
		serv_click(12);
	});
	$('#serv13').click(function () {
		serv_click(13);
	});
	$('#serv14').click(function () {
		serv_click(14);
	});
	$('#serv15').click(function () {
		serv_click(15);
	});
	$('#serv16').click(function () {
		serv_click(16);
	});
	$('#serv17').click(function () {
		serv_click(17);
	});
	$('#serv18').click(function () {
		serv_click(18);
	});
	$('#serv19').click(function () {
		serv_click(19);
	});
	$('#serv20').click(function () {
		serv_click(20);
	});
	$('#serv21').click(function () {
		serv_click(21);
	});
	//add 23/02/2021
	$('#serv22').click(function () {
		serv_click(22);
	});
	$('.closer_inner, .pop_backer').click(function () {
		$('#serv_pop').fadeOut(500);
	});

	$(window).scroll(function () {

		if ($(window).scrollTop() + $(window).height() > $(document).height() - 35) {
			//show the yellow footer	

			 if (!isShowedFooter) {
			 	$('.footer').slideDown(150);
			 	isShowedFooter = true;
			 }
		}
		else {

			//hide the yellow footer

			 if (isShowedFooter && ($(window).scrollTop() + $(window).height() < $(document).height() - 35)) {
			 	$('.footer').slideUp(150);
			 	isShowedFooter = false;
			 }
		}
	});

	$('#esthys_btn, #esthie_grid').click(function () {
		if (template=="index"){
			$('html,body').animate({
				scrollTop: $('#esthys').offset().top - 40},
				'slow');
		}
		else {
			window.location.replace(window.location.origin+"#esthys");
		}
		

	});
	$('#esthies_m_btn').click(function () {
		functionupmenu();
		if (template=="index"){
			$('html,body').animate({
				scrollTop: $('#esthys').offset().top - 40},
				'slow');
		}
		else {
			window.location.replace(window.location.origin+"#esthys");
		}
		

	});
	$('#shop_btn, #shopm_btn, #popup_shop_btn').click(function () {
		
			window.location.replace(window.location.origin+"/collections/shop");
		
	});

	$('#service_btn, #meetour_grid').click(function () {		
		if (template=="index"){
			$('html,body').animate({
				scrollTop: $('#services').offset().top - 40},
				'slow');
		}
		else {
			window.location.replace(window.location.origin+"#services");
		}
	});

	$('#service_m_btn').click(function () {
		functionupmenu();
		if (template=="index"){
		$('html,body').animate({
			scrollTop: $('#services').offset().top - 40},
			'slow');
		}
		else {
			window.location.replace(window.location.origin+"#services");
		}
	});

	$('#hauses_m_btn').click(function () {
		functionupmenu();
		if (template=="index"){
		$('html,body').animate({
			scrollTop: $('#hauses').offset().top -50},
			'slow');
		}else {
			window.location.replace(window.location.origin+"#hauses");
		}
	});

	$('#hauses_btn').click(function () {
		if (template=="index"){
			$('html,body').animate({
			scrollTop: $('#hauses').offset().top +20},
			'slow');
		}
		else {
			window.location.replace(window.location.origin+"#hauses");
		}
	});
	/* backup 147-149
	$('#parties_btn').click(function () {
		if (template=="index"){
			$('html,body').animate({
			scrollTop: $('#parties').offset().top + 20},
			'slow');
		}
		else {
			window.location.replace(window.location.origin+"#parties");
		}
		
	});
	$('#parties_m_btn').click(function () {
		functionupmenu();
		$('html,body').animate({
			scrollTop: $('#parties').offset().top - 100},
			'slow');
	});
	$('#story_btn, #about_f_btn').click(function() {
		
		if (template=="index"){
			$('html,body').animate({
			scrollTop: $('#abouts').offset().top + 20},
			'slow');
		}
		else {
			window.location.replace(window.location.origin+"#abouts");
		}
	});
	$('#story_m_btn').click(function() {
		functionupmenu();
		$('html,body').animate({
			scrollTop: $('#abouts').offset().top - 50},
			'slow');
		});

	$('#join_btn, #join_f_btn').click(function() {
		
		if (template=="index"){
			$('html,body').animate({
			scrollTop: $('#join').offset().top + 20},
			'slow');
		}
		else {
			window.location.replace(window.location.origin+"#join");
		}
	});

	$('#join_m_btn').click(function() {	
		functionupmenu();
		$('html,body').animate({
			scrollTop: $('#join').offset().top - 50},
			'slow');
	});
	*/
	var functionupmenu = function () {		
		$('.mobile_menus').slideUp();
		$('.logo_big_mobile').removeClass('logo_up');
		$('.main_slideshow').removeClass('main_slideshow_down');
		//$('.mobile_menus').addClass('hider');
		$('.mobile_btns').addClass('nav_logo_up');
		$('#nav-icon').toggleClass('open_men');
		m_mobile_active = false;
	};

	//
	$('.loc_arrow').click(function () {
		$('.scrolling-wrapper').animate({ scrollLeft: '+=560' }, 1000, 'easeOutQuad');
	});
	var i = 0;
	$('.loc_arrow2, .loc_arrow2-b').click(function () {
		i ++;
		console.log(i);
		$('.scrolling-wrapper').animate({ scrollLeft: '-=560' }, 1000, 'easeOutQuad');
	});

	$(function () {
		$('.scrolling-wrapper').scroll(function () {
			if ($(this).scrollLeft() >= 100) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
				$('.loc_arrow2, .loc_arrow2-b').fadeIn(300);
			}
			else { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
				$('.loc_arrow2, .loc_arrow2-b').fadeOut(300);
			}


		});
	});

	$('.accordion-menu, .accordion-menu-producs').click(function() {
		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().slideUp();
		}
		else {
			$(this).addClass('active');	
			
			$(this).next().slideDown();
		}
	}); 	
	/*product*/
	$('.thumb-img img').click(function() {
		var Player = document.getElementById('video_play');
		var video_link = $(this).data('video-link');
		var inclu = video_link.includes('?autoplay=1');
		if(inclu !=true){
			video_link = video_link + "?autoplay=1";
		}
		video_link = video_link +"&rel=0";
		$('.video-link').attr('src',video_link);
		$('.video-popup-outter').fadeIn();
		$('.video-popup').fadeIn();
	});
	$('.video-popup .close').click(function() {		
		$('.video-popup-outter').fadeOut();
		$('.video-popup').fadeOut();
		$('.video-link').attr('src','');
		
	}); 	
	
	$(window).load(function () {	
		var cartItemCounter = document.getElementById('count_item_cart');
		jQuery.getJSON('/cart.js', function (cart) {
			var newCount = cart.item_count;
			if (newCount != 0) {
				if (cartItemCounter != null) {
					cartItemCounter.innerHTML = newCount;
					$('#count_item_cart').show();
				}
			}
		});

	});

});
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}