$(document).ready(function(){

  /* menu_____________________________________________ */
  $(".sub").hide();

  $(".slide").hover(function(){
    $(this).find(".sub").stop().slideDown(500).css({"opacity":"1"});
    $(".sub_box").stop().slideDown(500);
  },function(){
    $(this).find(".sub").stop().slideUp(500).css({"opacity":"0"});
    $(".sub_box").stop().slideUp(500);
  });


  /* visual_______________________________________________________ */

  let $img = $(".main_visual ul li .main_img");
  let $text = $(".main_visual ul li .main_txt");
  let $btn = $(".m_btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldImg = 0;
  let newImg = 0;
  let oldText = 0;
  let newText = 0;
  let count = $img.length;

  //이미지와 버튼이 바뀌는 함수
  function changeImg(newImg){
    if(oldImg !=newImg){
      $btn.eq(oldImg).removeClass("active");
      $btn.eq(newImg).addClass("active");
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg=newImg;
  }

  //텍스트 전환 효과 함수
  function changeText(newText){
    if(oldText !=newText){
      $btn.eq(oldText).removeClass("active");
      $btn.eq(newText).addClass("active");
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
      oldText=newText;
  }

  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);
  }
  
  function autoText(){
    newText++;
    if(newText>count-1){
      newText=0;
    }
    changeText(newText);
  };

  timer1=setInterval(autoImg,4000);
  timer2=setInterval(autoText,4000);

  //인디케이터

  $btn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg=$(this).index();
    changeImg(newImg);
      
    newText=$(this).index();
    changeText(newText);

    timer1 = setInterval(autoImg,4000);
    timer2 = setInterval(autoText,4000);
  });

  /* 좌우버튼 */
  $lbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg--;
    if(newImg < 0){
      newImg=count-1;
    };
    changeImg(newImg);

    newText--;
    if(newText <0){
      newText=count-1;
    };
    changeText(newText);

    timer1 = setInterval(autoImg,4000);
    timer2 = setInterval(autoText,4000);
  });

  $rbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg++;
    if(newImg > count-1){
      newImg = 0;
    };
    changeImg(newImg);

    newText++;
    if(newText > count-1){
      newText = 0;
    };
    changeText(newText);

    timer1 = setInterval(autoImg,4000);
    timer2 = setInterval(autoText,4000);
  });

  /* brand2_______________________________________________ */
  let hidden = 0;
  let bagin = 0;

  $(".base").click(function(){
    hidden=$(this).index();
    bagin=$(this).index();

    $(".base").eq(hidden).find("img").addClass("off");
    $(".move").eq(bagin).addClass("on");
    $(".cart").css("cursor","pointer");

    $(".cart").click(function(){
      $(".base").find("img").removeClass("off");
      $(".move").removeClass("on");
      $(".cart").css("cursor","auto");
    });
  });

  /* philosophy________________________________________________________________________________ */

  $philoli = $("#philosophy ul li")
  $philoli.mouseenter(function(){
    pnum = $(this).index()
    $(this).addClass("pactive"); 
    $(this).siblings().addClass("pnone");
    $(".p_txt p").eq(pnum).addClass("pon"); 

    /* 사진바꾸기 */
    let photo = $(this).attr("data-image");
    $(".p_photo").css({"background":"url("+ photo +") center center"});
    $(".p_photo").css({"filter":"brightness(70%)"});
  });
  $philoli.mouseleave(function(){
    pnum = $(this).index()
    $(this).removeClass("pactive");
    $(this).siblings().removeClass("pnone");
    $(".p_txt p").eq(pnum).removeClass("pon");

    $(".p_photo").css({"background":"url(image/philo_back0.png) center center"});
    $(".p_photo").css({"filter":"none"});
  });

  /* FAQ_______________________________________________________________________________________ */
  $(".tab_btn li").click(function(){
    tabnum = $(this).index();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    $(".tabContents .tabcon").removeClass("active");
    $(".tabContents .tabcon").eq(tabnum).addClass("active");
  });


  $(".title").click(function(){

    $(this).siblings().removeClass("active"); 
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  /* review_____________________________________________________________________________ */

  let x=0;
  let s=1;

  function motion(){
    x = x-s;
    if(x<-1080){x=0};
    if(x>0){x=-1080};

    $(".rall").css({left:x});
  };

  rauto = setInterval(motion,20);
  
  $(".rbox").hover(function(){
    clearInterval(rauto);
  }, function(){
    rauto = setInterval(motion,20);
  })


});