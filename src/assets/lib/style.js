  function showInform1(){
    document.getElementById("hovermenu1").style.display="block";
    document.getElementById("bg").style.display='none';
    document.getElementById("loginarea").style.display='none';
    document.getElementById("searcharea").style.display='none';
    document.getElementById("shopcararea").style.display="none";
    document.getElementById("hovermenu3").style.display="none";
  }
  //隐藏悬浮层
  function hiddenInform1(){
    document.getElementById('hovermenu1').style.display='none';  

  }

  function showInform2(){
    document.getElementById("hovermenu2").style.display="block";
    document.getElementById("bg").style.display='none';
    document.getElementById("searcharea").style.display='none';
    document.getElementById("loginarea").style.display='none';
    document.getElementById("shopcararea").style.display="none";
    document.getElementById("hovermenu3").style.display="none";
  }
  //隐藏悬浮层
  function hiddenInform2(){
    document.getElementById('hovermenu2').style.display='none';  
  }

  function showInform3(){
    document.getElementById("hovermenu3").style.display="block";
    document.getElementById("bg").style.display='none';
    document.getElementById("searcharea").style.display='none';
    document.getElementById("loginarea").style.display='none';
    document.getElementById("shopcararea").style.display="none";
  }
  //隐藏悬浮层
  function hiddenInform3(){
    document.getElementById('hovermenu3').style.display='none';  
  }

  function showdetail1(){
    document.getElementById("detail1").style.display="block";
    document.getElementById("hovermenu3").style.display="block";
    document.getElementById("detail2").style.display="none";
    document.getElementById("detail3").style.display="none";
    document.getElementById("detail4").style.display="none";
  }

  function hidedetail1(){
    document.getElementById("detail1").style.display="none";
    document.getElementById("hovermenu3").style.display="none";
  }

  function showdetail2(){
    document.getElementById("detail2").style.display="block";
    document.getElementById("hovermenu3").style.display="block";
    document.getElementById("detail1").style.display="none";
    document.getElementById("detail3").style.display="none";
    document.getElementById("detail4").style.display="none";
  }

  function hidedetail2(){
    document.getElementById("detail2").style.display="none";
    document.getElementById("hovermenu3").style.display="none";
  }

  function showdetail3(){
    document.getElementById("detail3").style.display="block";
    document.getElementById("hovermenu3").style.display="block";
    document.getElementById("detail2").style.display="none";
    document.getElementById("detail1").style.display="none";
    document.getElementById("detail4").style.display="none";
  }

  function hidedetail3(){
    document.getElementById("detail3").style.display="none";
    document.getElementById("hovermenu3").style.display="none";
  }

  function showdetail4(){
    document.getElementById("detail4").style.display="block";
    document.getElementById("hovermenu3").style.display="block";
    document.getElementById("detail2").style.display="none";
    document.getElementById("detail3").style.display="none";
    document.getElementById("detail1").style.display="none";
  }

  function hidedetail4(){
    document.getElementById("detail4").style.display="none";
    document.getElementById("hovermenu3").style.display="none";
  }

  //登录框控制
  function showlogin(){
    document.getElementById("bg").style.display="block";
    document.getElementById("loginarea").style.display="block";
    document.getElementById("searcharea").style.display="none";
    document.getElementById("shopcararea").style.display="none";
  }

  function hidelogin(){
    document.getElementById("bg").style.display='none';
    document.getElementById("loginarea").style.display='none';
  }

  function hidecart(){
    document.getElementById("bg").style.display='none';
    document.getElementById("shopcararea").style.display='none';
  }

  function showshopcar(){
    document.getElementById("bg").style.display="block";
    document.getElementById("loginarea").style.display="none";
    document.getElementById("searcharea").style.display="none";
    document.getElementById("shopcararea").style.display="block";
  }

  function hideshopcar(){
    document.getElementById("bg").style.display='none';
    document.getElementById("loginarea").style.display='none';
  }

  //搜索框控制
  function showsearch(){
    document.getElementById("bg").style.display="block";
    document.getElementById("searcharea").style.display="block";
    document.getElementById("loginarea").style.display="none";
    document.getElementById("shopcararea").style.display="none";

  }

  function hidesearch(){
    document.getElementById("bg").style.display='none';
    document.getElementById("searcharea").style.display='none';
  }

  function hidedetails(){
    document.getElementById("detail2").style.display="none";
    document.getElementById("detail1").style.display="none";
    document.getElementById("detail4").style.display="none";
    document.getElementById("detail3").style.display="none";
  }

  window.addEventListener('scroll',function(){
    var scrolltop=document.documentElement.scrollTop+document.body.scrollTop;
      document.getElementById("hovermenu1").style.top=(scrolltop+60)+"px";
      document.getElementById("hovermenu2").style.top=(scrolltop+60)+"px";
      document.getElementById("hovermenu3").style.top=(scrolltop+60)+"px";
      document.getElementById("loginarea").style.top=(scrolltop+60)+"px";
      document.getElementById("shopcararea").style.top=(scrolltop+60)+"px";
      document.getElementById("searcharea").style.top=(scrolltop+60)+"px";
      document.getElementById("detail1").style.top=(scrolltop+120)+"px";
      document.getElementById("detail2").style.top=(scrolltop+120)+"px";
      document.getElementById("detail3").style.top=(scrolltop+120)+"px";
      document.getElementById("detail4").style.top=(scrolltop+120)+"px";
  })

  

  // function alerts(){
  //   function Person(age){
  //     this.age=age;
  //     this.growOld=()=>{
  //         this.age++;
  //       }
  //     }
  //   var person=new Person(1);

  //   setTimeout(person.growOld,1000);
  //   setTimeout(function(){console.log(person.age)},2000);
  // }

  function emailcheck(){
    var emailtext=document.getElementById("newemail").value;
    var regemail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    //验证邮箱
    if(regemail.test(emailtext)){
      document.getElementById("emailcorrect").style.display="block";
      document.getElementById("emailerror1").style.display="none";
      document.getElementById("emailerror2").style.display="none";
    }
    else if(emailtext===""){
      document.getElementById("emailcorrect").style.display="none";
      document.getElementById("emailerror2").style.display="block";
      document.getElementById("emailerror1").style.display="none";
    }
    else{
      document.getElementById("emailcorrect").style.display="none";
      document.getElementById("emailerror2").style.display="none";
      document.getElementById("emailerror1").style.display="block";
    }
  }

  function namecheck(){
    var nametext=document.getElementById("newname").value;
    var regname = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    //验证名称
    if(regname.test(nametext)){
      document.getElementById("namecorrect").style.display="none";
      document.getElementById("nameerror2").style.display="none";
      document.getElementById("nameerror1").style.display="block";
    }
    else if(nametext===""){
      document.getElementById("namecorrect").style.display="none";
      document.getElementById("nameerror2").style.display="block";
      document.getElementById("nameerror1").style.display="none";
    }
    else{
      document.getElementById("namecorrect").style.display="block";
      document.getElementById("nameerror1").style.display="none";
      document.getElementById("nameerror2").style.display="none";
    }
  }

  function passwordcheck(){
    var passwordtext=document.getElementById("newpassword").value;
    //验证密码长度
    if((passwordtext.length<8)&&(passwordtext!=="")){
      document.getElementById("passwordcorrect").style.display="none";
      document.getElementById("passworderror2").style.display="none";
      document.getElementById("passworderror1").style.display="block";
    }
    else if(passwordtext===""){
      document.getElementById("passwordcorrect").style.display="none";
      document.getElementById("passworderror2").style.display="block";
      document.getElementById("passworderror1").style.display="none";
    }
    else{
      document.getElementById("passwordcorrect").style.display="block";
      document.getElementById("passworderror1").style.display="none";
      document.getElementById("passworderror2").style.display="none";
    }
  }

  function telcheck(){
    var teltext=document.getElementById("newtel").value;
    var regtel=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    //验证手机号
    if(regtel.test(teltext)){
      document.getElementById("telcorrect").style.display="block";
      document.getElementById("telerror2").style.display="none";
      document.getElementById("telerror1").style.display="none";
    }
    else if(teltext===""){
      document.getElementById("telcorrect").style.display="none";
      document.getElementById("telerror2").style.display="block";
      document.getElementById("telerror1").style.display="none";
    }
    else{
      document.getElementById("telcorrect").style.display="none";
      document.getElementById("telerror1").style.display="block";
      document.getElementById("telerror2").style.display="none";
    }
  }


  // function autochange(){
  //   var province=document.getElementsByClassName("province")[0];
  //   var city=document.getElementsByClassName("city");
  //   city[0].style.display="none";
  //   province.onblur=function(){
  //     if (province.value==="湖北省"){
  //       city[0].style.display="block";
  //       city[1].style.display="none";
  //     }
  //   }
  // }

  

  $(function(){
    $("#upload").click(function(){
  $("#uploadfile").click();
  })
  $("#uploadfile").change(function(){

    var files=$(this)[0].files[0];    //获取文件信息
    if(files)
    {
        var reader=new FileReader();  //调用FileReader
        reader.onload=function(evt){   //读取操作完成时触发。
            $("#headimage").attr('src',evt.target.result)  //将img标签的src绑定为DataURL
        }
    reader.readAsDataURL(files); //将文件读取为 DataURL(base64)
    }
    else{
        alert("上传失败");
    }
  })
  })

  // window.onload=()=>{

  //   document.getElementById("star").onload = function star(){
  //       alert("hi");
  //     var oStar = document.getElementById("star");
  //     var aLi = oStar.getElementsByTagName("li");
  //     var oUl = oStar.getElementsById("star-list");
  //     var oSpan = oStar.getElementsById("span");
  //     var oP = oStar.getElementsById("p");
  //     var i = iScore = iStar = 0;
  //     var aMsg = [
  //           "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
  //           "不满意|部分有破损，与卖家描述的不符，不满意",
  //           "一般|质量一般，没有卖家描述的那么好",
  //           "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
  //           "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
  //           ]
  //     for (i = 1; i <= aLi.length; i++){
  //       aLi[i - 1].index = i;
  //       //鼠标移过显示分数
  //       aLi[i - 1].onmouseover = function (){
  //         fnPoint(this.index);
  //         //浮动层显示
  //         oP.style.display = "block";
  //         //计算浮动层位置
  //         oP.style.left = oUl.offsetLeft + this.index * this.offsetWidth - 104 + "px";
  //         //匹配浮动层文字内容
  //         oP.innerHTML = "<em><b>" + this.index + "</b> 分 " + aMsg[this.index - 1].match(/(.+)\|/)[1] + "</em>" + aMsg[this.index - 1].match(/\|(.+)/)[1]
  //       };
  //       //鼠标离开后恢复上次评分
  //       aLi[i - 1].onmouseout = function (){
  //         fnPoint();
  //         //关闭浮动层
  //         oP.style.display = "none"
  //       };
  //       //点击后进行评分处理
  //       aLi[i - 1].onclick = function (){
  //         iStar = this.index;
  //         oP.style.display = "none";
  //         oSpan.innerHTML = "<strong>" + (this.index) + " 分</strong> (" + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")"
  //       }
  //     }
  //     //评分处理
  //     function fnPoint(iArg){
  //       //分数赋值
  //       iScore = iArg || iStar;
  //       for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";	
  //     }
  //   }
  //   }

  // function control(val){
  //   var length=document.getElementsByClassName('goodnum').length;
  //   for(var i=0;i<length;i++){
  //     document.getElementsByClassName('goodnum')[i].value = val >= 0 ? val : 0;
  //   }
  // }

  



  





  
			
