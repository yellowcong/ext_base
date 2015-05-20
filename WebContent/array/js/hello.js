/**
 *  迭代
 */
(function(){
	Ext.onReady(function(){
		//弹出框
		//Ext.MessageBox.alert("ext","hello ext");
		//数组对象
		var users = ["yellowcong","zhang3feng","xiaophai"];
		
		//数组迭代
		//这个Array函数 要有返回，当返回false 就会停止操作
		Ext.Array.every(users,function(user){
			if(user== "yellowcong"){
				Ext.MessageBox.alert("info",user);
				return true;
			}else{
				//返回false 就直接停了
				return false;
			}
			
		});
	});
})();
