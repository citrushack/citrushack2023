import { ProtectedPage } from '@/components/Page';
import { CheckinForm } from '@/components/Form';

export default function CheckIn() {
  return (
    // TODO: change 'admin' to 'checkedIn' to open up form the day before
    <ProtectedPage
      title="Check-In"
      restrictions={['signin', 'qualified', 'checkedIn', 'admin']}
    >
      <CheckinForm />
    </ProtectedPage>
  );
}
