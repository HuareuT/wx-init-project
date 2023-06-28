/*
 * @Author: hutong huareu980@163.com
 * @Date: 2023-06-20 17:36:39
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-25 15:51:39
 * @FilePath: /yjgzl-app/stores/user.js
 * @Description:
 */
import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const userInfo = ref({});
    const setUserInfo = (info) => {
      userInfo.value = info;
    };
    const setToken = (t) => {
      token.value = t;
    };
    return { token, userInfo, setUserInfo, setToken };
  },
  {
    unistorage: false,
  }
);
