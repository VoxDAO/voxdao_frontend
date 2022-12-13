<template>
  <section id="ContactSection">
    <div class="left-header-title">联系合作</div>
    <div class="card-container" :class="{ flipme: cardOne == 'flipped' }">
      <div class="card_zeroheight front">
        <div class="contact-card">
          <div class="desc-text">
            CYTE拥抱各种维度的合作，我们坚信创新的出现来自于多学科的交流，如果你对我们正在进行的项目感兴趣或者有想要合作的项目请立即联系我们
          </div>
          <div class="container-contact">
            <button
              @click="
                cardOne == 'start' ? (cardOne = 'flipped') : (cardOne = 'start')
              "
            >
              立即联系
            </button>
          </div>
        </div>
      </div>
      <div class="card_zeroheight back">
        <div class="contact-card">
          <v-form ref="form" v-model="valid" lazy-validation>
            <div>
              <div class="basics">
                <v-text-field
                  v-model="name"
                  label="称呼方式"
                  :rules="nameRules"
                  required
                  clearable
                />
                <v-text-field
                  v-model="telephone"
                  label="联系方式"
                  :rules="telephoneRules"
                  required
                  clearable
                />
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="邮箱"
                  required
                  clearable
                />
              </div>
              <v-text-field
                v-model="message"
                style="color: aliceblue; text-align: center"
                label="留言"
                required
                clearable
              />
            </div>
            <div class="container-contact">
              <button type="button" @click="submit">立即联系</button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const myForm = ref(null);
    return {
      myForm,
      validate() {
        myForm.value.validate();
      },
    };
  },
  data: () => ({
    cardOne: 'start',
    valid: false,
    name: '',
    telephone: '',
    message: '',
    email: '',
    nameRules: [v => !!v || '称呼不能为空'],
    telephoneRules: [v => !!v || '联系方式不能为空'],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit: function () {
      this.$refs.form.validate(valid => {
        if (!valid) {
          this.valid = false;
          return false;
        }
      });
      if (this.valid) {
        fetch('https://www.cyte.site/mail', {
          headers: {
            'upgrade-insecure-requests': '1',
          },
          referrer: 'https://www.cyte.site/mail',
          referrerPolicy: 'strict-origin-when-cross-origin',
          body: JSON.stringify({
            name: this.name,
            message: this.message,
            tel: this.telephone,
            email: this.email,
          }),
          method: 'POST',
          mode: 'no-cors',
          credentials: 'omit',
        }).then(() => {
          console.log('sent');
          this.cardOne = 'start';
        });
      }
      return false;
    },
  },
};
</script>
<style scoped lang="scss">
@import '@/styles/ContactSection.scss';
</style>
