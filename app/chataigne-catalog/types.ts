export type DiscountDTO = {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly imageId?: string;
  readonly isActive: boolean;
  readonly discountCondition: DiscountConditionDTO;
  readonly discountType: DiscountTypeDTO;
  readonly discountData: DiscountDataDTO;
};

export type DiscountConditionDTO = {
  readonly startDate?: Date;
  readonly endDate?: Date;
  readonly minOrderAmount?: number;
  readonly maxNumberOfCustomerOrders?: number;
  readonly promotionCode?: string;
  readonly productIds?: string[];
  readonly customerIds?: string[];
};

export type DiscountTypeDTO =
  | "percentage"
  | "fixed"
  | "free_product"
  | "bogo"
  | "free_shipping";

export type DiscountDataDTO =
  | PercentageDiscountDTO
  | FixedDiscountDTO
  | FreeProductDiscountDTO
  | BogoDiscountDTO
  | FreeShippingDiscountDTO;

export type PercentageDiscountDTO = {
  readonly percentage: number;
  readonly maxDiscountAmount?: number;
};

export type FixedDiscountDTO = {
  readonly amount: number;
};

export type FreeProductDiscountDTO = {
  readonly productId: string;
};

export type BogoDiscountDTO = {
  readonly productIds: string[];
};

export type FreeShippingDiscountDTO = {};

export type CreateDiscountDTO = {
  readonly name: string;
  readonly catalogId: string;
  readonly description?: string;
  readonly imageId?: string;
  readonly discountCondition: DiscountConditionDTO;
  readonly discountType: DiscountTypeDTO;
  readonly discountData: DiscountDataDTO;
};

export type UpdateDiscountDTO = {
  readonly name?: string;
  readonly description?: string;
  readonly imageId?: string;
  readonly discountCondition?: DiscountConditionDTO;
  readonly discountData?: DiscountDataDTO;
};
