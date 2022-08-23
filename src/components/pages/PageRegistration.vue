<template>
  <main>
    <section class="block">
      <header class="container header animate__animated animate__fadeIn">
        <div class="row middle-xs">
          <div class="col-xl-4 col-lg-5 col-xs-12">
            <h2 class="h2">Регистрация</h2>
          </div>
          <div class="col-lg-3 col-xs-12 subheading animate__animated animate__bounce">
            <h4 class="h4">Уже зарегестрированы?</h4>
            <h4 class="h4"><span class="han-blue">Войти</span></h4>
          </div>
        </div>
      </header>
      <div class="rounded-container">
        <div class="container">
          <div class="col-xs-12 col-xl-8">
            <PageRegistrationForm>

            </PageRegistrationForm>
          </div>
          <div class="hidden-xs col-xl-4">
          </div>


        </div>
      </div>
    </section>
  </main>
</template>

<script>
import PageRegistrationForm from "@/components/PageRegistrationForm";

export default {
  name: "PageRegistration",
  components: {PageRegistrationForm},
  directives: {focus},
  mounted() {
    document.querySelectorAll('form input').forEach((input, i) => {
      input.style.animationDelay = `${i / 10}s`
    });
    document.querySelectorAll('form .col-md-2.col-xs-12').forEach((label, i) => {
      label.style.animationDelay = `${i / 10 + 0.5}s`
    });
  },
  data() {
    return {
      user: {
        first_name: '',

      }
    }
  },
};
</script>

<style scoped>
.h4 {
  color: var(--text-color-secondary);
  font-weight: 500;
}

.subheading {
  display: flex;
  flex-direction: column;
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
@media screen and (max-width: 575px) {
  .container {
    padding-left: 4.8%;
    padding-right: 4.8%;
  }
}

</style>