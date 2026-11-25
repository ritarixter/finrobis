import { AccountPage } from "~/components/account";

export default function DepositPage() {
  return (
    <AccountPage title="Deposit" showBack backTo="/account/payments">
      <h1>Deposit</h1>
    </AccountPage>
  );
}
