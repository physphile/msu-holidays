<template>
  <form ref="form">
    <IrdomInputLabelWrapper>
      <template #label>Статус в МГУ</template>
      <template #input>
        <IrdomButtonRadio>
          <IrdomButtonRadioItem>Студент</IrdomButtonRadioItem>
          <IrdomButtonRadioItem>Сотрудник</IrdomButtonRadioItem>
          <IrdomButtonRadioItem>Другой</IrdomButtonRadioItem>
        </IrdomButtonRadio>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="given-name">
      <template #label>Имя</template>
      <template #input>
        <IrdomInputText id="given-name" name="given-name"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="family-name">
      <template #label>Фамилия</template>
      <template #input>
        <IrdomInputText id="family-name" name="family-name"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="additional-name">
      <template #label>Отчество</template>
      <template #input>
        <IrdomInputText id="additional-name" name="additional-name"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="sex">
      <template #label>Пол</template>
      <template #input>
        <IrdomButtonRadio>
          <IrdomButtonRadioItem>М</IrdomButtonRadioItem>
          <IrdomButtonRadioItem>Ж</IrdomButtonRadioItem>
        </IrdomButtonRadio>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="bday">
      <template #label>Дата рождения</template>
      <template #input>
        <IrdomDatepicker/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="faculty">
      <template #label>Факультет</template>
      <template #input>
        <IrdomInputText id="faculty"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="year-of-study">
      <template #label>Факультет</template>
      <template #input>
        <IrdomInputText id="year-of-study"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="work">
      <template #label>Место работы</template>
      <template #input>
        <IrdomInputText id="work"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="cathedra">
      <template #label>Кафедра</template>
      <template #input>
        <IrdomInputText id="cathedra"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="job">
      <template #label>Должность</template>
      <template #input>
        <IrdomInputText id="job"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="uin">
      <template #label>УИН</template>
      <template #input>
        <IrdomInputText id="uin"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="email">
      <template #label>Почта</template>
      <template #input>
        <IrdomInputText id="email" name="email"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="tel">
      <template #label>Телефон</template>
      <template #input>
        <IrdomInputText id="tel" name="tel"/>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper>
      <template #input>
        <IrdomButtonText>
          Изменить пароль
        </IrdomButtonText>
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper>
      <template #input>
        <IrdomButtonColor>Сохранить изменения</IrdomButtonColor>
      </template>
    </IrdomInputLabelWrapper>
  </form>
</template>

<script>
import IrdomInputLabelWrapper from "@/components/UI/InputLabelWrapper";
import IrdomButtonRadioItem from "@/components/UI/ButtonRadioItem";
import IrdomInputText from "@/components/UI/InputText";
import IrdomButtonColor from "@/components/UI/ButtonColor";
import IrdomButtonRadio from "@/components/UI/ButtonRadio";
import IrdomButtonText from "@/components/UI/ButtonText";
import IrdomDatepicker from "@/components/UI/Datepicker";

export default {
  name: "PageProfileForm",
  components: {
    IrdomDatepicker,
    IrdomButtonText,
    IrdomButtonRadio,
    IrdomButtonColor, IrdomInputText, IrdomButtonRadioItem, IrdomInputLabelWrapper
  },
  mounted() {
    this.$refs.form.querySelectorAll('form .col-xs-12.col-xl-9').forEach((el, i) => {
      if (el.children[0].localName === 'input') {
        el.classList.add('animate__animated', 'animate__fadeInLeft');
      } else {
        el.classList.add('animate__animated', 'animate__fadeIn');
      }

      el.style.animationDelay = `${i / 10}s`;
    });
    this.$refs.form.querySelectorAll('form .col-xl-3.col-xs-12').forEach((label, i) => {
      label.style.animationDelay = `${i / 10 + 0.5}s`
    });
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>