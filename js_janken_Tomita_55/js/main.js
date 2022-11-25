// jsを記述する際はここに記載していく


// alert(111);
// var hako = "はじめました"
// console.log(hako);


// $(".a").on('click',function(){
//     // 
// alert("h1が押されました！");

    //ついかしたもの
//  $(".a").css("color","red");

// var random = Math.floor(Math.random() * 3);
// console.log(random, "z");


// どこの何を表示している↑



$("#gu_btn").on("click",function(){
      // console.log("ランダムな数字");
      // alert("ok");
  //   1.乱数(1~5)
  
  const r=Math.floor(Math.random()*3);
  console.log(r, "じゃんけん");
  //   2.if分岐処理
  
  let view1="";
  let view2="";
  if(r==1){
       view1="グー";
       view2="あいこ";
  }
  else  if(r==2){
       view1="チョキ";
       view2="勝ち";
  }
  else  if(r==3){
       view1="パー";
       view2="負け";
  }
      
  //   3.表示処理
  $("#pc_hands").html(view1);
  $("#judgement").html(view2);
  
  });
  
  
  
  
  
  
  
  $("#cho_btn").on("click",function(){
      // console.log(r,"ランダムな数字");
      // alert("ok");
  //   1.乱数(1~5)
  
  const r=Math.ceil(Math.random()*3);
  console.log(r, "じゃんけん");
  //   2.if分岐処理
  
  let view1="";
  let view2="";
  if(r==1){
       view1="グー";
       view2="負け";
  }else if(r==2){
       view1="チョキ";
       view2="あいこ";
  
  }else  if(r==3){
       view1="パー";
       view2="勝ち";
  }
      
  //   3.表示処理
  $("#pc_hands").html(view1);
  $("#judgement").html(view2);
  
  });
  
  
  
  
  
  
  
  
  
  $("#par_btn").on("click",function(){
      // console.log(r,"ランダムな数字");
      // alert("ok");
  //   1.乱数(1~5)
  
  const r=Math.ceil(Math.random()*3);
  console.log(r, "じゃんけん");
  //   2.if分岐処理
  
  let view1="";
  let view2="";
  if(r==1){
       view1="グー";
       view2="勝ち";
  }else  if(r==2){
       view1="チョキ";
       view2="負け";
  
  }else  if(r==3){
       view1="パー";
       view2="あいこ";
  }
      
  //   3.表示処理
  $("#pc_hands").html(view1);
  $("#judgement").html(view2);
  
  });