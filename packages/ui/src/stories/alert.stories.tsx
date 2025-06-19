import { Alert } from "./alert";

export default {
  title: "Alert 警告",
  component: Alert,
};

export const Default = () => (
  <Alert title="123" description="123" rootProps={{ variant: "destructive" }}>
    <div>123</div>
  </Alert>
);
