<template>
  <IrdomPageTemplate>
    <template #heading>Личный кабинет</template>
    <div class="content">
      <PageProfileSidebar class="sidebar"/>
      <PageProfilePhotoName class="photoName"/>
      <PageProfileForm class="form"/>
    </div>
  </IrdomPageTemplate>
</template>

<script>
import PageProfilePhotoName from "@/components/PageProfile/PhotoName";
import PageProfileSidebar from "@/components/PageProfile/Sideabr";
import PageProfileForm from "@/components/PageProfile/Form";
import IrdomPageTemplate from "@/components/UI/PageTemplate";

export default {
  name: "PageProfile",
  components: {IrdomPageTemplate, PageProfileForm, PageProfileSidebar, PageProfilePhotoName},
}
</script>

<style scoped>

h2 {
  margin-bottom: min(2.4vw, 10px);

}

@media screen and (max-width: 575px) {
  .container {
    padding-left: 4.8%;
    padding-right: 4.8%;
  }
}

.content {
  display: grid;
  grid-template: "sidebar photo-name"
                  "sidebar form"
                  ". form";
  grid-template-columns: 4fr 8fr;
  grid-template-rows: auto auto min-content;
  grid-column-gap: min(82px, 6.8%);
}

.sidebar {
  grid-area: sidebar;
}

.photoName {
  grid-area: photo-name;
  margin-bottom: min(40px, 3.3%);
}

.form {
  grid-area: form;
}

@media screen and (max-width: 1199px) {
  .content {
    grid-template: "photo-name"
                    "sidebar"
                    "form";
  }

  .photoName {
    margin-bottom: min(30px, 7.2%);
  }

  .sidebar {
    margin-bottom: min(40px, 9.7%);
  }
}
</style>