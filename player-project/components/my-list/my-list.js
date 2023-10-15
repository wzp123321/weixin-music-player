// components/my-list.js
import myBehavior from '../../behaviors/my-behavior'
Component({
  behaviors: [myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      default: ''
    },
    userId: {
      type: String,
      default: '1'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    privateData: {
      loginName: 'old'
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleDataUpdate() {
      this.setData({
        privateData: {
          loginName: '改制'
        }
      })
      this.triggerEvent('updateName', '修改后的值')
    }
  },
  /**
   * 组件数据字段监听器，用于监听 properties 和 data 的变化，可以监听全部值、单个值、多个值变化
   */
  observers: {
    '**'(val) {
      console.log('**所有的setData变化：', val) // 此时返回的 val 值是一个包含所有data变量的对象
    },
    name: function (newVal) {
      console.log('监听name变化', newVal, )
    }
  },
  // 组件间关系定义
  relations: {},
  // 组件接受的外部样式类
  externalClasses: ['custom-class'],
  created() {
    console.log('created,组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData--------------', )
  },
  attached() {
    console.log('attached,组件生命周期函数-在组件实例进入页面节点树时执行--------------', )
  },
  ready() {
    console.log('ready,组件生命周期函数-在组件布局完成后执行--------------', )
  },
  moved() {
    console.log('moved,组件生命周期函数-在组件实例被移动到节点树另一个位置时执行--------------', )
  },
  detached() {
    console.log('detached,组件生命周期函数-在组件实例被从页面节点树移除时执行--------------', )
  },
  // 组件生命周期声明对象
  lifetimes: {},
  // 组件所在页面的生命周期声明对象
  pageLifetimes: {}
})