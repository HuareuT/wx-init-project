/*
 * @Author: hutong huareu980@163.com
 * @Date: 2023-06-25 14:38:56
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-28 14:02:18
 * @FilePath: /yjgzl-app/api/user/index.js
 * @Description:
 */
const { http } = uni.$u;
export function useUserApi() {
  return {
    add: (params = {}) => {
      http.post("/url", { data: {} }, {});
    },
    update: (params = {}) => {
      // return request();
    },
    del: (params = {}) => {
      // return request();
    },
    detail: (params = {}) => {
      // return request();
    },
    loginByPassword: (data) => {
      return http.post("/login", data, {
        custom: { auth: false },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    },
    testApi: () => {
      return http.post(
        "/trading/all/record",
        {},
        {
          custom: {
            auth: true,
          },
        }
      );
    },
  };
}
