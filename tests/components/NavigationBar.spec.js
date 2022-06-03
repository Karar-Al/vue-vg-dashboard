import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NavigationBar from "@/components/NavigationBar.vue";

describe("NavigationBar", () => {
  const wrapper = mount(NavigationBar, {});

  it("onNavigationBarItemClick changes state", async () => {
    const state = (await import("@/state.js")).default;

    await wrapper.vm.onNavigationBarItemClick("calendar");

    expect(state.page).toBe("calendar");
  });
});
