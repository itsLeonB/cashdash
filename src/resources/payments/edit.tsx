import {
  Edit,
  SimpleForm,
  DateTimeInput,
  TextInput,
  NumberInput,
  AutocompleteInput,
} from "@/components/admin";
import { supportedCurrencies } from "../configs/currency";
import { minValue, required } from "ra-core";

const PaymentEdit = () => (
  <Edit>
    <SimpleForm>
      <div className="flex flex-col gap-4">
        <TextInput source="status" />
        <AutocompleteInput
          source="currency"
          choices={supportedCurrencies.map((currency) => ({
            id: currency,
            name: currency,
          }))}
          validate={required()}
          defaultValue={"IDR"}
        />
        <NumberInput source="amount" validate={[required(), minValue(0)]} />
        <DateTimeInput source="startsAt" />
        <DateTimeInput source="endsAt" />
        <DateTimeInput source="paidAt" />
        <DateTimeInput source="expiredAt" />
      </div>
    </SimpleForm>
  </Edit>
);

export default PaymentEdit;
