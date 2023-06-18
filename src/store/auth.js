import { defineStore } from "pinia";

const useLoginStore = defineStore("auth", {
  state: () => {
    return {
      email: "eduardobarraza7676@gmail.com",
      password: "19544037Lu$",
      token: false,
    };
  },
  actions: {
    auth(email, pass) {
      if (this.email === email && this.password === pass) {
        this.token = true;
        return true;
      } else {
        return false;
      }
    },
  },
});

export default useLoginStore;
