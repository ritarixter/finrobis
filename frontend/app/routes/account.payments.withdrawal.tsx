import { AccountPage } from "~/components/account";

export default function WithdrawalPage() {
  return (
    <AccountPage title="Withdrawal" showBack backTo="/account/payments">
      <h1>Withdrawal</h1>
    </AccountPage>
  );
}
