<template>
    <div class="picker_box">
        <mt-popup
            v-model="visible"
            position="bottom"
            style="width: 100%;"
            >
            <div>
              <mt-picker 
                @change="onValuesChange"
                :showToolbar="true"
                :visibleItemCount="3" 
                :slots="date">
                <div class="btns">
                  <span @click="cancel">取消</span>
                  <span @click="confirm">确定</span>
                </div>
                </mt-picker>
            </div>
            
        </mt-popup>
    </div>
</template>
<script>
export default {
  name: "DayPicker",
  props: {
    value: {
      default: false
    },
    day: {
      default: new Date().getDate()
    }
  },
  data() {
    return {
        date: [{
          flex: 1,
          values: [],
          textAlign: 'center',
          defaultIndex: 0
        }],
        selectDay: ''
    };
  },
  methods: {
    onValuesChange(picker, values) {
      this.selectDay = values[0]
    },
    confirm(){
      this.$emit("dayChange", this.selectDay)
      this.visible = false
    },
    cancel(){
      this.visible = false
    },
    
  },
  computed: {
    visible: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val);
      }
      
    }
  },
  watch: {
   
  },
  mounted(){
    for(let i = 1; i <= 31; i++){
        this.date[0].values.push(i)
    }
    if(this.day) {
      this.date[0].defaultIndex = this.day - 1
    }

  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/common.scss";
.picker_box{
  width: 100%;


  .btns{
    display: flex;
    justify-content: space-between;
    padding: px2rem(11px) 0;
    border-bottom: 1px solid #f5f5f5;
    span{
      flex: 1;
      color: #26a2ff;
      text-align: center;
    }
  }
}
</style>
