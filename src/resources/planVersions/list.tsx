import { DataTable, List } from "@/components/admin";
import TimestampCol from "../components/TimestampCol";
import { formatCurrency } from "../configs/currency";
import { capitalize } from "lodash";
import { useGetList, useUpdate } from "ra-core";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Star, StarOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Confirm } from "@/components/admin/confirm";
import { Plan, recordRepresentation } from "./utils";

const PlanList = () => {
  const { data, isLoading, refetch } = useGetList("plan-versions");
  const [update] = useUpdate();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const hasDefaultPlan = data?.some((plan) => plan.isDefault === true);
  const defaultPlan = data?.find((plan) => plan.isDefault === true);

  const handleSetDefault = async (plan: Plan) => {
    setSelectedPlan(plan);
    setShowConfirmDialog(true);
  };

  const confirmSetDefault = async () => {
    try {
      if (!selectedPlan) return;

      // If there's an existing default plan, remove its default status
      if (defaultPlan) {
        await update("plan-versions", {
          id: defaultPlan.id,
          data: { ...defaultPlan, isDefault: false },
          previousData: defaultPlan,
        });
      }

      // Set the selected plan as default
      await update("plan-versions", {
        id: selectedPlan.id,
        data: { ...selectedPlan, isDefault: true },
        previousData: selectedPlan,
      });

      toast.success(
        `${selectedPlan.planName} has been set as the default plan.`,
      );

      refetch();
    } catch (error) {
      console.error("Error updating default plan:", error);
      toast.error("Failed to update default plan.");
    } finally {
      setShowConfirmDialog(false);
      setSelectedPlan(null);
    }
  };

  const getRowClassName = (record: Plan) => {
    return record.isDefault ? "bg-yellow-10" : "";
  };

  return (
    <List>
      {!isLoading && data && !hasDefaultPlan && (
        <Alert variant="destructive" className="mb-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Warning: No default plan is set. Please ensure at least one plan has
            isDefault=true.
          </AlertDescription>
        </Alert>
      )}

      {/* Confirmation Dialog */}
      <Confirm
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={confirmSetDefault}
        title="Change Default Plan"
        content={
          defaultPlan ? (
            <>
              This will replace{" "}
              <strong>{recordRepresentation(defaultPlan)}</strong> as the
              default plan with{" "}
              <strong>{recordRepresentation(selectedPlan!)}</strong>.
            </>
          ) : (
            <>
              This will set{" "}
              <strong>{recordRepresentation(selectedPlan!)}</strong> as the
              default plan.
            </>
          )
        }
      />

      <DataTable rowClassName={getRowClassName}>
        <DataTable.Col
          source="isDefault"
          label="Default"
          render={(record) => (
            <div className="flex items-center gap-2">
              {record.isDefault ? (
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSetDefault(record as Plan);
                  }}
                  className="text-gray-500 hover:text-yellow-500"
                >
                  <StarOff className="h-5 w-5" />
                  <span className="sr-only">Set as default</span>
                </Button>
              )}
            </div>
          )}
        />
        <DataTable.Col
          source="planName"
          label="Plan"
          render={(record) => (
            <span className={record.isDefault ? "text-yellow-700" : ""}>
              {record.planName}
              {record.isDefault && (
                <span className="ml-2 text-xs text-yellow-600">(Default)</span>
              )}
            </span>
          )}
        />
        <DataTable.Col
          source="priceAmount"
          label="Price"
          render={(record) =>
            formatCurrency(record.priceAmount, record.priceCurrency)
          }
        />
        <DataTable.Col
          source="billingInterval"
          label="Billing interval"
          render={(record) => capitalize(record.billingInterval)}
        />
        <DataTable.Col
          source="billUploadsDaily"
          label="Bill uploads daily limit"
        />
        <DataTable.Col
          source="billUploadsMonthly"
          label="Bill uploads monthly limit"
        />
        <TimestampCol propertyName="effectiveFrom" />
        <TimestampCol propertyName="effectiveTo" />
        <TimestampCol propertyName="createdAt" />
        <TimestampCol propertyName="updatedAt" />
      </DataTable>
    </List>
  );
};

export default PlanList;
