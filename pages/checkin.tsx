import { ProtectedPage } from '@/components/Page';
import { CheckinForm } from '@/components/Form';

export default function CheckIn() {
  return (
    // TODO: change 'admin' to 'checkedIn' to open up form the day before
    <ProtectedPage
      title="Check-In"
      // for D-Day, user needs to be signed-in, qualified, and must have NOT checked in already
      // restrictions={['signin', 'qualified', 'checkedIn']}
      restrictions={['admin']}
    >
      <CheckinForm />
    </ProtectedPage>
  );
}
