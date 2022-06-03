import GreetingsHeader from "@/components/GreetingsHeader.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("GreetingsHeader", () => {
  const text = "Welcome to your Home Dashboard, your house is not on fire. 🙂";
  const wrapper = mount(GreetingsHeader, {
    props: {
      msg: text,
    },
  });

  it("renders msg properly", () => {
    expect(wrapper.text()).toBe(text);
  });

  it("parent element should have two children", () => {
    expect(wrapper.element.firstElementChild.children.length).toBe(2);
  });
});
