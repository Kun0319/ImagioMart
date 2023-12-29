<script setup>
const props = defineProps({
  orders: Array,
});

const canShow = ref(false);

const handleCanShowUpdate = (newCanShow) => {
  canShow.value = !canShow.value;
};
</script>
<template>
  <table class="order">
    <thead>
      <tr>
        <th>訂單編號</th>
        <th>訂購日期</th>
        <th>總計</th>
        <th>訂單狀態</th>
        <th>訂單內容</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td data-label="訂單編號">{{ order.id }}</td>
        <td data-label="訂購日期">{{ order.date }}</td>
        <td data-label="總計" class="price">{{ order.amount }}</td>
        <td data-label="訂單狀態">{{ order.status }}</td>
        <td data-label="訂單內容">
          <button @click="viewOrder(order.id)" class="browse">瀏覽</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.inner-wrap {
  padding-left: 20.2649%;
  padding-right: 20.2649%;
  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }
}

.welcome {
  margin-top: 10.0285%;
  margin-bottom: 1.9927%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 17.76px;
}

.logout {
  border: 0;
  background-color: white;
  text-decoration: underline;
  font-size: 0.75rem;
  margin-bottom: 11.1358%;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.51px;
  font-family: $font-NotoSerif;
}

.tabs {
  margin-bottom: 8.3225%;
}

.order {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 42.5506%;
  @include max-media(768) {
    font-size: 0.75rem;
  }

  & thead {
    @include max-media(768) {
      display: none;
    }
  }

  & tr {
    @include max-media(768) {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #e0e0e0;
    }
  }

  & td {
    @include max-media(768) {
      text-align: right;
      display: block;
      text-align: right;

      &:before {
        content: attr(data-label);
        float: left;
        text-align: left;
        width: 50%; /* 设置为 50% 以确保标签和内容之间的分隔 */
      }
    }
  }
}

.order td {
  text-align: center;
  padding: 8px;
  padding-bottom: 6.3298%;
}

.order th {
  text-align: center;
  padding-bottom: 9.3775%;
}
.browse {
  font-size: 0.75rem;
  font-family: $font-NotoSerif;
  text-decoration: underline;
  font-weight: 700;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 5% 30%;
  @include max-media(768) {
    padding: 2% 5%;
    font-size: 0.625rem;
  }
}
</style>
