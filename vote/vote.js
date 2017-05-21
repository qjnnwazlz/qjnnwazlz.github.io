
function init(flag2){
			flag=flag2;
			document.getElementById("text").innerHTML = strques + stransh1 + answers[(npcid-1)*10+(flag-1)*2+0] + stranse + stransh2 + answers[(npcid-1)*10+(flag-1)*2+1] + stranse+hint;
			
			document.getElementById("ques").innerHTML = questions[(npcid-1)*5+flag-1];
			
			if(flag==1){
				document.getElementById("lastimg").className="gray";
				document.getElementById("lastpart").onclick= function(){};
				document.getElementById("nextimg").className="normal";
				document.getElementById("nextpart").onclick= function(){next()};
			}
			if(flag==4&&npcid==4){
				Toast("官方的错误逻辑已修正......");
				
			}

		}
		function last(){
			if(flag==5){
				document.getElementById("nextimg").className="normal";
				document.getElementById("nextpart").onclick= function(){next();};
			}

				flag--;
			if(flag==1){
				document.getElementById("lastimg").className="gray";
				document.getElementById("lastpart").onclick= function(){""};
			}

			init(flag);
		}
		function next(){
			if(flag==4){
				document.getElementById("nextimg").className="gray";
				document.getElementById("nextpart").onclick= function(){};
			}
			else{
				document.getElementById("lastimg").className="normal";
				document.getElementById("lastpart").onclick= function(){last();};
				
			}
			flag++;
			init(flag);
		}
		function response(res){
			
			if(flag!=5){
				document.getElementById("text").innerHTML = strques+ "<div class='block2'><div class='txt answer' onclick='init(flag)'><article class='txt answer' >再选一次</article></div></div><div class='block2'><div class='txt answer' onclick='next()'><article class='txt answer' >下一个问题！</article></div></div><br>";
			}
			else{
				
				document.getElementById("text").innerHTML = strques+ "<div class='block2'><div class='txt answer' onclick='init(flag)'><article class='txt answer' >再选一次</article></div></div><div class='block2'><div class='txt answer' onclick='init(1)'><article class='txt answer' >五个问题都答完啦，再来一遍！</article></div></div><br>";
			}
			document.getElementById("ques").innerHTML = responses[(npcid-1)*10+(flag-1)*2+res] ;
		}