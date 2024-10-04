<script setup>
const props = defineProps({
  orders: Array,
});

const canShow = ref(false);

const handleCanShowUpdate = (newCanShow) => {
  canShow.value = !canShow.value;
};
const selectedOrderDetails = ref(null);

const viewOrder = (orderId) => {
  const order = props.orders.find((o) => o.id === orderId);
  if (order) {
    selectedOrderDetails.value = order;
  }
};

const goBackToList = () => {
  selectedOrderDetails.value = null;
};
</script>
<template>
  <div class="w-full">
    <div v-if="selectedOrderDetails">
      <div class="order__items__container md:w-6/12">
        <div class="order__items">
          <div class="col-span-5">
            <img src="~/assets/images/shopcart1.png" alt="" class="photo" />
          </div>
          <div class="col-span-7 flex flex-col justify-around">
            <div class="flex justify-between shopcart__name">
              <p>第151期2023 / 07&08月</p>
            </div>
            <div class="flex justify-between">
              <p class="">TWD$300</p>
              <p>x 1</p>
            </div>
          </div>
        </div>
        <div class="order__items last-item">
          <div class="col-span-5">
            <img src="~/assets/images/shopcart2.jpeg" alt="" class="photo" />
          </div>
          <div class="col-span-7 flex flex-col justify-around">
            <div class="flex justify-between shopcart__name">
              <p>Tabouret Haut 高腳圓凳</p>
            </div>
            <p>黑色</p>
            <div class="flex justify-between">
              <p class="">TWD$300</p>
              <p>x 1</p>
            </div>
          </div>
        </div>
      </div>
      <div class="order__info">
        <!-- 文案區塊 -->
        <div class="inner-wrap__text grid grid-cols-12 gap-4">
          <div class="col-span-12 flex justify-between">
            <p class="text__one">訂單資訊</p>
            <p class="text__one">訂單總計</p>
            <!-- <p class="text__two">Black Molded Shell Chair</p> -->
          </div>
          <div
            class="md:col-span-9 col-span-12 text-justify text__three gap-4 flex flex-col"
          >
            <p>姓名：Ann Lin</p>
            <p>電子郵箱：xxxxxxx@gmail.com</p>
            <p>手機：09xxxxxxxxxx</p>
            <p>國家：Taiwan(台灣)</p>
            <p>縣市：Taipei</p>
            <p>郵遞區號：xxx</p>
            <p>地址：xxxxxxxxxxxxxx</p>
          </div>

          <div class="product-card">
            <!-- 顏色選擇器 -->

            <div class="flex justify-between">
              <p>小計</p>
              <p>NT$600</p>
            </div>

            <div class="flex justify-between">
              <p>運費</p>
              <p class="text__price col-span-6">NT$60</p>
            </div>
            <div class="flex justify-between">
              <p class="text__total">總計</p>
              <p>NT$560</p>
            </div>
            <!-- <div class="shopcart col-span-6 order-4">
          <button class="info__shopcart md:hidden block">加入購物車</button>
        </div> -->
          </div>

          <!-- 加入購物按鈕 -->
        </div>
      </div>
      <!-- 付款方法 -->
      <div class="pay__container">
        <div class="flex justify-between pay">
          <p class="pay__way">付款方法</p>
          <button class="pay__cancelbtn">取消訂單</button>
        </div>
        <div>
          <p class="pay__unpaid">未付款</p>
        </div>
      </div>

      <div class="flex justify-center">
        <button class="pay__btn">結帳</button>
      </div>
    </div>
    <table v-else class="order">
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
            <button class="browse" @click="viewOrder(order.id)">瀏覽</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  // font-family: $font-NotoSerif;
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
        width: 50%;
        /* 设置为 50% 以确保标签和内容之间的分隔 */
      }
    }
  }

  &__items {
    @apply grid grid-cols-12 gap-4;
    margin-bottom: 20%;
  }

  &__info {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 3% 2%;
    padding-bottom: 5%;
    margin-top: 5%;
    color: $text-color3;
  }
}

.order td {
  text-align: center;
  // padding: 8px;
  padding-bottom: 6.3298%;
}

.order th {
  text-align: center;
  // padding: 10px;
  padding-bottom: 9.3775%;
}

.browse {
  font-size: 0.75rem;
  // font-family: $font-NotoSerif;
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

.photo {
  // width: 100%;
  // height: 100%;
  width: 5.485vw;
  height: 7.152vw;
  // max-height: 15px;
  // max-height: 100px;
  object-fit: cover;

  @include max-media(768) {
    min-width: 103px;
    min-height: 140px;
  }
}

.product-card {
  @apply md:justify-self-end col-span-3 gap-4 flex flex-col;
  width: 100%;
}

.text {
  &__one {
    font-size: 1rem;
    margin-bottom: 2.5%;
  }
  &__total {
    font-weight: 700;
  }
}

.pay {
  &__container {
    padding: 3% 2%;
    padding-bottom: 5%;
    color: $text-color3;
    @include max-media(768) {
      padding: 6% 2%;
    }
  }

  &__way {
    font-size: 1rem;
    margin-bottom: 2.5%;
    @include max-media(768) {
      margin-bottom: 5%;
    }
  }

  &__unpaid {
    font-size: 0.875rem;
    font-family: $font-NotoSerif;
  }

  &__cancelbtn {
    border: none;
    font-weight: 700;
    text-decoration: underline;
    background-color: white;
    font-size: 0.6875rem;
    color: black;
  }
  &__btn {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: white;
    font-family: $font-NotoSerif;
    font-size: 0.8125rem;
    font-size: clamp(0.75rem, 1vw, 0.8125rem);
    padding: 0;
    width: 7.523vw;
    height: 2.604vw;
    min-width: 117px;
    min-height: 41px;
    margin-bottom: 14.7696%;
  }
}
</style>
