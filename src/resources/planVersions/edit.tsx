import {
  Edit,
  SimpleForm,
  ReferenceInput,
  AutocompleteInput,
  NumberInput,
  DateTimeInput,
} from "@/components/admin";
import { minValue, required } from "ra-core";
import { supportedCurrencies } from "../configs/currency";

const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <div className="flex flex-col gap-4">
        <ReferenceInput source="planId" reference="plans" label="Plan" />
        <div className="flex gap-2">
          <AutocompleteInput
            source="priceCurrency"
            label="Currency"
            choices={supportedCurrencies.map((currency) => ({
              id: currency,
              name: currency,
            }))}
            validate={required()}
            defaultValue={"IDR"}
          />
          <NumberInput
            source="priceAmount"
            label="Price"
            validate={[required(), minValue(0)]}
          />
          <AutocompleteInput
            source="billingInterval"
            label="Billing interval"
            choices={[
              { id: "monthly", name: "Monthly" },
              { id: "yearly", name: "Yearly" },
            ]}
            validate={required()}
          />
        </div>
        <div className="flex gap-2">
          <NumberInput
            source="billUploadsDaily"
            label="Bill uploads daily limit"
            validate={[minValue(0), required()]}
            defaultValue={1}
          />
          <NumberInput
            source="billUploadsMonthly"
            label="Bill uploads monthly limit"
            validate={[minValue(0), required()]}
            defaultValue={1}
          />
        </div>
        <div className="flex gap-2">
          <DateTimeInput
            source="effectiveFrom"
            label="Effective from"
            validate={required()}
            defaultValue={new Date()}
          />
          <DateTimeInput source="effectiveTo" label="Effective to" />
        </div>
      </div>
    </SimpleForm>
  </Edit>
);

export default PlanEdit;
