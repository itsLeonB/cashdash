import { Resource } from "ra-core";
import PaymentList from "./list";
import PaymentShow from "./show";
import PaymentEdit from "./edit";
import { DollarSign } from "lucide-react";

const paymentsResource = () => {
  return (
    <Resource
      name="payments"
      list={PaymentList}
      edit={PaymentEdit}
      show={PaymentShow}
      icon={DollarSign}
      hasCreate={false}
    />
  );
};

export default paymentsResource;
