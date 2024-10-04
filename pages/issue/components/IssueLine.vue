<script setup>
const isOpen = ref(false);
const selected = ref("Year");
const options = ref([
  "ALL",
  "2023",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selected.value = option;
  isOpen.value = false;
};
</script>

<template>
  <div class="line">
    <div class="">
      <div class="flex justify-between items-center">
        <div>
          <p class="line__home">Home &nbsp; / &nbsp; Issue</p>
        </div>
        <div class="dropdown" @click="toggleDropdown">
          <div class="selected justify-end">
            Sort: {{ selected }}
            <span class="arrow">▼</span>
          </div>
          <ul v-if="isOpen" class="options">
            <li
              v-for="option in options"
              :key="option"
              @click="selectOption(option)"
            >
              {{ option }}
              <span v-if="option === selected">✔</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.line {
  margin-bottom: 1.57%;
  &__home {
    font-size: 0.75rem;
  }
}
.dropdown {
  border: none;

  // position: relative;
}

.selected {
  font-size: 0.75rem;
  padding: 5px;
  display: flex;
  // justify-content: space-around;
}

.arrow {
  margin-left: 1rem;
  font-size: 0.45rem;
}

.options {
  box-shadow:
    0px 4px 10px rgba(0, 0, 0, 0.03),
    0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
  position: absolute;
  // top: 100%;
  width: 100px;
  background-color: white;
  z-index: 10;
  list-style: none;
  font-size: 0.75rem;
}

.options li {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.options li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
