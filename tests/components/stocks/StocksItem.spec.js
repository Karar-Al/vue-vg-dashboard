import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import StocksItem from "@/components/stocks/StocksItem.vue";

describe("StocksItem", () => {
  const wrapper = mount(StocksItem, {
    props: {
      d: {
        type: 0,
        symbol: "TSCO.LON",
        oldValue: 150,
        value: 190,
      },
    },
  });

  it("should render props", () => {
    expect(wrapper.text()).toBe("TSCO.LON190");
  });

  it("should show DollarSignIcon when type is 0", () => {
    const component = wrapper.findComponent({ name: "DollarSignIcon" });

    expect(component.exists()).toBe(true);
  });

  it("should show ArrowUpRightIcon when value is more than oldValue", () => {
    const component = wrapper.findComponent({ name: "ArrowUpRightIcon" });

    expect(component.exists()).toBe(true);
  });
});

describe("StocksItem #2", () => {
  const wrapper = mount(StocksItem, {
    props: {
      d: {
        type: 1,
        symbol: "BTC",
        oldValue: 30000,
        value: 15000,
      },
    },
  });

  it("should show CryptoSignIcon when type is 1", () => {
    const component = wrapper.findComponent({ name: "CryptoSignIcon" });

    expect(component.exists()).toBe(true);
  });

  it("should show ArrowDownLeftIcon when oldValue is more than value", () => {
    const component = wrapper.findComponent({ name: "ArrowDownLeftIcon" });

    expect(component.exists()).toBe(true);
  });
});

describe("StocksItem #3", () => {
  const wrapper = mount(StocksItem, {
    props: {
      d: {
        type: 1,
        symbol: "LUNA",
        oldValue: 0,
        value: 0,
      },
    },
  });

  it("should show EqualIcon value and oldValue are the same", () => {
    const component = wrapper.findComponent({ name: "EqualIcon" });

    expect(component.exists()).toBe(true);
  });
});
