/**

 * 自定义win插件 或对象,其中包名称和对象名称要一样
 * 这样导入的时候，就不会出错了
 */
Ext.define("ux.mywin", {
			// 继承对象
			extend : 'Ext.window.Window',
			width : 300,
			height : 140,
			// 设定数据
			settitle : function() {
				this.title = this.newtitle;

			},
			//通过config方法中配置的成员变量，默认添加set和get方法
			config:{
				newtitle : 'default',
			},
			// 设定初始化方法
			initComponent : function() {
				// 调用方法
				this.settitle();
				// 父类的方法
				this.callParent(arguments);
			}

		});
