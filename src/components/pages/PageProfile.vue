<template>
  <section class="block">
    <header class="container animate__animated animate__fadeIn">
      <h2>Личный кабинет</h2>
    </header>
    <div class="rounded-container">
      <div class="container">
        <div class="content">
          <div class="sidebar">
            <PageProfileSidebar/>
          </div>
          <div class="photoName">
            <PageProfilePhotoName/>
          </div>
          <div class="form">
            <PageProfileForm></PageProfileForm>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import PageProfilePhotoName from "@/components/PageProfilePhotoName";
import PageProfileSidebar from "@/components/PageProfileSideabr";
import PageProfileForm from "@/components/PageProfileForm";

export default {
  name: "PageProfile",
  components: {PageProfileForm, PageProfileSidebar, PageProfilePhotoName}
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
  grid-template: "sidebar photoName"
                  "sidebar form";
  grid-template-columns: 4fr 8fr;
  grid-column-gap: min(82px, 6.8%);

}
.sidebar {
  grid-area: sidebar;
}
.photoName {
  grid-area: photoName;

}
.form {
  grid-area: form;
}
@media screen and (max-width: 1199px) {
  .content {
    grid-template: "photoName"
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