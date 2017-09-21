<template>
  <keep-alive>
    <mu-popup position="bottom" popupClass="mu-popup-full" :open="bottomPopup">
      <mu-content-block class="has-header" style="padding:16px 24px">
        <h2 style="text-align:center">{{data.title}}</h2>
        <section>
          <p v-for="(item,index)  in data.list" :key="index">
            <font class="f_b"> {{item.bold}}</font>
            {{item.content}}
          </p>
          <!-- 内容区域 -->
          <section v-for="(it,index)  in data.content_list" :key="index">
            <section v-for="(item,index)  in it.list" :key="index">
              <p style="font-weight:700;margin-top:10px">
                {{item.title}}
              </p>
              <p v-for="(item_,index)  in item.list" :key="index">
                <span v-if="item_.title">{{item_.title}}<br/></span>
                <span v-for="(item__,index) in item_.content" :key="index">
                  <span v-if="typeof item__ =='object' && item__ !='/'" class="f_b">{{item__.text}}</span>
                  <font v-if="typeof item__ =='string' && item__ !='/'">{{item__}}</font>
                  <br v-if="item__ =='/'" />
                </span>
              </p>
            </section>
          </section>
        </section>
        <section>
          <img src="../../assets/img/policy/book.jpg" style="width:100%"/>
        </section>
      </mu-content-block>
    </mu-popup>
  </keep-alive>
</template>
<script>
import { mapMutations } from 'vuex'
import xieyiContent from '../../assets/data/template_xy/xieyi.json'
import tishiBookContent from '../../assets/data/template_xy/tishi_book.json'
export default {
  name: 'ContentTemplate',
  data() {
    return {
      data: xieyiContent,
      bottomPopup: false
    }
  },
  props: {
    type: String,
    openModal: Boolean,
    title: String//标题
  },
  watch: {
    type(val) {
      console.log(val)
      this.type = val
    },
    openModal(val) {
      this['bottomPopup'] = val;
    }
  },
  methods: {
    ...mapMutations({
    })
  },
  mounted() {
  }
}
</script>
<style>
.f_b {
  font-weight: 700;
}

.mu-flat-button-stable {
  color: #fff;
}
</style>
