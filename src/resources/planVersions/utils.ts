export interface Plan {
  id: string;
  planName: string;
  priceAmount: number;
  priceCurrency: string;
  billingInterval: string;
  billUploadsDaily: number;
  billUploadsMonthly: number;
  effectiveFrom: string;
  effectiveTo: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export const recordRepresentation = (record: Plan) =>
  `${record?.planName}#${record?.id}`;
