import CardContainer from "@/components/card/CardContainer.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("CardContainer", () => {
  const wrapper = mount(CardContainer, {});
  it("should default props.backgroundColor to be OS theme sensitive", () => {
    expect(wrapper.vm.backgroundColor).toBe(
      "dark:bg-neutral-800 dark:bg-opacity-50 bg-white"
    );
  });
});
