/**
 *  定义mixins实现继承
 */

(function(){
	Ext.onReady(function(){
		
		//定义Person 对象
		Ext.define("Person",{
			eat:function(){
				alert("父类方法");
			}		
		});
		
		//定义Student 对象
		Ext.define("Student",{
			study:function(){
				alert("子类方法");
			},
			mixins:{
				//导入成员对象
				//其中key-val 
				//val必须和类名称对应
				parent:'Person'
			}
		});
		
		var stu = Ext.create('Student',{});
		//调用子类的方法
		stu.study();
		//调用父类方法
		stu.eat();
	});
})()