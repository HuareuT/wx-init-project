/*
 * @Author: hutong huareu980@163.com
 * @Date: 2023-06-25 15:45:15
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-25 15:49:53
 * @FilePath: /yjgzl-app/composables/useLogin.js
 * @Description:
 */
import { useUserStore } from "@/stores/user";
export function useLogin() {
  const user = useUserStore();
  // 判断是否登录
  const checkLogin = () => {
    return !!user.token;
  };
  // 判断是否登录并且跳转登录
  const checkLoginAndSkip = (callback) => {
    const valid = checkLogin();
    if (!valid) {
      uni.navigateTo({
        url: "/pages/login/login",
        events: {
          loginSuccess(res) {
            callback(true, res);
          },
        },
      });
      callback(false);
    } else {
      callback(true);
    }
  };
  return { checkLogin, checkLoginAndSkip };
}
