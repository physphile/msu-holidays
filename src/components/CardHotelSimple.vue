<template>
  <div class="card">
    <div class="photo">
      <div class="location">
        <img
            src="../assets/icons/cardHotelSimpleLocation.png"
            alt="значок местоположения"
            class="location-icon"
        >
        <span class="location-name">Московская область</span>
      </div>

      <div class="header">
        <span class="name">Красновидово</span>
        <span class="title">Дом отдыха</span>
      </div>
    </div>
    <div class="action">Посмотреть</div>
  </div>
</template>

<script>
export default {
  name: "CardHotelSimple"
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 270px;
  height: 256px;
  background: white;
  box-shadow: 0 3px 12px rgba(18, 31, 67, 0.08);
  border-radius: 10px;
  overflow: hidden;
}

.photo {
  width: 100%;
  height: 209px;
  background: linear-gradient(360deg, rgba(33, 44, 71, 0.4) 18.7%, rgba(26, 37, 62, 0) 122.7%), url('../assets/cardHotelSimplePhoto.png');
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  justify-content: space-between;
}

.action {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
}

.location {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  display: flex;
  padding: 5px 10px 6px;
  color: white;
  gap: 8px;
}

.location-icon {
  object-fit: contain;
  width: 14px;
}

.location-name {
  font-size: 12px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name {
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-bottom: 2px;
  line-height: 140%;
}

.title {
  font-size: 12px;
  color: white;
  font-weight: 400;
}
</style>