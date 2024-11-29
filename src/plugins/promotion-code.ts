import { LanguageCode, PromotionCondition } from "@vendure/core";

export const promotionCode = new PromotionCondition({
  code: "postal_code_condition",
  description: [
    {
      languageCode: LanguageCode.en,
      value: "Applies if the postal code is { postalCode }",
    },
  ],
  args: {
    postalCode: { type: "string" },
  },
  async check(ctx, order, args) {
    const shippingAddress = order.shippingAddress;
    return shippingAddress?.postalCode === args.postalCode;
  },
});
