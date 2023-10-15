// behavior.js
export default Behavior({
  data: {
    behaviorData: {
      test: '1`2312312'
    }
  },
  ready: function () {
    this.behaviorMethod()
  },
  methods: {
    behaviorMethod: function () {
      console.log("behaviorMethod")
    }
  }
})