<template>
  <main>
    <section class="block">
      <header class="container header">
        <div class="row middle-xs">
          <div class="col-xl-4 col-lg-5 col-xs-12">
            <h2 class="h2">Регистрация</h2>
          </div>
          <div class="col-lg-3 col-xs-12 subheading">
            <h4 class="h4">Уже зарегестрированы?</h4>
            <h4 class="h4"><span class="han-blue">Войти</span></h4>
          </div>
        </div>
      </header>
      <div class="rounded-container">
        <div class="container">
          <form
              @submit="submit()"
              @submit.prevent
              class="form"
          >
            <div class="row middle-xs">
              <div class="col-md-2 col-xs-12">
                <label
                    class="label"
                    for="name"
                >Имя</label>
              </div>
              <div class="col-md-6 col-xs-12">
                <IrdomInputText
                    type="text"
                    id="name"
                    placeholder="Введите имя"
                />
              </div>
            </div>
            <div class="row middle-xs">
              <div class="col-md-2 col-xs-12">
                <label
                    class="label"
                    for="email"
                >Почта</label>
              </div>
              <div class="col-md-6 col-xs-12">
                <IrdomInputText
                    type="email"
                    id="email"
                    placeholder="Введите свой e-mail"
                />
              </div>
            </div>
            <div class="row middle-xs">
              <div class="col-md-2 col-xs-12">
                <label
                    class="label"
                    for="tel"
                >Телефон</label>
              </div>
              <div class="col-md-6 col-xs-12">
                <IrdomInputText
                    type="tel"
                    id="tel"
                />
              </div>
            </div>
            <div class="row middle-xs">
              <div class="col-md-2 col-xs-12 label-password">
                <label
                    class="label"
                    for="password"

                >Пароль</label>
              </div>
              <div class="col-md-6 col-xs-12 password-wrap">
                <IrdomInputText
                    type="password"
                    id="password"
                    placeholder="Придумайте пароль"
                />
                <IrdomInputText
                    type="password"
                    placeholder="Введите пароль повторно"
                />
              </div>
              <div class="col-md-6 col-xs-12 col-md-offset-2 password-wrap">
                <IrdomButtonColor
                    type="submit"
                    class="submit-btn"
                >Зарегестрироваться
                </IrdomButtonColor>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import IrdomInputText from "@/components/UI/IrdomInputText";
import IrdomButtonColor from "@/components/UI/IrdomButtonColor";

export default {
  name: "PageRegistration",
  components: {IrdomButtonColor, IrdomInputText},
  data() {
    return {
        user: {
          first_name: '',

        }
    }
  },
  methods: {
    submit() {
      console.log('submit');
    }
  }
};
</script>

<style scoped>
.h4 {
  color: #858585;
  font-weight: 500;
}

.subheading {
  display: flex;
  flex-direction: column;
}

.rounded-container {
  padding: min(5vw, 60px) 0;
}

.label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  color: black;
}

@media screen and (min-width: 768px) {
  .label-password {
    align-self: flex-start;
    margin-top: calc(25px - .5em);
  }
}


.form {
  display: flex;
  flex-direction: column;
  row-gap: min(4.8vw, 20px);
}

.row {
  row-gap: min(2.4vw, 10px);
}

.password-wrap {
  display: flex;
  flex-direction: column;
  row-gap: min(2.4vw, 10px);
}
.submit-btn {
  margin-top: min(3.6vw, 40px);
  width: fit-content;
}


@media screen and (max-width: 991px) {
  .subheading {
    flex-direction: row;
  }

  .h4:first-child {
    margin-right: 4px;
  }

  .h2 {
    margin-bottom: min(2.4vw, 10px);
  }
}

@media screen and (max-width: 767px) {
  .submit-btn {
    border-radius: 8px;
    width: 100%;
  }
  .rounded-container {
    background: none;
  }
}
</style>