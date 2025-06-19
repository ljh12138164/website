import { AlertDialog } from "./alert-dialog";

export default {
  title: "AlertDialog 弹窗",
  component: AlertDialog,
};

export const Default = () => (
  <AlertDialog
    trigger="123"
    triggerButtonProps={{
      variant: "default",
    }}
    title="123"
    onCancel={() => {}}
    onConfirm={() => {}}
  >
    <div>123</div>
  </AlertDialog>
);
