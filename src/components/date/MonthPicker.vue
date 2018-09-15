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
  name: "MonthPicker",
  props: {
    value: {
      default: false
    },
    year: {
      default: new Date().getFullYear()
    },
    month: {
      default: new Date().getMonth() + 1
    }
  },
  data() {
    return {
        date: [{
          flex: 1,
          // TODO 优化
          values: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
          textAlign: 'right',
          defaultIndex: 0
        }, {
          divider: true,
          content: '-'
        }, {
          flex: 1,
          values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          textAlign: 'left',
          defaultIndex: 0
        }],
        selectYear: '',
        selectMonth: ''
    };
  },
  methods: {
    onValuesChange(picker, values) {
      this.selectYear = values[0]
      this.selectMonth = values[1]
    },
    confirm(){
      this.$emit("monthChange", [this.selectYear,this.selectMonth])
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
    if(this.year) {
      for(let i = 0, l = this.date[0].values.length; i < l; i++){
        if(this.year == this.date[0].values[i]){
          this.date[0].defaultIndex = i
        }
      }
    }

    if(this.month) {
      for(let i = 0, l = this.date[2].values.length; i < l; i++){
        if(this.month == this.date[2].values[i]){
          this.date[2].defaultIndex = i
        }
      }
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
